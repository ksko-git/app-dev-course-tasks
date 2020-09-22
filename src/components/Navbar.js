import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-success">
    <div className="navbar-brand">
      Задания для кафедры GoodLine
    </div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/"
          exact
        >
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/task1"
        >
          Задание №1
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/task2"
        >
          Задание №2
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/task3"
        >
          Задание №3
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/task4"
        >
          Задание №4
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/task5"
        >
          Задание №5
        </NavLink>
      </li>
    </ul>
  </nav>
)