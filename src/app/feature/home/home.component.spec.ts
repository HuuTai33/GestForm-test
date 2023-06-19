import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {FormsModule} from "@angular/forms";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let inputElement: HTMLInputElement;
  let buttonElement: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should modified givenNumbers with ngModel', () => {
    const initValue = component.givenNumbers;
    const newValue = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15';

    expect(initValue).toEqual('');

    inputElement = fixture.nativeElement.querySelector('#input-given-numbers');
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.givenNumbers).toEqual(newValue);
  });

  it('should disabled button if input is empty', () => {
    buttonElement = fixture.nativeElement.querySelector('#button-convert-list');

    expect(buttonElement.disabled).toBeTruthy();
  });

  it('should enabled button if input is not empty', () => {
    const initValue = component.givenNumbers;
    const newValue = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15';

    expect(initValue).toEqual('');

    inputElement = fixture.nativeElement.querySelector('#input-given-numbers');
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    buttonElement = fixture.nativeElement.querySelector('#button-convert-list');

    expect(buttonElement.disabled).toBeFalse();
  });

  it('convertNumber should return the number if the number is not divisible by 3 and 5', () => {
    const result = component.convertNumber(1);
    expect(result).toBe(1);
  });

  it('convertNumber should return "Geste" if the number is divisible by 3', () => {
    const result = component.convertNumber(6);
    expect(result).toBe("Geste");
  });

  it('convertNumber should return "Forme" if the number is divisible by 5', () => {
    const result = component.convertNumber(10);
    expect(result).toBe("Forme");
  });

  it('convertNumber should return "Gestform" if the number is divisible by 3 and 5', () => {
    const result = component.convertNumber(15);
    expect(result).toBe("Gestform");
  });

  it('convertList should convert givenNumbers in array of numbers', () => {
    component.givenNumbers = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15';
    component.convertList();
    const result = component.arrayNumbers;
    const expectedArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
    expect(result).toEqual(expectedArray);
  });

  it('convertList should convert givenNumbers in array of numbers and strings', () => {
    component.givenNumbers = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15';
    component.convertList();
    const result = component.convertArray;
    const expectedArray =[1,2,'Geste',4,'Forme','Geste',7,8,'Geste','Forme','Gestform'];
    expect(result).toEqual(expectedArray);
  });
});
