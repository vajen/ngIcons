import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SizeFilterPipe } from './common/pipe/size-filter.pipe';
import { SearchComponent } from './search/search.component';
import { NameFilterPipe } from './common/pipe/name-filter.pipe';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColoringDirective } from './common/directive/coloring.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SizeFilterPipe,
    SearchComponent,
    NameFilterPipe,
    ButtonsComponent,
    ColoringDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
