import {Injectable} from '@angular/core';
import {Response,Http} from '@angular/http';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserManagerService {

    _api: string;
    accessToken: string;

    constructor(protected http: Http, 
        protected httpClient: HttpClient,
        protected oauthService: OAuthService, 
    ) {
        this._api = 'pessoa';
    }

    protected getHttpOptions(): any {
        let bearer = "";
        console.log( "getHttpOptions - getAccessToken(): " + this.oauthService.getAccessToken() );
        console.log( "getHttpOptions - environment.access_token: " + environment.access_token );
        if( this.oauthService.getAccessToken() == null || this.oauthService.getAccessToken() == "") {
            bearer = this.accessToken;
        } else {
            bearer = this.oauthService.getAccessToken();
        }
        if( bearer == "" || bearer == null ) {
            bearer = environment.access_token;
        }
        console.error('Bearer: ' + bearer);
        let httpOptions = {
            headers: new HttpHeaders({
              'Accept':  'application/json',
              'Authorization': `Bearer ${bearer}`
            })
        };
        return httpOptions;
    }

    public setAccessToken(accessToken: string): void {
        this.accessToken = accessToken;
    }

    public getUserInfo(): any {
        //let url = environment.user_info_url;
        let url = "https://identity.wso2training.com/scim2/Me";
        console.log( "get user info: " + url );
        console.log( "usermanager - environment.access_token: " + environment.access_token );
        return this.httpClient.get( url, this.getHttpOptions() );
    }

    public getMenu(): any {
        return this.httpClient.get( environment.api_gateway_url + '/pizzashack/1.0.0/menu', this.getHttpOptions() );
    }

}
