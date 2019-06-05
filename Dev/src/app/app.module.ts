import { TranslationService } from './services/translation.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './views/main/main.component';
import { TopicsComponent } from './views/topics/topics.component';
import { DoctagsComponent } from './views/doctags/doctags.component';

import { TopicComponent } from './views/topic/topic.component';
import { LogoComponent } from './views/logo/logo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
        ExamplesDialogComponent,
        TopicDialogComponent,
        DoctagDialogComponent,
        DoctagVersionsDialogComponent,
        DeleteTopicDialogComponent,
        DeleteExampleDialogComponent} from './dialogs';

import { DeletedComponent,
         AddedComponent } from './snackBars';
import { FormatDatePipe } from './pipes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatSnackBarModule
} from '@angular/material';


import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollEventModule } from 'ngx-scroll-event';
import { FooterComponent } from './views/footer/footer.component';
import { EditExampleComponent } from './dialogs/edit-example/edit-example.component';
import { EditExampleDialogComponent } from './dialogs/edit-example-dialog/edit-example-dialog.component';
import { EditedComponent } from './snackBars/edited/edited.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopicsComponent,
    DoctagsComponent,
    DoctagDialogComponent,
    TopicDialogComponent,
    TopicComponent,
    LogoComponent,
    ExamplesDialogComponent,
    DoctagVersionsDialogComponent,
    DeleteTopicDialogComponent,
    DeleteExampleDialogComponent,
    DeletedComponent,
    AddedComponent,
    FormatDatePipe,
    FooterComponent,
    EditExampleComponent,
    EditExampleDialogComponent,
    EditedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    ScrollToModule.forRoot(),
    ScrollEventModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent],
  entryComponents: [DoctagDialogComponent,
                    TopicDialogComponent,
                    ExamplesDialogComponent,
                    DoctagVersionsDialogComponent,
                    DeleteTopicDialogComponent,
                    DeleteExampleDialogComponent,
                    DeletedComponent,
                    AddedComponent]
})
export class AppModule { }
