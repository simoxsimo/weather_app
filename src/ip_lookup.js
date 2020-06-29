import error from './errors.dom';

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
      error.renderErrors("Error!! can't get response from ip api");
    });

  return {
    apiCall,
  };
})();

export default ipLookUp;