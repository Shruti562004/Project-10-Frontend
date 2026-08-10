import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent extends BaseListCtl{
constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.ORDER, locator, route);
  }
}
