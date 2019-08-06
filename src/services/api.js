import fetch from 'isomorphic-fetch';

const ROOT = 'http://localhost:8081/'

function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(ROOT) === -1) ? ROOT + endpoint : endpoint
  return fetch(fullUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error calling api ...');
      }
    })
}

export const fetchInventory = () => callApi(`inventory`)
export const fetchItems = (id) => callApi(`inventory/${id}`)

export default {
  fetchInventory,
  fetchItems
}