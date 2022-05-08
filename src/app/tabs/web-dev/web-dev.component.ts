import { Component,  } from '@angular/core';
import { aJourneyBegins } from './project-card/a-journey-begins';
import { ncNews } from './project-card/nc-news';
import { pictuarPuzzel } from './project-card/pictuar-puzzel';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.scss']
})
export class WebDevComponent {
  ncNews = ncNews
  pictuarPuzzel = pictuarPuzzel
  aJourneyBegins = aJourneyBegins
}
