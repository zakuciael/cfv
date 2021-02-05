import { PathLike } from "fs";

export declare type File = Buffer | PathLike;

export declare interface Properties extends Record<string, string | undefined> {
    CompanyName?: string;
    FileDescription?: string;
    FileVersion?: string;
    InternalName?: string;
    LegalCopyright?: string;
    OriginalFilename?: string;
    ProductName?: string;
    ProductVersion?: string;
}

export declare const getFileVersion: (path: PathLike) => Promise<string>;
export declare const getProductVersion: (path: PathLike) => Promise<string>;
export declare const getFileProperties: (path: PathLike) => Promise<Properties>;
