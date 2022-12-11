import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { EntryInputComponent } from './components/entry-input/entry-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonthSelectorComponent } from './components/month-selector/month-selector.component';
import { CreateEntryPage } from './pages/create-entry/create-entry.page';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SumPipe } from './pipes/sum.pipe';

@NgModule({
  declarations: [				
    AppComponent,
      EntryInputComponent,
      MonthSelectorComponent,
      CreateEntryPage,
      CategoriesListComponent,
      SumPipe
   ],
  imports: [
    BrowserModule,
    NgbModule, 
    FormsModule,
    HttpClientModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
