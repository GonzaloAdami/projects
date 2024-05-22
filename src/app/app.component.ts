import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit  {

  home = true;
  project = false;
  contact = false;

  title = 'portafolio';

    showProject(){
      this.project = true;
      this.home = false;
      this.contact = false;
      this.liOpacity();
    }
    showContact(){
      this.contact = true;
      this.home = false;
      this.project = false;
      this.liOpacity();
    }
    showHome(){
      this.home = true;
      this.contact = false;
      this.project = false;
      this.liOpacity();
    }
    
    liOpacity(){
      if(this.home){
        const project = document.getElementById('project');
        project?.classList.add('desactive');
        project?.classList.remove('active');

        const contact = document.getElementById('contact');
        contact?.classList.add('desactive');
        contact?.classList.remove('active');

        const home = document.getElementById('home');
        home?.classList.add('active');
        home?.classList.remove('desactive');

      }else if(this.contact){
        const project = document.getElementById('project');
        project?.classList.add('desactive');
        project?.classList.remove('active');

        const home = document.getElementById('home');
        home?.classList.add('desactive');
        home?.classList.remove('active');
        
        const contact = document.getElementById('contact');
        contact?.classList.add('active');
        contact?.classList.remove('desactive');
        
      }else if(this.project){
        const home = document.getElementById('home');
        home?.classList.add('desactive');
        home?.classList.remove('active');

        const contact = document.getElementById('contact');
        contact?.classList.add('desactive');
        contact?.classList.remove('active');

        const project = document.getElementById('project');
        project?.classList.add('active');
        project?.classList.remove('desactive');
      }

    }
    ngOnInit(): void {
       this.liOpacity();
    }
}

