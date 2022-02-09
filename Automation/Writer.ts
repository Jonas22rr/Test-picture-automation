const fs = require("fs").promises;

export default class Writer {
    public constructor(private photoPath: string, private fileNames: string[]){}

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