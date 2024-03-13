


let param = "select=region%2C%20nombre_d_operations_actives%2C%20centroid&limit=20";
    


fetch('https://data.enedis.fr/api/explore/v2.1/catalog/datasets/autoconsommation-collective-maille-region/records?'+ param)

        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            //let fill1 = document.getElementById('para1');
            //fill1.innerHTML=data.value;
        })

