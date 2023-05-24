import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css'],
})
export class ManageItemComponent implements OnInit {
  loading: boolean = false;
  colorControl = new FormControl('accent' as ThemePalette);

  form: FormGroup;
  id: number;
  operation: string = 'Add';
  icon: string = 'add_circle';
  nameError: string = '';
  descriptionError: string = '';
  priceError: string = '';

  constructor(
    private fb: FormBuilder,
    private _itemService: ItemService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operation = 'Edit';
      this.icon = 'done';
      this.getItem(this.id);
    }
  }

  getItem(id: number) {
    this.loading = true;
    this._itemService.getItem(id).subscribe((data) => {
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
      });
      this.loading = false;
    });
  }

  manageItem() {
    // Objecto with form
    const item: Item = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
    };
    if (this.id != 0) {
      item.id = this.id;
      this.editItem(this.id, item);
    } else {
      this.addItem(item);
    }
  }

  editItem(id: number, item: Item) {
    this.loading = true;
    this._itemService.updateItem(id, item).subscribe(() => {
      this.loading = false;
      this.successMessage('The item was successfully update');
      this.router.navigate(['/listItems']);
    });
  }

  addItem(item: Item) {
    // Send object to Back-end

    this._itemService.addItem(item).subscribe(
      (data) => {
        this.successMessage('The item was added successfully');
        this.router.navigate(['/listItems']);
      },
      (error) => {
        const errors = error.error.errors;
        if (errors.Name) {
          this.nameError = errors.Name[0];
        } else {
          this.nameError = '';
        }
        if (errors.Description) {
          this.descriptionError = errors.Description[0];
        } else {
          this.descriptionError = '';
        }
        if (errors.Price) {
          this.priceError = errors.Price[0];
        } else {
          this.priceError = '';
        }
      }
    );
  }
  successMessage(text: string) {
    this._snackBar.open(text, '', {
      duration: 3000,
      horizontalPosition: 'right',
    });
  }
}
