import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// 首页
import { MuseumHomePage } from '../pages/museum-home/museum-home-page';
// 登录页
import { UserLoginPage } from '../pages/user-login/user-login-page';
// 注册页
import { UserRegistPage } from '../pages/user-regist/user-regist-page';

// 栏目导航
import { ColumnTabsPage } from '../pages/column-tabs/column-tabs-page';
// 内容列表页
import { ContentListPage } from '../pages/content-list/content-list-page';
// 内容详情页
import { ContentInfoPage } from '../pages/content-info/content-info-page';

// 我的艺术馆导航
import { MyartTabsPage } from '../pages/myart-tabs/myart-tabs-page';
// 消息列表
import { MessageListPage } from '../pages/message-list/message-list-page';
// 消息内容
import { MessageInfoPage } from '../pages/message-info/message-info-page';
// 消息推送
import { MessagePushPage } from '../pages/message-push/message-push-page';
// 版本升级
import { VersionUpdatePage } from '../pages/version-update/version-update-page';
import {RecommandListPage} from "../pages/recommand-list/recommand-list-page";

@NgModule({
  declarations: [
    MyApp,
    MuseumHomePage,
    UserLoginPage,
    UserRegistPage,
    ColumnTabsPage,
    ContentListPage,
    ContentInfoPage,
    MyartTabsPage,
    MessageListPage,
    MessageInfoPage,
    MessagePushPage,
    VersionUpdatePage,
    RecommandListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MuseumHomePage,
    UserLoginPage,
    UserRegistPage,
    ColumnTabsPage,
    ContentListPage,
    ContentInfoPage,
    MyartTabsPage,
    MessageListPage,
    MessageInfoPage,
    MessagePushPage,
    VersionUpdatePage,
    RecommandListPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
