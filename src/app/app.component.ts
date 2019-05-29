import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';

@Component({
  selector: 'ndv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    store.select(state => {
      console.log(state);
      return state.metaMap;
    }).subscribe(data => {
      console.log(data);
    });
  }
}
