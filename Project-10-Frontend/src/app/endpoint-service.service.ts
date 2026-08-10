import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EndpointServiceService {
  constructor() {}

  public SERVER_URL = 'http://localhost:8080';
  public USER = this.SERVER_URL + '/User';
  public ROLE = this.SERVER_URL + '/Role';
  public COLLEGE = this.SERVER_URL + '/College';
  public MARKSHEET = this.SERVER_URL + '/Marksheet';
  public STUDENT = this.SERVER_URL + '/Student';
  public SUBJECT = this.SERVER_URL + '/Subject';
  public COURSE = this.SERVER_URL + '/Course';
  public TIMETABLE = this.SERVER_URL + '/TimeTable';
  public FACULTY = this.SERVER_URL + '/Faculty';
  public COURIER = this.SERVER_URL + '/Courier';
  public VOICE = this.SERVER_URL + '/Voice';
  public VEHICLE = this.SERVER_URL + '/Vehicle';
  public WATER = this.SERVER_URL + '/Water';
  public WEATHER = this.SERVER_URL + '/Weather';
    public DRONE = this.SERVER_URL + '/Drone';
     public LIGHT = this.SERVER_URL + '/Light';
       public FEE = this.SERVER_URL + '/Fee';
   public ORDER = this.SERVER_URL + '/Order';
    public DOCTOR = this.SERVER_URL + '/Doctor';
}
