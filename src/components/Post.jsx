import { Comment } from "./Commet"
import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/weslleyolli.png" />
                    <div className={styles.authorInfo}>
                        <strong>Weslley Olli</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="2 of february at 17:12" dateTime="2023-02-01 17:12:30">published at 1 hour</time>
            </header>

            <div className={styles.content}>
                <p>Hey guys 👋</p>
                <p>I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀</p>
                <p>👉 <a href="#">Weslley.design/doctorcare</a> </p>
                <p> <a href="#">#newproject</a>{' '}
                    <a href="#">#nlw</a> {' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>leave your feedback</strong>

                <textarea 
                    placeholder="leave a comment"
                />
                <footer>
                    <button type="submit">Publish</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}