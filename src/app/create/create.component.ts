import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { People } from 'src/entities/without_relations/People.dto';
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



  getCurrentDateTime(): string{
    let date = new Date();
    let datetimeformat = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) +  "-" +("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours() ).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    return String(datetimeformat);

  }
  

  ngOnInit(): void {
    this.formularioRegistro = this.formBuilder.group({

      id_people: [null],
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.max(120)]],
      bornDateTime: ['', [Validators.required]]

    });
  }


  onSubmit(): void{
    let dateTime = this.getCurrentDateTime();

    const people: People = this.formularioRegistro.value;
    people.bornDateTime = dateTime;
    /*
    this.peopleService.createOrUpdate(people).subscribe(resp => {

    }, error =>{
      console.log(error);
    })

    */
    console.log(JSON.stringify(people));
  }

}
