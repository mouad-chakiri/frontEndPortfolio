import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cour-card',
  templateUrl: './cour-card.component.html',
  styleUrls: ['./cour-card.component.css']
})
export class CourCardComponent implements OnInit {

  courInfo = {
    title:'Angular',
    date : '2020/12/1',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum aspernatur veniam nihil.',
    inageUrl : './../../../../assets/courImages/angular.png',
    id : 0
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
