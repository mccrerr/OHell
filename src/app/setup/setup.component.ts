import { ScoreService } from './../score.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  @ViewChild('Name', { read: ElementRef, static: true }) nameInput!: ElementRef;

  public inputForm = new FormGroup({});
  private position = 0;

  constructor(private fb: FormBuilder,
    public scoreService: ScoreService) { }

  ngOnInit(): void {
    this.createForm();
    this.formResponse();
    this.initNames('Ron');
    this.initNames('Joanie');
    this.initNames('Stefanie');
    this.initNames('Thomas');
  }

  keyD(event: any): void {
    console.log('33', event.key);

    if (event.key === 'tab') {
      event.preventDefault();
      event.stopPropagation();
      this.NameChange(event);
    }
  }

  deleteItm(event: any): void {
    const player = event.target.outerText;
    const index = this.scoreService.players.findIndex(obj =>
      obj.player === player);
    this.scoreService.players = [
      ...this.scoreService.players.slice(0, index),
      ...this.scoreService.players.slice(index + 1)
    ];
    this.renumberPostition();
  }

  viewPlayer(): void {
    console.log(
      this.scoreService.players
    );
  }
  createForm(): void {
    this.inputForm = this.fb.group({
      Name: null,
    });
  }

  formResponse(): void {
    this.inputForm.get('Name')?.valueChanges
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .subscribe(val => {
        console.log('41', val);
      });
  }

  NameChange(event: any): void {
    console.log('51', event.target.value);
    this.scoreService.addPlayer({
      game: '1', player: event.target.value,
      position: this.position++
    });
    this.inputForm.patchValue({ Name: '' });
    this.nameInput.nativeElement.focus();
  }

  initNames(name: string): void {
    console.log('51', name);
    this.scoreService.addPlayer({
      game: '1', player: name,
      position: this.position++
    });
    // this.inputForm.patchValue({ Name: '' });
    // this.nameInput.nativeElement.focus();
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.scoreService.players,
      event.previousIndex, event.currentIndex);

    this.renumberPostition();
  }

  renumberPostition(): void {
    for (let i = 0; i < this.scoreService.players.length; i++) {
      this.scoreService.players[i].position = i;
    }
  }
}
