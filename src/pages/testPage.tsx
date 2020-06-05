import React from "react";

import * as three from 'three.js'
import { Link } from "react-router-dom";

export default class test extends React.Component {

    render() {
        console.warn("three", three);
        return (<div>
            <Link to="/testPage1">跳转newpage-加载oss</Link>
        </div>)
    }
}