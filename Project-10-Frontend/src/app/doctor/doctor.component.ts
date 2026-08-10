import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html'
})
export class DoctorComponent extends BaseCtl {

constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.DOCTOR, locator, route);
  }





}
