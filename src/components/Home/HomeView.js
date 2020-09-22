import React from 'react'
import {NavLink} from 'react-router-dom'

export const Home = () => {

  return (    
    <div class="card text-center pb-4 home">
      <div class="card-body">
        <h5 class="card-title">Задания для курса «Разработка приложений»</h5>
        <p class="card-text">Чтобы посмотреть решение, нажмите на одну из кнопок ниже.</p>
        <div className="homeBtn">
          <button type="button" class="btn btn-outline-primary">
            <NavLink
              className="nav-link"
              to="/task1"
              exact
            >
              Задание №1
            </NavLink>
          </button>
          <button type="button" class="btn btn-outline-info">
            <NavLink
              className="nav-link"
              to="/task2"
              exact
            >
              Задание №2
            </NavLink>
          </button>
          <button type="button" class="btn btn-outline-success">
            <NavLink
              className="nav-link"
              to="/task3"
              exact
            >
              Задание №3
            </NavLink>
          </button>
          <button type="button" class="btn btn-outline-warning">
            <NavLink
              className="nav-link"
              to="/task4"
              exact
            >
              Задание №4
            </NavLink>
          </button>
          <button type="button" class="btn btn-outline-dark">
            <NavLink
              className="nav-link"
              to="/task5"
              exact
            >
              Задание №5
            </NavLink>
          </button>
        </div>
      </div>
    </div>    
  )
}