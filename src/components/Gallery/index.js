import React from 'react'
import cn from 'classnames'

import Picture from '../Picture'

import st from './style.module.css'

const FirstItem = props => {
  return (
    <Picture
      className={st.image}
      sizes={{
        default: { w: 1190, h: 400},
        '(max-width:1279px)': { w: 1189, h: 400},
        '(max-width:1023px)': { w: 951, h: 313},
        '(max-width:767px)': { w: 735, h:242},
        '(max-width:479px)': { w: 447, h: 147},
      }}
      file={props} />
  )
}

const Item = props => {
  return (
    <Picture
      className={st.image}
      sizes={{
        default: { w: (1190/4).toFixed(0), h: (400/2).toFixed(0)},
        '(max-width:1279px)': { w: (1189/4).toFixed(0), h: (400/2).toFixed(0)},
        '(max-width:1023px)': { w: (951/4).toFixed(0), h: (313/2).toFixed(0)},
        '(max-width:767px)': { w: (735/4).toFixed(0), h:(242/2).toFixed(0)},
        '(max-width:479px)': { w: (447/4).toFixed(0), h: (147/2).toFixed(0)},
      }}
      file={props} />
  )
}

export default ({ items, adapter }) => {
  const firstItem = items.slice(0, 1)[0]
  const itemsArray = items.slice(1)

  return (
    <div>
      <div className={st.first_item}>
        <FirstItem {...adapter(firstItem)} />
      </div>
      <div className={st.items}>{itemsArray.map(item => <Item
        key={item.file.url}
        {...adapter(item)} />)}</div>
    </div>
  )
}
