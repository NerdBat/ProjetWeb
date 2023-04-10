const io = require("socket.io")(4040 , {
    cors: {
        origin : ['http://localhost:3000']
    }
});
// création d'un endpoint sur le front-end`

io.on("connection",socket =>{
    console.log(socket.id);
    console.log(socket.origin);
    socket.on('custom-events',(number,string) =>{
        console.log(number, string);
    });
    socket.on('event', (string) =>{
        console.log(string)
    });

})


