import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class main extends React.Component<{}>{
    render() {
        console.warn("axios", axios);
        console.warn("props", this.props);
        return (<div>
            <Link to="/testPage">跳转newpage-加载three.js</Link>
        </div>)
    }
}