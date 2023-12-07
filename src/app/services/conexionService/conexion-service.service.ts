import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public app;
  public db;

  constructor() {
    this.app = initializeApp({
      apiKey: 'AIzaSyBKSaXGdgWFHLGonumNJLyhe8ixBAEP_-w',
      authDomain: 'aracelinails-5fe42.firebaseapp.com',
      projectId: 'aracelinails-5fe42',
      storageBucket: 'aracelinails-5fe42.appspot.com',
      messagingSenderId: '702459142011',
      appId: '1:702459142011:web:0f46b05872e82b987927de',
    });
    this.db = getFirestore(this.app);
  }
}
