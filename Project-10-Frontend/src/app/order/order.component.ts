import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent extends BaseCtl {
constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute,
  ) {
    super(locator.endpoints.ORDER, locator, route);
  }
}
