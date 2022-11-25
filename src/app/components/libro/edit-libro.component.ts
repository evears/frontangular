import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from './../../services/libro.service';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';

@Component({
  selector: 'app-edit-libro',
  templateUrl: './edit-libro.component.html',
  styleUrls: ['./edit-libro.component.css']
})
export class EditLibroComponent implements OnInit {

  libro: Libro = null;

  constructor(private libroservice: LibroService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.libroservice.detail(id).subscribe({
      next: data => {
        alert("¿Esta seguro que desea modificar el libro?");
        this.libro = data;
      }, error: err => {
        alert("Error al seleccionar el libro.");
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.libroservice.update(id, this.libro).subscribe({
      next: data => {
        alert("Libro modificado correctamente.");
        this.router.navigate(['']);
      }, error: err => {
        alert("Error al modificar el libro.");
        this.router.navigate(['']);
      }
    })
  }


}
