import { useNavigate } from "react-router-dom"
import styles from "../styles/Home.module.css";

export default function Home() {
    const navigate = useNavigate();
  return (
      <div>
          <div>
              <div className={styles.headDiv}>
                  <h1 className={styles.header}>Imagine if <span>SNAPCHAT</span> had events.</h1>
              </div>
              <div className={styles.textDesc}>
                Easily host and share events with your friends across any social media.
              </div>
          </div>
          <div className={styles.imgDiv}>
              <img width="100%" height="100%" src="./assets/static/united-1.png" alt="event img" />
          </div>
          <div className={styles.button}>
            <button onClick={()=>{navigate("/create")}}> 🎉 Create my event</button>
          </div>
      </div>
  )
}
