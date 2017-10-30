// https://showmethecode.com.br/async-await/

const fetch = require('node-fetch')

// // Promise
// function getPersonP(id) {
//   fetch(`http://swapi.co/api/people/${id}`)
//     .then(response => response.json())
//     .then(person => console.log("With Promisses: "+ person.name ))
// }

// getPersonP(1)

// // async/await
// async function getPerson(id) {
//   const response = await fetch(`http://swapi.co/api/people/${id}`)
//   const person = await response.json()
//   console.log("With async/await: "+ person.name)
// }

// getPerson(1)


// // Hibrido

// async function getPersonH(id) {
//   const response = await fetch(`http://swapi.co/api/people/${id}`);
//   const person = await response.json();
//   return person;
// }

// getPersonH(1).then((person) => { console.log(person.name) });
// getPersonH(1).then(person => console.log(person.name));


// async function getPersonI(id) {
//   throw Error('Not found');
//   //return id
  
// }

// //getPersonI(2).then(id => console.log(id))
// getPersonI(0).catch(error => console.error(error.message))

// async function getPersonJ(id) {
//   const response = await fetch(`http://swapi.co/api/people/${id}`);
//   return await response.json();
// }

// getPersonJ(0)
//   .then(person => console.log(person));
  
  
// async function getPersonK(id) {
//   const response = await fetch(`http://swapi.co/api/people/${id}`);
//   const body = await response.json();

//   if (response.status !== 200) {
//     throw Error(body.detail);
//   }

//   return body;
// }  

// getPersonK(0)
//   .then(person => console.log(person.name)) //Luke Skywalker
//   .catch(err => console.error(err.message));
  

// async function getPerson(id) {
//   const response = await fetch(`http://swapi.co/api/people/${id}`);
//   return await response.json();
// }

// async function loadPerson(id) {
//   try {
//     const person = await getPerson(id);
//     console.log(person.name);

//   } catch (err) {
//     console.error(err.message);
//   }
// }

// loadPerson(0);
// loadPerson(1);




// regular function
// const getPerson = async function (id) {
//   const response = await fetch(`http://swapi.co/api/people/${id}`);
//   return await response.json();
// };

// getPerson(1)
//   .then(person => console.log(person.name));


// arrow function
const getPerson = async (id) => {
  const response = await fetch(`http://swapi.co/api/people/${id}`)
  return await response.json()
}

getPerson(1)
    .then( (person) => { console.log(person.name) })