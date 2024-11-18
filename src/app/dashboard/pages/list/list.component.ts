import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ListAppApiRequestService } from '../../../services/list-app-api-request.service';
import { EventEmitterService } from '../../../services/event-emitter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {



  constructor(private listAppApiRequestService: ListAppApiRequestService,
    private eventEmitterService: EventEmitterService
  ) { }

  @ViewChild('btnGroup') btnGroup?: ElementRef;

  Users: any[] = []
  AllUsers: any[] = []
  FilterdUsers: any[] = []
  SearchPhrase: string = ""
  total_pages: number = 0
  isSearch: boolean = false
  ngOnInit(): void {
    this.Get_Users(1);
    this.eventEmitterService.dataStream.subscribe(data => {
      this.SearchPhrase = data;
      this.Search()
    });
  }

  Get_Users(page: number) {
    this.eventEmitterService.loaderDisplay("flex")
    this.listAppApiRequestService.Request_getUsers(page).subscribe(responce => {
      this.Users = responce.data
      this.total_pages = responce.total_pages
      this.eventEmitterService.loaderDisplay("none")
    },
      erorr => {
        console.log(erorr)
        this.eventEmitterService.loaderDisplay("none")
      })
  }

  Get_AllUsers() {
    this.eventEmitterService.loaderDisplay("flex")
    for (let i = 1; i <= this.total_pages; i++) {
      this.listAppApiRequestService.Request_getUsers(i).subscribe(responce => {
        this.AllUsers.push(...responce.data)
        this.Users = this.AllUsers.filter((element) => {
          return element.id == this.SearchPhrase;
        })
        this.eventEmitterService.loaderDisplay("none")

      },
        erorr => {
          console.log(erorr)
          this.eventEmitterService.loaderDisplay("none")

        })
    }
  }

  Search() {
    this.AllUsers = []
    if (this.SearchPhrase == "") {
      this.Get_Users(1)
      this.isSearch = false
    }
    else {
      this.Get_AllUsers()
      this.isSearch = true
    }
  }

  deactivate_btn(ev: Event) {
    let clickedElment = ev.target as HTMLDivElement
    const allButtons = this.btnGroup?.nativeElement.children
    for (let i = 0; i < allButtons.length; i++) {
      if (Array.from(allButtons[i].classList).includes("btn-primary")) {
        allButtons[i].classList.remove("btn-primary")
        allButtons[i].classList.add("btn-secondary")
      }
    }
    if (clickedElment.nodeName == "BUTTON") {
      clickedElment.classList.remove("btn-secondary")
      clickedElment.classList.add("btn-primary")
    }
  }

  Go_page(page: number) {
    this.Get_Users(page)
  }
}
