import { TestBed } from '@angular/core/testing';

import { DataAccessService } from './data-access.service';

describe('DataAccessService', () => {
  let service: DataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Update round', () => {
    const round1 = {
      game: service.curGame, id: 1,
      playerName: 'Ron',
      playerPostition: 1,
      bid: 2, score: 12, points: 2, accumulated: 12
    };
    expect(service.updateRound(round1)).toBe(round1);
    console.log(round1);

  });
});
