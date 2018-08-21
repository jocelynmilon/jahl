import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  reservationForm: FormGroup;
  arrive = new Date();
  propriete = ['Los Angeles', 'Guadeloupe', 'Martinique', 'France'];
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  depart = new Date();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reservationForm = this.fb.group({
      arrive: new Date(),
      depart: new Date(),
      propriete: '',
      peopleOptions: 1,
     
    })
  }
}
