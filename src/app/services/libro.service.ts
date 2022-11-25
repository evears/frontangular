import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../model/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  URL = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  public save(libro: Libro): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', libro);
  }

  public list(): Observable<Libro[]> {
    return this.httpClient.get<Libro[]>(this.URL + 'vertodos');
  }

  public detail(id: number): Observable<Libro> {
    return this.httpClient.get<Libro>(this.URL + `ver/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public update(id: number, libro: Libro): Observable<any> {
    return this.httpClient.put<any>(this.URL + `editar/${id}`, libro);
  }

}
