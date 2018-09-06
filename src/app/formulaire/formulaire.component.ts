import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  reservationForm: FormGroup;
  submitted = false;
  arrive = new Date();
  propriete = ['Los Angeles', 'Guadeloupe', 'Martinique', 'France'];
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  depart = new Date();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   /* this.createForm();*/
    this.reservationForm = this.formBuilder.group({
      arrive: ['', Validators.required],
      propriete: ['', Validators.required],
      peopleOptions: ['', Validators.required],
      depart: ['', Validators.required]
    });
  }
  get f() { return this.reservationForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reservationForm.invalid) {
        return;
    }

    alert('SUCCESS!!');
}
 /* createForm() {
    this.reservationForm = this.formBuilder.group({
      arrive: new Date(),
      depart: new Date(),
      propriete: '',
      peopleOptions: 1,

    });
  }*/
}
