const params = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token YOUR_TOKEN',
  },
  body: '',
};

export const fetchAddresses = async (address: string) => {
  params.body = JSON.stringify({ query: address, count: 4 });
  const response = await fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', params);
  const addresses = await response.json();

  return addresses;
};
