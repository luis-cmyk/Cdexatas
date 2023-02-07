import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public provas?: any[];

    constructor(private httpService: ServicoService, public toastController: ToastController) {}
    i?:number;
    quant?: number;


  ngOnInit(){
    this.getRankingProvas();

  }

  getRankingProvas(){
    this.httpService.getRankingProvas().subscribe((data: any) => this.provas = data.Alunos);
  }
}
