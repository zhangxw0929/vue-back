let http = require('http');
let users = [
  {id: 1, name: 'John Doe'},
  {id:1, name: '****'}
]
let server = http.createServer(function (req,res){
  res.setHeader('Access-Control-Allow-Rriging', '*');
  if(req.url === '/api/users'){
    res.end(JSON.stringify(users));
  }else {
    res.end('Not Found');
  }
});
server.listen(3000,() => {
  console.log('Server is running on port 3000');
});