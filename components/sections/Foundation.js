import styled from "styled-components"
import HomeSection from "./HomeSection"
import PoppedHeader from "../PoppedHeader"
import { AnimatedHeader } from "../elements/AnimatedHeader"

export const Wrap = styled.div`
  display: grid;
  max-width: 100%;
  padding: 40px 5%; // TODO: should be roughly 130px at Laptop L
  margin-top: -45px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5% 10%;
  grid-template-areas:
    "a c"
    "b d";
  @media screen and (max-width: 425px) {
    display: block;
    padding: 0 0;
    width: 100%;
  }
`

export const Text = styled.div`
  padding-bottom: 2em;
  margin-right: auto;
  grid-area: ${({ gridArea }) => gridArea};
  transform: ${({ gridArea }) => {
    return gridArea === "c" || gridArea === "d" ? "translateY(60%)" : "0"
  }};

  @media screen and (max-width: 425px) {
    padding: 2em 0;
    margin-top: 0;
    width: 100%;
    transform: none;
  }
`

export default function Foundation() {
  return (
    <HomeSection
      id="foundation"
      header="foundation"
      HeaderComponent={() => (
        <AnimatedHeader id="foundation-header">
          <svg
            width="1420.6"
            height="144.804"
            viewBox="0 0 1420.6 144.804"
            xmlns="http://www.w3.org/2000/svg"
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
                d="M 105.8 28.402 L 32.4 28.402 L 32.4 65.402 L 97.2 65.402 L 97.2 91.402 L 32.4 91.402 L 32.4 142.402 L 0 142.402 L 0 2.402 L 105.8 2.402 L 105.8 28.402 Z"
                id="0"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 171.228 141.488 A 87.119 87.119 0 0 0 195.6 144.802 A 95.761 95.761 0 0 0 203.62 144.471 A 78.704 78.704 0 0 0 234.8 135.402 Q 252.2 126.002 262.2 109.502 A 67.764 67.764 0 0 0 267.79 97.953 A 72.799 72.799 0 0 0 272.2 72.402 A 83.332 83.332 0 0 0 272.161 69.843 A 69.59 69.59 0 0 0 262.2 35.302 Q 252.2 18.802 234.8 9.402 A 75.614 75.614 0 0 0 219.861 3.294 A 86.783 86.783 0 0 0 195.6 0.002 A 96.294 96.294 0 0 0 188.233 0.28 A 79.543 79.543 0 0 0 156.3 9.402 Q 138.8 18.802 128.9 35.302 Q 119 51.802 119 72.402 Q 119 93.002 128.9 109.502 Q 138.8 126.002 156.3 135.402 A 76.452 76.452 0 0 0 171.228 141.488 Z M 195.6 117.202 A 46.411 46.411 0 0 0 210.672 114.805 A 42.37 42.37 0 0 0 218 111.502 Q 228 105.802 233.7 95.602 A 44.991 44.991 0 0 0 239.127 77.955 A 55.434 55.434 0 0 0 239.4 72.402 A 50.649 50.649 0 0 0 237.596 58.663 A 43.309 43.309 0 0 0 233.7 49.202 Q 228 39.002 218 33.302 Q 208 27.602 195.6 27.602 A 46.411 46.411 0 0 0 180.528 29.999 A 42.37 42.37 0 0 0 173.2 33.302 Q 163.2 39.002 157.5 49.202 A 44.991 44.991 0 0 0 152.073 66.848 A 55.434 55.434 0 0 0 151.8 72.402 A 50.649 50.649 0 0 0 153.604 86.141 A 43.309 43.309 0 0 0 157.5 95.602 Q 163.2 105.802 173.2 111.502 Q 183.2 117.202 195.6 117.202 Z"
                id="1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 295.4 80.802 L 295.4 2.402 L 327.8 2.402 L 327.8 79.602 A 66.199 66.199 0 0 0 329.137 93.559 Q 334.259 117.202 359 117.202 A 40.595 40.595 0 0 0 368.2 116.222 Q 375.056 114.627 379.859 110.437 A 25.006 25.006 0 0 0 382.2 108.102 A 27.679 27.679 0 0 0 387.342 99.112 Q 388.838 94.969 389.551 89.817 A 74.747 74.747 0 0 0 390.2 79.602 L 390.2 2.402 L 422.2 2.402 L 422.2 80.802 A 91.105 91.105 0 0 1 420.402 99.486 Q 417.986 111.011 412.323 119.777 A 50.422 50.422 0 0 1 405.5 128.202 A 54.722 54.722 0 0 1 380.208 142.269 Q 371.73 144.485 361.698 144.762 A 104.982 104.982 0 0 1 358.8 144.802 Q 328.8 144.802 312.1 128.202 A 53.735 53.735 0 0 1 298.372 104.262 Q 295.957 95.758 295.504 85.586 A 107.589 107.589 0 0 1 295.4 80.802 Z"
                id="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 550.6 2.402 L 582.6 2.402 L 582.6 142.402 L 556 142.402 L 486.2 57.402 L 486.2 142.402 L 454.2 142.402 L 454.2 2.402 L 481 2.402 L 550.6 87.402 L 550.6 2.402 Z"
                id="3"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 615.8 142.402 L 615.8 2.402 L 679.4 2.402 Q 702.2 2.402 719.7 11.102 A 66.541 66.541 0 0 1 741.197 27.709 A 64.208 64.208 0 0 1 746.9 35.602 Q 756.6 51.402 756.6 72.402 A 76.88 76.88 0 0 1 754.099 92.389 A 63.3 63.3 0 0 1 746.9 109.202 A 65.017 65.017 0 0 1 720.245 133.428 A 77.348 77.348 0 0 1 719.7 133.702 A 82.465 82.465 0 0 1 694.449 141.374 A 106.583 106.583 0 0 1 679.4 142.402 L 615.8 142.402 Z M 648.2 115.802 L 677.8 115.802 A 61.039 61.039 0 0 0 692.076 114.224 A 41.88 41.88 0 0 0 711.3 104.102 A 38.719 38.719 0 0 0 723.102 81.391 A 55.601 55.601 0 0 0 723.8 72.402 A 51.594 51.594 0 0 0 722.043 58.571 A 37.845 37.845 0 0 0 711.3 40.702 A 42.111 42.111 0 0 0 691.233 30.384 A 61.811 61.811 0 0 0 677.8 29.002 L 648.2 29.002 L 648.2 115.802 Z"
                id="4"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 885.6 142.402 L 873.2 112.402 L 808.2 112.402 L 795.8 142.402 L 762.6 142.402 L 825 2.402 L 857 2.402 L 919.6 142.402 L 885.6 142.402 Z M 818.6 87.802 L 863 87.802 L 840.8 34.202 L 818.6 87.802 Z"
                id="5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 963.2 142.402 L 963.2 28.802 L 918.4 28.802 L 918.4 2.402 L 1040.4 2.402 L 1040.4 28.802 L 995.6 28.802 L 995.6 142.402 L 963.2 142.402 Z"
                id="6"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1057.8 142.402 L 1057.8 2.402 L 1090.2 2.402 L 1090.2 142.402 L 1057.8 142.402 Z"
                id="7"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1166.828 141.488 A 87.119 87.119 0 0 0 1191.2 144.802 A 95.761 95.761 0 0 0 1199.22 144.471 A 78.704 78.704 0 0 0 1230.4 135.402 Q 1247.8 126.002 1257.8 109.502 A 67.764 67.764 0 0 0 1263.39 97.953 A 72.799 72.799 0 0 0 1267.8 72.402 A 83.332 83.332 0 0 0 1267.761 69.843 A 69.59 69.59 0 0 0 1257.8 35.302 Q 1247.8 18.802 1230.4 9.402 A 75.614 75.614 0 0 0 1215.461 3.294 A 86.783 86.783 0 0 0 1191.2 0.002 A 96.294 96.294 0 0 0 1183.833 0.28 A 79.543 79.543 0 0 0 1151.9 9.402 Q 1134.4 18.802 1124.5 35.302 Q 1114.6 51.802 1114.6 72.402 Q 1114.6 93.002 1124.5 109.502 Q 1134.4 126.002 1151.9 135.402 A 76.452 76.452 0 0 0 1166.828 141.488 Z M 1191.2 117.202 A 46.411 46.411 0 0 0 1206.272 114.805 A 42.37 42.37 0 0 0 1213.6 111.502 Q 1223.6 105.802 1229.3 95.602 A 44.991 44.991 0 0 0 1234.727 77.955 A 55.434 55.434 0 0 0 1235 72.402 A 50.649 50.649 0 0 0 1233.196 58.663 A 43.309 43.309 0 0 0 1229.3 49.202 Q 1223.6 39.002 1213.6 33.302 Q 1203.6 27.602 1191.2 27.602 A 46.411 46.411 0 0 0 1176.128 29.999 A 42.37 42.37 0 0 0 1168.8 33.302 Q 1158.8 39.002 1153.1 49.202 A 44.991 44.991 0 0 0 1147.673 66.848 A 55.434 55.434 0 0 0 1147.4 72.402 A 50.649 50.649 0 0 0 1149.204 86.141 A 43.309 43.309 0 0 0 1153.1 95.602 Q 1158.8 105.802 1168.8 111.502 Q 1178.8 117.202 1191.2 117.202 Z"
                id="8"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1388.6 2.402 L 1420.6 2.402 L 1420.6 142.402 L 1394 142.402 L 1324.2 57.402 L 1324.2 142.402 L 1292.2 142.402 L 1292.2 2.402 L 1319 2.402 L 1388.6 87.402 L 1388.6 2.402 Z"
                id="9"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>
        </AnimatedHeader>
      )}
    >
      <Wrap>
        <Text gridArea="a">
          <PoppedHeader>LEAN. AGILE. FULLY DISTRIBUTED</PoppedHeader>
          <p>
            Different places. Different people. All at the top of their game and
            curated on a per-project basis.
            <br />
            <br />
            We have a network of over 60,000 creative partners across the world,
            all available on-demand and ready to make it work.
          </p>
        </Text>

        <Text gridArea="b">
          <PoppedHeader>Small by intention, not by necessity</PoppedHeader>
          <p>
            Having a centralized direction keeps the creative consistent, the
            communication crystal clear and the quality high. No game of
            telephone——everyone on our team is within earshot.
          </p>
        </Text>

        <Text mt="50%" gridArea="c">
          <PoppedHeader className="dropped">PARTNERS &gt; CLIENTS</PoppedHeader>
          <p>
            Think{" "}
            <span style={{ fontStyle: "italic" }}>
              same team, different office
            </span>
            . Just because we aren’t in the same place, doesn’t mean we can’t
            build a relationship like we are.
            <br />
            <br />
            It’s simple——when we have each other’s back we’ll make better
            content together.
            <br />
            <br />
            We also expect an invite to your christmas party… Just kidding.
          </p>
        </Text>
      </Wrap>
    </HomeSection>
  )
}
