import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'; 
import {GLOBAL} from '../services/global' 


@Injectable()
    export class VestuarioService{
        public url:string;
        constructor(
            public _http:HttpClient
        ){
            this.url=GLOBAL.url
        }
        getVestuario(){
            return this._http.get(this.url+'productosVestuario').map(res=>(res))
        }
    }