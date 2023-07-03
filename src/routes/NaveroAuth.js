import express from "express";
import axios from 'axios';

// const express = require('express');

const router = express.Router();
// const NAVER_CLIENT_ID = "MyyEdBGBo5at1A6J_yao"
//     // 네이버 시크릿 ID
// const NAVER_SECRECT_CLIENT_ID = "Pp1Yynxxg9"

router.get("/token", (req, res) => {
    // console.log(req.data)
    let {token} = req.query
    console.log(token)

    axios.get("https://openapi.naver.com/v1/nid/me", {headers:{
        Authorization: `Bearer ${token}`
    }}).then(response => {
        // console.log(res)
        res.send(response.data)
    })

})


export default router;
