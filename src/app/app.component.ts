import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { RegistPage } from '../pages/regist/regist';
import {StorageService} from "../services/basic/storage-service";

@Component({
  templateUrl: 'app.html',
  providers: [StorageService]
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, public menu: MenuController,private storageService: StorageService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // set our app's pages
    this.pages = [
      { title: '注册页', component: RegistPage },
      { title: '艺术馆页面', component: TabsPage },
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  quit() {
    this.storageService.remove("hengtong-id");
    this.nav.setRoot(TabsPage);
  }

}
