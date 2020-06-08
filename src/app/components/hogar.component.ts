import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HogarService } from '../services/hogar.service'
@Component({
    selector: 'hogar',
    templateUrl: '../views/hogar.html',
    providers: [HogarService]
  })
  export class HogarComponent {
    public title: string;
  public hogar:object
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _hogarService:HogarService
  ){
    this.title = 'Productos para el hogar';
  }
  ngOnInit() {
    this.getHogar()
  }
  getHogar(){
    this._hogarService.getHogar().subscribe(
      result => {

        this.hogar=result
         
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}