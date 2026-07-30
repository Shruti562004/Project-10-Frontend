import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-light-list',
  templateUrl: './light-list.component.html'

})
export class LightListComponent  extends BaseListCtl {
 constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.LIGHT, locator, route);
  }
}
