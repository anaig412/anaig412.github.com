(function(){
  "use strict";
  
  document.getElementById("backpack").addEventListener("click", function(event) {
    showinside();
    showinside();
    showinside();
  });

  function showinside() {
      let imageContainer = document.getElementsByClassName('invisible');
      console.log(imageContainer.length)

      for (let i=0; i < imageContainer.length; i++) {
      imageContainer[i].setAttribute("class", "visible");
    }
  }

  document.getElementById("bars").addEventListener("click", function(event){
    let title = "Protein Bars";
    let topParagraph = "I'm always on the go! If I miss a meal due to my hectic schedule, I know I can always count on my Cliff protein bars. They're very filling and a great snack!"

    description(title, topParagraph)
  })

  document.getElementById("charger").addEventListener("click", function(event){
      let title = "Bakckup Phone Charger";
      let chargerParagraph = "If I'm having a long day on campus, I find my phone low on battery in the middle of the day. Keeping a backup phone charger is always a good idea, otherwise I'd be left without the use of my phone."

      description(title, chargerParagraph)
  })

  document.getElementById("planner").addEventListener("click", function(event) {
    let title = "Weekly Planner";
    let plannerParagraph = "My trusty planner comes with me wherever I go. Whenever professors start talking about upcoming assignments, I quickly take it out of my backpack and write down what I need to remember. It's a great way to stay organized!"

    description(title, plannerParagraph)
  })

  document.getElementById("sketch").addEventListener("click", function(event){
    let title = "Sketchbook";
    let sketchParagraph = "Since I do not take classes that require a lot of heavy note-taking, I have stopped using lined notebooks. Normally I need to sketch out ideas and take light notes, so a blank sketchbook has been the best way to go."

    description(title, sketchParagraph)
  })

  document.getElementById("socks").addEventListener("click", function(event){
    let title = "Extra Pair of Socks";
    let socksParagraph = "I do not use these as much anymore, but I always have a pair of extra socks in my backpack. There were times when it would rain and my feet would get wet, as well as times where my friends and I would randomly decide to go bowling between classes. Having a pair of socks handy in those occassions has been very helpful!"

    description(title, socksParagraph)
  })

  function description(title, text) {
    let popUp = document.getElementById("popUp");
    let descriptionContainer = document.getElementById("description");

    popUp.setAttribute("class", "txtBox");
    descriptionContainer.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
  }

  document.getElementById("exit").addEventListener("click", function(event) {
    let popUp = document.getElementById("popUp");
    popUp.setAttribute("class", "hidden");
  })

}() );