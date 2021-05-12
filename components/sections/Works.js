import RedStrokeHeader from "../RedStrokeHeader"
import styles from "../../styles/Works.module.css"
import Link from "next/link"
import { snakeCase } from "lodash"
export default function Works({ videolist }) {
  // list of videolist = 8 (fixed to a TAGG folder, can change)

  console.log(videolist)
  return (
    <section id="works" className={styles.section}>
      <RedStrokeHeader>Works</RedStrokeHeader>
      <div className={styles.grid}>
        {/* first 8 for now */}
        {videolist.map((video, i) => (
          <Link
            key={i}
            href="/works/[workUri]" // hosted page file
            as={`/works/${video.id}`} // actual, generated url
          >
            <a>{video.title}</a>
          </Link>
        ))}
      </div>
    </section>
  )
}
