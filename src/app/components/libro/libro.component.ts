import { LibroService } from './../../services/libro.service';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private libroservicio: LibroService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroservicio.list().subscribe(data => { this.libros = data; })
  }

  borrar(id?: number) {
    alert("¿Está seguro que desea eliminar el libro seleccionado?");
    if (id != undefined) {
      this.libroservicio.delete(id).subscribe({
        next: data => {
          alert("Libro eliminado exitosamente.");
          this.cargarLibros();
        }, error: err => {
          alert("No se puede eliminar el libro.")
        }
      })
    }
  }


}
