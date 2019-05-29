import { Injectable } from '@angular/core';
import * as uuidv4 from 'uuidv4';

@Injectable({
  providedIn: 'root'
})
export class UuidService {
  constructor() { }
  generate(): string {
    return uuidv4();
  }
}
