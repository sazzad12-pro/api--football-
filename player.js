const loadPlayer = () => {
  const input = document.getElementById("input");
  const inputValue = input.value;
  input.value = " ";
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlayer(data.player));
};
const showPlayer = (players) => {
  const playerName = document.getElementById("player-container");
  playerName.innerText = " ";
  for (let play of players) {
    // console.log(play);
    const div = document.createElement("div");
    div.innerHTML = ` <div class="card">
    <div class="pro-pic">
      <img class="w-75" src="${play.strThumb}" alt="" />
    </div>
    <h3>Name:${play.strPlayer}</h3>
    <h5>conuntry:${play.strNationality}</h5>
    <p>Gender:${play.strGender}</p>
    <div class="allbutton">
      <button class="btn btn-danger">delet</button>
      <button  onclick="playDetails('${play.idPlayer}')" class="btn btn-success">Details</button>
    </div>
  </div>`;
    playerName.appendChild(div);
  }
};
const playDetails = (name) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${name}
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShow(data.players[0]));
};

const displayShow = (info) => {
  // console.log(info);
  const playerDetails = document.getElementById("player-details");
  playerDetails.innerText = " ";
  const div = document.createElement("div");
  div.innerHTML = `<div class="pic">
  <img class="w-50" src="${info.strThumb}" alt="" />
</div>
<h5>Birthday:${info.dateBorn}</h5>
<h5>Location:${info.strBirthLocation}</h5>
<div class="card"><p >${info.strDescriptionEN} </p></div>
  `;
  playerDetails.appendChild(div);
};
