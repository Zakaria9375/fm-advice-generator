import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;
  id: number = 117;
  loading: boolean = false;
  advice: string = `It is easy to sit up and take notice, what's difficult is getting up and taking action.`;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  playSound() {
    this.audioPlayer.nativeElement.play();
  }
  changeAdvice() {
    this.playSound();
    this.id = Math.floor(Math.random() * 224) + 1;
    this.loading = true;
    const url = `https://api.adviceslip.com/advice/${this.id}`;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        this.advice = data.slip.advice;
      },
      error: (error) => {
        console.log(`Failde to fetch advice at id ${this.id}:`, error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
