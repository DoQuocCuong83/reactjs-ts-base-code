const checkAuth = () => {
  const authToken = localStorage.getItem("auth_token");
  if (authToken) return true;
  return false;
};

export default checkAuth;
