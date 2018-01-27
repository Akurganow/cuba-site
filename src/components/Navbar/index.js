import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'
import Locale from '../Locale'
import { Dropdown } from './components/Dropdown'

const dropdownItemRenderer = ({ to, title }) => (
  <Link
    activeClassName={st.active}
    className={st.link}
    to={to}>
    {title}
  </Link>
)

const Item = ({ title, to, items }) => {
  if (to && !items) {
    return (
      <li className={st.item}>
        <Link
          activeClassName={st.active}
          className={st.link}
          to={to}>
          {title}
        </Link>
      </li>
    )
  } else {
    return (
      <li className={st.item}>
        <Dropdown
          title={title}
          items={items}
          renderer={dropdownItemRenderer} />
      </li>
    )
  }
}

const Navbar = props => {
  const t = props.actions.translate
  const linksFirst = [
    {
      to: '/',
      title: t({ ru: 'Главная', en: 'Home' }),
    },
    {
      to: '/events',
      title: t({ ru: 'Афиша', en: 'Events' }),
    },
    {
      title: t({ ru: 'Меню', en: 'Menu' }),
      items: [
        {
          to: '/kitchen',
          title: t({ ru: 'Кухня', en: 'Kitchen' }),
        },
        {
          to: '/bar',
          title: t({ ru: 'Бар', en: 'Bar' }),
        },
      ],
    },
  ]
  const linksLast = [
    {
      to: '/contacts',
      title: t({ ru: 'Контакты', en: 'Contacts' }),
    },
  ]

  return (
    <ul className={cn(st.navbar, props.className)}>
      <div className={st.first}>{linksFirst.map(link => <Item
        key={link.title}
        {...link} />)}</div>
      <div className={st.center} />
      <div className={st.last}>
        {linksLast.map(link => <Item
          key={link.title}
          {...link} />)}
        <li className={st.item}>
          <Locale {...props} />
        </li>
      </div>
    </ul>
  )
}

export default Navbar
