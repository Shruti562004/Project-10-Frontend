import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-myProfile',
  templateUrl: './my-profile.component.html',
})
export class MyprofileComponent extends BaseCtl {
  constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute,
  ) {
    super(locator.endpoints.USER, locator, route);
  }

  // override display(): void {
  //   var _self = this;
  //   _self.form.data.id = localStorage.getItem('userId');
  //   this.serviceLocator.httpService.get(
  //     _self.api.get + '/' + _self.form.data.id,
  //     function (res: any) {
  //       if (res.success) {
  //         _self.form.data = res.result.data;
  //       } else {
  //         _self.form.error = true;
  //         _self.form.message = res.result.message;
  //       }
  //     },
  //   );
  // }

  myProfile() {
    var _self = this;
    this.serviceLocator.httpService.post(
      'http://localhost:8080/User/myProfile',
      this.form.data,
      function (res: any) {
        _self.form.message = '';
        _self.form.inputerror = {};
        if (res.success) {
          _self.form.message = res.result.message;
          _self.form.data.id = res.result.data;
        } else {
          _self.form.error = true;
          if (res.result.inputerror) {
            _self.form.inputerror = res.result.inputerror;
          }
          _self.form.message = res.result.message;
        }
      },
    );
  }
}
