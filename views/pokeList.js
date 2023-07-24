const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = (pokemon) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Pokedex</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #c7800c;
          }

          .pokemon-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          padding: 20px;
          background-color: #c7800c;
          margin-top: 72px;
          }

          header {
          position: fixed;
          display: flex;
          flex-direction: row;
          align-items: center;
          /* justify-content: center; */
          top: 0;
          left: 0;
          background-color: #823329;
          color: #f4fff8;
          width: 100%;
          height: 72px;
          font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
          font-size: larger;
          font-weight: bolder;
          padding: 2px;
          }

          header img {
          height: 60px;
          margin-right: 10px;
          }

          header text {
          display: flex;
          }

          .pokemon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          background-color: #278144;
          color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .pokemon-item img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          }

          .pokemon-item p {
          margin: 10px 0 0;
          }

          .pokemon-item small {
          color: #f3f3f3;
          }
      </style>
    </head>
    <body>
      <div class="pokemon-list">
        <header><img src="/logo.png" />Pokedex</header>
        ${pokemon.map(
          (poke) => html` <div class="pokemon-item">
            <img src="${poke.image}" alt="${poke.name}" />
            <p>
              <span class="pokemon-position">${poke.id}. ▲</span>
              <a href="/pokemon/${poke.id}">${poke.name}</a>
              <small>(Trained by ${poke.trainer})</small>
            </p>
            <small class="pokemon-info">
              Type: ${poke.type} | Date Caught: ${timeAgo(poke.date)}
            </small>
          </div>`
        )}
      </div>
    </body>
  </html>`;
