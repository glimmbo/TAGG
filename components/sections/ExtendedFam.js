import HomeSection from "./HomeSection"
import RosterCard from "../RosterCard"
import { StaggerBox } from "../elements/StaggerBox"
import { AnimatedHeader } from "../elements/AnimatedHeader"
import { css } from "styled-components"

const team = {
  extended: [
    {
      given: "CAT",
      sur: "MEDEIROS",
      role: "SALLUA // Creative Director + Designer",
      head: "/images/extended-fam/ExtendedFam_CatMedeiros - SALLUA.png",
      mask: "/images/extended-fam/ExtendedFam_CatMedeiros - SALLUA copy.png",
      bio: "We’re not sure how, but she has a knack for clarifying the inexpressible, and forming it into some truly stunning designs. It might be magic. ",
    },
    {
      head: "/images/extended-fam/ExtendedFam_JeffZwicker-DirectorOfPhotography.png",
      mask: "/images/extended-fam/ExtendedFam_JeffZwicker-DirectorOfPhotography copy.png",
      given: "JEFF",
      sur: "ZWICKER",
      role: "Cinematographer",
      bio: "Put him in any room, any location, under any amount of pressure, and this man will light it beautifully. He’s also got a mean Jiu Jitsu take down.",
    },
    {
      head: "/images/extended-fam/ExtendedFam_WilliamSelviz - RENDRD.png",
      mask: "/images/extended-fam/ExtendedFam_WilliamSelviz - RENDRD copy.png",
      given: "WILLIAM",
      sur: "SELVIZ",
      role: "RENDRD // 3D Animation",
      bio: "A tastemaker when it comes to the 3D content his team produces. His style is fresh, his approach is unique, and of course, his sneaker collection is fire.",
    },
    {
      head: "/images/extended-fam/ExtendedFam_NickGrossman.png",
      mask: "/images/extended-fam/ExtendedFam_NickGrossman copy.png",
      given: "NICK",
      sur: "GROSSMAN",
      role: "Motion Graphics & VFX",
      bio: "Multi-talented across the gamut of post-production, he’s like three people in one, and oftentimes we wish there were three of him…",
    },
    {
      head: "/images/extended-fam/ExtendedFam_CurtisHuisman - Sensored.png",
      mask: "/images/extended-fam/ExtendedFam_CurtisHuisman - Sensored copy.png",
      given: "CURTIS",
      sur: "HUISMAN",
      role: "SENSORED // Agile Production",
      bio: "Curtis is the ultimate one-man band when it comes to production. Whether it’s on-location, in studio, car, plane, whatever—he’s always ready to hit that little red button.",
    },
  ],
}

export default function ExtendedFam() {
  return (
    <HomeSection
      id="extended-fam"
      header="extended family"
      HeaderComponent={() => (
        <AnimatedHeader id="extended-fam-header">
          <svg
            width="1997.6"
            height="140.002"
            viewBox="0 0 1997.6 140.002"
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
                d="M 32.2 114.002 L 108.4 114.002 L 108.4 140.002 L 0 140.002 L 0 0.002 L 105.8 0.002 L 105.8 26.002 L 32.2 26.002 L 32.2 56.402 L 97.2 56.402 L 97.2 81.602 L 32.2 81.602 L 32.2 114.002 Z"
                id="0"
                vectorEffect="non-scaling-stroke"
                style={{ transform: "translateX(-10px)" }}
              />
              <path
                d="M 259.8 140.002 L 222.4 140.002 L 188.6 91.402 L 155.4 140.002 L 118.2 140.002 L 170 68.802 L 120.8 0.002 L 157.6 0.002 L 189.8 45.402 L 221.4 0.002 L 256.4 0.002 L 207.6 67.602 L 259.8 140.002 Z"
                id="1"
                vectorEffect="non-scaling-stroke"
                style={{ transform: "translateX(-10px)" }}
              />
              <path
                d="M 306 140.002 L 306 26.402 L 261.2 26.402 L 261.2 0.002 L 383.2 0.002 L 383.2 26.402 L 338.4 26.402 L 338.4 140.002 L 306 140.002 Z"
                id="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 432.8 114.002 L 509 114.002 L 509 140.002 L 400.6 140.002 L 400.6 0.002 L 506.4 0.002 L 506.4 26.002 L 432.8 26.002 L 432.8 56.402 L 497.8 56.402 L 497.8 81.602 L 432.8 81.602 L 432.8 114.002 Z"
                id="3"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 631.2 0.002 L 663.2 0.002 L 663.2 140.002 L 636.6 140.002 L 566.8 55.002 L 566.8 140.002 L 534.8 140.002 L 534.8 0.002 L 561.6 0.002 L 631.2 85.002 L 631.2 0.002 Z"
                id="4"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 696.4 140.002 L 696.4 0.002 L 760 0.002 Q 782.8 0.002 800.3 8.702 A 66.541 66.541 0 0 1 821.797 25.309 A 64.208 64.208 0 0 1 827.5 33.202 Q 837.2 49.002 837.2 70.002 A 76.88 76.88 0 0 1 834.699 89.989 A 63.3 63.3 0 0 1 827.5 106.802 A 65.017 65.017 0 0 1 800.845 131.028 A 77.348 77.348 0 0 1 800.3 131.302 A 82.465 82.465 0 0 1 775.049 138.973 A 106.583 106.583 0 0 1 760 140.002 L 696.4 140.002 Z M 728.8 113.402 L 758.4 113.402 A 61.039 61.039 0 0 0 772.676 111.824 A 41.88 41.88 0 0 0 791.9 101.702 A 38.719 38.719 0 0 0 803.702 78.991 A 55.601 55.601 0 0 0 804.4 70.002 A 51.594 51.594 0 0 0 802.643 56.171 A 37.845 37.845 0 0 0 791.9 38.302 A 42.111 42.111 0 0 0 771.833 27.984 A 61.811 61.811 0 0 0 758.4 26.602 L 728.8 26.602 L 728.8 113.402 Z"
                id="5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 893.8 114.002 L 970 114.002 L 970 140.002 L 861.6 140.002 L 861.6 0.002 L 967.4 0.002 L 967.4 26.002 L 893.8 26.002 L 893.8 56.402 L 958.8 56.402 L 958.8 81.602 L 893.8 81.602 L 893.8 114.002 Z"
                id="6"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 995.8 140.002 L 995.8 0.002 L 1059.4 0.002 Q 1082.2 0.002 1099.7 8.702 A 66.541 66.541 0 0 1 1121.197 25.309 A 64.208 64.208 0 0 1 1126.9 33.202 Q 1136.6 49.002 1136.6 70.002 A 76.88 76.88 0 0 1 1134.099 89.989 A 63.3 63.3 0 0 1 1126.9 106.802 A 65.017 65.017 0 0 1 1100.245 131.028 A 77.348 77.348 0 0 1 1099.7 131.302 A 82.465 82.465 0 0 1 1074.449 138.973 A 106.583 106.583 0 0 1 1059.4 140.002 L 995.8 140.002 Z M 1028.2 113.402 L 1057.8 113.402 A 61.039 61.039 0 0 0 1072.076 111.824 A 41.88 41.88 0 0 0 1091.3 101.702 A 38.719 38.719 0 0 0 1103.102 78.991 A 55.601 55.601 0 0 0 1103.8 70.002 A 51.594 51.594 0 0 0 1102.043 56.171 A 37.845 37.845 0 0 0 1091.3 38.302 A 42.111 42.111 0 0 0 1071.233 27.984 A 61.811 61.811 0 0 0 1057.8 26.602 L 1028.2 26.602 L 1028.2 113.402 Z"
                id="7"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1323.4 26.002 L 1250 26.002 L 1250 63.002 L 1314.8 63.002 L 1314.8 89.002 L 1250 89.002 L 1250 140.002 L 1217.6 140.002 L 1217.6 0.002 L 1323.4 0.002 L 1323.4 26.002 Z"
                id="9"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1450 140.002 L 1437.6 110.002 L 1372.6 110.002 L 1360.2 140.002 L 1327 140.002 L 1389.4 0.002 L 1421.4 0.002 L 1484 140.002 L 1450 140.002 Z M 1383 85.402 L 1427.4 85.402 L 1405.2 31.802 L 1383 85.402 Z"
                id="10"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1656.4 140.002 L 1626 140.002 L 1625.8 56.002 L 1584.6 125.202 L 1570 125.202 L 1529 57.802 L 1529 140.002 L 1498.6 140.002 L 1498.6 0.002 L 1525.4 0.002 L 1577.8 87.002 L 1629.4 0.002 L 1656 0.002 L 1656.4 140.002 Z"
                id="11"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1689.6 140.002 L 1689.6 0.002 L 1722 0.002 L 1722 140.002 L 1689.6 140.002 Z"
                id="12"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1755.2 140.002 L 1755.2 0.002 L 1787.6 0.002 L 1787.6 113.602 L 1857.8 113.602 L 1857.8 140.002 L 1755.2 140.002 Z"
                id="13"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1997.6 0.002 L 1943.2 90.402 L 1943.2 140.002 L 1910.8 140.002 L 1910.8 90.002 L 1856.6 0.002 L 1891 0.002 L 1928.4 62.202 L 1965.8 0.002 L 1997.6 0.002 Z"
                id="14"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>
        </AnimatedHeader>
      )}
    >
      <StaggerBox marginTop="-200px">
        {team.extended.map(({ given, sur, role, bio, head, mask }, i) => (
          <RosterCard
            given={given}
            sur={sur}
            role={role}
            bio={bio}
            head={head}
            mask={mask}
            key={i}
          />
        ))}
      </StaggerBox>
    </HomeSection>
  )
}
