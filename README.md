# CFV

CFV is a cross-platform node.js library that can extract the file version from a valid PE file (.exe)

## Disclaimer

I've created this package by analyzing the python [**pefile**](https://pypi.org/project/pefile/) library, but I didn't
add any check for a non-valid PE files like they did.  
If you are going to use this package please first ensure that all files are valid PE files (.exe).

## API

### ``getFileVersion(path: PathLike | Buffer): Promise<string>``

``path`` - Path to the file or a raw representation of it.

### ``getProductVersion(path: PathLike | Buffer): Promise<string>``

``path`` - Path to the file or a raw representation of it.

### ``getFileProperties(path: PathLike | Buffer): Promise<Properties>``

``path`` - Path to the file or a raw representation of it.