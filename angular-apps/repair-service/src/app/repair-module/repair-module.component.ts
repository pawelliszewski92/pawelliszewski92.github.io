import { Component, OnInit } from "@angular/core";
import { RepairModuleService } from "./../repair-module.service";

@Component({
  selector: "repair-module",
  templateUrl: "./repair-module.component.html",
  styleUrls: ["./repair-module.component.css"]
})
export class RepairModuleComponent {
  items;
  categories;
  selectedCategory = { name: "All Categories", id: 0 };
  sortedItems;

  constructor(service: RepairModuleService) {
    this.items = service.getItems();
    this.categories = [
      { name: "All Categories", id: 0 },
      ...service.getCategories()
    ];
    this.sortedItems = this.getSortedItems();
  }

  getSortedItems() {
    return this.selectedCategory.id !== 0
      ? this.items.filter(i => i.category.id === this.selectedCategory.id)
      : this.items;
  }

  onSort(item) {
    this.selectedCategory = item;
    this.sortedItems = this.getSortedItems();
  }
}
