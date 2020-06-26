const ipLookUp = (() => {
  const getCity = (data) => data.city;

  const getCountry = (data) => data.country;

  const apiCall = () => fetch('http://ip-api.com/json/')
    .then(resp => resp.json())
    .then(data => ({
      city: getCity(data),
      country: getCountry(data),
    }))
    .catch(() => {
      // eslint-disable-next-line no-alert
      alert("Error!! can't get response from ip api");
    });

  return {
    apiCall,
  };
})();

export default ipLookUp;