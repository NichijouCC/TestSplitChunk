import React from "react";
import oss from 'ali-oss';
import { Link } from "react-router-dom";

export default function test() {
    console.warn("oss", oss)
    return (<div>测试！！
        <Link to='/'>回到主页</Link>
    </div>)
}