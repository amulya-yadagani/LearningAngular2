import { Injectable } from '@angular/core';
import { AdItem } from "./ad-item";
import { HeroJobAdComponent } from "./hero-job-ad.component";
import { HeroProfileComponent } from './hero-profile.component'
 
@Injectable()
export class AdService{
    getItems(){
        return [
            new AdItem(HeroJobAdComponent,{'headline':'Hiring for several positions','body':'Submit your resume'}),
            new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'})
        ]
    }
}