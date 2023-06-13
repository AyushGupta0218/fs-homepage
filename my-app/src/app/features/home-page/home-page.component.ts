import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  events: string[] = [];
  
  opened: boolean=false;

  shouldRun = true;

  ngOnInit(): void {
    var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

      for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
      // this.classList.toggle("active");
      // var dropdownContent = this.nextElementSibling;
      // if (dropdownContent.style.display === "block") {
      //   dropdownContent.style.display = "none";
      // } else {
      //   dropdownContent.style.display = "block";
      // }
      
   });
 }
  }



  



}
