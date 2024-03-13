console.log("test");

fetch('https://data.enedis.fr/api/explore/v2.1/catalog/datasets/autoconsommation-collective-maille-region/records?limit=20')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill1 = document.getElementById('para1');
            fill1.innerHTML=data.value;
        })