import { ResourceDirEntryData } from "./ResourceDirEntryData";
import { ResourceDirectory } from "../structures";

export class ResourceDirData {
    public struct: ResourceDirectory;
    public entries: ResourceDirEntryData[];

    constructor(struct: ResourceDirectory, entries: ResourceDirEntryData[]) {
        this.struct = struct;
        this.entries = entries;
    }
}
