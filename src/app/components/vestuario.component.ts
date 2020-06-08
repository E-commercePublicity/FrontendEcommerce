import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VestuarioService } from '../services/vestuario.service'
@Component({
    selector: 'vestuario',
    templateUrl: '../views/vestuario.html',
    providers: [VestuarioService]
  })
  export class VestuarioComponent {
    public title: string;
  public vestuario:object
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _vestuarioService: VestuarioService
  ){
    this.title = 'Productos de vestuario';
  }
  ngOnInit() {
    this.getVestuario()
  }
  getVestuario(){
    this._vestuarioService.getVestuario().subscribe(
      result => {

        this.vestuario=result
         
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}