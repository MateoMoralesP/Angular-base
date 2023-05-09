import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['spiderman', 'Ironman', 'hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  removelastHero():void{

   this.deletedHero =  this.heroNames.pop();
  //  console.log({deletedHero});

  }
}
