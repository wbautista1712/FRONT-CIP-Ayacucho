import { AppSettings } from '../app/app.settings';

export class HttpService {
  public static getURL(currentURL: string) {
    return AppSettings.URL_BASE + currentURL;
  }
}
