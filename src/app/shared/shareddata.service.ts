import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class SharedDataService {
postData =  new EventEmitter();
}
