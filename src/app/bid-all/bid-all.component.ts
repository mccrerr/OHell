import { ScoreService } from './../score.service';
import { Component, OnInit } from '@angular/core';
import { IRound } from '../interfaces';

@Component({
  selector: 'app-bid-all',
  templateUrl: './bid-all.component.html',
  styleUrls: ['./bid-all.component.css']
})
export class BidAllComponent implements OnInit {

  public roundNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  public curPlayer = '';
  public playerRounds: IRound[] = [];
  constructor(public scoreService: ScoreService) { }

  ngOnInit(): void {
  }

  playerChg(event: any): void {
    this.curPlayer = event.value;
    this.scoreService.rounds = this.playerRounds = this.scoreService.rounds.filter(filt =>
      filt.game === '1' &&
      filt.playerName === this.curPlayer);
  }

}
