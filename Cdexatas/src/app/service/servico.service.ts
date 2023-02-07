import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

getPokemon(){
  return this.http.get('https://cdexatas.com/View/DadosProva.php');
}

getRankingProvas(){
  return this.http.get('https://cdexatas.com/View/DadosProva.php');
}

}
