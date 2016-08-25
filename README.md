# NativeScript ePub Reader Plugin
[![npm](https://img.shields.io/npm/v/nativescript-epub.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/nativescript-epub) 
[![npm](https://img.shields.io/npm/dt/nativescript-epub.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/nativescript-epub)

NativeScript plugin to open and read ePub files natively. Currently only supported on iOS.


## Getting Started
* `npm install nativescript-pdf`
* Place your `epub` files in your `App_Resources/iOS` directory.
* Import `EPubReader` in your page and open the file.

### Code Sample
```
import {Observable} from 'data/observable';
import {EPubReader} from 'nativescript-epub';

export class HelloWorldModel extends Observable {

  constructor() {
    super();

    let epubReader = new EPubReader();
    epubReader.open('book');
  }

}
```

## Example
![Image](http://g.recordit.co/ooKqhz4efk.gif)


## Credits
* https://github.com/FolioReader/FolioReaderKit
