import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  data = [
    {name: 'ValkyrieConnect', description: 'Una página dedicada al juego Valkyrie Connect con un estilo más moderno y estético, utilizando JavaScript.', img: './assets/img/vc.webp', url: 'https://valkyrieconnect.web.app/' , dificultad: 'facil'},
    {name: 'Briksis', description: 'Simulación de tienda de postres hecha en Angular y con funcionalidades en TypeScript.', img: './assets/img/briksis.webp', url: 'https://brisksis.web.app/' , dificultad: 'facil'},
    {name: 'Note Link', description: 'Una página que te permite crear acceso a otras páginas. Te deja crear tarjetas que contienen una foto personalizada de forma local. Puedes hacer que las tarjetas te lleven a los lugares que quieras y asignarles un título, y todo se almacenará de forma local.', img: './assets/img/noteLink.webp', url: 'https://note-link-89bce.web.app/' , dificultad: 'normal'}

  ]
   generatePorjects = () => { this.data.map(item => { 
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
      <div class="img" style="background-image: url(${item.img})"></div>
      <h2>${item.name}</h2>
      <div class="containerDescripcion"><p class="descripcionCard">${item.description}</p></div>
      <div class="dificultad" style="background-image: url(./assets/img/${item.dificultad}.webp)"></div>
      <a href="${item.url}" target="_blank">VER PROYECTO</a>
      `;
    const box = document.getElementById('box');
    box?.appendChild(card);
    }) }

    ngOnInit(): void {
      this.generatePorjects()
    }
}
