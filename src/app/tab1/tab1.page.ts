import { IFilmeApi, IListaFilmes } from './../models/IFilmeAPI.model';
import { DadosService } from './../services/dados.service';
import { Ifilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FilmeService } from '../service/filme.service';
import { GeneroService } from '../services/genero.service';
import { IGenero } from '../models/IGenero.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  titulo = 'Filmes';

  listaVideos: Ifilme[] =[
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: '18/03/2021',
      duracao: '4h 2m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos: ['Ação', 'Aventura','Fantasia','Ficção Científica'],
      pagina: '/liga-justica'
    },
    {
      nome: 'Ragnarok (2020)',
      lancamento: '15/04/2021',
      duracao: '45m',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg',
      generos: ['Drama', 'Fantasia', 'Aventura'],
      pagina: '/ragnarok'
    },
    {
      nome: 'A Sentinela (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/56Z9eh4k9pzR6Yhy201nq2Qoa0n.jpg',
      generos: ['Thilha', 'Ação', 'Drama'],
      pagina: '/sentinela'
    },
    {
      nome: 'Fear the Walking Dead',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tbgPaIEZa9BuKKESdyapOn0CZh6.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/walkingDead'
    }
  ];

  listaFilmes: IListaFilmes;

  generos: string[]=[];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public router: Router) {}

buscarFilmes(evento: any){
  console.log(evento.target.value);
  const busca=evento.target.value;
  if(busca && busca.trim()!==''){
    this.filmeService.buscarFilmes(busca).subscribe(dados=>{
     console.log(dados);
     this.listaFilmes=dados;
    });

    }
  }


    exibirfilme(filme: IFilmeApi){
      this.dadosService.guardarDados('filme', filme);
      this.router.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

ngOnInit()
{
  this.generoService.buscarGeneros().subscribe(dados =>{
     console.log('Generos: ',dados.genres);
     dados.genres.forEach(genero =>{
       this.generos[genero.id]=genero.name;
     });
     this.dadosService.guardarDados('generos',this.generos);
   });
}
}
