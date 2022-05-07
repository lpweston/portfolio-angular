import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry  } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import { WebDevComponent } from './tabs/web-dev/web-dev.component';
import { MakerProjectsComponent } from './tabs/maker-projects/maker-projects.component';
import { AboutMeComponent } from './tabs/about-me/about-me.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectCardComponent } from './tabs/web-dev/project-card/project-card.component.';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    WebDevComponent,
    MakerProjectsComponent,
    AboutMeComponent,
    NavBarComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('insta', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram.svg"));
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin.svg"));
    this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github.svg"));
  }

 }
