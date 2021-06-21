import { ISeries } from './../models/ISeries.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-series',
  templateUrl: './dados-series.page.html',
  styleUrls: ['./dados-series.page.scss'],
})
export class DadosSeriesPage implements OnInit {

  serie: ISeries;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.serie=this.dadosService.pegarDados('serie');
    console.log('Serie Enviado',this.serie);
  }

}
