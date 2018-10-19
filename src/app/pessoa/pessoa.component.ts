import { Component, OnInit } from '@angular/core';
import { Pessoa } from './models/pessoa';
import { PessoaService } from '../service/pessoa.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: Array<Pessoa>;
  sexo: Array<string>;
  pessoa: Pessoa;


  constructor(private pessoaService: PessoaService) {
  }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.sexo = ['Masculino', 'Feminino', 'Outro'];
    this.pessoas = [];
    this.getPessoas();
  }

  public salvar(): void {

    if (this.pessoa.id) {
      //Alterar
      let indexASerAlterado = this.recuperaIdDaPessoa(this.pessoa.id);
      this.pessoas[indexASerAlterado] = this.pessoa;

    } else {
      //Salvar
      this.pessoa.id = Math.ceil(Math.random() * 9999999999);
      this.pessoas.push(this.pessoa);
    }
    this.pessoa = new Pessoa();
  }

  public excluir(id: number): void {
    let indexARemover = this.recuperaIdDaPessoa(id);
    this.pessoas.splice(indexARemover, 1);
  }

  public editar(p: Pessoa): void {
    this.pessoa = Object.create(p);
  }

  //Metodo recupera o id
  public recuperaIdDaPessoa(id: number): number {
    let indice = this.pessoas.findIndex(p => p.id == id);
    return indice;
  }


  public getPessoas(): void {
    //Subscribe serve para registrar uma função callback
    this.pessoaService.getPessoas()
      .subscribe(pessoas => { this.pessoas = pessoas}
                  //   /|\
                  //    | 
                  //    |
                  //    | 
                  //    Isso equivale a isso aqui
                  //        let fnCallback = function(resp : Pessoa[]){
                  //           this.pessoas = resp;
                  //  }
        
      );
  }
}
