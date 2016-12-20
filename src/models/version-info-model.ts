import { AppVersion,Device } from 'ionic-native';

export class VersionInfoModel {

  currentVersion: string;
  osStr: string;
  deviceName: string;

  constructor() {
    this.currentVersion = "1.0";
    this.osStr = "windows";
  }

  initVersion(){
    AppVersion.getVersionNumber().then(version => this.setVersion(version), error => function () {
      console.log("get version error  "+error);
    });

    this.osStr = Device.device.platform;
  }

  setVersion(version){
    this.currentVersion = version.toString();
    console.log(version.toString());
  }

  toString(){
    return this.osStr+this.currentVersion;
  }

}
