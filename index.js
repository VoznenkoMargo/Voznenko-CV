function progress() {
   let elem = document.querySelector(".progress__line");
   let width = 1;
   let id = setInterval(proressStatus, 50);
   let maxWidth = elem.dataset.width;

   function proressStatus() {
      if (width >= maxWidth) {
         clearInterval(id);
      } else {
         width++;
         elem.style.width = width + "%";
         elem.innerHTML = width * 1 + "%";
      }
   }

}
let bars = document.querySelectorAll(".progress__line");

bars.forEach(elem => {
   let width = 1;
   let id = setInterval(proressStatus, 60);
   let maxWidth = elem.dataset.width;

   function proressStatus() {
      if (width >= maxWidth) {
         clearInterval(id);
      } else {
         width++;
         elem.style.width = width + "%";
         elem.innerHTML = width * 1 + "%";
      }
   }
   proressStatus();
})