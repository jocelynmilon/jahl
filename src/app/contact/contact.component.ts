import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  registerForm: FormGroup;
  submitted: true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      destination: ['', Validators.required],
      nombre: ['', Validators.required],

    });
  }
  // pour un accès facile aux champs de formulaire
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // si la forme est invalide
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!!');

  }
}
