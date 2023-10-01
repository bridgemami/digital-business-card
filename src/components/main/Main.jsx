import s from './main.module.css'
import cx from 'classnames'
export default function Main () {
    return (
        <main className={s.container}>
            <section>
                <h2 className={s.heading}>About</h2>
                <p className={s.paragraph}>As a dedicated React developer, I combine a passion for creating dynamic user interfaces with a deep understanding of component-driven design. My commitment to best practices and continuous learning ensures that I deliver efficient, scalable, and maintainable web applications.</p>
            </section>
            <section>
                <h2 className={s.heading}>Interests</h2>
                <p className={cx(s.paragraph, s.padding_bottom)}>Star Wars and Legendarium fanatic. Travel geek. Enjoy a good yoga session, trail, run or workout. Coffee fanatic.</p>
            </section>
        </main>
    )
}