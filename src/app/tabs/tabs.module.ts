import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabCollectionComponent } from './tab-collection/tab-collection.component';
import { TabEntityComponent } from './tab-entity/tab-entity.component';
import { TabEntityDirective } from './tab-entity/tab-entity.directive';
import { TabItemComponent } from './tab-item/tab-item.component';

@NgModule({
  declarations: [
    TabCollectionComponent,
    TabItemComponent,
    TabEntityComponent,
    TabEntityDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TabCollectionComponent,
    TabItemComponent,
    TabEntityComponent,
    TabEntityDirective,
  ],
})
export class TabsModule { }
