import { Component, OnInit } from '@angular/core';

@Component({
    template: `<h3>{{title}}</h3>
  <label>Attribute Directives</label>
  <div [changeToImg]="src"></div>
  <label>Structural Directives</label>
  <p *visiblityDir = "true" style="background-color:red">
    using structural directive - can see me
  </p>
  <p *visiblityDir = "false" style="background-color:yellow">
    using structural directive - cannot see me
  </p>`
})
export class LearnDirectivesComponent implements OnInit {
    title = 'Learning Directives';

    constructor() {

    }

    ngOnInit() {
    }
}
