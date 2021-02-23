import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  Agenda = [
    {date : new Date , message : 'Operation_Bloc A'},
    {date : new Date , message : 'Operation_Bloc B'},
    ];
  public info_patient = {nom : "Frikha", prenom:"Khalil", telephone:"54647661"}
  constructor() { }
  getInfo()
  {return this.info_patient}
  getAgenda()
  {return this.Agenda}
   ngOnInit(): void {
   }
}
