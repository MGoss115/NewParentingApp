
const login = (userObj) => {
return fetch('http://localhost:8000/token-auth/', {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify(userObj),
});
    
};

export default { login };
