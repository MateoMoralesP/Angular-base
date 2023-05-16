import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }
  ];

  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter<number>();

  // onDeleteCharacter(i: number): void {
  //   console.log(i);
  //   if (i !== undefined) {
  //     this.onDelete.emit(i);
  //   }
  // }
  public onDelete: EventEmitter<string> = new EventEmitter<string>();


  deleteCharacterById(uuid: string): void {
    console.log(uuid);
    if (uuid !== undefined) {
      this.onDelete.emit(uuid);
    }
  }


}
