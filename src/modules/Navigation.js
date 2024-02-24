import React, { useEffect } from "react";
import { NavLink, NavNavLink } from "react-router-dom";

const Navigation = () => {
  let listenerAttached = false;

  useEffect(() => {
    const trigger = document.querySelector(".menu-toggle");
    const mobileItems = document.querySelectorAll(".mobile-item");

    for (let mobileItem of mobileItems) {
      mobileItem.addEventListener("click", (e) => {
        const mobileNav = document.querySelector(".mobile-menu");
        mobileNav.classList.remove("mobile-menu-toggled");
      });
    }

    if (!listenerAttached) {
      listenerAttached = true;
      trigger.addEventListener("click", (e) => {
        const mobileNav = document.querySelector(".mobile-menu");

        if (mobileNav.classList.contains("mobile-menu-toggled")) {
          console.log("untoggled");
          mobileNav.classList.remove("mobile-menu-toggled");
        } else {
          console.log("toggled");
          mobileNav.classList.add("mobile-menu-toggled");
        }
      });
    }
  }, []);

  return (
    <nav className="nav">
      <div className="menu-toggle">&#9776;</div>

      <div className="menu mobile-menu">
        <ul>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active mobile-item" : "mobile-item"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active mobile-item" : "mobile-item"
              }
              to="/publications"
            >
              Publications
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active mobile-item" : "mobile-item"
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active mobile-item" : "mobile-item"
              }
              to="/developer"
            >
              Dev
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active mobile-item" : "mobile-item"
              }
              to="/designer"
            >
              Design
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active mobile-item" : "mobile-item"
              }
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="menu desktop-menu">
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/publications"
            >
              Publications
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/developer"
            >
              Dev
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/designer"
            >
              Design
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
