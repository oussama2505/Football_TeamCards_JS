const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
      imagen:"img/Sergio_Omar_Almirón_-_Newells_1988_(cropped).jpg"
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
      imagen:"img/Sergio_Batista.jpg"
    },
     {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
      imagen:"img/Ricardo_Bochini.jpg"
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
      imagen:"img/ClaudioBorghi.jpg"
    },
    {
      name: "José Luis Brown",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
      imagen:"img/Brown_camiseta_agujero_86.jpg"
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
      imagen:"img/Passarella_copa_mundo.jpg"
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
      imagen:"img/Burruchaga_gritando_gol_de_argentina.jpeg"
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
      imagen:"img/Clausen_independiente.jpg"
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
      imagen:"img/Cuciuffo_argentina_1986.jpg"
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
      imagen:"img/Maradona-Mundial_86_con_la_copa.JPG"
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
      imagen:"img/Valdano.jpg"
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
      imagen:"img/Hector_enrique_lanus.jpg"
    },
    {
      name: "Oscar Garré",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
      imagen:"img/Oscar_Garré_2006.jpg"
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
      imagen:"img/Giusti_festejo_vs_racing.jpg"
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
      imagen:"img/Luis_Islas_estudiantes.jpg"
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
      imagen:"img/Olarticoechea.jpg"
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
      imagen:"img/Pedro_Pasculli.jpg"
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
      imagen:"img/Nery_Pumpido.jpg"
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
      imagen:"img/Oscar_Garré_2006.jpg"
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
      imagen:"img/Carlos_tapia_argentina_juvenil.jpg"
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
      imagen:"img/Trobbiani_tarantini_toulon.jpg"
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
      imagen:"img/Hector_enrique_lanus.jpg"
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname,imagen }) =>
        `
        <div class="player-card">
          <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
          <img src=${imagen}/>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

default:
      setPlayerCards();

  }
});
