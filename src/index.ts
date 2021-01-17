import { PEFile } from "./lib/PEFile";
import { PathLike, promises as fs } from "fs";

export const getFileVersion = async (data: Buffer | PathLike): Promise<string> => {
    if (typeof data === "string") data = await fs.readFile(data);

    const pe = new PEFile(data as Buffer);
    return [
        pe.VS_FIXED_FILE_INFO[0].FileVersionMS >> 16,
        pe.VS_FIXED_FILE_INFO[0].FileVersionMS & 0xffff,
        pe.VS_FIXED_FILE_INFO[0].FileVersionLS >> 16,
        pe.VS_FIXED_FILE_INFO[0].FileVersionLS & 0xffff,
    ].join(".");
};
