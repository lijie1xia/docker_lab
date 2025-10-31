const getUser = (id) => ({ name: 'User', id: id });
console.log(getUser(1));

const getUser2 = (id) => {
  return {
    name: 'User',
    id: id
  };
}
console.log(getUser2(1));
const getUser3 = (id) => {
  return { name: 'User', id: id };
}
console.log(getUser3(1));

