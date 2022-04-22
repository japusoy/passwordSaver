import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './style.scss';

/* eslint-disable */
const Sidebar = () => {
  const common = useSelector((state) => state.common);
  const [commonData, setCommonData] = useState({
    collapse: common.collapse,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setCommonData(common);
  }, [common]);

  return (
    <div id="sidebar" className={!commonData.collapse ? "sidebar-mini" : ""}>
      <ul>
        <li className="item item-selected">
          <span className="k-icon k-i-user" />
          <NavLink to="/account" className="k-item-text">
            Account
          </NavLink>
        </li>
        <li className="item">
          <span className="k-icon k-i-js" />
          <NavLink to="/forms" className="k-item-text">
            Forms
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
