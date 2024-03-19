import { readFileSync } from "fs";

export async function Load<T>(file: string): Promise<T> {
    const content = readFileSync(file).forEach(x => console.log(x));

    return content as T;
}