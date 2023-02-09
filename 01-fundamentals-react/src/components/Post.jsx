import { format, formatDistanceToNow } from "date-fns"
import { useState } from "react";

import { Avatar } from "./Avatar"
import { Comment } from "./Commet"

import styles from "./Post.module.css"


export function Post({ author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Nice post!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'of' LLLL 'at' HH:mm'h'")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()


        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('This field is mandatory')
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete
        })

        setComments(commentWithoutDeleteOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

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
                        return <p key={line.content}>{line.content}</p>;
                    }else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea 
                    name="comment"
                    placeholder="Leave a comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
                
            </div>
        </article>
    )
}