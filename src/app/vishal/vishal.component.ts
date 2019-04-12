import { Component, OnInit } from '@angular/core';
import { DubeyService } from  '../dubey.service';
@Component({
  selector: 'app-vishal',
  templateUrl: './vishal.component.html',
  styleUrls: ['./vishal.component.css']
})
export class VishalComponent implements OnInit {
  private  Posts:  Array<object> = [];
  constructor(private  apiService:  DubeyService) { }

  ngOnInit() {
    this.getPosts();
  }
  public  getPosts(){
    this.apiService.getPosts().subscribe((data:  Array<object>) => {
        this.Posts  =  data;
        console.log(data);
    });

}
}
