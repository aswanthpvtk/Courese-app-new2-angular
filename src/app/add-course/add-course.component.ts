import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  title=""
  discription=""
  duration=""
  date=""
  venue=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"title":this.title,"discription":this.discription,"duration":this.duration,"date":this.date,"venue":this.venue}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("Successfully added")
  
          this.title=""
  
          this.discription=""
  
          this.duration=""
  
          this.date=""
  
          this.venue=""
  
        } else {
  
          alert("Something went wrong")
  
        }
      }
    )
  }

}
