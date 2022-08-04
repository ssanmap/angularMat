import { Component, OnInit } from '@angular/core';
// import {Sort} from '@angular/material';
export interface Food {
   calories: number;
   carbs: number;
   fat: number;
   name: string;
   protein: number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource: Food[] = [
    {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
 ];
 displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs','protein'];
  constructor() { }

  ngOnInit(): void {
  }

}
