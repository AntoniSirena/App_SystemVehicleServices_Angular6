import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from '../service/persona.service';
declare var $;


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

 @ViewChild('dataTable') table;
 dataTable: any;

   ngOnInit(): void {

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable();

   }

   constructor( private personaService: PersonaService) {
    this.obtenerPersonas();
    this.obtenerGeneros();
    this.obtenerTipoPersonas();

   }



   agregarPersona: any = {
     Id: '',
     GeneroId: '',
     TipoPersonaId: '',
     PrimerNombre: '',
     SegundoNombre: '',
     PrimerApellido: '',
     SegundoApellido: '',
     FechaNacimiento: '',
     Direccion: '',
     Telefono: '',
     Cellular: '',
     Email: ''
    }

   personas: any = []

   generos: any = []

   tipoPersonas: any = []

  
   //ObtenerPersonas
   obtenerPersonas(){
    this.personaService.obtenerPersonas().subscribe(resultado => {
    this.personas = resultado; 
    },
      error => { console.log(JSON.stringify(error));
      });
  }

  //ObtenerGeneros
  obtenerGeneros(){
    this.personaService.obtenerGeneros().subscribe(resultado => {
    this.generos = resultado; 
    },
      error => { console.log(JSON.stringify(error));
      });
  }

  //ObtenerTipoPersonas
  obtenerTipoPersonas(){
    this.personaService.obtenerTipoPersonas().subscribe(resultado => {
    this.tipoPersonas = resultado; 
    },
      error => { console.log(JSON.stringify(error));
      });
  }

  //EditarPersonas
  editarPersona(identificador){
    this.personaService.obtenerPersonaById(identificador).subscribe(resultado => {
      this.agregarPersona.Id = resultado.Id;
      this.agregarPersona.GeneroId = resultado.GeneroId;
      this.agregarPersona.TipoPersonaId = resultado.TipoPersonaId;
      this.agregarPersona.PrimerNombre = resultado.PrimerNombre;
      this.agregarPersona.SegundoNombre = resultado.SegundoNombre;
      this.agregarPersona.PrimerApellido = resultado.PrimerApellido;
      this.agregarPersona.SegundoApellido = resultado.SegundoApellido;
      this.agregarPersona.FechaNacimiento = resultado.FechaNacimiento;
      this.agregarPersona.Direccion = resultado.Direccion;
      this.agregarPersona.Telefono = resultado.Telefono;
      this.agregarPersona.Cellular = resultado.Cellular;
      this.agregarPersona.Email = resultado.Email;
    },
    error => { console.log(JSON.stringify(error));
    });
  
    }

    
  //Eliminar
  eliminarPersona(identificador){
    this.personaService.eliminarPersona(identificador).subscribe(resultado => {
    this.obtenerPersonas();    
    },
    error => { console.log(JSON.stringify(error));
    });
    
   }
 
  //Agregar
   agregarPersonas(){ 
     this.personaService.agregarPersonas(this.agregarPersona).subscribe(resultado => {
       this.reset();
       this.obtenerPersonas();    
       },       
       error => { console.log(JSON.stringify(error));
       });   
  
   }
 
   //Actualizar
   updatePersona(){
     this.personaService.actualizarPersonas(this.agregarPersona).subscribe(resultado => {
       this.reset();
       this.obtenerPersonas();    
       },
       error => { console.log(JSON.stringify(error));
       });  
   }
 
  //Metodo para limpiar las variables
   reset()
   {
     this.agregarPersona.PrimerNombre = '';
     this.agregarPersona.SegundoNombre = '';
     this.agregarPersona.PrimerApellido = '';
     this.agregarPersona.SegundoApellido = '';
     this.agregarPersona.FechaNacimiento = '';
     this.agregarPersona.Direccion = '';
     this.agregarPersona.Telefono = '';
     this.agregarPersona.Cellular = '';
     this.agregarPersona.Email = '';
     this.agregarPersona.GeneroId = '';
     this.agregarPersona.TipoPersonaId = '';
   }





}
