import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = () => {
    // En un escenario real, deberías consultar una base de datos y verificar las credenciales aquí.
    // Por simplicidad, utilizaremos valores estáticos para usuario y contraseña.
    const validUsername = 'anndersson';
    const validPassword = '1234';

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
        <p>Autenticación satisfactoria. ¡Bienvenido!</p>
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
