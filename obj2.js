// const data = [
//     {
//       id: 1,
//       name: "ibnu",
//       subject: {
//         name: "english",
//         score: 80,
//       },
//     },
//     {
//       id: 1,
//       name: "dono",
//       subject: {
//         name: "english",
//         score: 70,
//       },
//     },
//     {
//       id: 1,
//       name: "dian",
//       subject: {
//         name: "english",
//         score: 75,
//       },
//     },
//   ];


// let getscr = data.filter(data =>{
       
//             return data.subject.score > 70;
       
//     }) 

// let getnum = getscr.map(data =>{
//     return data.subject.score
// })

//     console.log(getnum)


    const myInfo = {
        name: "robert",
        age: 25,
        hobbies: ["fishing", "riding"],
        // family: {
        //   father: "jumadi",
        //   mother: "juminten",
        //   siblings: ["celine", "andrew"],
        // },
       };
       
    // console.log(myInfo["family"]["siblings"][1])

    // for (const key in myInfo) {

    //     if (myInfo.hasOwnProperty(key)) {
    
    //         console.log(`${key}: ${myInfo[key]}`);
    //     }
    // }

    for (const key in myInfo) {
        // console.log(key)
        console.log(myInfo[key])
    }