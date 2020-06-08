import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//componentes
import { HogarComponent } from './components/hogar.component';
import { TecnologiaComponent } from './components/tecnologia.component';
import { VestuarioComponent } from './components/vestuario.component';

const appRoutes:Routes=[
    {path:'hogar',component: HogarComponent},
    {path:'tecnologia',component: TecnologiaComponent},
    {path:'vestuario',component: VestuarioComponent},

];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
