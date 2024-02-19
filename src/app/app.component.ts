import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'databinding';
  uname = 'anjali';
  uage =18;
  ucolor ='red';
  col=3;
  

  ipath = 'assets/images/logo.png';
  student= [
    {name:'Anjali', age:23,phone:7388899098},
    {name:'Akshay', age:30 ,phone:9878899098},
    {name:'prachi', age:25 ,phone:7389867098},
    {name:'vaishu', age:24 ,phone:8765499989}
  ]
}
