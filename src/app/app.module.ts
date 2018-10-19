import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CitaComponent } from './cita/cita.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortadaComponent } from './portada/portada.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import {DataTableModule} from "angular-6-datatable";


import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TipoPersonaComponent } from './tipo-persona/tipo-persona.component';

import { PersonaComponent } from './persona/persona.component';



//Arreglo para definir las rutas del sistema
const appRoutes: Routes = [

  { path:'cita', component: CitaComponent},

  { path:'tipo-persona', component: TipoPersonaComponent},

  { path:'persona', component: PersonaComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    CitaComponent,
    PortadaComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TipoPersonaComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    DataTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
