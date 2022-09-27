import { NgModule } from '@angular/core';
import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
// calender modiles

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeAr  from '@angular/common/locales/ar';

registerLocaleData(localeAr);


@NgModule({
  declarations: [HomeComponent, ArticlesComponent ],
  imports: [WebsiteRoutingModule, SharedModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
})
export class WebsiteModule {}
