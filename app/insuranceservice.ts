/* tslint: disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v7.1.6162.22205 (NJsonSchema v5.16.6156.29215) (http://NSwag.org)
// </auto-generated>
//----------------------

import 'rxjs/Rx'; 
import {Observable} from 'rxjs/Observable';
import {Injectable, Inject, Optional, OpaqueToken} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';

export const API_BASE_URL = new OpaqueToken('API_BASE_URL');

@Injectable()
export class InsuranceClient {
    private http: Http = null; 
    private baseUrl: string = undefined; 
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http; 
        this.baseUrl = baseUrl ? baseUrl : "http://outsorcerers.gear.host"; 
    }

    get(id: number): Observable<Policy> {
        let url_ = this.baseUrl + "/api/Insurance/{id}"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGet(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processGet(response));
                } catch (e) {
                    return <Observable<Policy>><any>Observable.throw(e);
                }
            } else
                return <Observable<Policy>><any>Observable.throw(response);
        });
    }

    private processGet(response: Response) {
        const data = response.text();
        const status = response.status.toString(); 

        if (status === "200") {
            let result200: Policy = null; 
            let resultData200 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
            result200 = resultData200 ? Policy.fromJS(resultData200) : null;
            return result200; 
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status"); 
        }
    }

    post(): Observable<void> {
        let url_ = this.baseUrl + "/api/Insurance"; 

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processPost(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processPost(response));
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response);
        });
    }

    private processPost(response: Response) {
        const data = response.text();
        const status = response.status.toString(); 

        if (status === "200") {
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status"); 
        }
    }
}

export class Policy { 
    id: number; 
    firstName: string; 
    lastName: string;

    constructor(data?: any) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : null;
            this.firstName = data["firstName"] !== undefined ? data["firstName"] : null;
            this.lastName = data["lastName"] !== undefined ? data["lastName"] : null;
        }
    }

    static fromJS(data: any): Policy {
        return new Policy(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : null;
        data["firstName"] = this.firstName !== undefined ? this.firstName : null;
        data["lastName"] = this.lastName !== undefined ? this.lastName : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Policy(JSON.parse(json));
    }
}