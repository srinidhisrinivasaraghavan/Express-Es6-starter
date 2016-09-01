import http from 'http';
import express from 'express';

let app = express();
app.server = http.createServer(app);
app.server.listen(process.env.PORT || 8080);
console.log(`Started on port ${app.server.address().port}`);

export default app;