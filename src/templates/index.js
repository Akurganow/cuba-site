import React, { Component } from 'react'
import Link from 'gatsby-link'
import { connectComponent } from '../state/connectComponent'
import CarouselWidget from '../components/CarouselWidget'
import PageLayout from '../components/PageLayout'
import Actions from '../components/Actions'
import { filterLocales } from '../modules/locales'
import PhotoCollage from '../components/PhotoCollage'
import Poster from '../components/Poster'
import st from '../pages/style.module.css'

const leftPad = require('left-pad')

class IndexPage extends Component {
  render() {
    const { data: { events, menu, gallery, slider } } = this.props.pathContext
    const locale = this.props.locale
    const t = this.props.actions.translate

    return (
      <PageLayout
        {...this.state}
        {...this.props}>
        <CarouselWidget
          locale={locale}
          pictures={slider} />
        <Actions {...this.props} />
        <h2 className={st.heading}>{t({ ru: 'О Кубе', en: 'About Cuba' })}</h2>
        <p style={{width: '100%', textAlign: 'center'}}>
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
        <section className={st.section}>
          <h2 className={st.heading}>{t({ ru: 'Зажигательные Вечеринки', en: 'The Hottest Parties' })}</h2>
          <p className={st.section_description}>
            {t({
              ru: 'Каждую пятницу и субботу приглашаем насладиться живой кубинской музыкой и страстными национальными танцами!',
              en: 'Каждую пятницу и субботу приглашаем насладиться живой кубинской музыкой и страстными национальными танцами!',
            })}
          </p>
          <PhotoCollage
            t={t}
            locale={locale}
            rootPage={'events'}
            items={events} />
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
