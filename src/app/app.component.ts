import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";
import { Observable } from 'rxjs';
import { AppStateService } from "./services/app-state.service";

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Learning App';
  status;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private stateService: AppStateService){
    this.stateService.subscribe("testType",this.showDispatchedMsg);
  }

  showDispatchedMsg(action){
    console.log(action);
  }

  ngOnInit(){
    // console.log(this.activatedRoute);
    // console.log(this.router.routerState);

    this.stateService.dispatch({
      type: "testType",
      value: "dispatch works!"
    })

    let routerObs : Observable<any> = this.router.events;
    routerObs
    .subscribe(event => {
      // console.log(event)
    })
  }
}
