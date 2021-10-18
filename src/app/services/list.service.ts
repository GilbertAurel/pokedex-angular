import { ElementRef, Injectable } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  prevBtnClicked(btn: ElementRef, list: ElementRef) {
    return fromEvent(btn.nativeElement, 'click')
      .pipe(throttle(() => interval(300)))
      .subscribe(
        () =>
          (list.nativeElement.scrollLeft = list.nativeElement.scrollLeft - 300)
      );
  }

  nextBtnClicked(btn: ElementRef, list: ElementRef) {
    return fromEvent(btn.nativeElement, 'click')
      .pipe(throttle(() => interval(300)))
      .subscribe(
        () =>
          (list.nativeElement.scrollLeft = list.nativeElement.scrollLeft + 300)
      );
  }
}
