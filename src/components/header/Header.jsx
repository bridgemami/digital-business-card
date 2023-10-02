import head_shot from '../../assets/head.webp'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import s from './header.module.css'

export default function Header () {
    return (
        <header>
            <img src={head_shot} alt="Headshot of Michael Bridgeman" className={s.head_shot} />
            <section className={s.title}>
                <h1 className={s.name}>Michael Bridgeman</h1>
                <h4 className={s.position}>React Developer</h4>
                <a href='https://michaelbridgeman.netlify.app/' target='_blank' rel='noreferrer' className={s.portfolio}>michaelbridgeman.netlify.app</a>
            </section>
            <section className={s.contact_container}>
            <a href='mailto:mdbridgeman@gmail.com' target='_blank' rel='noreferrer' className={cx(s.email, s.contact_box)}>
            <FontAwesomeIcon icon={faEnvelope} />            <span>Email</span>
            </a>
            <a href='https://www.linkedin.com/in/bridgemanmichael/' target='_blank' rel='noreferrer' className={cx(s.contact_box, s.linkedin)}>
            <FontAwesomeIcon icon={faLinkedin} />
            <span>Linkedin</span>
            </a>
            </section>
        </header>
    )
}