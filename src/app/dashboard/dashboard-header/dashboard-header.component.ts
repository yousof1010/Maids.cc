import { Component } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent {
  constructor(private eventEmitterService : EventEmitterService){}
  searchPhrase : string = ""
  Search(){
    this.eventEmitterService.EmitSearchPhrase(this.searchPhrase)
  }
}
