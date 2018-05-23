import { Injectable } from "@angular/core";
import { Logger } from "./logger.service";

@Injectable()
export class HeroService {

    HEROES = [{ id: 1, name: "aa", isSecret: true }, { id: 2, name: "bb", isSecret: true }, { id: 3, name: "cc", isSecret: false }, { id: 4, name: "dd", isSecret: false }, { id: 5, name: "ee", isSecret: true }]

    constructor(
        private logger: Logger,
        private isAuthorized: boolean
        ) { }

    getHeroes() {
        let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
        console.log("hero service")
        this.logger.log(`Getting heroes for ${auth} user.`);
        return this.HEROES.filter(hero => auth && !hero.isSecret);
    }
}

