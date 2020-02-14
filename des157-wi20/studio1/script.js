
        // listen for the submission of the form
        document.getElementById("myform").addEventListener("submit", function(event){
            // prevent the default behavior
            event.preventDefault();

            // get all the text fields from the form
            var formData = document.querySelectorAll("input[type=text]");
            // create an array to hold values from the form
            var words = [];

            //loop through the fields and add the words to the array, one at a time.
            for( var i=0; i<formData.length; i++){
                words.push(formData[i].value);
            }
            //You can see the array in the console, if you want...
            console.log(words);

            //run a function to put the words into the madlib... Function below...
            //Pass the array of words the user typed into the function
            makeMadLib(words);

        });

        //This function takes an array input, then constructs the madlib, peppering
        //in the user's words where necessary.
        function makeMadLib(theWords){
            var madlib = `Shall I compare ${theWords[0]} to a summer’s day? <br/>
            Thou art more lovely and more temperate.<br/>
            Rough winds do ${theWords[1]} the darling buds of May,<br/>
            And summer’s lease hath all too short a date.<br/>
            Sometime too hot the eye of ${theWords[2]} shines,<br/>
            And often is his gold ${theWords[3]} dimmed;<br/>
            And every fair from fair sometime declines,<br/>
            By chance, or nature’s changing course, untrimmed;<br/>
            But thy eternal ${theWords[4]} shall not fade,<br/>
            Nor lose possession of that fair thou ow’st,<br/>
            Nor shall ${theWords[5]} brag thou wand'rest in his shade,<br/>
            When in eternal lines to Time thou grow'st.<br/>
            So long as men can ${theWords[6]}, or eyes can see,<br/>
            So long lives this, and this gives life to thee.<br/>
            <br/>
            - William Shakespeare `;

            //Get the madlib container
            var mlContainer = document.getElementById('madlib');
            var mfContainer = document.getElementById('myform');
            var bodyContainer = document.getElementById('bodyy');

            //Change the guts of the container to your madlib
            mlContainer.innerHTML = `<p>${madlib}</p>`;

            //change the class on the madlib container so you can see it.
            mlContainer.setAttribute("class", "visible");
            mfContainer.setAttribute("class", "invisible");
            bodyContainer.setAttribute("class", "after");
        }
