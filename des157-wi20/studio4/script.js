!function() {
  "use strict";
    document.getElementById("box1").addEventListener("click", function(event){

      var title = "DEPRESSION";
      var DEPRESSIONParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

      description(title, DEPRESSIONParagraph)
    })

    document.getElementById("box2").addEventListener("click", function(event){

      var title = "ANXIETY";
      var ANXIETYParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

      description(title, ANXIETYParagraph)
    })
    document.getElementById("box3").addEventListener("click", function(event){

      var title = "EATING DISORDER";
      var EATINGParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

      description(title, EATINGParagraph)
    })
    document.getElementById("box4").addEventListener("click", function(event){

      var title = "ADDICTION";
      var ADDParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

      description(title, ADDParagraph)
    })

    function description(title, text) {
      var popUp = document.getElementById("popUp");
      var descriptionContainer = document.getElementById("description");

      popUp.setAttribute("class", "txtBox");
      descriptionContainer.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
    }

    document.getElementById("exit").addEventListener("click", function(event) {
      var popUp = document.getElementById("popUp");
      popUp.setAttribute("class", "hidden");
    })
  } ();