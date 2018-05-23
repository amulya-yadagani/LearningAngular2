import { Component } from '@angular/core';

@Component({
    selector: "grid",
    templateUrl: "./grid.component.html"
})
export class gridComponent {

    dataSource = [{ "name": "Amu", "branch": "cse", "id": 2 }, { "name": "Sweety", "branch": "ece", "id": 1 }
        , { "name": "Pinky", "branch": "eee", "id": 3 }, { "name": "Tina", "branch": "eee", "id": 5 }, { "name": "Mena", "branch": "cse", "id": 4 }];

    sortAsc(column) {
        let columnLowerCase = column.toLowerCase();
        let temp = "";
        let tempArray;
        this.dataSource.forEach((i, index) => {
            if (index == 0) {
                temp = i[columnLowerCase];
            } else if (index > 0 && temp > i[columnLowerCase]) {
                tempArray = this.dataSource[index - 1]
                this.dataSource[index - 1] = i;
                this.dataSource[index] = tempArray;
                temp = tempArray[columnLowerCase];
            } else {
                temp = i[columnLowerCase];
            }
        });
        console.log(this.dataSource)
    }

    sortDesc(column) {

    }
}