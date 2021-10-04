const Fonts = () => {
  const link = document.createElement("link")
  link.href = ""
  link.rel = "stylesheet"

  document.head.appendChild(link)

  const consolas = new FontFaceObserver("Consolas")

  consolas.load().then(() => {
    document.documentElement.classList.add("consolas")
  })

  const montserrat = new FontFaceObserver("Montserrat")

  montserrat.load().then(() => {
    document.documentElement.classList.add("montserrat")
  })
  const montserratBold = new FontFaceObserver("Montserrat-Bold")

  montserratBold.load().then(() => {
    document.documentElement.classList.add("montserratBold")
  })

  const montserratExtraBold = new FontFaceObserver("Montserrat-ExtraBold")

  montserratExtraBold.load().then(() => {
    document.documentElement.classList.add("montserratExtraBold")
  })
}

export default Fonts
