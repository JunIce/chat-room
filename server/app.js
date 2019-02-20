const Koa = require('koa')
let app = new Koa
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)
const fs = require('fs')
const path = require('path')
const static = require('koa-static')

app.use(static(path.resolve(__dirname, '../dist')))
app.use((ctx) => {
    ctx.type = 'html'
    ctx.body = fs.createReadStream(path.resolve(__dirname, '../dist/index.html'))
})
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log(msg)
        socket.broadcast.emit('zpzpzpzpzp', {
            name: 'serve',
            val: `${msg}`
        })
    });
});
server.listen(3001, () => {
    console.log(`listenning at 3001`)
})