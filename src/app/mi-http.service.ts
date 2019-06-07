import { log } from 'util';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService<T> {

  private urlBase: string;

  constructor( public http: HttpClient ) { 
    this.urlBase = "http://localhost:80/CONSULTORIO_ODONTOLOGICO/";
  }

  public httpGetP ( url: string)
  {
    return this.http
    .get( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpDeleteP ( url: string)
  {
    return this.http
    .delete( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .post( this.urlBase + url , objeto )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpPostPSinSubscripcion( url: string, objeto: any )
  {
    return this.http
    .post( this.urlBase + url , objeto );
  }

  public httpPostPSinSubscripcion2( url: string, objeto: any )
  {
    return this.http
    .post( url , objeto ).subscribe( data => {
      console.log( data );
      return data;
    });
  }
/*
  public httpGetO( url: string): Observable<Response>
  {
      return this.http.get( this.urlBase + url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
      
      //return this.http.get<T>( this.urlBase + url );
  }
*/
  public httpGetO<T>( url: string)
  {
    return this.http.get<T>( this.urlBase + url );
  }


  private extractData ( res: Response )
  {
    //console.info("respuesta", res);
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
