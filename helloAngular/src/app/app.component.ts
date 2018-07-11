import { RandomWordService } from './services/random-word.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomWordService],
})
export class AppComponent {
  title = 'Random Words!';
  // randomWords = ['hello', 'world'];
  randomWords = [];

  constructor(private randomWordsService: RandomWordService) {}

  getNewRandomWord() {
  this.randomWordsService.getNew().subscribe((word) => {
    this.randomWords.push(word);
  });
   }
}
