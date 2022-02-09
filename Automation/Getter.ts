const fs = require("fs").promises;
export default class Getter {
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