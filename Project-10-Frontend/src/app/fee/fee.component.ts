import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html'
})
export class FeeComponent extends BaseCtl {
 constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.FEE, locator, route);
  }
}
