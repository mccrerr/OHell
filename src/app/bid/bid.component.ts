import { IRound } from './../interfaces';
import { ScoreService } from './../score.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})

export class BidComponent implements OnInit {

  public inputForm = new FormGroup({});
  public bid: any = null;
  private score: any = null;
  private points: any = null;
  private game: any = null;

  constructor(private fb: FormBuilder, private scoreService: ScoreService) { }
  @Input() round!: IRound;

  ngOnInit(): void {
    this.createForm();
    this.formResponse();
  }

  createForm(): void {
    this.inputForm = this.fb.group({
      bid: this.round.bid,
      score: this.round.score,
      points: this.round.points,
      game: this.round.accumulated
    });
  }


  formResponse(): void {
    this.inputForm.get('bid')?.valueChanges
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .subscribe(val => {
        this.bid = val;
        this.round.bid = val;
      });

    this.inputForm.get('score')?.valueChanges
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .subscribe(val => {
        this.score = val;
        this.round.score = val;
        this.scoreService.calculateScore(this.round);
        console.log('53', this.round);

        if (val || val === 0) {
          this.inputForm.patchValue({
            points: this.round.points,
            game: this.round.accumulated
          });
        }
      });
  }

}

