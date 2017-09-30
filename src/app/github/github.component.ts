import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {RepoService} from './services/repo.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [RepoService]
})
export class GithubComponent implements OnInit {

  protected items: Observable<[number]>;

  public repos: Observable<any>

  constructor(repoService: RepoService) {
    this.repos = repoService.getReposForUser('efhsg');
    this.repos.subscribe();
    this.repos.subscribe();
  }

  ngOnInit() {
  }

}
