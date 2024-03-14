
//This section bulds API request following the user's choices-----------------------------------

let param = "select=trimestre&group_by=trimestre&order_by=trimestre%20%20DESC%20&limit=20";
    
let raw_trimesters=[];

fetch('https://data.enedis.fr/api/explore/v2.1/catalog/datasets/autoconsommation-collective-maille-region/records?'+ param)

  .then(response => {return response.json()})
  .then((data)=>{
      //console.log(data.results[0].trimestre);
//Extract an array from the response dataset      
        for (var i=0; i<data.results.length; i++){
        raw_trimesters.push(data.results[i].trimestre);
      };
// Trim useless characters from the raw trimester array
const trimmed_trimesters = raw_trimesters.map(dateString => dateString.substring(0, dateString.indexOf('T')));


// This section feeds the trimesters to the scroll down menu---------------------------------------------------------

  function populateMenu() {
      const selectMenu = document.getElementById("scroll_menu");
    
      trimmed_trimesters.forEach((option, index) => {
        const optionElement = document.createElement("option");
        optionElement.value = option; // Set value as index
        optionElement.text = option; // Set text as option
        //Add event listener to options
      
        selectMenu.appendChild(optionElement);
    });
  }
  
  // Call the function to populate the menu
  populateMenu();

        })


  function getValue(){
    console.log(document.getElementById("scroll_menu").value);
    trimestre= document.getElementById("scroll_menu").value
    let year = trimestre.substring(0,4);
    let month = trimestre.substring(5,7);
    console.log(year, month);
  }      
//region, nombre_d_operations_actives, trimestre, centroid


 




