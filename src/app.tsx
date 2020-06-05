import { RoutesSetting } from "./pages/routes/route";
import React from "react";
import { App3dConfig } from "./appconfig";

export default function App() {
    console.warn(App3dConfig.data);
    return (
        <div>测试 - 代码分割
            {RoutesSetting}
        </div>
    )
}