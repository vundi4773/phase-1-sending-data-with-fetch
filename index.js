// Add your code here
function submitData(userName, userEmail){
const postedData = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name:'Jackson',
    email:'Jay@gmail.com',
  }),
};

fetch("http://localhost:3000/users", postedData)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function(error){
    console.log('error posting data')
  });
return fetch
}