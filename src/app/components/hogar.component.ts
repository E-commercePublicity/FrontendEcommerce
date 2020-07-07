import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HogarService } from '../services/hogar.service'
//componente para obtener los productos para el hogar
@Component({
    selector: 'hogar',
    templateUrl: '../views/hogar.html',
    providers: [HogarService]
  })
  export class HogarComponent {
    public title: string;
  public hogar:any
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
  //funcion que obtiene los productos

  getHogar(){
    this._hogarService.getHogar().subscribe(
      (result : any ) => {

        this.hogar=result

      },
      error => {
        this.hogar = [];
        console.log(<any>error);
      }
    );
  }
}
