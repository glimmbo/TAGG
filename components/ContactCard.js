import styled from "styled-components"
import PoppedHeader from "./PoppedHeader"

const CardStyles = styled.div`
  margin: 1em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  a {
    cursor: pointer;
    z-index: 3;
  }

  p {
    color: var(--lightgrey);
    font-family: Consolas;
    text-align: center;
    text-transform: uppercase;
    z-index: 2;
  }

  #icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em 5em;
  }

  #icons svg {
    stroke: var(--grey);
    fill: var(--grey);
    height: 2em;
    width: auto;
    margin-left: 2em;
    margin-right: 2em;
  }

  #icons svg:hover {
    stroke: var(--white);
    fill: var(--white);
  }

  #icons svg:active {
    stroke: var(--red);
    fill: var(--red);
  }
`

export default function ContactCard(props) {
  return (
    <CardStyles>
      <a href="mailto:info@taggcreative.com">
        <PoppedHeader>info@taggcreative.com</PoppedHeader>
      </a>
      <a href="https://goo.gl/maps/UpXhwBtRVMsxHuo78">
        <p>#600 - 401 GEORGIA STREET, VANCOUVER, CANADA</p>
      </a>
      <a href="tel:+17788198555">
        <p>778.819.8555</p>
      </a>
      <div id="icons">
        <a href="https://twitter.com/TAGGmakesads">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-href="www.twitter.com"
          >
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583
          298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106
          8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568
          130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974
          12.995 1.624 19.818 1.624 9.421 0 18.843-1.3
          27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969
          7.797 30.214 12.67 47.431
          13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492
          5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365
          109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934
          104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548
          46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827
          21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161
          39.308-52.628 54.253z"
            />
          </svg>
        </a>
        <a href="https://www.facebook.com/taggvancouver/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06
          52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08
          44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/taggcreative/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9
          114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1
          0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6
          74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9
          0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1
          27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9
          0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0
          184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1
          184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9
          2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6
          42.6-29.5 11.7-99.5 9-132.1 9s-102.7
          2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7
          9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9
          132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9
          99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
        <a href="https://vimeo.com/taggcreative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4
          118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3
          56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7
          131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6
          126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31
          22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"
            />
          </svg>
        </a>
      </div>
    </CardStyles>
  )
}
