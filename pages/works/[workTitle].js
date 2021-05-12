import { useEffect } from "react"
import { useRouter } from "next/router"
import Modal from "react-modal"
// import

Modal.setAppElement("#__next")

const WorkPage = ({ workTitle }) => {
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
        {/* Work */}
      </Modal>
    </>
  )
}

export default WorkPage

export function getStaticProps({ params: { workTitle } }) {
  return { props: { workTitle: workTitle } }
}

export function getStaticPaths() {
  return {
    paths: data.map((workTitle) => ({
      params: { workTitle: workTitle.toString() },
    })),
    fallback: false,
  }
}
