import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { IPlayer, IRound } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private $rounds: IRound[] = [];


  public get rounds(): IRound[] {
    return this.$rounds;
  }

  public set rounds(value: IRound[]) {
    this.$rounds = value;
  }

  $players: IPlayer[] = [];
  constructor() { }

  public get players(): IPlayer[] {
    return this.$players;
  }

  public set players(v: IPlayer[]) {
    this.$players = v;
  }

  calculateScore(round: IRound): number {

    round.points = round.bid === round.score ? 10 + round.score : round.score;
    // console.log('32', bid, taken, score);
    // this.rounds[round].bid = bid;
    console.log('34', round.bid);
    console.log('35', round);

    this.calculateGameScores(round);
    // this.rounds[round].points = taken;
    // this.rounds[round].score = score;
    return round.points;
  }

  addPlayer(player: IPlayer): void {
    for (let index = 0; index < 10; index++) {
      this.$rounds.push({
        game: player.game,
        id: index,
        playerName: player.player,
        playerPostition: player.position,
        bid: null as any,
        points: null as any,
        score: null as any,
        accumulated: null as any
      });
    }
    player.rounds = this.rounds;
    this.$players.push(player);
  }

  calculateGameScores(round: IRound): void {
    console.log('64', this.rounds);

    const playedRounds = this.rounds.filter(filt =>
      filt.score !== null &&
      filt.game === '1' &&
      filt.playerName === round.playerName);
    console.log('66', playedRounds);

    let total = 0;
    // console.log('68', rounds);

    playedRounds.forEach(element => {
      console.log('63', element.score);

      if (element.score === null) { return; }
      total = element.accumulated = element.points + total;
      console.log('65', total);

    });
  }
}
