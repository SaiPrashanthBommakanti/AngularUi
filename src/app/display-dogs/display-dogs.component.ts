import { Component, OnInit } from '@angular/core';
import { DogApiService } from './dog-api.service'
import { Router } from '@angular/router'
import { Dogs } from './Dogs';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-display-dogs',
  templateUrl: './display-dogs.component.html',
  styleUrls: ['./display-dogs.component.css'],
  providers:[Dogs]
})
export class DisplayDogsComponent implements OnInit {

  dogsForDisplay : Dogs[]

  constructor(
    public dogService : DogApiService,
    public router: Router,
    public dogs : Dogs
  ) { }

  ngOnInit() {
    this.displayDogs();
  }

  displayDogs() {
    return this.dogService.getDogs().subscribe(
      res=> {this.dogsForDisplay = res;}
    )
  }
}
