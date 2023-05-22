import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css'],
})
export class ManageItemComponent {
  loading: boolean = false;
  colorControl = new FormControl('accent' as ThemePalette);

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  addItem() {
    // Objecto with form
    const item: Item = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
    };
    console.log(item);
  }
}
