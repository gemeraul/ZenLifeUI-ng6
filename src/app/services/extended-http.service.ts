import { Injectable, Injector } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpService extends Http {
  private router;
  private authService;


  constructor (backend: XHRBackend, request_options: RequestOptions) {
    //let token = localStorage.getItem('auth_token'); // your custom token getter function here
    //options.headers.set('Authorization', `Bearer ${token}`);
    const headers = new Headers({ 'Accept': 'text/html, application/xhtml+xml, */*' });
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    super(backend, options);
    
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    let token = localStorage.getItem('auth_token');
    const headers = new Headers({ 'Accept': 'text/html, application/xhtml+xml, */*' });
    const local_options = new RequestOptions({ headers: headers, withCredentials: true });
    options = (!options)? local_options: options;

    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = {headers: new Headers()};
      }
      //options.headers.set('Authorization', `Bearer ${token}`);
    } else {
    // we have to add the token to the url object
      //url.headers.set('Authorization', `Bearer ${token}`);
    }
    return super.request(url, options).pipe(catchError(this.catchAuthError(this)));
  }

  private catchAuthError (self: HttpService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403 || res.status === 0) {
        // if not authenticated
        console.log(res);
        //self.router.navigate(['/unauthorized']);
      }
      
      return Observable.throw(res);
      
      
    };
  }
}
