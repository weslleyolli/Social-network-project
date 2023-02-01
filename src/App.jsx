import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar" 

import styles from './App.module.css'

import './global.css'


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author='Weslley Olli' 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quibusdam voluptates animi magnam, dolor totam minima sequi, consequuntur ut nisi deserunt similique facilis nulla aliquam amet quaerat dolorem excepturi laborum." 
      />
        </main>
      </div>


    </div>
    
  )
}

export default App
