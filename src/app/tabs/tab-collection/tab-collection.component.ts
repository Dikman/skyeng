import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { asyncScheduler } from 'rxjs';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { TabsService } from '../tabs.service';

class TabCollection {
  [id: number]: TabItemComponent;
}

@Component({
  selector: 'tabs',
  templateUrl: './tab-collection.component.html',
  styleUrls: ['./tab-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TabsService],
})
export class TabCollectionComponent {

  @ViewChild('titles', { static: true })
  private titles?: ElementRef;

  private collection = new TabCollection();

  private active = 0;

  constructor(
    private tabsService: TabsService,
    private renderer: Renderer2,
  ) { }

  public add(tab: TabItemComponent): void {
    this.collection[tab.id] = tab;
    this.renderer.appendChild(this.titles?.nativeElement, tab.title);
    this.renderer.listen(tab.title, 'click', () => this.tabsService.next(this.active = tab.id));
    this.invalidateSelection();
  }

  public remove(tab: TabItemComponent): void {
    this.renderer.removeChild(this.titles?.nativeElement, tab.title);
    delete this.collection[tab.id];
    this.invalidateSelection();
  }

  private invalidateSelection(): void {
    asyncScheduler.schedule(() => {
      const tabs = Object.values(this.collection);

      if (tabs.length > 0 && !this.collection[this.active]) {
        this.tabsService.next(this.active = tabs[0].id);
      }
    });
  }

}
