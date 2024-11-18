import { Component, OnInit } from '@angular/core';
import { ListAppApiRequestService } from '../../../services/list-app-api-request.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitterService } from '../../../services/event-emitter.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  constructor(private listAppApiRequestService: ListAppApiRequestService,
    private route: ActivatedRoute,
    private eventEmitterService: EventEmitterService
  ) { }

  User: any

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.Get_user(id)
  }

  Get_user(id: any) {
    this.eventEmitterService.loaderDisplay("flex")
    this.listAppApiRequestService.Request_getUser(id).subscribe(responce => {
      this.User = responce.data
      this.eventEmitterService.loaderDisplay("none")

    },
      erorr => {
        console.log(erorr)
        this.eventEmitterService.loaderDisplay("none")
      })
  }
}
