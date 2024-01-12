
// const URL= `https://words-api5.p.rapidapi.com/api/v1/dict/random`;
// const key= '4ff534677bmshcf2f4855075cdadp197218jsnfc2b05d611d9';

// let data= []
// async function getData(URL) {
//     try {
//         //requesting a response REST API's
//         const response = await fetch(URL + "?" + new URLSearchParams({
//             apiKey: key,
//         }));
//         if (response.status != 200) {
//             throw new Error(response.statusText);
//         }
//         //convert reponse to json
//         const info = await response.json();
//         console.log(info);

//     } catch (error) {
//         console.log(error);
//         document.querySelector("h3").textContent = "uh oh";
//     }
// }
//  getData(URL);

// const URL = 'https://random-words5.p.rapidapi.com/getRandom';

// async function getData(URL) {
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4ff534677bmshcf2f4855075cdadp197218jsnfc2b05d611d9',
// 		'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(URL, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }}
// const apiKey = '4ff534677bmshcf2f4855075cdadp197218jsnfc2b05d611d9';
// const apiUrl = 'https://words-api5.p.rapidapi.com/api/v1/dict/random';

// const requestOptions = {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ${apiKey}`,
//   },
// };

// fetch(apiUrl, requestOptions)
//   .then(response => {
//     if !response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
  
//   .then(data => {
//     outputElement.textContent = JSON.stringify(data, null, 2);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });