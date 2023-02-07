import React, { useState, useEffect } from 'react';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      // código para obter o token
      setToken(tokenFromApi);
    };

    getToken();
  }, []);

  return <div>{token ? <p>Token: {token}</p> : <p>Loading...</p>}</div>;
};

export default App;
