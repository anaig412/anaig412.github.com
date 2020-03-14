window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("toolbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Audio
document.getElementById("audioButton").addEventListener("click", function(event) {
  var name = document.getElementById("audioButton");
  if (name.className === "speakerMute") {
    name.className = "speakerPlay"
    playMusic()
  }
  else {
    name.className = "speakerMute"
    stopMusic()
  }
})

function playMusic() {
  var audio = document.getElementById('sauce');
  audio.play()
}

function stopMusic() {
  var audio = document.getElementById('sauce');
  audio.pause()
}


// Scrolling
document.getElementById("storiesButton").addEventListener("click", function(event) {
  var stories = document.getElementById("storiesId")
  stories.scrollIntoView({behavior: "smooth", block: "start"})
})
document.getElementById("researchButton").addEventListener("click", function(event) {
  var stories = document.getElementById("researchId")
  stories.scrollIntoView({behavior: "smooth", block: "start"})
})
document.getElementById("actionButton").addEventListener("click", function(event) {
  var stories = document.getElementById("actionId")
  stories.scrollIntoView({behavior: "smooth", block: "start"})
})

document.getElementById("topButton").addEventListener("click", function(event) {
  window.scrollTo(0,0)
})

document.getElementById("homeButton").addEventListener("click", function(event) {
  window.scrollTo(0,0)
})


// Research - click to learn more
document.getElementById("box1").addEventListener("click", function(event){
  var title = "depression";
  var DEPRESSIONParagraph = "Depression is a common but serious illness which, left untreated, can lead to other symptoms and even suicide. Those who suffer feel helpless and detached, making everyday tasks difficult to accomplish.<br><br>Symptoms differ from person to person, but they are often accompanied by changes in sleep habits and appetite. Emotional symptoms include sadness, feeling overwhelmed, and an overall exhaustion. Trouble concentrating, difficulty in completing tasks, and approaching issues with a hopeless attitude are all examples of the thinking symptoms of depression."
  description(title, DEPRESSIONParagraph)
})

document.getElementById("box2").addEventListener("click", function(event){
  var title = "anxiety";
  var ANXIETYParagraph = "An anxiety disorder is a result of anxiety that interferes with daily life. Research shows it is very common and that nearly 75% of those affected will experience their first anxious episode by the age of 22. There are many type of anxiety disorders, including general anxiety disorder (GAD), obsessive-compulsive disorder (OCD), panic disorder, post-traumatic stress disorder (PTSD), and social anxiety disorder (SAD).<br><br>Common symptoms for these disorders can include feelings of stress, trouble concentrating, panic, irritability, sweating and dizziness, irregular heartbeat, and frequent upset stomach. Living in constant fear, being uncomfortable in social situations, being plagued with stress, and having panic attacks are also major indicators of an anxiety disorder."
  description(title, ANXIETYParagraph)
})

document.getElementById("box3").addEventListener("click", function(event){
  var title = "eating disorders";
  var EATINGParagraph = "Eating disorders stem from extreme behaviors, emotions, and attitudes that surround an individual’s weight and food perceptions. A common myth surrounding eating disorders are that it only affects women, but in reality, men are nearly as likely to develop a disorder as women. Additionally, of all mental disorders, those with eating disorders have the highest mortality rate.<br><br>Anorexia nervosa is defined by an unhealthy obsession with thinness and fears of eating and gaining weight, which can lead those who suffer to exercise excessively. Those with binge eating disorder experience constant cravings, eating usually large amounts of food, and maybe have a poor body image and self-esteem issues. Bulimia nervosa is a specific binge eating disorder, during which individuals binge eat and then purge, fast, or over-exercise to try to compensate for the food they ate."
  description(title, EATINGParagraph)
})

document.getElementById("box4").addEventListener("click", function(event){
  var title = "addiction";
  var ADDParagraph = "An addiction is defined as a dependence and repeated abuse of substances, like drugs and alcohol. This issue can start with peer pressure and quickly escalate, leading to addiction.<br><br>Symptoms of addiction include a built tolerance for substances, deterioration of physical appearance, slurred speech, impaired coordination, and feelings of fear or anxiety for no specific reason. Additionally, the likelihood of developing an addiction increases for individuals with a history of alcohol or drug abuse in their family."
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


// Stories - Slideshow
window.addEventListener('load', function() {
  var slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
  var slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
  var totalWidth = slideCount * slideWidth + 'px';
  var slider = document.querySelector('#slider-wrapper ul');
  var next = document.getElementById('next');
  var previous = document.getElementById('prev');

  var leftPosition = 0;
  var counter = 0;
  slider.style.width = totalWidth;

  next.addEventListener('click', function(evt) {
      evt.preventDefault();
      counter++;
      if (counter == slideCount) {
          counter = 0;
          leftPosition = 0;
          slider.style.left = leftPosition;
      } else {
          leftPosition = `-${counter * slideWidth}px`;
          slider.style.left = leftPosition;
      }
  });

  previous.addEventListener('click', function(evt) {
      evt.preventDefault();
      counter--;
      if (counter < 0) {
          counter = slideCount -1;
          leftPosition = `-${counter * slideWidth}px`;
          slider.style.left = leftPosition;
      } else {
          leftPosition = `-${counter * slideWidth}px`;
          slider.style.left = leftPosition;
      }
  });
});


// Stories - Questionnaire
document.getElementById("myForm").addEventListener("submit", function(event){
  // prevent the default behavior
  event.preventDefault();

  // get all the text fields from the form
  var formData = document.querySelectorAll("input[type=radio]");
  // create an array to hold values from the form
  var value = 0;

  //loop through the fields and add the words to the array, one at a time.
  for( var i=0; i<formData.length; i++){
    if (formData[i].checked) {
      value += parseInt(formData[i].value);
    }
  }

  //You can see the array in the console, if you want...
  if (value <= 20) {
    return resources('mild')
  }

  else if (value <= 35) {
    return resources('medium')
  }

  else if (value <= 50) {
    return resources('high')
  }

  //run a function to put the words in... Function below...
  //Pass the array of words the user typed into the function
});

function resources(type) {
  var resources = document.getElementById("resources")
  var mild = `<h3>
  Here are some resources that may be right for you!
  </h3>
  <p>https://www.bestcolleges.com/resources/balancing-stress/ <br></p>
  <p>https://www.tuck.com/anxiety-guide-sleep/ <br></p>
  <p>https://www.stress.org/ <br></p>`
  var medium = `<h3>
  Here are some resources that may be right for you!
  </h3>
  <p>https://www.nimh.nih.gov/index.shtml<br></p>
  <p>https://www.apa.org/helpcenter/anxiety<br></p>
  <p>https://www.nationaleatingdisorders.org/<br></p>
  <p>https://www.aa.org/<br></p>`
  var high = `<h3>
  Here are some resources that may be right for you!
  </h3>
  <p>https://afsp.org/<br></p>
  <p>https://www.thetrevorproject.org/get-help-now/</p>
  <p>https://www.nami.org/<br></p>`

  if (type === 'mild') {
    resources.innerHTML = `${mild}`
  }
  else if (type === 'medium') {
    resources.innerHTML = `${medium}`
  }
  else {
    resources.innerHTML = `${high}`
  }

  resources.setAttribute("class", "visible");
}
