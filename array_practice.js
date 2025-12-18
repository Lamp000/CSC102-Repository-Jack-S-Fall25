        // a better way to store our plant list would be using a data structure - we will use an array
        let arrPlants = ["Rose", "Nightshade", "Hydrangea", "Tree", "Flower", "Cactus"];

        // Function to add a plant to the array
        function addPlant(){
            // get the new plant name
            let newPlant = document.getElementById("txtNewPlant").value;

            // add the new plant to the array
            arrPlants.push(newPlant);
            
            showPlants();
        }

        // function will loop through the array of plants and show them in the ul in the HTML code
        function showPlants(){
            // loop through the plant array and build an li for each plant

            // shortcut/nickname to the ul in the HTML
            let ulPlants = document.getElementById("ulPlants");

            // this should remove the existing items in the list
            ulPlants.innerHTML = "";

            // use a foreach loop to run through the list
            arrPlants.forEach(function(plant, index){
                // create the list items - li - using JS
                let li = document.createElement("li");
                // this will cause our plant name to show on the screen in the ul
                li.textContent = plant;

                ulPlants.appendChild(li);
            });
        }

        showPlants()

         // If we need to store 20 plants, we could set up 20 variables, but that leads to problems
        let plant1 = "Rose";
        let plant2 = "Nightshade";
        let plant3 = "Hydranga";
        let plant4 = "Tree";
        let plant5 = "Flower";
        let plant6 = "Cactus";