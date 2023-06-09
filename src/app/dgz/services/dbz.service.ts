import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
console.log(uuid());

import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'vegeta',
    power: 7500
  }
  ];
addcharacter(character: Character): void {
    const newCharacter : Character  = {id: uuid(), ...character}
    this.characters.push(newCharacter);

  }
  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: String){
this.characters = this.characters.filter(character => character.id !== id);
  }

}
