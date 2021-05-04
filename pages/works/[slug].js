export async function getStaticProps() {
  // fetch work
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1",
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}
