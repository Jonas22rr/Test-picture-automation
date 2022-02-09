// import Getter from "./Getter";
// import Writer from "./Writer";
// import Deleter from "./Deleter";
//lkjasödlkfjadöfkljasödflkj
const fs = require("fs").promises;


(async (): Promise<void> => {
    
    const picturePath: string = "./src/Components/pictures";
    const photoPath: string = "/Users/jonas/Programming/AQstify-react/src/photos.js";

    const deleter = new Deleter(photoPath)
    const getter = new Getter(picturePath);
    const fileNames: string[] = await getter.getFileNames();
    const writer = new Writer(photoPath,fileNames);


    
    await deleter.deleteFile();
    await writer.writePhotoFile();
})();

class Writer {
    public constructor(private photoPath: string, private fileNames: string[]){
        this.photoPath = photoPath;
        this.fileNames  = fileNames;
    }

    public async writePhotoFile(): Promise<void> {
        await this.writeImport()
        await this.writeObject()
    }

    private async writeImport(): Promise<void> {
        for (let fileName of this.fileNames) {
            let file = await fileName.toString().split(".");
            let dataImport =
                "import picture" +
                file[0] +
                ' from "./Components/pictures/' +
                fileName +
                '" \n';
            await fs.appendFile(this.photoPath, dataImport);
        }
    }

    private async writeObject(): Promise<void> {
        let objectOpen = "\nexport const photos = [ \n";
        await fs.appendFile(this.photoPath, objectOpen);
        for (let fileName of this.fileNames) {
            let file = await fileName.toString().split(".");
            let photo =
            "{  src: picture" + file[0] + ", \n width: 4, \n height: 3 }, \n";
            await fs.appendFile(this.photoPath, photo);
        }
        await fs.appendFile(this.photoPath, "]");
    }
}

class Getter {
    public constructor(private picturePath: string){}

    public async getFileNames(): Promise<string[]> {
        let fileNames: string[] = [];
        try {
            const files: string[] = await this.getPicturePaths();
            for (const file of files) {
                fileNames.push(file);
            }
            if (fileNames) {
                return fileNames
            }
        } catch (err) {
            console.error(err);
        }
    }

    private async getPicturePaths(): Promise<string[]> {
        return await fs.readdir(this.picturePath)
    }
}

class Deleter {
    public constructor(private photoPath: string) {}
    
    public async deleteFile(): Promise<void> {
        await fs.writeFile(this.photoPath, "");
    }
}