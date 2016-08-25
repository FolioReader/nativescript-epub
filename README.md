# NativeScript ePub Reader Plugin
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