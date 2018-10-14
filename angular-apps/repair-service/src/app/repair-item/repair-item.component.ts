import { Component, Input } from "@angular/core";

@Component({
  selector: "repair-item",
  templateUrl: "./repair-item.component.html",
  styleUrls: ["./repair-item.component.css"]
})
export class RepairItemComponent {
  @Input("repair-item")
  item;

  onToggle() {
    this.item.isWorking = !this.item.isWorking;
    // Call server
  }

  handleSubmit(values) {
    let newComment = {
      content: values.message,
      user: values.username,
      date: new Date()
    };
    this.item.comments = [newComment, ...this.item.comments];
    // Call server
  }
}
