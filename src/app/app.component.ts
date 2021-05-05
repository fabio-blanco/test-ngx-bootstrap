import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular + Bootstrap test with ngx-bootstrap';

  // modal
  modalRef: BsModalRef;

  // Datepicker
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();

  // Timepicker
  myTime: Date = new Date();


  constructor(/* modal */ private modalService: BsModalService) {
    // Datepicker
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  // modal
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
