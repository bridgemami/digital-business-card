import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import s from './footer.module.css'

export default function Footer () {
    return (
        <footer className={s.footer}>
            <a href="https://twitter.com/bridgema09" target='_blank' rel='noreferrer' className={s.link} aria-label="Michael Bridgeman's X account">
                <FontAwesomeIcon icon={faSquareXTwitter} className={s.icon} /></a>
            <a href="https://www.instagram.com/jedi_mike099/" target='_blank' rel='noreferrer' className={s.link} aria-label="Michael Bridgeman's Instagram account">
                <FontAwesomeIcon icon={faSquareInstagram} className={s.icon} /></a>
            <a href="https://github.com/bridgemami" target='_blank' rel='noreferrer' className={s.link} aria-label="Michael Bridgeman's GitHub account">
                <FontAwesomeIcon icon={faSquareGithub} className={s.icon} /></a>
        </footer>
    )
}