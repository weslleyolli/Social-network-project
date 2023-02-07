import { format, formatDistanceToNow } from "date-fns"

import { Avatar } from "./Avatar"
import { Comment } from "./Commet"

import styles from "./Post.module.css"

export function Post({ author, publishedAt, content}) {
    const publishedDateFormated = format(publishedAt, "d 'of' LLLL 'at' HH:mm'h'")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
    } )

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
                    if(line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    }else if (line.type === 'link'){
                        return <p><a href="#">{line.content}</a></p>;
                    }
                })}
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
                
            </div>
        </article>
    )
}