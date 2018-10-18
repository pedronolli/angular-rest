import { Component, OnInit } from '@angular/core';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas : Array<Pessoa>;
  pessoa : Pessoa;

  constructor() { 
  }

  ngOnInit() {
    this.pessoa = new Pessoa();
  }

}
