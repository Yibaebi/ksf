import React from 'react'
import styles from './styles.module.css'

const Tag = ({ icon = '', tagText = 'text', customClassName = '', tagType = 'rounded', tagColor = 'blue' }) => {
  return (
    <span className={`${styles.tag} ${styles[tagType]} ${styles[tagColor]} ${customClassName}`}>
      {tagType === 'rounded' ? <span className={styles.icon}>{icon}</span> : null} {tagText}
    </span>
  )
}

export { Tag }
