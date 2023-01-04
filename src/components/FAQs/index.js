import { useState } from 'react'

import styles from './styles.module.css'
import { FAQCollapse, FAQExpand } from '../../assets'

export function FAQ({ data = [] }) {
  return (
    <section className={`${styles['faq']}`}>
      {data.map((item, idx) => (
        <Question key={idx} question={item.question} answer={item.answer} />
      ))}
    </section>
  )
}

const Question = props => {
  const [isActive, setActive] = useState(false)
  const handleClick = id => setActive(!isActive)

  return (
    <div className={styles.question_wrapper}>
      <div className={styles.question} id={props.id} onClick={() => handleClick(props.id)}>
        <h3>{props.question}</h3>
        <button>{isActive ? <FAQCollapse /> : <FAQExpand />}</button>
      </div>
      <div className={isActive ? `${styles.answer} ${styles.active}` : styles.answer}>{props.answer}</div>
    </div>
  )
}
