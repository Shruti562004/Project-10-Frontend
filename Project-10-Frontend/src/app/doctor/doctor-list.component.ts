import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html'
})
export class DoctorListComponent  extends BaseListCtl{
  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.DOCTOR, locator, route);
  }
}
