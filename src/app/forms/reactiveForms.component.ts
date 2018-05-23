import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { states } from "./data.model";

@Component({
    templateUrl: "./reactiveForms.component.html"
})
export class ReactiveFormsComponent {
    heroForm: FormGroup;
    states;

    constructor(private fb: FormBuilder) {
        this.createForm();
        this.states = states;
        this.logNameChange();
    }

    createForm() {
        this.heroForm = this.fb.group({
            name: ['', Validators.required],            
            city: '',
            state: '',           
            power: ''           
        });

        // this.heroForm.setValue({
        //     name: 'Amulya',
        //     city: 'Hyderabad',
        //     state: 'CA',
        //     power: 'flight'
        // })

        this.heroForm.patchValue({
            name: 'Amulya',
        })
    }

    logNameChange(){
        console.log("log name")
        this.heroForm.valueChanges.forEach( (control : FormControl) => {
            console.log(JSON.stringify(control));
        })
    }

    resetData(){
        this.heroForm.reset({
            name: ''
        })
        this.heroForm.setControl("control",new FormControl());
    }

}