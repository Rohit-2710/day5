import { Injectable } from '@angular/core';
import {book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  getAllBooks():book[] { // returns an Array of  types
    	    return [{"id": 1, "name": "HTML 5"},
    	            {"id": 2, "name": "CSS 3"},
  	              {"id": 3, "name": "Java Script"},
                  {"id": 4, "name": "Ajax Programming"}];
    	  }
    
    
}
