import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TabsService extends Subject<number> {

  private counter = 0;

  public get nextID(): number {
    return ++this.counter;
  }

}
