import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from 'src/services/people.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  formularioRegistro: FormGroup;

  get form(){
    return this.formularioRegistro.controls;
  }


  constructor(private peopleService: PeopleService,
            private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formularioRegistro = this.formBuilder.group({

      id_people: [null],
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.max(120)]],
      bornDateTime: ['', [Validators.required]]

    });
  }


  onSubmit(): void{
    console.log(JSON.stringify(this.formularioRegistro.value));
  }

}
