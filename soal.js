const dataAneh = {
    statusCode: 200,
    listing: [
      {
        id: 1,
        name: "budi",
        hobbies: {
          day: "monday",
          activity: "running",
          location: "sport hall",
        },
      },
      {
        id: 2,
        name: "ahmad",
        hobbies: {
          day: "monday",
          activity: "swimming",
          location: "empang",
        },
      },
    ],
  };
  
  let list = dataAneh.listing;

let gethobi = list.filter(data =>{
       
            return data.id == 2;
       
    }) 

  let hbyah = gethobi.map(data =>{
       
            return data.hobbies;
        
    }) 

    console.log(hbyah)

    for (const key in hbyah) {
         console.log(hbyah[key])
    }

    


    // let hoby = list.map(data =>{
       
    //         return data.hobbies;
        
    // }) 

    // for (const key in hoby) {
    //      console.log(hoby[key])
    // }
