import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { IntangibleCulturalHeritagePage } from '../intangible-cultural-heritage/intangible-cultural-heritage';
import { CulturalForumPage } from '../cultural-forum/cultural-forum';
import { ThematicActivityPage } from '../thematic-activity/thematic-activity';
import { JournalArticlesPage } from '../journal-articles/journal-articles';
import { OthersPage } from '../others/others';
import { MyArtMuseumPage } from '../my-art-museum/my-art-museum';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  // tab1Root: any = HomePage;
  // tab2Root: any = AboutPage;
  // tab3Root: any = ContactPage;

  tab01Root: any = IntangibleCulturalHeritagePage;
  tab02Root: any = CulturalForumPage;
  tab03Root: any = ThematicActivityPage;
  tab04Root: any = JournalArticlesPage;
  tab05Root: any = OthersPage;
  tab06Root: any = MyArtMuseumPage;
  constructor() {

  }
}
