const Fonts = () => {
  const linkConsolas = document.createElement("link")
  linkConsolas.href = "/fonts/ConsolasFont/CONSOLA.ttf"
  linkConsolas.rel = "stylesheet"
  document.head.appendChild(linkConsolas)
  const consolas = new FontFaceObserver("Consolas")
  consolas.load().then(() => {
    document.documentElement.classList.add("consolas")
  })

  const linkMontserrat = document.createElement("link")
  linkMontserrat.href = "/fonts/Montserrat/Montserrat-Regular.ttf"
  linkMontserrat.rel = "stylesheet"
  document.head.appendChild(linkMontserrat)
  const montserrat = new FontFaceObserver("Montserrat")
  montserrat.load().then(() => {
    document.documentElement.classList.add("montserrat")
  })

  const linkMontserratBold = document.createElement("link")
  linkMontserratBold.href = "/fonts/Montserrat/Montserrat-Bold.ttf"
  linkMontserratBold.rel = "stylesheet"
  document.head.appendChild(linkMontserratBold)
  const montserratBold = new FontFaceObserver("Montserrat-Bold")
  montserratBold.load().then(() => {
    document.documentElement.classList.add("montserratBold")
  })

  const linkMontserratExtraBold = document.createElement("link")
  linkMontserratExtraBold.href = "/fonts/Montserrat/Montserrat-ExtraBold.ttf"
  linkMontserratExtraBold.rel = "stylesheet"
  document.head.appendChild(linkMontserratExtraBold)
  const montserratExtraBold = new FontFaceObserver("Montserrat-ExtraBold")
  montserratExtraBold.load().then(() => {
    document.documentElement.classList.add("montserratExtraBold")
  })
}

export default Fonts
