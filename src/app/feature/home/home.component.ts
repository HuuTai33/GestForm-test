import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  givenNumbers: any = '';
  arrayNumbers: number[] = [];
  convertArray: any[] = [];

  convertList() {
    this.arrayNumbers = this.givenNumbers.split(',').map(Number);
    this.convertArray = [];
    this.arrayNumbers.forEach(number => {
      this.convertArray.push(this.convertNumber(number));
    })
  }

  convertNumber(number: number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'Gestform';
    } else if (number % 3 === 0) {
      return 'Geste';
    } else if (number % 5 === 0) {
      return 'Forme';
    }
    return number;
  }

}
