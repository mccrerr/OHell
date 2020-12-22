import { TestBed } from '@angular/core/testing';

import { ScoreService } from './score.service';

describe('ScoreService', () => {
  let service: ScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate on missed bid', () => {
    const bid = 2;
    const score = 1;
    expect(service.calculateScore(bid, score)).toBe(1);
  });

  it('should calculate on made bid', () => {
    const bid = 2;
    const taken = 2;
    expect(service.calculateScore(bid, taken)).toBe(12);
  });
});
