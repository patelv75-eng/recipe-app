import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  @Input() recipe!: RecipeModel;
}
