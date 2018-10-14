import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "list-group",
  templateUrl: "./list-group.component.html",
  styleUrls: ["./list-group.component.css"]
})
export class ListGroupComponent {
  @Input("list-items")
  items;

  @Input("selected")
  selected;

  @Output("sort")
  sort = new EventEmitter();

  onClick(item) {
    this.sort.emit(item);
  }
}
