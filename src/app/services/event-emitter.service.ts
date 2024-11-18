import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }
  dataStream = new EventEmitter();
  dataStreamLoader = new EventEmitter();

  EmitSearchPhrase(data: any) {
    this.dataStream.emit(data);
  }
  
  loaderDisplay(data: string){
    this.dataStreamLoader.emit(data);
  }
}
