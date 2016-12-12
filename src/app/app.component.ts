import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen,Network } from 'ionic-native';

import { ColumnTabsPage } from '../pages/column-tabs/column-tabs-page';
import { UserRegistPage } from '../pages/user-regist/user-regist-page';

import { StorageService } from '../services/basic/storage-service';

@Component({
  templateUrl: 'app.html',
  providers: [StorageService]
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage = ColumnTabsPage;
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, public menu: MenuController, private storageService: StorageService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // watch network for a disconnect
      let disconnectSubscription = Network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
        Splashscreen.show();
      });

      // watch network for a connection
      let connectSubscription = Network.onConnect().subscribe(() => {
        Splashscreen.hide();
        console.log('network connected!');
        // We just got a connection but we need to wait briefly
        // before we determine the connection type.  Might need to wait 
        // prior to doing any api requests as well.
        setTimeout(() => {
          if (Network.connection === 'wifi') {
            console.log('we got a wifi connection, woohoo!');
          }
        }, 120000);
      });
    });

    // set our app's pages
    this.pages = [
      { title: '注册页', component: UserRegistPage },
      { title: '回首页', component: ColumnTabsPage },
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  quit() {
    this.storageService.remove('hengtong-id');
    this.nav.setRoot(ColumnTabsPage);
  }

}
