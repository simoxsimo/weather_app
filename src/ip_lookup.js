const ipLookUp = (() => {

    const getResponse = () => {
        return fetch('http://ip-api.com/json/')
               .then(resp => resp.json())
               .catch(() => {
                  console.log("Error!! can't get response");
               });
    }

    const getCity = () => {
        return getResponse()
        .then(data => data.city)
        .catch(() => {
            console.log("Error!! can't get the user city");
        });
    }

    const getCountry = () => {
        return getResponse()
        .then(data => data.country)
        .catch(() => {
            console.log("Error!! can't get the user country");
        });
    }

    return {
        getCity,
        getCountry };
})();

export default ipLookUp;