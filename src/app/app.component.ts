import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  value: number = 0;

  onMinusClick(event: MouseEvent) {
    this.value--;
  }

  onPlusClick(event: MouseEvent) {
    this.value++;
  }

  onInputChange(event: CustomEvent) {
    console.log(event);
  }
}
