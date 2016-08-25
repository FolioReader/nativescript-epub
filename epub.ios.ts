import {topmost} from 'ui/frame';

declare var FolioReaderConfig: any,
            FolioReaderContainer: any,
            FolioReader: any;

export class EPubReader {

    private _config: any;

    constructor() {
        this._config = new FolioReaderConfig();
    }

    open(fileName: string) {
        let bookPath = NSBundle.mainBundle().pathForResourceOfType(fileName, 'epub');
        FolioReader.presentReaderWithParentViewControllerWithEpubPathAndConfigShouldRemoveEpubAnimated(
            topmost().currentPage.ios,
            bookPath,
            this._config,
            false,
            true
        );
    }


}