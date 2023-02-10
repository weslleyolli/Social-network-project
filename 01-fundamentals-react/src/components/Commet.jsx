import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {

        onDeleteComment(content)
    }

    function hendleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/DavigSo.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Davi Souza</strong>
                            <time title="2 of february at 23:11" dateTime="2023-02-02 23:11:30">published at 2 hour</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Delete comment">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={hendleLikeComment}>
                        <ThumbsUp />
                        Applaud <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
        
    )
}