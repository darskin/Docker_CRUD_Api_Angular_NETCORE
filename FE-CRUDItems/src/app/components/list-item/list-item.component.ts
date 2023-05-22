import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource = new MatTableDataSource<Item>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _snackBar: MatSnackBar,
    private _itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  ngAfterViewInit() {
    if (this.dataSource.data.length > 0) {
      this.dataSource.paginator = this.paginator;
    }
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getItems() {
    this.loading = true;
    this._itemService.getItems().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
      },
      (error) => {
        this.loading = false;
        alert('An error occurred');
      }
    );
  }

  deleteItem() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('The item was successfully deleted', '', {
        duration: 3000,
        horizontalPosition: 'right',
      });
    }, 3000);
  }
}
