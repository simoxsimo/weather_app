const weatherApi = (() => {
    // Weather API Call after getting location of user
    const apiCall = (promise) => {
        return promise
               .then( data => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=15609b3767af2a096f31de7e936b27ec`))
               .then( resp => resp.json())
               .catch(() => {
                console.error("Error!! can't get response from weather api");
             });
    }

    return {
        apiCall
    }
})();

export default weatherApi;