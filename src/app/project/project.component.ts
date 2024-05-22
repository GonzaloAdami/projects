import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  data = [
    {name: 'Bolsa de valores (JS)', description: 'Los mercados ordenados por su rendimiento, manejo de una API con actualizacion en tiempo real', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FSTK89KlqfEMaGag4A_yixl8UiQd1HoDuLBNHtnUow&s', url: 'https://google.com' , dificultad: 'hard'},
    {name: 'proyecto 1', description: 'proyecto 1', img: 'img/1.jpg', url: 'https://google.com' , dificultad: 'facil'},
    {name: 'proyecto 1', description: 'proyecto 1', img: 'img/1.jpg', url: 'https://google.com' , dificultad: 'hard'},
    {name: 'proyecto 1', description: 'proyecto 1', img: 'img/1.jpg', url: 'https://google.com' , dificultad: 'hard'},
    {name: 'proyecto 1', description: 'proyecto 1', img: 'img/1.jpg', url: 'https://google.com' , dificultad: 'facil'},
    {name: 'proyecto 1', description: 'proyecto 1', img: 'img/1.jpg', url: 'https://google.com' , dificultad: 'facil'},
    {name: 'proyecto 1', description: 'proyecto 1', img: 'img/1.jpg', url: 'https://google.com' , dificultad: 'normal'},
    {name: 'proyecto 1', description: 'proyecto 1', img: 'img/1.jpg', url: 'https://google.com' , dificultad: 'facil'},
    {name: 'proyecto 1', description: 'proyecto 1', img: 'img/1.jpg', url: 'https://google.com' , dificultad: 'facil'}
  ]
   generatePorjects = () => { this.data.map(item => { 
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
      <div class="img" style="background-image: url(${item.img})"></div>
      <h2>${item.name}</h2>
      <p class="descripcionCard">${item.description}</p>
      <div class="dificultad" style="background-image: url(./assets/img/${item.dificultad}.webp)"></div>
      <a href="${item.url}">VER PROYECTO</a>
      `;
    const box = document.getElementById('box');
    box?.appendChild(card);
    }) }

    ngOnInit(): void {
      this.generatePorjects()
    }
}
