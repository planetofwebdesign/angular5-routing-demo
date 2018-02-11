import { Component, OnInit, Input} from '@angular/core';
import { StarWarsHerosService } from '../services/star-wars-heros.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() heros: any[];
  constructor() { }

  ngOnInit() {
  }

}
