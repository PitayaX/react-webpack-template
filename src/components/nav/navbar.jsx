import React from 'react'
const Navbar = React.createClass({
  render () {
    return (
      <div className="navbar">
        <div className="nav-item-home">
           <a className="nav-item-home-a" href="#">
            <i className="fa fa-home fa-2x"></i>
          </a>
        </div>
        <div className="nav-item-tools">
          <a className="nav-item-tools-a" href="#">
            <i className="fa fa-th fa-2x"></i>
          </a>
        </div>
        <div className="nav-item-editor">
           <a className="nav-item-editor-a" href="#">
            <i className="fa fa-pencil fa-2x"></i>
          </a>
        </div>
        <div></div>
      </div>
    )
  }
})
export default Navbar
