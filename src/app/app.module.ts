import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home.component";
import { HeroViewComponent } from "./components/heroView.component";
import { CrisisComponent } from "./components/crisis.component";

import { ReactiveFormsComponent } from "./forms/reactiveForms.component";

import { JqueryExamples } from "./jqueryExamples/jqueryEx.component";

import { SizerComponent } from './components/sizer.component';
import { AfterContentComponent } from './components/afterContent.component';
import { LearnStruDirective } from './learn-stru-directive.directive';
import { AsynchronousPrgmg } from './components/asynchronous.component';
import { gridComponent } from './components/grid.component';
import { AdBannerComponent } from './dynamicComponents/ad-banner.component';
import { HeroJobAdComponent } from './dynamicComponents/hero-job-ad.component';
import { HeroProfileComponent } from './dynamicComponents/hero-profile.component';
import { AdDirective } from './dynamicComponents/ad.directive';
import { ChangeToImage } from './directives/changeToImage.directive';
import { VisibilityDir } from "./directives/visibility.directive";
import { AdService } from './dynamicComponents/ad-service';
import { TestPipe } from './pipes/testPipe.component';
import { PurePipe } from './pipes/pure.pipe';
import { CheckObs } from "./observables/checkObs.component";
import { UserService } from "./services/user.service";
import { Logger } from "./services/logger.service";
import { BetterLogger } from "./services/betterLogger.service";

import { LearnDirectivesComponent } from "./directives/learnDirectives.component";
import { InputOutputComponent } from "./components/inputOutput.component";

import { AppStateService } from "./services/app-state.service";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent, children: [
    { path: "directives", component: LearnDirectivesComponent},
    { path: "inputOutput/:fontSizePx/:fontSizeEm", component: InputOutputComponent}
  ] },
  { path: "learnObservables", component: CheckObs },
  { path: "heroView", component: HeroViewComponent },
  { path: "crisisCenter", component: CrisisComponent },
  { path: "reactiveForms", component: ReactiveFormsComponent },
  { path: "jqueryEx", component: JqueryExamples },
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "**", component: AppComponent }
];

// const silentLogger = {
//   logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
//   log: function SilentLoggerFn() { console.log(this.logs)}
// };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroViewComponent,
    CrisisComponent,
    SizerComponent,
    AfterContentComponent,
    LearnStruDirective,
    AsynchronousPrgmg,
    gridComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    ChangeToImage,
    TestPipe,
    PurePipe,
    CheckObs,
    ReactiveFormsComponent,
    JqueryExamples,
    VisibilityDir,
    LearnDirectivesComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppStateService, AdService, UserService, { provide: Logger, useClass: BetterLogger }],
  bootstrap: [AppComponent],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent]
})
export class AppModule { }
