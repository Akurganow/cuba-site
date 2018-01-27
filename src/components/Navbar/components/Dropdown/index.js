import React, { Component } from 'react'
import cn from 'classnames'

import st from './style.module.css'

export class Dropdown extends Component {
  state = { opened: false }

  open = () => {
    this.setState({ opened: true })
  }
  close = () => {
    this.setState({ opened: false })
  }
  toggle = () => {
    this.setState({ opened: !this.state.opened })
  }

  render() {
    const { title } = this.props
    const { opened } = this.state

    return (
      <div
        tabIndex='0'
        onMouseEnter={this.open}
        onFocus={this.open}
        onBlur={this.close}
        onMouseLeave={this.close}
        className={st.dropdown}>
        <span
          onClick={this.toggle}
          className={st.title}>
          {title}
        </span>
        <div className={cn(st.items, { [st.opened]: opened })}>
          {this.props.items.map(item => this.props.renderer(item))}
        </div>
      </div>
    )
  }
}
