import React, { useCallback, useMemo, useState } from 'react'
import styles from './styles.module.css'
import { CloseIcon, HamburgerMenu, ksfLogo } from '../../assets'
import useWindowSize from '../../hooks/useWindowSize'

const LandingNav = () => {
  const createLinkHref = useCallback(link => `#${link.toLowerCase().split(' ').join('-')}`, [])
  const [mobileIsLaunched, setMobileIsLaunched] = useState(false)

  const { width: windowWidth } = useWindowSize()
  const isMobile = useMemo(() => windowWidth < 1090, [windowWidth])
  const NAV_ITEMS = useMemo(
    () =>
      !isMobile
        ? ['Home', 'About us', 'What we do', 'Home', 'Events', 'Testimonials', 'Contact us']
        : ['Home', 'About us', 'What we do', 'Events', 'Testimonials', 'Contact us'],
    [isMobile],
  )

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      {isMobile ? (
        <div className={styles.mobile_container}>
          <a href="#home" className={styles.mobile_logo}>
            <img src={ksfLogo} alt="logo" />
          </a>
          <HamburgerMenu className={styles.hamburger_menu} onClick={() => setMobileIsLaunched(state => !state)} />
        </div>
      ) : (
        <React.Fragment>
          <ul className={`${styles.nav_links}  ${isMobile ? styles.mobile : ''}`}>
            {NAV_ITEMS.map((item, idx) => (
              <li className={styles.nav_link__item} key={idx}>
                <a href={createLinkHref(item)} onClick={() => setMobileIsLaunched(state => false)}>
                  {idx === 3 ? <img src={ksfLogo} alt="logo" /> : item}
                </a>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}

      {isMobile && mobileIsLaunched && (
        <div className={styles.mobile_nav_links__container}>
          <CloseIcon className={styles.close_icon} onClick={() => setMobileIsLaunched(state => !state)} />
          <a href="#home" className={styles.mobile_nav_links__logo}>
            <img src={ksfLogo} alt="logo" />
          </a>

          <ul className={`${styles.mobile_nav_links}`}>
            {NAV_ITEMS.map((item, idx) => (
              <li className={styles.mobile_nav_link__item} key={idx}>
                <a onClick={() => setMobileIsLaunched(state => false)} href={createLinkHref(item)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const FooterNavLinks = ({ customClassName = '' }) => {
  const NAV_ITEMS = useMemo(() => ['Home', 'About us', 'What we do', 'Events', 'Testimonials', 'Contact us'], [])
  const createLinkHref = useCallback(link => `#${link.toLowerCase().split(' ').join('-')}`, [])

  return (
    <ul className={`${styles.footer_links}  ${customClassName}`}>
      {NAV_ITEMS.map((item, idx) => (
        <li className={styles.footer_link__item} key={idx}>
          <a href={createLinkHref(item)}> {item}</a>
        </li>
      ))}
    </ul>
  )
}

export { LandingNav, FooterNavLinks }
