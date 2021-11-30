import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Inject, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { TabCollectionComponent } from '../tab-collection/tab-collection.component';
import { TAB_CONTENT } from '../tab-entity/tab-entity.directive';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'tab',
  templateUrl: './tab-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabItemComponent implements OnInit, OnDestroy {

  @ViewChild('title', { static: true })
  private titleRef?: ElementRef;

  @ContentChild(TAB_CONTENT, { read: TemplateRef, static: true })
  public contentTemplate?: TemplateRef<any>;

  public get title(): HTMLDivElement {
    return this.titleRef?.nativeElement;
  }

  public active = this.tabsService.pipe(map(value => value == this.id));

  public id = this.tabsService.nextID;

  constructor(
    public tabsService: TabsService,
    @Inject(TabCollectionComponent) private collection: TabCollectionComponent,
  ) { }

  public ngOnInit(): void {
    this.collection.add(this);
  }

  public ngOnDestroy(): void {
    this.collection.remove(this);
  }

}
