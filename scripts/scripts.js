const games = [
    {gameName: "Escape the Garden", gameURL: "https://baileestrait.github.io/dev-david-lab/", gameAuthor: "Bailee Strait", repo: "https://github.com/baileestrait/dev-david-lab", gameGroup: "1"},
    {gameName: "Vroom", gameURL: "https://jaxn-harvey.github.io/dev-david/", gameAuthor: "Jackson Harvey", repo: "https://github.com/jaxn-harvey/dev-david", gameGroup: "1"},
    {gameName: "Catch the Butterfly", gameURL: "https://iarcher444.github.io/dev-david-lab/", gameAuthor: "Isabella Archer", repo: " https://github.com/iarcher444/dev-david-lab", gameGroup: "1"},
    {gameName: "The Emoji Game", gameURL: "https://mtrejo03.github.io/dev-david-hw/", gameAuthor: "Milly Trejo", repo: " https://github.com/mtrejo03/dev-david-hw", gameGroup: "1"},
    {gameName: "Futbol Mania", gameURL: "https://jm-2017.github.io/urban-carnival-nuExample/", gameAuthor: "Janet Martinez", repo: "https://github.com/jm-2017/urban-carnival-nuExample", gameGroup: "2"},
    {gameName: "Slides", gameURL: "https://basstbone.github.io/dev-david-hw/", gameAuthor: "Sean Oliver", repo: "https://github.com/basstbone/dev-david-hw", gameGroup: "2"},
    {gameName: "colorName", gameURL: "https://mlsmason6.github.io/improved-computing-machine-colorName/", gameAuthor: "Mason Schrader", repo: " https://github.com/MLSMason6/improved-computing-machine-colorName", gameGroup: "3"},
    {gameName : "Escape Room", gameURL: "https://joshuabrad03.github.io/scaling-octo-david/", gameAuthor : "Joshua Bradley", repo: "https://github.com/joshuabrad03/scaling-octo-david", gameGroup: "3"},
    {gameName : "Meh Game", gameURL: "https://mrspartan38.github.io/dev-david-hw/", gameAuthor : "Evan Sager", repo: "https://github.com/mrspartan38/dev-david-hw", gameGroup: "3"},
    {gameName: "Circle Game", gameURL: "https://jomlli709.github.io/octo-goggles-david-hw/", gameAuthor: "Jodi Gambrell", repo: "https://github.com/jomlli709/octo-goggles-david-hw", gameGroup: "4"},
    {gameName: "Shooting Star", gameURL: "https://nbrown2002.github.io/Dev-David/", gameAuthor: "Noah Brown", repo: "https://github.com/Nbrown2002/Dev-David", gameGroup: "4"},
    {gameName: "UFO Game", gameURL: "https://whitb43.github.io/UFO-Escape/", gameAuthor: "Whit Brewer", repo: "https://github.com/WhitB43/UFO-Escape", gameGroup: "4"},
    {gameName: "Battery Charger Game", gameURL: "https://ssasaki1.github.io/dev-david-lab/", gameAuthor: "Shun Sasaki", repo: "https://github.com/ssasaki1/dev-david-lab", gameGroup: "4"},
    {gameName: "Rock-Paper-Scissors", gameURL: "https://kethanpilla.github.io/dev-freddie-hw/", gameAuthor: "Kethan Pilla", repo: "https://github.com/KethanPilla/dev-david-lab", gameGroup: "6"},
    {gameName: "Wow Game", gameURL: "https://pmalhotra21.github.io/wow-game/", gameAuthor: "Paridhi Malhotra", repo: "https://github.com/pmalhotra21/wow-game", gameGroup: "6"},
    {gameName: "Square Game", gameURL: "https://allisonlacy.github.io/alligamerepo/", gameAuthor: "Allison Lacy", repo: "https://github.com/AllisonLacy/alligamerepo", gameGroup: "7"},
    {gameName: "Spongebob vs Doodlebob", gameURL: "https://a-nunley.github.io/dev-david/", gameAuthor: "Alex Nunley", repo: "https://github.com/a-nunley/dev-david", gameGroup: "8"},
    {gameName: "David V Goliath", gameURL: "https://germannnick.github.io/Dev-David-Goliath/", gameAuthor: "Nick Germann", repo: "https://github.com/germannnick/Dev-David-Goliath", gameGroup: "8"},
    {gameName: "Find the Surprise!", gameURL: "https://tuesdayannb.github.io/miniature-enigma-david/", gameAuthor: "Tuesday Brown", repo: "https://github.com/TuesdayAnnB/miniature-enigma-david", gameGroup: "8"},
];

function generateGameCards() {
    const container = document.getElementById('game-container');
  
    let card = ""; 
   
    $.each(games, (i)=>{
      card = `<div class="col-12 col-sm-6 col-md-3">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">${games[i].gameName}</h2>
              <p class="card-text"><b>Author:</b> ${games[i].gameAuthor}</p>
              <p class="card-text"><b>Group:</b> ${games[i].gameGroup}</p>
              <a href="${games[i].gameURL}" target="_blank" class="btn btn-primary">Play Now</a>
              <a href="${games[i].repo}" target="_blank" class="btn btn-primary">see code</a>
            </div>
          </div>
        </div>
      `;
     
      container.innerHTML += card;
    }); 
}

generateGameCards();