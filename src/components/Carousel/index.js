import React from 'react'
import styles from './styles.module.css'
import { Tag } from '../Tag'
import { CalendarIcon, LocationIcon, TimeIcon } from '../../assets'

const Carousel = ({ items = [], controls }) => {
  return (
    <section className={styles.carousel_wrapper}>
      <header className={styles.carousel_header}>
        <h5>Events</h5>
      </header>

      <aside className={styles.event_info}>
        <div className={styles.event_info__description}>
          <Tag tagText="Completed" tagType="square" tagColor="grey" />
          <h4>Widows Mite</h4>
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

      <aside className={styles.event_info}>
        <div className={styles.event_info__description}>
          <Tag tagText="ONGOING" tagType="square" tagColor="pink" />
          <h4>Widows Mite 2.0</h4>
          <p>
            We will be feeding the Widows and Children of the fallen heroes of nigerian police force across Lagos. It
            will be singing and dancing, and rejoicing!
          </p>

          <p>The spoken word will be by Kedrick Scribner of the KSF Foundation. Please Donate to the KSF Foundation</p>
          <Tag tagText="23rd - 25th June, 2023" tagColor="blue" icon={<CalendarIcon />} customClassName={styles.tag} />
          <Tag tagText="10am prompt" tagColor="blue" icon={<TimeIcon />} customClassName={styles.tag} />
          <Tag
            tagText="The United Church of Christ AKA HEKAN located in the Nigeria Mounted Troops Police Barracks in Ikeja, Lagos"
            tagColor="blue"
            icon={<LocationIcon />}
            customClassName={styles.location_tag}
          />
        </div>
        <div className={styles.event_info__flyer}>
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:low/v1672789793/WM_GENERIC_ybn70f.jpg"
            alt="Feeding widows of fallen heroes of the Nigerian Police force event"
          />
        </div>
      </aside>
    </section>
  )
}

export { Carousel }
