import { Component, OnInit } from '@angular/core';
import { People } from 'src/entities/without_relations/People.dto';
import { PeopleService } from 'src/services/people.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{

  people: People[];

  constructor(private peopleService: PeopleService){}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void{
    this.peopleService.getAll().subscribe(resp =>{
      this.people = resp.body;
      console.log(resp.body);
    }, error =>{
      console.log(error);
    })
  }

  deletePeopleById(id: number): void{
    this.peopleService.deleteById(id).subscribe(resp => {
      console.log(resp);
      this.getPeople();
    }, error =>{
      console.log(error);
    })
  }

}
