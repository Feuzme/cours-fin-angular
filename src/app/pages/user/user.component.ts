import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User;

  constructor(
    private route : ActivatedRoute,
    private service : UserService,
    private router : Router
  ) { }

  ngOnInit(): void {
    let id = this.route.paramMap.subscribe(params => {
      this.service.findById(params.get('id')).subscribe(data => {
        this.user = data;
      });
    });
  }

  delete = () => {
    this.service.delete(this.user.id).subscribe(data =>{
      this.router.navigate(['/users'])
    })
  }
}
