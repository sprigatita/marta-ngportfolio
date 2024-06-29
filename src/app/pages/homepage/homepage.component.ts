import {Component, OnInit} from '@angular/core';
import {ProjectDTO} from "../../models/projectDTO";
import {FileDownloadService} from "../../services/fileDownloadService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  public projectList: ProjectDTO[] = [];

  ngOnInit() {
    this.init();
  }

  private init() {
    this.projectList = [
      {
        title: "JBomberman",
        externalLink: "https://github.com/sprigatita/Bomberman",
        imageUrl: "assets/img/projects-bomberman.png"
      },
      {
        title: "Work in Progress",
        externalLink: "",
        imageUrl: "assets/img/projects-wip.gif"
      },
      {
        title: "Work in Progress",
        externalLink: "",
        imageUrl: "assets/img/projects-wip.gif"
      },
      {
        title: "Work in Progress",
        externalLink: "",
        imageUrl: "assets/img/projects-wip.gif"
      },

    ]
  }



}
