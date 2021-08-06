import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from './modules/header/header.module';
import { MainPageModule} from './modules/main-page/main-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './view/components/header/header.component';
//import { SilderComponent } from './silder/silder.component';
//import { ConsolesComponent } from './consoles/consoles.component';


@NgModule({
  declarations: [
    AppComponent,
    //SilderComponent,
    //ConsolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
