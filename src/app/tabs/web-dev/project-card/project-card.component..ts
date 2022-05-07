import { Component, Input } from '@angular/core';
import { CardDetails } from './card-details';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() content: CardDetails;
}
