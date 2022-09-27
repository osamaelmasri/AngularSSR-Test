import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


const MaterialComponents = [
  CommonModule,
  FormsModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSlideToggleModule, 
  MatNativeDateModule, 
  MatDatepickerModule
];

@NgModule({
  declarations: [],
  imports: [...MaterialComponents],
  exports: [...MaterialComponents]
  
})
export class MaterialModule { }
