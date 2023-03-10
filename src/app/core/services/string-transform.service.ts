import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringTransformService {
  constructor() {}

  removeAccents(textToTransform: string): string {
    return textToTransform.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  removeSpecialCharacters(textToTransform: string): string {
    return textToTransform.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s]/g, '');
  }

  removeAdditionalSpaces(textToTransform: string): string {
    return textToTransform.replace(/\s\s+/g, ' ');
  }

  capitalizeFirst(textToTransform: string): string {
    console.log("textToTransform");
    
     return textToTransform.substr(0,1).toUpperCase() + textToTransform.substr(1);
  }
}
