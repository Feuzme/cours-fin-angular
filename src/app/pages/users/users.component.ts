import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    //on souscris à la méthode findAll(), recupère la data et l'insère dans this.users
    this.service.findAll().subscribe(data => {
      this.users = data;
    });
  }
  
}
