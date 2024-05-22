import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  {

  home = true;
  project = false;
  contact = false;

  title = 'portafolio';

    showProject(){
      this.project = true;
      this.home = false;
      this.contact = false;
    }
    showContact(){
      this.contact = true;
      this.home = false;
      this.project = false;
    }
    showHome(){
      this.home = true;
      this.contact = false;
      this.project = false;
    }


}

