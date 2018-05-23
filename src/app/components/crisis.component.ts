import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'crisis-center',
  templateUrl: './crisis.component.html',
})
export class CrisisComponent implements OnInit{
  title = 'CRISIS CENTER';
  status;

  constructor(){

  }

  ngOnInit(){
  }
}
