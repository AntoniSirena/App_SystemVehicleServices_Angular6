import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TipoPersonaService {

  constructor(private httpClient: HttpClient) { }


  obtenerTipoPersonas():Observable<any> {
    return this.httpClient.get("http://localhost:64857/api/tipopersona/GetAll");
    
  }

  obtenerTipoPersonaById(identificador):Observable<any> {
    return this.httpClient.get("http://localhost:64857/api/tipopersona/GetById/" + identificador);
    
  }


  agregarTipoPersonas(tipoPersonas: any){
    let Json = JSON.stringify(tipoPersonas);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("http://localhost:64857/api/tipopersona/create", Json, {headers: headers} );
  }

  actualizarTipoPersonas(tipoPersonas: any){
    let Json = JSON.stringify(tipoPersonas);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put("http://localhost:64857/api/tipopersona/update", Json, {headers: headers} );
  }

  eliminarTipoPersona(identificador):Observable<any> {
    return this.httpClient.delete("http://localhost:64857/api/tipopersona/delete/" + identificador);


  }


}


