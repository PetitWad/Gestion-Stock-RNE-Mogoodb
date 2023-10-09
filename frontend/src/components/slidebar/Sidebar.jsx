import React from "react";
import { Link } from 'react-router-dom';
import './sidebar.css';
import { BsCart3, BsFillCartFill, BsBackspace, BsFillArchiveFill, BsFillGearFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from 'react-icons/bs';


const Sidebar = ({ isOpen, OpenSideBar }) => {

    return (
        <aside id="sidebar" className={isOpen ? "sidebar-responsive" : ""}>
            < div className="sidebar-title" >
                <div className="sidebar-brand">
                    <BsCart3 className="icon_header" />&nbsp; SHOP
                </div>
                <span className="icon close_icon"><BsBackspace onClick={OpenSideBar} /></span>
            </div >
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link to="/">
                        <BsGrid1X2Fill className="icon" />&nbsp; Dashboard
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/products">
                        <BsFillArchiveFill className="icon" />&nbsp; Products
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/sell">
                        <BsFillCartFill className="icon" />&nbsp; Sell
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/customers">
                        <BsPeopleFill className="icon" />&nbsp; Customers
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/inventory">
                        <BsListCheck className="icon" />&nbsp; Inventory
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/rapports">
                        <BsMenuButtonWideFill className="icon" />&nbsp; Rapports
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/setting">
                        <BsFillGearFill className="icon" />&nbsp; Setting
                    </Link>
                </li>
            </ul>
        </aside >
    )

}

export default Sidebar