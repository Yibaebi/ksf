import React from 'react'
import styles from './styles.module.css'
import { Tag } from '../Tag'
import { CalendarIcon, LocationIcon, TimeIcon } from '../../assets'

const Carousel = ({ items = [], controls }) => {
  return (
    <section className={styles.carousel_wrapper}>
      <header className={styles.carousel_header}>
        <h5>upcoming events</h5>
      </header>

      <aside className={styles.event_info}>
        <div className={styles.event_info__description}>
          <Tag tagText="Upcoming" tagType="square" tagColor="pink" />
          <h4>Widows mite</h4>
          <p>Feeding widows of fallen heroes of the Nigerian Police force</p>
          <Tag tagText="8th Jan, 2023" tagColor="blue" icon={<CalendarIcon />} customClassName={styles.tag} />
          <Tag tagText="10am-12pm" tagColor="blue" icon={<TimeIcon />} customClassName={styles.tag} />
          <Tag
            tagText="The United church of christ in Nigeria AKA HEKAN Mounted troops, Police barracks, Ikeja Lagos"
            tagColor="blue"
            icon={<LocationIcon />}
            customClassName={styles.location_tag}
          />
        </div>
        <div className={styles.event_info__flyer}>
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:low/v1672789793/upcoming_event_1_oqs6y1.jpg"
            alt="Feeding widows of fallen heroes of the Nigerian Police force event"
          />
        </div>
      </aside>
    </section>
  )
}

export { Carousel }
