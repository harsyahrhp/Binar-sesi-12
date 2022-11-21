// const data = [
//     {
//       id: 1,
//       name: "dono",
//       address: "jakarta",
//     },
//     {
//       id: 2,
//       name: "kasino",
//       address: "depok",
//     },
//   ];


// let addr = data.map(data =>{
//     // if(data.address){
//         return data.address;
//     // }
// })  

// console.log(addr)

// function getaddr(param){
//     return param.map((item)=>{
//         return item.address
//     });
// }

// console.log(getaddr(data))

const api = {
    res: "succedd",
    statusCode: 200,
    data: [
      {
        id: 1,
        name: "rinda",
      },
      {
        id: 2,
        name: "adinda",
      },
      {
        id: 3,
        name: "joko",
      },
    ],
  };
  
  let data = api.data;

//   let nama = data.map(data =>{
       
//             return data.name;
        
//     }) 

//     console.log(nama)


    function getname(param){
    return param.map((item)=>{
        return item.name
    });
}

console.log(getname(data))

// const api = {
//     res: "succedd",
//     statusCode: 200,
//     data: [
//       {
//         id: 1,
//         name: "rinda",
//       },
//       {
//         id: 2,
//         name: "adinda",
//       },
//       {
//         id: 3,
//         name: "joko",
//       },
//     ],
//   };
  
//   const getData = api.data.map((item) => {
//     return item.name;
//   });
  
//   function ambilData(param) {
//     return param.data.map((item) => {
//       return item.name;
//     });
//   }
  
//   const ambilData = (param) => {
//     return param.data.map((item) => {
//       return item.name;
//     });
//   };
  