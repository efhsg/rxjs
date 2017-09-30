import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-ul',
  templateUrl: './ul.component.html',
  styleUrls: ['./ul.component.css']
})
export class UlComponent implements OnInit {

  protected items: Observable<[number]>;

  constructor() {
  }

  ngOnInit() {

    const items = [];
    for (let i = 0; i < this.getRandomIntInclusive(1, 5); i++) {
      items.push(this.getRandomIntInclusive(0, 100000));
    }

    this.items = Observable.of(items);
  }

  private getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
