import {Observable} from 'data/observable';
import {EPubReader} from 'nativescript-epub';

export class HelloWorldModel extends Observable {

  constructor() {
    super();

    let epubReader = new EPubReader();
    epubReader.open('book');
  }

}