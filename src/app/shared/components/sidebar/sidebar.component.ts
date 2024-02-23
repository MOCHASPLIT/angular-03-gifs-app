import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public isSidebarBodyVis: boolean = false;

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  constructor(private gifsService: GifsService) {}

  searchTag(newTag: string): void {
    this.showHistory();
    this.gifsService.searchTag(newTag);
  }

  showHistory(): void {
    this.isSidebarBodyVis = !this.isSidebarBodyVis;
  }
}
