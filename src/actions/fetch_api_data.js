import axios from 'axios';

export function fetchAPIResponse(city) {
  return function(dispatch) {
    axios
      .get(
        'http://api-cdn.apixu.com/v1/current.json?key=718ed9f7fcbb4722b6e162447190709&q=' +
          city
      )
      .then(response => {
        let arr = [];
        for (var key in response.data.location) {
          arr.push(response.data.location[key]);
        }
        dispatch({ type: 'FETCH_LOCATION', payload: arr });

        let arr2 = [];
        for (var key2 in response.data.current) {
          arr2.push(response.data.current[key2]);
        }
        arr2.splice(5, 1);
        dispatch({ type: 'FETCH_WEATHER', payload: arr2 });

        let arr3 = [];
        for (var key3 in response.data.current.condition) {
          arr3.push(response.data.current.condition[key3]);
        }

        dispatch({ type: 'FETCH_CONDITIONS', payload: arr3 });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
