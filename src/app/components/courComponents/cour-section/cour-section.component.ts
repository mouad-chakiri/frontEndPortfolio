import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cour-section',
  templateUrl: './cour-section.component.html',
  styleUrls: ['./cour-section.component.css']
})
export class CourSectionComponent implements OnInit {
  listDesCour = [
    {
      title : 'Angular',
      date : '2019/10/12',
      description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum aspernatur veniam nihil. ',
      imsgeUrl : './../../../../assets/courImages/angular.png',
    },
    {
      title : 'Oracle',
      date : '2019/10/12',
      description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum aspernatur veniam nihil. ',
      imsgeUrl : './../../../../assets/courImages/oracle.png',
    },
    {
      title : 'Spring',
      date : '2019/10/12',
      description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum aspernatur veniam nihil. ',
      imsgeUrl : './../../../../assets/courImages/spring.png',
    },
    {
      title : 'Java',
      date : '2019/10/12',
      description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum aspernatur veniam nihil. ',
      imsgeUrl : './../../../../assets/courImages/java.png',
    },
    {
      title : 'Java jee',
      date : '2019/10/12',
      description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum aspernatur veniam nihil. ',
      imsgeUrl : './../../../../assets/courImages/jeetéléchargement.png',
    },
    {
      title : 'PHP Mysql',
      date : '2019/10/12',
      description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum aspernatur veniam nihil. ',
      imsgeUrl : './../../../../assets/courImages/mysql.png',
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  showModal = -1;
  openModal(){
    this.showModal=1;
  }

  closeModal(){
    this.showModal=-1;
  }


}
