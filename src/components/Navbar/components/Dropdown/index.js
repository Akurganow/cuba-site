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
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        className={st.dropdown}>
        <span className={st.title}>{title}</span>
        <div className={cn(st.items, { [st.opened]: opened })}>
          {this.props.items.map(item => this.props.renderer(item))}
        </div>
      </div>
    )
  }
}
