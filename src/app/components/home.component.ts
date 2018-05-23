import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { SizerComponent } from './sizer.component';
import { Observable } from 'rxjs';
import { Ihero } from './Ihero';
import { AdItem } from "../dynamicComponents/ad-item";
import { AdService } from "../dynamicComponents/ad-service";
import { Logger } from '../services/logger.service';
import { UserService } from '../services/user.service';
import { heroServiceProvider } from '../services/hero.service.provider';

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnChanges, DoCheck {
    title = 'app';
    fontSizePx = 10;
    fontSizeEm = 2;
    currentHeroName = 'Amulya';
    username = 'Amulya';
    comment;
    counter = 5;
    heroes: Ihero[];
    hero;
    ads: AdItem[];
    src = "../assets/3.jpg"

    @ViewChild(SizerComponent) viewChild: SizerComponent;
    constructor(private adService: AdService, private logger: Logger, private user: UserService) {
        // console.log("constructor: created Component")
    }
    trackByHeroes(index, hero) { return hero.id }

    setUppercaseName(name: string) {
        this.currentHeroName = name.toUpperCase();
    }

    onSubmit(form) {
        this.heroes.push({ id: ++this.counter, name: form.value.heroName });
        this.logger.log("heroes data is added");
    }

    ngOnInit() {
        document.cookie = "currentHeroName:" + this.username;
        var cookies = document.cookie;
        this.user.isAuthorized = true;
        let heroService = heroServiceProvider.useFactory(this.logger, this.user)
        this.heroes = heroService.getHeroes();
        this.hero = this.heroes[0]
        this.ads = this.adService.getItems();
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log("ngOnChanges: input properties are bound")
        // console.log(changes)
    }

    ngDoCheck() {
        // console.log("ngDoCheck: triggers after ngOnInit and for every ngOnChange")
    }

    // ngAfterViewInit() {
    //     // viewChild is set after the view has been initialized
    //     // console.log('AfterViewInit');
    //     this.doSomething();
    // }

    // ngAfterViewChecked() {
    //     // viewChild is updated after the view has been checked
    //     if (this.fontSizePx === this.viewChild.size) {
    //         // console.log('AfterViewChecked (no change)');
    //     } else {
    //         this.fontSizePx = this.viewChild.size;
    //         // console.log('AfterViewChecked');
    //         this.doSomething();
    //     }
    // }

    // private doSomething() {
    //     let c = this.viewChild.size > 20 ? `That's a large font` : '';
    //     if (c !== this.comment) {
    //         setTimeout(() => this.comment = c, 0);
    //     }
    // }

    validate(obj, lowval, hival) {
        console.log(this)
        if ((obj.value < lowval) || (obj.value > hival)) {
            alert('Invalid Value!');
        }
    }

}