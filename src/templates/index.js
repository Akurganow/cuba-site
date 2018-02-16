import React, { Component } from 'react'
import cn from 'classnames'
import Link from 'gatsby-link'
import { connectComponent } from '../state/connectComponent'
import CarouselWidget from '../components/CarouselWidget'
import PageLayout from '../components/PageLayout'
import Actions from '../components/Actions'
import { filterLocales } from '../modules/locales'
import PhotoCollage from '../components/PhotoCollage'
import Gallery from '../components/Gallery'
import Poster from '../components/Poster'
import Picture from '../components/Picture'
import st from '../pages/style.module.css'

const leftPad = require('left-pad')

const galleryItemAdapter = image => ({
  url: image.file.url,
  contentType: image.file.contentType,
})

class IndexPage extends Component {
  render() {
    const { data: { kitchen, bar, slider, gallery } } = this.props.pathContext
    const locale = this.props.locale
    const t = this.props.actions.translate
    const menu = [...kitchen, ...bar]

    return (
      <PageLayout
        {...this.state}
        {...this.props}>
        <CarouselWidget
          locale={locale}
          pictures={slider} />
        <Actions {...this.props} />
        <h2 className={st.heading}>{t({ ru: 'О Кубе', en: 'About Cuba' })}</h2>
        <p style={{ width: '100%', textAlign: 'center' }}>
          {t({
            ru: 'CUBA BAR – это остров кубинского праздника в центре Петербурга.',
            en: 'CUBA BAR – is an island of the Cuban holiday in the center of St. Petersburg',
          })}
        </p>
        <div className={st.columns}>
          <div className={st.column}>
            <h3>
              {t({
                ru: 'Каждый день:',
                en: 'Every day:',
              })}
            </h3>
            <p>
              {t({
                ru: `Жители и гости города приходят к нам провести деловые встречи или увидеться с друзьями, получить удовольствие от работы в уютном месте и испытать радость от общения во время аппетитного ланча.
Кубинский колорит и дружеское настроение, кухня Карибского бассейна и разнообразный бар оставят теплые воспоминания от времени, проведенного в «Cuba bar».`,
                en: `Жители и гости города приходят к нам провести деловые встречи или увидеться с друзьями, получить удовольствие от работы в уютном месте и испытать радость от общения во время аппетитного ланча.
Кубинский колорит и дружеское настроение, кухня Карибского бассейна и разнообразный бар оставят теплые воспоминания от времени, проведенного в «Cuba bar».`,
              })}
            </p>
          </div>
          <div className={st.column}>
            <h3>
              {t({
                ru: 'Каждый вечер и все выходные:',
                en: 'Every night and all weekends:',
              })}
            </h3>
            <p>
              {t({
                ru: `Мы наслаждаемся живой кубинской музыкой и страстными национальными танцами, горячим мясом и кукурузой, приготовленной на гриле, мастерством бармена и талантом кальянщика.
Присоединяйтесь к нам, чтобы проникнуться кубинской атмосферой и стать нашими друзьями!`,
                en: `Мы наслаждаемся живой кубинской музыкой и страстными национальными танцами, горячим мясом и кукурузой, приготовленной на гриле, мастерством бармена и талантом кальянщика.
Присоединяйтесь к нам, чтобы проникнуться кубинской атмосферой и стать нашими друзьями!`,
              })}
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>
            {t({
              ru: 'У нас есть всё, что нужно для приятного отдыха:',
              en: 'У нас есть всё, что нужно для приятного отдыха:',
            })}
          </h3>
          <p>
            {t({
              ru: 'напитки на любой вкус, сочные бургеры и стейки, кальяны и настольные игры.',
              en: 'напитки на любой вкус, сочные бургеры и стейки, кальяны и настольные игры.',
            })}
          </p>
        </div>
        <Gallery
          items={gallery.find(edge => edge.node.title === 'На главную' && edge.node.node_locale === locale).node.image}
          adapter={galleryItemAdapter} />
        <section className={st.section}>
          <h2 className={st.heading}>{t({ ru: 'Зажигательные Вечеринки', en: 'The Hottest Parties' })}</h2>
          <h3 className={st.subheading}>
            {t({
              ru: 'Каждую пятницу и субботу',
              en: 'Каждую пятницу и субботу',
            })}
            <br />
            {t({
              ru: 'с 21:00 до 23:00',
              en: 'с 21:00 до 23:00',
            })}
          </h3>
          <p className={st.section_description}>
            {t({
              ru: 'приглашаем насладиться живой кубинской музыкой и страстными национальными танцами!',
              en: 'приглашаем насладиться живой кубинской музыкой и страстными национальными танцами!',
            })}
          </p>
          <div className={st.action_link}>
            <Link to="/events">{t({ ru: 'Афиша', en: 'Events' })}</Link>
          </div>
          <div className={st.index_events}>
            {gallery.find(edge => edge.node.title === 'Афиша на главной' && edge.node.node_locale === locale).node.image.map(image => {
              return (
                <div
                  key={image.file.url}
                  className={st.index_event}>
                  <h3 className={st.index_event_title}>{image.description}</h3>
                  <Picture
                    className={st.index_event_image}
                    sizes={{
                      default: { w: (1190 / 2).toFixed(0), h: 400 },
                      '(max-width:1279px)': { w: (1189 / 2).toFixed(0), h: 400 },
                      '(max-width:1023px)': { w: (951 / 2).toFixed(0), h: 313 },
                      '(max-width:767px)': { w: (735).toFixed(0), h: 484 },
                      '(max-width:479px)': { w: (447).toFixed(0), h: 294 },
                    }}
                    file={image.file} />
                </div>
              )
            })}
          </div>
        </section>

        <section className={st.section}>
          <h2 className={st.heading}>{t({ ru: 'Вкуснейшие Блюда', en: 'Delicious dishes' })}</h2>
          <p className={st.section_description}>
            {t({
              ru: 'Кухня Карибского бассейна и разнообразный бар.',
              en: 'Кухня Карибского бассейна и разнообразный бар.',
            })}
          </p>
          <PhotoCollage
            t={t}
            locale={locale}
            rootPage={'menu'}
            items={menu} />
        </section>
      </PageLayout>
    )
  }
}

export default connectComponent(IndexPage)
