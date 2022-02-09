const fs = require("fs").promises;

export default class Deleter {
    public constructor(private photoPath: string) {}
    
    public async deleteFile(): Promise<void> {
        await fs.writeFile(this.photoPath, "");
    }
}