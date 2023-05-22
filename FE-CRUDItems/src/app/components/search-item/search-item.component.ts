import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
})
export class SearchItemComponent implements OnInit {
  id: number;
  item!: Item;
  loading: boolean = false;

  constructor(
    private _itemService: ItemService,
    private aRoute: ActivatedRoute
  ) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    this.loading = true;
    this._itemService.getItem(this.id).subscribe((data) => {
      this.item = data;
      this.loading = false;
    });
  }
}
