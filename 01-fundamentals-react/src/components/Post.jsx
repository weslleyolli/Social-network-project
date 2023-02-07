import { format, formatDistanceToNow } from "date-fns"
import { useState } from "react";

import { Avatar } from "./Avatar"
import { Comment } from "./Commet"

import styles from "./Post.module.css"


export function Post({ author, publishedAt, content}) {
    const [comments, setComments] = useState([
        1,
        2,
    ])

    const publishedDateFormated = format(publishedAt, "d 'of' LLLL 'at' HH:mm'h'")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
    })

    function handleCreateNewComment() {
        e.preventDefault()

        setComments([...comments, comments.length + 1])
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    }else if (line.type === 'link'){
                        return <p><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>leave your feedback</strong>

                <textarea 
                    placeholder="leave a comment"
                />
                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
                
            </div>
        </article>
    )
}