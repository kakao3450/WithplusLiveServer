import express from "express";
import http from "http";
// import와 require 동시에 사용하기 위해 
import { createRequire} from "module"

//ES 모듈로 실행되는 파일에서 __dirname을 못 써서 import 해줌
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import NaverAuthRoutes from "./src/routes/NaveroAuth.js" 


const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// index.js로 서버 돌림
const app = express();
const server = http.createServer(app);
const path = require('path')
const PORT = 80;
app.get("/", (req,res) => {
  res.send("hello world")
})
app.use('/naver', NaverAuthRoutes)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const staticPath = path.join(__dirname, 'WithPlus_LIve/WithplusLive/build');

// app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "WithPlus_LIve/WithplusLive/build/index.html"));
// });


// 노드에 있는 네이버oAuth를 가저옴
// const NaverAuthRoutes = require("./src/routes/NaveroAuth.js")



// app.get('/oauth/naver', passport.authenticate('naver'));

// app.get('/oauth/naver',
//     passport.authenticate('naver', { failureRedirect: '/login' }),
//     function(req, res) {
//         // 로그인 성공 시 콘솔에 사용자 정보 출력
//         console.log(req.user);
//         res.redirect('/'); // 로그인 성공 후 리다이렉트할 경로
//     }
// );

// 서버에서 oauth 물리는 법
// app.use(express.static)
// app.use("/oauth", oAuth);

