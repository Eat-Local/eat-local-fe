const baseUrl = "https://throbbing-wood-3534.fly.dev/api/v1/business"

const checkError = (response) => {
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return response.json();
}

const getBusiness = (type, location) => {
  return fetch(`${baseUrl}?business=${type}&location=${location}`)
    .then(response => checkError(response))
}

export { getBusiness };