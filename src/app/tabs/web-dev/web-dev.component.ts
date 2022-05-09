import { Component,  } from '@angular/core';
import { aJourneyBegins } from './project-card/a-journey-begins';
import { ncNews } from './project-card/nc-news';
import { pictuarPuzzle } from './project-card/pictuar-puzzle';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.scss']
})
export class WebDevComponent {
  ncNews = ncNews
  pictuarPuzzle = pictuarPuzzle
  aJourneyBegins = aJourneyBegins
}
