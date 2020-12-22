import { IPlayer, IRound } from './interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private $players: IPlayer[];
  // private $game: IRound[] = [];
  private $curGame = '1';


  constructor() {
    this.$players = [
      { game: this.$curGame, player: 'Ron', position: 1 },
      { game: this.$curGame, player: 'Joanie', position: 2 },
      { game: this.$curGame, player: 'Stefanie', position: 3 },
      { game: this.$curGame, player: 'Thomas', position: 4 },
      { game: this.$curGame, player: 'Kevin', position: 5 },
      { game: this.$curGame, player: 'Brenda', position: 6 },
    ];

    this.$players.forEach(element => {
      element.rounds = [];
      for (let index = 1; index < 11; index++) {
        element.rounds.push(
          {
            game: this.$curGame, id: index,
            playerName: element.player,
            playerPostition: element.position,
            bid: 0, score: 0, points: 0,
            accumulated: 0
          });
      }
    });

  }

  public get curGame(): string {
    return this.$curGame;
  }

  public get players(): IPlayer[] {
    return this.$players;
  }

  /* public get rounds(): IRound[] {
    return this.$game;
  } */

  public updateRound(round: IRound): IRound {
    const curPlayer = this.$players.filter(filt =>
      filt.player === round.playerName);
    /* let cur: IRound[] = [];
     if (curPlayer.length && curPlayer[0].rounds.length) {
      console.log(curPlayer[0].rounds);
      cur = curPlayer[0].rounds.filter((filt2: IRound) =>
        filt2.id === round.id);
    } */

    curPlayer[0].rounds[round.id - 1] = round;
    return curPlayer[0].rounds[round.id - 1];
  }


}
