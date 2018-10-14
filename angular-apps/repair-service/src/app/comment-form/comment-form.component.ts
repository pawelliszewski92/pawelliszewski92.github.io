import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "comment-form",
  templateUrl: "./comment-form.component.html",
  styleUrls: ["./comment-form.component.css"]
})
export class CommentFormComponent {
  @Output("onSubmit")
  onSubmit = new EventEmitter();

  submit(values) {
    this.onSubmit.emit(values);
  }
}
