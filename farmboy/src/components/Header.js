import React from 'react'
import ReactDOM from 'react-dom'

import ImgLogo from "../assets/logo.png";
import Search from "./Search";

export default function Header() {
  let linkStyle = {color: "#00684a"};
  let activeLinkStyle = {backgroundColor: "#00684a"};

  return (
    <div className="header">
      <header></header>

      <div className="row">
        <div className="p-4 p-md-5 mb-4 text-white textcenter rounded bg-light-green">
          <div className="col-md-12 px-0">
            <h1 className="display-4 title-main">Farm Boy</h1>
            <p className="lead my-3">It's All About The Food</p>
      <Search />
          </div>
        <div className="col-md-6 px-0">

        </div>
        </div>
      </div>
    </div>
  )
}
