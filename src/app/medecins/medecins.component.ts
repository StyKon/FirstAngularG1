import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {
  Agenda = [
  {date : new Date , message : 'Operation_Bloc A'},
  {date : new Date , message : 'Operation_Bloc B'},
  ];
  info_medecin = { nom : 'Docteur', prenom : 'imen', telephone : '0124567' };
  Reclamation_medecin = {
    date:new Date,
    message: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  onAdd():void {
  this.Reclamation_medecin.date = new Date ;
  this.Agenda.push({date : this.Reclamation_medecin.date , message : this.Reclamation_medecin.message}) ;
  this.Reclamation_medecin.message ="";
  }

}
