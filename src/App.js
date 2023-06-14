import { Carousel as UpcomingEvent, LandingNav, TeamMemberCard, FAQ, FooterNavLinks } from './components'
import styles from './App.module.css'
import {
  ContactEmailIcon,
  ContactLocationIcon,
  ContactPhoneIcon,
  DownloadIcon,
  FacebookIcon,
  InstagramIcon,
  LeftArrowIcon,
  LinkedInIcon,
  MissionIcon,
  RightArrowIcon,
  TwitterIcon,
  VisionIcon,
  affiliate_1,
  affiliate_2,
  affiliate_3,
  affiliate_4,
  affiliate_5,
  affiliate_6,
  affiliate_7,
  ksfLogo,
} from './assets'
import CountUp from 'react-countup'
import { useCallback, useMemo } from 'react'
import useWindowSize from './hooks/useWindowSize'
import FAQ_LIST from './FAQ.json'

const App = () => {
  const TEAM_MEMBERS = useMemo(
    () => [
      {
        position: 'CEO',
        picture: 'https://res.cloudinary.com/dscuc72dw/image/upload/f_auto/v1672789785/CEO_msjcsj.jpeg',
        name: 'Kedrick Scribner',
      },
      {
        position: 'Marketing Director',
        name: 'M. Scribner',
        picture: 'https://res.cloudinary.com/dscuc72dw/image/upload/f_auto/v1672789792/MD_vj3fjb.png',
      },
      {
        position: 'Director of Finance',
        name: 'C. Njuwa',
        picture: 'https://res.cloudinary.com/dscuc72dw/image/upload/f_auto/v1672789790/Finance_Director_rdphnl.png',
      },
      {
        position: 'Marketing Director',
        name: 'R. Triplin',
        picture: 'https://res.cloudinary.com/dscuc72dw/image/upload/f_auto/v1672789791/marketing_director_vrjeel.png',
      },
      {
        position: 'Managing Director',
        name: 'K. Scribner Jr',
        picture: 'https://res.cloudinary.com/dscuc72dw/image/upload/f_auto/v1672789790/managing-director_tzy1wu.png',
      },
    ],
    [],
  )

  const { width: windowWidth } = useWindowSize()
  const isMobile = useMemo(() => windowWidth < 1090, [windowWidth])
  const formattingFn = useCallback(num => num.toLocaleString(), [])

  return (
    <div className={styles.app}>
      <header className={`${styles.hero_section} ${isMobile ? styles.mobile : ''}`} id="home">
        <LandingNav />
        <section className={styles.hero_content}>
          <h1>Spreading unconditional love through feeding, clothing and education.</h1>
          <p>Donating and helping out the less privileged is one of the best things you can do for humanity.</p>
          <div className={styles.button_group}>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=EQRUSYCARBMFY"
              target="_blank"
              rel="noreferrer"
              className={`${styles.button} ${styles.button_yellow}`}
            >
              Donate now
            </a>
            <button className={styles.button}>
              <DownloadIcon /> Download report & brochure
            </button>
          </div>
          <div className={styles.video_overlay}></div>
          <video
            className={styles.hero_video}
            src="https://res.cloudinary.com/dscuc72dw/video/upload/q_auto:good/f_auto/v1672660955/BG_video_upmncq.mp4"
            autoPlay
            muted
            loop
          ></video>
        </section>
      </header>
      <section className={styles.gallery_section}>
        <img
          src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789788/boy_smile_vi9kt4.png"
          alt="boy smiling"
        />
        <div className={styles.gallery_section__group}>
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789788/child_smile_ngtm6d.png"
            alt="boy smiling"
          />
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789789/corn_gbwmkq.png"
            alt="grains"
          />
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789787/children_smile_ywhy9p.png"
            alt="children smiling"
          />
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789791/grandma_efaryj.png"
            alt="elderly smiling"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789792/woman_smile_nbrtbk.png"
          alt="woman smiling"
        />
      </section>

      <section className={styles.about_section} id="about-us">
        <h6 className={styles.header_intro__text}>About us</h6>
        <h4>
          The Kedrick Scribner Foundation provides the resources necessary for less privileged people to live
          sustainably.
        </h4>
        <hr />
        <section className={styles.about_gallery}>
          <div className={styles.about_gallery__image}>
            <div className={styles.about_gallery__description}>
              <h6 className={styles.header_intro__text}>MAKE AN IMPACT</h6>
              <h4>Your support is powerful.</h4>
              <hr />
              <p>
                You have the opportunity to impact the lives of individuals and families devastated by poverty. Your
                generosity is our power house for an impactful change and development
              </p>
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789788/about_us__video_tjnipk.png"
            alt=""
          />
        </section>
        <p>
          The Kedrick Scribner Foundation, Inc. was established with the belief that we cannot live our lives alone. Our
          company really believes that individuals who have the ability to assist others must do so. The initiatives we
          run give poor communities food, clothing, and access to medication. They also give college students who want
          to study in the U.S. the chance to further their education. Our foundation’s aim is to provide food, water,
          shelter, clothing, hygiene supplies, medical treatment, sanitation, education, and vocational training to
          underprivileged areas while also helping them acquire the skills they need to become self-sufficient and to
          promote sustainability.
        </p>

        <section className={styles.about_mission_and_vision}>
          <div className={styles.card}>
            <MissionIcon className={styles.svg} />
            <h4>Our Mission</h4>
            <p>
              Our mission is to provide underprivileged individuals with food, educational, and medical resources by
              providing goods and establishing one-of-a-kind experiences through the formation of educational sponsor
              programs.
            </p>
          </div>
          <div className={styles.card}>
            <VisionIcon className={styles.svg} />
            <h4>Our Vision</h4>
            <p>
              The Kedrick Scribner Foundation's vision is to become a global leader in providing the resources necessary
              for impoverished people to live sustainably.
            </p>
          </div>
        </section>
      </section>

      <div className={styles.what_we_do_section__wrapper} id="what-we-do">
        <section className={styles.what_we_do_section}>
          <header className={styles.what_we_do_section__header}>
            <div className={styles.grouped_content}>
              <h6 className={styles.header_intro__text}>WHAT WE DO</h6>
              <h4>For an effective & Intentional global impact</h4>
            </div>
            <p>
              Our organization's main goals are to provide food and health supplies to parents of young children and
              support people between the ages of 18 and 29 who desire to continue their college education in the United
              States.
            </p>
          </header>
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672791551/what_we_do__video_uaxyyu.png"
            alt=""
          />
          <p>In our years of service we have impacted lives and changed stories and here are some metric</p>
          <section className={styles.what_we_do_section__stats}>
            <div className={styles.stats_group}>
              <h3>
                +<CountUp enableScrollSpy end={400} />k
              </h3>
              <p>Lives touched</p>
            </div>
            <div className={styles.stats_group}>
              <h3>
                +$
                <CountUp enableScrollSpy end={200000} formattingFn={formattingFn} />
              </h3>
              <p>In Donations & Fundraising</p>
            </div>
            <div className={styles.stats_group}>
              <h3>
                <CountUp enableScrollSpy end={20} formattingFn={formattingFn} />
              </h3>
              <p>Countries visited</p>
            </div>
          </section>
        </section>
      </div>

      <div className={styles.awards_section__wrapper}>
        <section className={styles.awards_section}>
          <h6 className={styles.header_intro__text}>Awards & Recognition</h6>
          <h4>1. Presidential volunteers service award</h4>
          <hr />
          <h5>Congratulatory messages</h5>
        </section>

        <div className={styles.message_list}>
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789790/congratulations_1_z7qeyf.png"
            alt="congraturlatory message 1"
          />
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789790/congratulations_3_ttpfq0.png"
            alt="congraturlatory message 3"
          />
          <img
            src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1672789790/congratulations_2_adptmz.png"
            alt="congraturlatory message 2"
          />
        </div>
      </div>

      <div className={styles.events_section__wrapper} id="events">
        <section className={styles.events_section}>
          <header className={styles.events_section__header}>
            <div className={styles.grouped_content}>
              <h6 className={styles.header_intro__text}>EVENTS & PROGRAMME</h6>
              <h4>For an effective & Intentional global impact</h4>
            </div>
            <p>With an array of events, programs, outreaches, & live campaigns we make the difference.</p>
          </header>
          <hr />
          <UpcomingEvent />
        </section>
      </div>

      <div className={styles.affiliates_section__wrapper}>
        <section className={styles.affiliates_section}>
          <h6 className={styles.header_intro__text}>Affiliated Companies</h6>
          <div className={styles.affiliates_list}>
            <img src={affiliate_1} alt="affiliate 1" />
            <img src={affiliate_2} alt="affiliate 2" />
            <img src={affiliate_3} alt="affiliate 3" />
            <img src={affiliate_4} alt="affiliate 4" />
            <img src={affiliate_5} alt="affiliate 5" />
            <img src={affiliate_6} alt="affiliate 6" />
            <img src={affiliate_7} alt="affiliate 7" />
          </div>
        </section>
      </div>

      <div className={styles.testimonials_section__wrapper} id="testimonials">
        <section className={styles.testimonials_section}>
          <h6 className={styles.header_intro__text}>TESTIMONIALS</h6>
          <h4>Some of our impact stories form across the world</h4>
          <hr />

          <aside className={styles.testimony_content__container}>
            <iframe
              src="https://player.cloudinary.com/embed/?public_id=v1672661066%2FTestimonial_wek40h&cloud_name=dscuc72dw&player[fluid]=true&player[controls]=true&source[poster]=https%3A%2F%2Fres.cloudinary.com%2Fdscuc72dw%2Fimage%2Fupload%2Fq_auto:good%2Ff_auto%2Fv1672671090%2Ftestimony_filler_hmxflk.jpg&source[sourceTypes][0]=mp4"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title="testimony"
            ></iframe>
            <article className={styles.testimony_content}>
              <h6 className={styles.header_intro__text}>The “Feed 1 million” outreach & Retreat</h6>
              <p>
                “Love the simplicity of the service and the prompt customer support. We can’t imagine working without
                it.”
              </p>
              <div className={styles.testimony_author}>
                <div className={styles.testimony_author__details}>
                  <h6>Renee Wells</h6>
                  <p>Accra, Ghana</p>
                </div>
                <div className={styles.testimony_nav}>
                  <LeftArrowIcon /> <RightArrowIcon />
                </div>
              </div>
            </article>
          </aside>
        </section>
      </div>

      <div className={styles.team_section__wrapper}>
        <section className={styles.team_section}>
          <h6 className={styles.header_intro__text}>OUR TEAM</h6>
          <h4>Our high success rate is because we have an awesome team!</h4>
          <hr />

          <aside className={styles.team_list}>
            <TeamMemberCard {...TEAM_MEMBERS[0]} customClassName={styles.ceo} />
            <div className={styles.managing_list}>
              {TEAM_MEMBERS.slice(1).map((member, idx) => (
                <TeamMemberCard key={idx} {...member} customClassName={styles.team_member} />
              ))}
            </div>
          </aside>
        </section>
      </div>

      <div className={styles.team_section__wrapper}>
        <section className={styles.team_section}>
          <h6 className={styles.header_intro__text}>FAQs</h6>
          <h4>Everything you need to know about the foundation.</h4>
          <hr />

          <FAQ data={FAQ_LIST} />
        </section>
      </div>
      <div className={`${styles.team_section__wrapper} ${styles.contact}`} id="contact-us">
        <section className={styles.team_section} style={{ paddingBottom: '0px' }}>
          <h6 className={styles.header_intro__text}>CONTACT US</h6>
          <h4>We would love to here from you</h4>

          <section className={styles.contact_info}>
            <div className={styles.info_card}>
              <ContactEmailIcon />
              <h6>Email address</h6>
              <p>Speak to our friendly team.</p>
              <a href="mailto:kedrickscribnerfoundation@gmail.com">kedrickscribnerfoundation@gmail.com</a>
            </div>
            <div className={styles.info_card}>
              <ContactLocationIcon />
              <h6>Visit us</h6>
              <p>Visit our office HQ.</p>
              <p>8707 Harford Road Suite A, Parkville Maryland, Baltimore county.</p>
            </div>
            <div className={styles.info_card}>
              <ContactPhoneIcon />
              <h6>Call us</h6>
              <p>Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+410-491-0723 ">+410-491-0723 </a>
            </div>
          </section>
        </section>
      </div>

      <div className={styles.subscribe_section__wrapper}>
        <form className={styles.subscribe_form}>
          <div className={styles.form_description}>
            <h3>Join our newsletter</h3>
            <p>Sign up for the updates and information about our activities</p>
          </div>
          <div className={styles.form_cta}>
            <input type="email" name="" placeholder="Enter your email" id="" />{' '}
            <button className={`${styles.button} ${styles.button_yellow}`}>Subscribe</button>
          </div>
        </form>
      </div>

      <div className={styles.footer_section__wrapper}>
        <footer className={styles.footer_section}>
          <section className={styles.footer_links__container}>
            <div className={styles.footer_links__content}>
              <img src={ksfLogo} alt="ksf logo" />
              <p>Humanity is all we have, so we make it better!</p>
            </div>
            <FooterNavLinks customClassName={styles.footer_links} />
          </section>

          <hr />

          <section className={styles.social_container}>
            <span className={styles.copy_info}>
              Copyright &copy; {new Date().getFullYear()} LLC. All rights reserved
            </span>
            <div className={styles.social_profiles}>
              <a
                href="https://twitter.com/kedrickscribne1?s=21&t=0a7yKXPTgv4S3pGHUeCKqA"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>

              <a href="https://www.linkedin.com/company/kedrick-scribner-fondation/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100088900696039&mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://instagram.com/kedrick_scribner_foundation?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
          </section>
        </footer>
      </div>
    </div>
  )
}

export default App
