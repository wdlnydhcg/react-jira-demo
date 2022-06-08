/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-18 08:42:14
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-06-07 20:38:35
 * @Description:
 */
import React from "react";

import "./App.css";
fetch("http://127.0.0.1:7788/api/orgTree").then((res) => {
  console.log(res);
});
function App() {
  return <div className="App"></div>;
}

export default App;
