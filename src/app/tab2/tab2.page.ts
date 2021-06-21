import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { ISeries } from '../models/ISeries.model';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Series';

  listaSeries: ISeries[] = [
    {
      nome: 'Loki',
      lancamento: '09/06/2021',
      duracao: '52',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kAHPDqUUciuObEoCgYtHttt6L2Q.jpg',
      generos: ['Drama','Sci-Fic', 'Fantasia'],
      pagina: '/loki'

    },
    {
      nome: 'Elite (2018)',
      lancamento: '05/10/2018',
      duracao: '1h',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f4YhTnCQQlGDohhq9AEQDA4B54C.jpg',
      generos: ['Crime','Mistério', 'Drama'],
      pagina: '/elite'

    },
    {
      nome: 'Lúcifer (2016)',
      lancamento: '05/01/2016',
      duracao: '45m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
      generos: ['Drama','Sci-Fic', 'Fantasia'],
      pagina: '/lucifer'



    },
    {
      nome: 'The Flash',
      lancamento: '05/01/2016',
      duracao: '44m',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      generos: ['Drama','Sci-Fic', 'Fantasia'],
      pagina: '/flash'


    },
    {
      nome: 'Good Doctor',
      lancamento: '25/09/2017',
      duracao: '44m',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
      generos: ['Drama'],
      pagina: '/goodDoctor'

    }
  ];
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosServices: DadosService,
    public route: Router
  ) {}

  exibirserie(serie: ISeries){
    this.dadosServices.guardarDados('serie', serie);
    this.route.navigateByUrl('/dados-series');
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
}
