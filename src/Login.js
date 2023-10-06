import React, { useState } from 'react';

const Login = () => {
  //definicion de variables de estado y las funciones que setean el estado
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //valor creado despues de definir la funcion del manejador de autenticacion
  const [authenticated, setAuthenticated] = useState(false);
  //se define el controlador del evento autenticacion
  const handleAuthentication = () => {
    const validUsername = 'anndersson';
    const validPassword = '1234';
    // uso del operador de estricta igualdad para determinar el resultado booleano
    if (username === validUsername && password === validPassword) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };

  return (
    <div className='login'>
      <h2>INGRESO AL SISTEMA</h2>
      {authenticated ? (
        <p>Autenticación satisfactoria.</p>
      ) : (
        <form>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleAuthentication}>Ingresar</button>
        </form>
      )}
    </div>
  );
};

export default Login;
