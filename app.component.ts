import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PeopleService]
})
export class AppComponent {

  people = [];
  searchStr = '';
  textOn = '';
  constructor(private peopleService: PeopleService){}
  ngOnInit(){

    // this.peopleService.getPeople().subscribe(people => {
    //   console.log(people)
    // })
    this.peopleService.getPeople().subscribe(p =>
      {this.people = p}
    )

  }
  onKup(value){
    this.textOn = value;
  }
}
