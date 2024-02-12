document.getElementById("heartButton").addEventListener("click", function() {
  const container = document.getElementById("container");
  const coeur = document.createElement("div");
  coeur.classList.add("coeur");
  coeur.style.left = Math.random() * window.innerWidth + "px";
  coeur.style.top = Math.random() * window.innerHeight + "px";
  container.appendChild(coeur);
  
 
  setTimeout(() => {
    coeur.remove();
  }, 1000);
});