import { Component, OnInit } from '@angular/core';
import {PatientService} from "./patient.service"

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  x : any ;
  tab : any[];
  constructor(private patientService : PatientService) {
    this.x =patientService.getInfo();
    this.tab =patientService.getAgenda();
  }
  ngOnInit(): void {
  }


}
