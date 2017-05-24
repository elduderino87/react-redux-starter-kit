import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Todo from './TodoView'
import Notifications from './NotificationsView'

export const HomeView = () => (
  <div className='homepage'>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    <section className='l-flex'>
      <article className='homepage__widget'>
        <Todo />
      </article>
      <article className='homepage__widget'>
        <Notifications />
      </article>
    </section>
  </div>
)

export default HomeView
