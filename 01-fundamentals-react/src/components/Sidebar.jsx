import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/weslleyolli.png" />

                <strong>Weslley Oliveira</strong>
                <span>Web Developer</span>
            </div>

            <footer className={styles.foot}>
                <a href="#">
                    <PencilLine size={20} />
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}
