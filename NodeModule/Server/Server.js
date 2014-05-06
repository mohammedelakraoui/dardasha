/**
 * Created by server-pc on 05/05/14.
 */
//console.log("Salut");
var http=require('http');

httpServer=http.createServer(function(req,res){

    console.log('Un utilisateur connecté');
   // res.end('index.html');
});
httpServer.listen(1313);

var io=require('socket.io').listen(httpServer);

io.sockets.on('connection',function(){

        console.log('Nouveau utilisateur');
        io.sockets.on('login',function(user){
            console.log(user);

        })
});