# File Version

Cross-platform node.js library that can extract the file versions from a valid PE file (.exe)

## Disclaimer

I've created this package by analyzing the python [**pefile**](https://pypi.org/project/pefile/) library, but I didn't
add any check for a non-valid PE files like they did.  
If you are going to use this package please first ensure that all files are valid PE files (.exe).

## API

### ``getFileVersion(path: PathLike): Promise<string>``

``path`` - The path to the file that you want to extract the file version from.

### ``getFileVersion(data: Buffer): string``

``data`` - The raw representation of the file you want to extract the file version from.