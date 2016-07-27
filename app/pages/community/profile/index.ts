import {Component} from "@angular/core";
import "rxjs/add/operator/map";
import {UserData} from "../../../providers/user-data";
import {Events, NavController, ToastController} from "ionic-angular/index";

@Component({
  templateUrl: "build/pages/community/profile/index.html",
})

export class LoginPage {
  private loginInfo:{username?:string, password?:string} = {};
  private submitted = false;
  private isLogining = false;
  private hasLogin = false;

  constructor(public nav:NavController, private userData:UserData, private events:Events,
              private toastCtrl:ToastController) {
    this.events = events;
    this.init();
    this.eventHandle();
  }

  doLogin(form) {
    this.submitted = true;
    this.isLogining = true;

    if (form.valid) {
      this.userData.login(this.loginInfo);
    }
  }

  signup(signupCreds) {

  }

  logout() {
    this.userData.logout();
    this.nav.pop();
  }

  private eventHandle() {
    let self = this;
    this.events.subscribe("user:login", (userEventData) => {
      self.isLogining = false;
      let toast = self.toastCtrl.create({
        message: "欢迎回来," + userEventData,
        duration: 2000,
        position: "top"
      });
      toast.present();

      self.nav.pop();
    });
  }

  private init() {
    let self = this;
    this.userData.hasLoggedIn().then(
      result => {
        self.hasLogin = result;
      }
    );
  }
}
