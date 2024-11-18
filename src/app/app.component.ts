import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './services/event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Users-List-App';
  loader_display: string = 'none';
  constructor(private eventEmitterService:EventEmitterService){}

  ngOnInit(): void {
    this.eventEmitterService.dataStreamLoader.subscribe(data => {
      this.loader_display = data;
    });
  }
}
