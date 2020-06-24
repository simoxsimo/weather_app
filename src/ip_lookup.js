const ipLookUp = (() => {

    const getCity = (data) => {
        return data.city;
    }

    const getCountry = (data) => {
        return data.country;
    }

    const apiCall = () => {
        return fetch('http://ip-api.com/json/')
               .then(resp => resp.json())
               .then(data => {
                  return { 
                    city: getCity(data),
                    country: getCountry(data)
                  }
               })
               .catch(() => {
                  console.error("Error!! can't get response from ip api");
               });
    }

    return {
        apiCall
    };
})();

export default ipLookUp;