
const login = (userObj) => {
return fetch('https://parenting-v3.herokuapp.com/token-auth/', {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify(userObj),
});
    
};

export default { login };
