import { Directive, InjectionToken, TemplateRef } from '@angular/core';

export const TAB_CONTENT = new InjectionToken<TabEntityDirective>('TabContent');

@Directive({
  selector: '[tab-content]',
  providers: [{ provide: TAB_CONTENT, useExisting: TabEntityDirective }],
})
export class TabEntityDirective {

  constructor(
    public template: TemplateRef<any>,
  ) { }

}
