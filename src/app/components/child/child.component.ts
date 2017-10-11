import {Component, Input} from "@angular/core";
import {Child} from "../../types/child";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() children: Child[];


}
