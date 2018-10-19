import { Component, OnInit } from '@angular/core';
import { TipoPersonaService } from '../service/tipo-persona.service';

@Component({
  selector: 'app-tipo-persona',
  templateUrl: './tipo-persona.component.html',
  styleUrls: ['./tipo-persona.component.css']
})
export class TipoPersonaComponent implements OnInit {

  constructor(private tipoPersonaService: TipoPersonaService) {
  this.obtenerTipoPersonas();

  }

  agregarTipoPersonas: any = {Id: '', Codigo: '', Descripcion: ''}

  tipoPersonas: any [];

 //ObtenerTipoPersonas
  obtenerTipoPersonas(){
    this.tipoPersonaService.obtenerTipoPersonas().subscribe(resultado => {
    this.tipoPersonas = resultado; 
    },
      error => { console.log(JSON.stringify(error));
      });
  }

  //EditarTipoPersonas
  editarTipoPersona(identificador){
    this.tipoPersonaService.obtenerTipoPersonaById(identificador).subscribe(resultado => {
      this.agregarTipoPersonas.Id = resultado.Id;
      this.agregarTipoPersonas.Codigo = resultado.Codigo;
      this.agregarTipoPersonas.Descripcion = resultado.Descripcion;
    },
    error => { console.log(JSON.stringify(error));
    });
  
    }


    
  //Eliminar
  eliminarTipoPersona(identificador){
    this.tipoPersonaService.eliminarTipoPersona(identificador).subscribe(resultado => {
    this.obtenerTipoPersonas();    
    },
    error => { console.log(JSON.stringify(error));
    });
    
   }
 
  //Agregar
   agregarTipoPersona(){ 
     this.tipoPersonaService.agregarTipoPersonas(this.agregarTipoPersonas).subscribe(resultado => {
       this.reset();
       this.obtenerTipoPersonas();    
       },       
       error => { console.log(JSON.stringify(error));
       });   
  
   }
 
   //Actualizar
   updateTipoPersona(){
     this.tipoPersonaService.actualizarTipoPersonas(this.agregarTipoPersonas).subscribe(resultado => {
       this.reset();
       this.obtenerTipoPersonas();    
       },
       error => { console.log(JSON.stringify(error));
       });  
   }
 
  //Metodo para limpiar las variables
   reset()
   {
     this.agregarTipoPersonas.Codigo = '';
     this.agregarTipoPersonas.Descripcion = '';
   }



  ngOnInit() {
  }

}
