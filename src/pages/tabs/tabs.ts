import { Component } from '@angular/core';

import { GalleryPage } from '../gallery/gallery';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ContactPage;
  tab2Root = HomePage;
  tab3Root = GalleryPage;

  constructor() {

  }
}
