import {Component} from '@angular/core';

@Component({
    selector: 'test-pipe',
    template: `<h2>Test Pipe</h2>
    <input type="text" [(ngModel)]="flower"/>
    <button type="submit" (click)="add(flower)">Add</button>
    <ul>
    <li *ngFor="let i of (flowers| purePipe)">{{i}}</li>
    </ul>
    `
})
export class TestPipe{
    flower : string
    flowers : string[] = []; 
    flowersNewArray : string[] = new Array();   

    add(flower){
        if(flower){
           this.flowersNewArray.push(this.flower);
           this.flowers = this.flowersNewArray; 
        }        
        console.log(this.flowers)
    }
}