import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/HenriqueaCavalcanti.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Henrique Alves</strong>
                            <time title="2 of february at 23:11" dateTime="2023-02-02 23:11:30">published at 2 hour</time>
                        </div>

                        <button title="Delete comment">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Very good Weslley, congratulations!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Applaud <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}