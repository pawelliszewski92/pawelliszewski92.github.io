import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent {
  addingNew: boolean = false;

  @Input("comments")
  comments;

  @Output("handleSubmit")
  handleSubmit = new EventEmitter();

  onAddNew() {
    this.addingNew = true;
  }

  onSubmit(values) {
    this.addingNew = false;
    this.handleSubmit.emit(values);
  }
}
