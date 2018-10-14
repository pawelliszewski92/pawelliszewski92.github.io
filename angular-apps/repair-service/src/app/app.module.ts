import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RepairModuleComponent } from "./repair-module/repair-module.component";
import { RepairModuleService } from "./repair-module.service";
import { RepairItemComponent } from "./repair-item/repair-item.component";
import { ListGroupComponent } from "./list-group/list-group.component";
import { ZippyComponent } from "./zippy/zippy.component";
import { CommentsComponent } from "./comments/comments.component";
import { CommentFormComponent } from "./comment-form/comment-form.component";

@NgModule({
  declarations: [
    AppComponent,
    RepairModuleComponent,
    RepairItemComponent,
    ListGroupComponent,
    ZippyComponent,
    CommentsComponent,
    CommentFormComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [RepairModuleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
