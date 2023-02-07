import { ServicoService } from '../service/servico.service';

import { Component, OnInit } from '@angular/core';
import { count } from 'console';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{


  public pokemons?: any[];

    constructor(private httpService: ServicoService, public toastController: ToastController) {}
    i?:number;
    quant?: number;


  ngOnInit(){
    this.getPokemons();

  }

  getPokemons(){
    this.httpService.getPokemon().subscribe((data: any) => this.pokemons = data.Alunos);

  }



}
