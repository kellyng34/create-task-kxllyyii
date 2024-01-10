`

const URL= 'https://api.api-ninjas.com/v1/randomword'
const key= 'kYUsA3eJKJaaFQf7GUIHNg==292hFgaIEZIwjyg1'
async function getData(URL) {
    try {
        //requesting a response REST API's
        const response = await fetch(URL + "?" + new URLSearchParams({
            apiKey: key,
        }));
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        //convert reponse to json
        const info = await response.json();
        console.log(info);

    } catch (error) {
        console.log(error);
        document.querySelector("h1").textContent = "uh oh";
    }
}
`

const axios = ('axios');

const options = {
  method: 'GET',
  url: 'https://random-word-api.p.rapidapi.com/get_word',
  headers: {
    'X-RapidAPI-Key': '4ff534677bmshcf2f4855075cdadp197218jsnfc2b05d611d9',
    'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {

}