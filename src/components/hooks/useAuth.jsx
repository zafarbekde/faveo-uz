
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (cookies.accessToken && cookies.refreshToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [cookies]);

  const login = async (email, password) => {
    const response = await axios.post('https:localhost:8080/api/v1/auth/login', {
      email,
      password,
    });

    if (response.data.accessToken && response.data.refreshToken) {
      setCookie('accessToken', response.data.accessToken, { path: '/' });
      setCookie('refreshToken', response.data.refreshToken, { path: '/' });
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    removeCookie('accessToken', { path: '/' });
    removeCookie('refreshToken', { path: '/' });
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;