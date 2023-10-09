import cx from 'classnames'
import s from './interest.module.css'

export default function Interest () {
        return (
            <section>
                <h2 className={s.heading}>Interests</h2>
                <p className={cx(s.paragraph, s.padding_bottom)}>Star Wars and Legendarium fanatic. Travel geek. Enjoy a good yoga session, trail, run or workout. Coffee fanatic.</p>
            </section>
        )
}