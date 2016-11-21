import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mass: string[];
  title = 'Данные есть';
  constructor () {
    this.mass = ['one', 'two', 'tree'];
  }
  
  addNew(y: string) {
    
    // добавляем
    this.mass.push(y);
    //очистка
    
    
  }


}
