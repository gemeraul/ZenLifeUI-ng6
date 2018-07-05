// NG DEPENDENCIES
import { Injectable } from '@angular/core';
import {  Response, Request, RequestMethod } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpService } from './extended-http.service';
import { HttpModule, Http, BrowserXhr, RequestOptions, XHRBackend } from '@angular/http';

// APP DEPENDENCIES

// TODO: refactor interfaces


//const apiUrl = "http://localhost:3000/sentiment";
const apiUrl = "http://devinnovapi-or.apps1-or-int.icloud.intel.com/sentiment";


@Injectable()
export class SentimentService {

    sentimentResponse: any;
    protected req: Request;
    private httpRequestOptions = new RequestOptions(
        {
          withCredentials: true
        }
      );

    constructor(protected _httpService: HttpService) {
        this.req = new Request({
            method: RequestMethod.Get,
            url: '',
            withCredentials: true
        });
    }

    storeSentimentResponse(data) {
        this.sentimentResponse = data;
    }

    getSentimentResponse() {
        return this.sentimentResponse;
    }
    
    getUserSentiment(text: string): Observable<any> {
        this.req.url = apiUrl;
        this.req.method = RequestMethod.Get;
        return this._httpService.request(this.req)
        .pipe(
          map((res: Response) => <any>res.json()),
          catchError(this.handleError)
        );
    }

    postUserSentiment(text: string): Observable<any> {

    const url: any = 'http://devinnovapi-or.apps1-or-int.icloud.intel.com/';
    let body:any = { 'text': text };
      return this._httpService.post(url + 'sentimentpost', body, this.httpRequestOptions)
      .pipe(
          map((res: Response) => <any>res.json()),
          catchError(this.handleError)
        );

    }
 
    // TODO
    // implement exception handling strategy
    protected handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
