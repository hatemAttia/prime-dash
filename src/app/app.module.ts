import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatComponent } from './modules/stat/stat.component';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';
import {ProgressBarModule} from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ProductService } from './shared/services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PredctionComponent } from './modules/predction/predction.component';
import { StepsModule } from 'primeng/steps';

@NgModule({
  declarations: [
    AppComponent,
    StatComponent,
    PredctionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
		ButtonModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    InputNumberModule,
    FormsModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
	
		ToastModule,
   
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
   
    RadioButtonModule,
    ConfirmDialogModule,
    InputTextareaModule,

    InputTextModule,
    RadioButtonModule,
    FormsModule,
    DropdownModule,
    StepsModule,
    ReactiveFormsModule
   
  ],
  providers: [ProductService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
