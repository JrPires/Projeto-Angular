import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { CorDirective } from './cor.directive';
import { MultiplicarPipe } from './multiplicar.pipe';
import { ParesPipe } from './pares.pipe';
import { FiltroPipe } from './filtro.pipe';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CorDirective, MultiplicarPipe, ParesPipe, FiltroPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    CorDirective,
    MultiplicarPipe,
    ParesPipe,
    FiltroPipe,
    
  ]
})
export class SharedModule { }
