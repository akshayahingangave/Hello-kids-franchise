import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SlideComponent } from './slide/slide.component';
import { AboutComponent } from './about/about.component';
import { SectionComponent } from './section/section.component';
import { ArticleComponent } from './article/article.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { FranchisespeaksComponent } from './franchisespeaks/franchisespeaks.component';
import { BenifitsComponent } from './benifits/benifits.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideComponent,
    AboutComponent,
    SectionComponent,
    ArticleComponent,
    FranchiseComponent,
    FranchisespeaksComponent,
    BenifitsComponent,
    RequirementsComponent,
    AwardsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
