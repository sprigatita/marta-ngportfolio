import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileDownloadService} from "../../services/fileDownloadService";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    private http: HttpClient,
    private fileDownloadService: FileDownloadService
  ) { }


  downloadFile(): string {
    return this.fileDownloadService.getDownloadUrl();
  }

}
