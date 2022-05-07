import { Component,  } from '@angular/core';
import { ncNews } from './project-card/nc-news';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.scss']
})
export class WebDevComponent {
  ncNews = ncNews
}
