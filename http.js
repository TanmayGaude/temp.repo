const http = require('http')


const server = http.createServer((req,res)=>{
if (req.url === '/'){
    res.write('THIS IS MY HOME PAGE----') 
    res.end()
}
if (req.url === '/about'){
    res.write('THIS IS MY ABOUT PAGE----')
    res.end()
} 
res.end(`<h1>oops</h1>
<p>sorry page not found</p>
<a href="/">go back</a>
`)

})

server.listen(3000,()=>{
    console.log('srever is up and running');
})