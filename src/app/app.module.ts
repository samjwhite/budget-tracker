import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntryInputComponent } from './entry-input/entry-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { CreateEntryPage } from './create-entry/create-entry.page';
import { EntriesListComponent } from './entries-list/entries-list.component';

@NgModule({
  declarations: [				
    AppComponent,
      EntryInputComponent,
      MonthSelectorComponent,
      CreateEntryPage,
      EntriesListComponent
   ],
  imports: [
    BrowserModule,
    NgbModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
