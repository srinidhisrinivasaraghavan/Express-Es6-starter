import http from 'http';
import express from 'express';

let app = express();
app.server = http.createServer(app);

app.get('/', (req,res)=>{
	res.send("hello world");
});

app.server.listen(process.env.PORT || 8080);
console.log(`Started on port 8080`);

export default app;