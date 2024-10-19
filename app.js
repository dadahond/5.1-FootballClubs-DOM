import clubs from "./teams.js";

const list = document.querySelector("ul");

clubs.forEach((club) => {
  list.innerHTML += `
  <div class="container"> 
  <li class="club-main-card">
  <div class="club-title-logo"> <h3> ${club.name} </h3>  <img src=${club.image} width="100"> </div>
  
  <p class="club-history">${club.history}</p>
   <div class = "club-facts">
   <div class = "club-facts-left"
   <span> City: ${club.city}  </span>
   <span> Stadium: ${club.stadium.name}  </span>
   </div>
   <div class = "club-facts-right"
   <span> Manager: ${club.manager}  </span>
   <div class = "club-facts-right-bottom">
   <span> Top scorer: ${club.top_scorer.name}  </span>
   <img id="rotateImage" class = "club-facts-right-bottom-image" src=${club.kit} width="25">
    </div>
   </div>
   </div>
  </li>
  
   </div>
  
        `;
});
