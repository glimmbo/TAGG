import { useEffect } from "react"
import { useRouter } from "next/router"
import Modal from "react-modal"
import WorkPage from "../../components/WorkPage"
import { getWork, getWorks } from "../../vimeo"

// because this is a dynamic route, get all possible routes at build
export async function getStaticPaths() {
  const videolist = await getWorks()

  return {
    paths: videolist.map((video) => {
      return {
        params: {
          uri: `/works/${video.uri}`,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { uri } = params
  const video = await getWork(uri)

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
    <>
      <Modal
        isOpen={true} // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push("/")}
        contentLabel="Work modal"
      >
        <WorkPage video={video} />
      </Modal>
    </>
  )
}

export default WorkPageModal
