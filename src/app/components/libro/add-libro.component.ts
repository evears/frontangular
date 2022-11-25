import { LibroService } from './../../services/libro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/model/libro';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  nombre: string = '';
  autor: string = '';
  editorial: string = '';
  anio!: number;
  fueLeido!: boolean;
  formato: string = '';

  constructor(private libroserv: LibroService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const libro = new Libro(this.nombre, this.autor, this.editorial,
      this.anio, this.fueLeido, this.formato);
    this.libroserv.save(libro).subscribe({
      next: data => {
        alert("Libro agregado exitosamente.");
        this.router.navigate(['']);
      }, error: err => {
        alert("No se pudo agregar el libro.");
        this.router.navigate(['']);
      }
    })
  }

}
