import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/weslleyolli.png',
      name: 'Weslley Oliveira',
      role: 'Engineer Software'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋'},
      {type: 'paragraph', content: 'I just uploaded another project to my portfolio.It`s a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀'},
      {type: 'link', content: '👉Weslley.design/NetworkSocialMedia'},             
    ],
    publishedAt: new Date('2023-02-05 00:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/HenriqueaCavalcanti.png',
      name: 'Henrique Alves',
      role: 'Java developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋'},
      {type: 'paragraph', content: 'I just uploaded another project to my portfolio.It`s a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀'},
      {type: 'link', content: '👉 Henrique.design/doctorcare'},             
    ],
    publishedAt: new Date('2023-02-04 00:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>


    </div>

  )
}

export default App
