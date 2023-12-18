import { Component ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    // Add event listener after the view is initialized
    this.addMouseOverEvent();
  }

  private addMouseOverEvent(): void {
    const link = document.getElementById('myLink');

    if (link) {
      link.addEventListener('mouseover', () => {
        link.style.color = 'red';
      });

      link.addEventListener('mouseout', () => {
        link.style.color = 'blue';
      });
    }
  }
}
