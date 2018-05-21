import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatDatepickerModule, MatNativeDateModule,
} from '@angular/material';
import {AmazingTimePickerModule} from 'amazing-time-picker';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    AmazingTimePickerModule,
    MatDatepickerModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  exports: [
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    AmazingTimePickerModule,
    MatDatepickerModule,
    MatDatepickerModule, MatNativeDateModule
  ]
})
export class MaterialsModule {
}
