const apiUrl = process.env.REACT_APP_API_URL;
export const itemsService = {
  getItems,
  getItemDetails,
  getItemsByCreator,
};

function getItems(query) {
  const requestOptions = {
    method: "GET",
  };
  return fetch(`${apiUrl}/items?q=${query}`, requestOptions).then(
    handleResponse
  );
}

function getItemDetails(id) {
  const requestOptions = {
    method: "GET",
  };
  return fetch(`${apiUrl}/items/${id}`, requestOptions).then(handleResponse);
}

function getItemsByCreator(id) {
  const requestOptions = {
    method: "GET",
  };
  return fetch(`${apiUrl}/creators/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response?.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
