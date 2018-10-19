import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private httpClient: HttpClient) { }


  obtenerPersonas():Observable<any> {
    return this.httpClient.get("http://localhost:64857/api/persona/GetAll");
    
  }

  obtenerPersonaById(identificador):Observable<any> {
    return this.httpClient.get("http://localhost:64857/api/persona/GetById/" + identificador);
    
  }

  obtenerGeneros():Observable<any> {
    return this.httpClient.get("http://localhost:64857/api/persona/GetGeneros");
    
  }

  obtenerTipoPersonas():Observable<any> {
    return this.httpClient.get("http://localhost:64857/api/persona/GetTipoPersonas");
    
  }

  agregarPersonas(Personas: any){
    let Json = JSON.stringify(Personas);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("http://localhost:64857/api/persona/create", Json, {headers: headers} );
  }

  actualizarPersonas(Personas: any){
    let Json = JSON.stringify(Personas);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put("http://localhost:64857/api/persona/update", Json, {headers: headers} );
  }

  eliminarPersona(identificador):Observable<any> {
    return this.httpClient.delete("http://localhost:64857/api/persona/delete/" + identificador);


  }


}
