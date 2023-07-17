import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  books=[
    {
      name:"name1",
      author:"author1",
      img:'',
      raiting:1
    },
    {
      name:"name2",
      author:"author2",
      img:'favicon.ico',
      raiting:0
    },
    {
      name:"name3",
      author:"author3",
      img:'',
      raiting:3
    },
    {
      name:"name4",
      author:"author4",
      img:'favicon.ico',
      raiting:4
    },
    {
      name:"name5",
      author:"author5",
      img:'',
      raiting:0
    }
  ]
}
