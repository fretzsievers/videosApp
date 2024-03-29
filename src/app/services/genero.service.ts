import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.model';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua='pt-BR';
  private apiURL='https://api.themoviedb.org/3/';
  private key='?api_key=77e2c0cd48d89c1477e61d67af8efe77';



  constructor(private http: HttpClient, public toastController: ToastController)  { }

buscarGeneros():Observable<IListaGenero>{
  const url=`${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;
  return this.http.get<IListaGenero>(url).pipe(
    map(retorno =>retorno),
    catchError(erro=> this.exibirErro(erro))
  );

}
async exibirErro(erro) {
  const toast = await this.toastController.create({
    message: 'Erro ao consultar API!.',
    duration: 2000,
    color: 'danger',
    position: 'middle'
  });
  toast.present();
  return null;
}

}
