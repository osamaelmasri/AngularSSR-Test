import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AvatarModule, ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { NgxEditorModule } from 'ngx-editor';
import { AccordionModule, SharedModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from '@coreui/angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from '../../common/material.module';
import { SpinnerModule } from '@coreui/angular';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    NgxEditorModule,
    BadgeModule,
    AccordionModule,
    SharedModule,
    AvatarModule,
    [SweetAlert2Module.forRoot()],
    MaterialModule,
    SpinnerModule,
    ImageCropperModule,
    NgbModule,
    NgbModalModule
  ]
})
export class PagesModule {
}
