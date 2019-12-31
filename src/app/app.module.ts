import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './shared/material/material.module';
import { NgxMaskModule } from 'ngx-mask';
import { SocialShareService } from './shared/seo/social-share.service';
import { RouterHelperService } from './shared/seo/router-helper.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    NgxMaskModule.forRoot()
  ],
  providers: [RouterHelperService, SocialShareService],
  bootstrap: [AppComponent]
})
export class AppModule {}
