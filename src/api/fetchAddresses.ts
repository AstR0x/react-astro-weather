const params = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token 9b7aa9667052e5152d2a2b2a3714d9847d57f147',
  },
  body: '',
};

export const fetchAddresses = async (address: string) => {
  params.body = JSON.stringify({ query: address, count: 4 });
  const response = await fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', params);
  const addresses = await response.json();

  return addresses;
};
