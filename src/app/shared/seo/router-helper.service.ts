import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SocialShareService } from './social-share.service';

@Injectable({
  providedIn: 'root'
})
export class RouterHelperService {
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly seoSocialShareService: SocialShareService
  ) {
    this.setupRouting();
  }

  private setupRouting() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary')
      )
      .subscribe((route: ActivatedRoute) => {
        const seo = route.snapshot.data.seo;
        // set your meta tags & title here
        this.seoSocialShareService.setData(seo);
      });
  }
}
