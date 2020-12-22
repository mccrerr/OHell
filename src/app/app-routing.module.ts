import { SetupComponent } from './setup/setup.component';
import { BidAllComponent } from './bid-all/bid-all.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { BidComponent } from './bid/bid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Setup', component: SetupComponent },
  { path: 'Bid', component: BidAllComponent },
  { path: 'LeaderBoard', component: LeaderBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
