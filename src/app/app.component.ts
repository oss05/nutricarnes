import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';


declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nutricarnes';
  isCollapsed = true;
  

  constructor(router: Router, public ngxSmartModalService: NgxSmartModalService) {

    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-158795726-1', {
        'page_path': event.urlAfterRedirects
      });
    });
  }



  
}
