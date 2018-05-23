import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>-- projected content begins --</div>
    <ng-content></ng-content>
    <input type="text" />
    <p>{{hero | json}}</p>
  <div>-- projected content ends --</div>`,
})
export class AfterContentComponent {
  _hero;
  @Input()
  set hero(hero) {
    this._hero = hero;
  }

  get hero() { return this._hero; }

}