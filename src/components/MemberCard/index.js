import React from 'react'
import styles from './styles.module.css'

const TeamMemberCard = ({ picture = '', name = '', position = '', customClassName = '' }) => {
  return (
    <article className={`${styles.card_container} ${customClassName}`}>
      <img src={picture} alt={name} />
      <div className={styles.member_details}>
        <h6>{name}</h6>
        <p>{position}</p>
      </div>
    </article>
  )
}

export { TeamMemberCard }
