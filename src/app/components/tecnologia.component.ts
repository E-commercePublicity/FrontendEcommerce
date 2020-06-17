import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TecnologiaService } from '../services/tecnologia.service'
@Component({
    selector: 'tecnologia',
    templateUrl: '../views/tecnologia.html',
    providers: [TecnologiaService]
  })
  export class TecnologiaComponent {
    public title: string;
  public tecnologia:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _tecnologiaService: TecnologiaService
  ){
    this.title = 'Productos de tecnologia';
  }
  ngOnInit() {
    this.getEvento();
  }
  //Service
  getEvento(){
    this._tecnologiaService.getTecnologia().subscribe(
      (result: any ) => {
        this.tecnologia = result;

      },
      error => {
        this.tecnologia = [];
        // console.log(<any>error);
      }
    );
  }
}
