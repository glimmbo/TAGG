import RedStrokeHeader from "../RedStrokeHeader"
import styles from "../../styles/Works.module.css"
export default function Works({ videolist }) {
  // list of videolist = 8 (fixed to a TAGG folder, can change)
  // console.log(videolist)
  //
  return (
    <section id="works" className={styles.section}>
      <RedStrokeHeader>Works</RedStrokeHeader>
      <div className={styles.grid}>
        {/* first 8 for now */}
        {videolist.map((video, i) => {
          if (i < 7) {
            return <div className={styles[`div${i + 1}`]} key={i}></div>
          }
        })}
      </div>
    </section>
  )
}
