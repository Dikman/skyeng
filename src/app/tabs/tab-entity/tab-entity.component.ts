import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tab-title, tab-content',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabEntityComponent { }
