import { useEffect } from "react"
import { useRouter } from "next/router"
import Modal from "react-modal"
import WorkPage from "../../components/WorkPage"
import { getWork, getWorks } from "../../vimeo"

// because this is a dynamic route, get all possible routes at build
export async function getStaticPaths() {
  const videolist = await getWorks()

  const paths = videolist.map((video) => {
    const videoId = video.uri.split("/")[2]
    return {
      params: {
        videoId,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log(params)
  const { videoId } = params
  const video = await getWork(videoId)

  return {
    props: { video },
    revalidate: 60,
  }
}

Modal.setAppElement("#__next")

const WorkPageModal = ({ video }) => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal
      isOpen={true} // The modal should always be shown on page load, it is the 'page'
      onRequestClose={() => router.push("/#works")}
      contentLabel="Work modal"
      shouldCloseOnEsc={true}
      style={{
        content: {
          backgroundColor: "var(--black)",
          border: "none",
          borderRadius: 0,
          margin: 0,
          padding: 0,
          inset: 0,
          maxWidth: "100vw",
        },
      }}
    >
      <WorkPage video={video} />
    </Modal>
  )
}

export default WorkPageModal
