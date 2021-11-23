import styled from "styled-components"
import HomeSection from "./HomeSection"
import Client from "../elements/HoverLogo"
import { AnimatedHeader } from "../elements/AnimatedHeader"

const Flow = styled.div`
  margin-top: -80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    max-height: 90vh;
    margin-top: -95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }
`

export default function WorkedWith() {
  return (
    <HomeSection
      id="worked-with"
      header="worked with"
      HeaderComponent={() => (
        <AnimatedHeader id="worked-with-header">
          <svg
            width="1607.2"
            height="144.804"
            viewBox="0 0 1607.2 144.804"
            xmlns="http://www.w3.org/2000/svg"
            id="worked-with-header"
          >
            <g
              id="svgGroup"
              strokeLinecap="round"
              fillRule="evenodd"
              // font-size="9pt"
              // stroke="#000"
              // stroke-width="0.25mm"
              // fill="none"
              // style="stroke:#000;stroke-width:0.25mm;fill:none"
            >
              <path
                d="M 192.8 2.402 L 223.8 2.402 L 178 142.402 L 143.2 142.402 L 112.4 47.602 L 80.6 142.402 L 46 142.402 L 0 2.402 L 33.6 2.402 L 65.2 100.802 L 98.2 2.402 L 128.2 2.402 L 160.2 101.602 L 192.8 2.402 Z"
                id="0"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 283.628 141.488 A 87.119 87.119 0 0 0 308 144.802 A 95.761 95.761 0 0 0 316.02 144.471 A 78.704 78.704 0 0 0 347.2 135.402 Q 364.6 126.002 374.6 109.502 A 67.764 67.764 0 0 0 380.19 97.953 A 72.799 72.799 0 0 0 384.6 72.402 A 83.332 83.332 0 0 0 384.561 69.843 A 69.59 69.59 0 0 0 374.6 35.302 Q 364.6 18.802 347.2 9.402 A 75.614 75.614 0 0 0 332.261 3.294 A 86.783 86.783 0 0 0 308 0.002 A 96.294 96.294 0 0 0 300.633 0.28 A 79.543 79.543 0 0 0 268.7 9.402 Q 251.2 18.802 241.3 35.302 Q 231.4 51.802 231.4 72.402 Q 231.4 93.002 241.3 109.502 Q 251.2 126.002 268.7 135.402 A 76.452 76.452 0 0 0 283.628 141.488 Z M 308 117.202 A 46.411 46.411 0 0 0 323.072 114.805 A 42.37 42.37 0 0 0 330.4 111.502 Q 340.4 105.802 346.1 95.602 A 44.991 44.991 0 0 0 351.527 77.955 A 55.434 55.434 0 0 0 351.8 72.402 A 50.649 50.649 0 0 0 349.996 58.663 A 43.309 43.309 0 0 0 346.1 49.202 Q 340.4 39.002 330.4 33.302 Q 320.4 27.602 308 27.602 A 46.411 46.411 0 0 0 292.928 29.999 A 42.37 42.37 0 0 0 285.6 33.302 Q 275.6 39.002 269.9 49.202 A 44.991 44.991 0 0 0 264.473 66.848 A 55.434 55.434 0 0 0 264.2 72.402 A 50.649 50.649 0 0 0 266.004 86.141 A 43.309 43.309 0 0 0 269.9 95.602 Q 275.6 105.802 285.6 111.502 Q 295.6 117.202 308 117.202 Z"
                id="1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 533 142.402 L 498.2 142.402 L 471.2 103.402 L 469.6 103.402 L 441.4 103.402 L 441.4 142.402 L 409 142.402 L 409 2.402 L 469.6 2.402 A 94.323 94.323 0 0 1 484.937 3.589 Q 494.194 5.114 501.9 8.602 A 52.244 52.244 0 0 1 514.84 16.797 A 44.895 44.895 0 0 1 523 26.202 A 45.653 45.653 0 0 1 529.847 44.985 A 59.229 59.229 0 0 1 530.4 53.202 A 54.454 54.454 0 0 1 528.752 66.882 A 43.364 43.364 0 0 1 522.9 80.102 A 45.971 45.971 0 0 1 506.554 94.966 A 57.534 57.534 0 0 1 501.6 97.402 L 533 142.402 Z M 467.8 28.802 L 441.4 28.802 L 441.4 77.602 L 467.8 77.602 A 53.254 53.254 0 0 0 476.193 76.985 Q 480.477 76.3 483.928 74.854 A 23.354 23.354 0 0 0 490 71.202 A 20.869 20.869 0 0 0 497.223 58.11 A 30.671 30.671 0 0 0 497.6 53.202 A 29.228 29.228 0 0 0 496.702 45.739 A 20.105 20.105 0 0 0 490 35.102 A 24.456 24.456 0 0 0 482.01 30.795 Q 476.013 28.802 467.8 28.802 Z"
                id="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 651.8 142.402 L 607 87.402 L 588.2 107.002 L 588.2 142.402 L 556 142.402 L 556 2.402 L 588.2 2.402 L 588.2 67.802 L 650.2 2.402 L 686.2 2.402 L 628.2 64.802 L 689.6 142.402 L 651.8 142.402 Z"
                id="3"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 736.2 116.402 L 812.4 116.402 L 812.4 142.402 L 704 142.402 L 704 2.402 L 809.8 2.402 L 809.8 28.402 L 736.2 28.402 L 736.2 58.802 L 801.2 58.802 L 801.2 84.002 L 736.2 84.002 L 736.2 116.402 Z"
                id="4"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 838.2 142.402 L 838.2 2.402 L 901.8 2.402 Q 924.6 2.402 942.1 11.102 A 66.541 66.541 0 0 1 963.597 27.709 A 64.208 64.208 0 0 1 969.3 35.602 Q 979 51.402 979 72.402 A 76.88 76.88 0 0 1 976.499 92.389 A 63.3 63.3 0 0 1 969.3 109.202 A 65.017 65.017 0 0 1 942.645 133.428 A 77.348 77.348 0 0 1 942.1 133.702 A 82.465 82.465 0 0 1 916.849 141.374 A 106.583 106.583 0 0 1 901.8 142.402 L 838.2 142.402 Z M 870.6 115.802 L 900.2 115.802 A 61.039 61.039 0 0 0 914.476 114.224 A 41.88 41.88 0 0 0 933.7 104.102 A 38.719 38.719 0 0 0 945.502 81.391 A 55.601 55.601 0 0 0 946.2 72.402 A 51.594 51.594 0 0 0 944.443 58.571 A 37.845 37.845 0 0 0 933.7 40.702 A 42.111 42.111 0 0 0 913.633 30.384 A 61.811 61.811 0 0 0 900.2 29.002 L 870.6 29.002 L 870.6 115.802 Z"
                id="5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1240.6 2.402 L 1271.6 2.402 L 1225.8 142.402 L 1191 142.402 L 1160.2 47.602 L 1128.4 142.402 L 1093.8 142.402 L 1047.8 2.402 L 1081.4 2.402 L 1113 100.802 L 1146 2.402 L 1176 2.402 L 1208 101.602 L 1240.6 2.402 Z"
                id="7"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1289.6 142.402 L 1289.6 2.402 L 1322 2.402 L 1322 142.402 L 1289.6 142.402 Z"
                id="8"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1384.2 142.402 L 1384.2 28.802 L 1339.4 28.802 L 1339.4 2.402 L 1461.4 2.402 L 1461.4 28.802 L 1416.6 28.802 L 1416.6 142.402 L 1384.2 142.402 Z"
                id="9"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1574.8 2.402 L 1607.2 2.402 L 1607.2 142.402 L 1574.8 142.402 L 1574.8 85.002 L 1511.2 85.002 L 1511.2 142.402 L 1478.8 142.402 L 1478.8 2.402 L 1511.2 2.402 L 1511.2 57.602 L 1574.8 57.602 L 1574.8 2.402 Z"
                id="10"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>
        </AnimatedHeader>
      )}
      sectionStyle={{ marginTop: "25vh" }}
    >
      <Flow>
        {/* offset spacer */}
        <div style={{ width: "100px" }} />
        <Client src="amazon.svg" href="https://aws.amazon.com/" />
        <Client src="cocacola.svg" href="https://www.coca-cola.com/" />
        <Client src="cult.svg" href="https://cultideas.com/" />
        <Client src="espn.svg" href="https://www.espn.com/" />
        <Client src="hotwheels.svg" href="https://hotwheels.mattel.com/" />
        <Client src="intel.svg" href="https://www.intel.com" />
        <Client src="monstercat.svg" href="https://www.monstercat.com/" />
        <Client src="seahawks.svg" href="http://www.seahawks.com/" />
        <Client src="spotify.svg" href="https://www.spotify.com/" />
        <Client src="teekay.svg" href="https://www.teekay.com/" />
        <Client src="troyboi.svg" href="https://troyboimusic.com/" />
        <Client src="uclahealth.svg" href="https://www.uclahealth.org/" />
        <Client src="underarmour.svg" href="https://www.underarmour.com/" />
      </Flow>
    </HomeSection>
  )
}
