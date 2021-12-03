import HomeSection from "./HomeSection"
import ContactCard from "../ContactCard"
import { AnimatedHeader } from "../elements/AnimatedHeader"
import { forwardRef } from "react"

const Contact = forwardRef((props, ref) => {
  return (
    <HomeSection
      id="contact"
      ref={ref}
      HeaderComponent={() => (
        <AnimatedHeader id="contact-header">
          <svg
            width="1015.402" // this will be off by the translations below
            height="144.804"
            viewBox="0 0 1015.402 144.804"
            xmlns="http://www.w3.org/2000/svg"
            id="contact-header"
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
                d="M 133.602 24.802 L 112.802 44.002 A 48.147 48.147 0 0 0 98.029 32.247 A 44.868 44.868 0 0 0 77.602 27.602 A 50.649 50.649 0 0 0 63.863 29.405 A 43.309 43.309 0 0 0 54.402 33.302 Q 44.202 39.002 38.502 49.202 A 44.991 44.991 0 0 0 33.075 66.848 A 55.434 55.434 0 0 0 32.802 72.402 A 50.649 50.649 0 0 0 34.606 86.141 A 43.309 43.309 0 0 0 38.502 95.602 Q 44.202 105.802 54.402 111.502 A 44.991 44.991 0 0 0 72.049 116.929 A 55.434 55.434 0 0 0 77.602 117.202 A 44.023 44.023 0 0 0 110.542 103.094 A 57.298 57.298 0 0 0 112.802 100.602 L 133.602 119.802 Q 123.602 132.002 108.802 138.402 A 78.096 78.096 0 0 1 85.771 144.296 A 95.988 95.988 0 0 1 75.802 144.802 A 84.851 84.851 0 0 1 50.654 141.169 A 75.672 75.672 0 0 1 37.102 135.502 Q 19.802 126.202 9.902 109.702 Q 0.002 93.202 0.002 72.402 A 74.847 74.847 0 0 1 3.773 48.365 A 67.695 67.695 0 0 1 9.902 35.102 Q 19.802 18.602 37.102 9.302 A 78.466 78.466 0 0 1 68.053 0.329 A 95.097 95.097 0 0 1 76.002 0.002 A 89.269 89.269 0 0 1 95.37 2.027 A 73.895 73.895 0 0 1 108.902 6.402 Q 123.602 12.802 133.602 24.802 Z"
                id="0"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 198.831 141.488 A 87.119 87.119 0 0 0 223.202 144.802 A 95.761 95.761 0 0 0 231.222 144.471 A 78.704 78.704 0 0 0 262.402 135.402 Q 279.802 126.002 289.802 109.502 A 67.764 67.764 0 0 0 295.392 97.953 A 72.799 72.799 0 0 0 299.802 72.402 A 83.332 83.332 0 0 0 299.763 69.843 A 69.59 69.59 0 0 0 289.802 35.302 Q 279.802 18.802 262.402 9.402 A 75.614 75.614 0 0 0 247.464 3.294 A 86.783 86.783 0 0 0 223.202 0.002 A 96.294 96.294 0 0 0 215.835 0.28 A 79.543 79.543 0 0 0 183.902 9.402 Q 166.402 18.802 156.502 35.302 Q 146.602 51.802 146.602 72.402 Q 146.602 93.002 156.502 109.502 Q 166.402 126.002 183.902 135.402 A 76.452 76.452 0 0 0 198.831 141.488 Z M 223.202 117.202 A 46.411 46.411 0 0 0 238.274 114.805 A 42.37 42.37 0 0 0 245.602 111.502 Q 255.602 105.802 261.302 95.602 A 44.991 44.991 0 0 0 266.729 77.955 A 55.434 55.434 0 0 0 267.002 72.402 A 50.649 50.649 0 0 0 265.199 58.663 A 43.309 43.309 0 0 0 261.302 49.202 Q 255.602 39.002 245.602 33.302 Q 235.602 27.602 223.202 27.602 A 46.411 46.411 0 0 0 208.13 29.999 A 42.37 42.37 0 0 0 200.802 33.302 Q 190.802 39.002 185.102 49.202 A 44.991 44.991 0 0 0 179.675 66.848 A 55.434 55.434 0 0 0 179.402 72.402 A 50.649 50.649 0 0 0 181.206 86.141 A 43.309 43.309 0 0 0 185.102 95.602 Q 190.802 105.802 200.802 111.502 Q 210.802 117.202 223.202 117.202 Z"
                id="1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 420.602 2.402 L 452.602 2.402 L 452.602 142.402 L 426.002 142.402 L 356.202 57.402 L 356.202 142.402 L 324.202 142.402 L 324.202 2.402 L 351.002 2.402 L 420.602 87.402 L 420.602 2.402 Z"
                id="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 514.802 142.402 L 514.802 28.802 L 470.002 28.802 L 470.002 2.402 L 592.002 2.402 L 592.002 28.802 L 547.202 28.802 L 547.202 142.402 L 514.802 142.402 Z"
                id="3"
                vectorEffect="non-scaling-stroke"
                style={{ transform: "translateX(7px)" }}
              />
              <path
                d="M 714.002 142.402 L 701.602 112.402 L 636.602 112.402 L 624.202 142.402 L 591.002 142.402 L 653.402 2.402 L 685.402 2.402 L 748.002 142.402 L 714.002 142.402 Z M 647.002 87.802 L 691.402 87.802 L 669.202 34.202 L 647.002 87.802 Z"
                id="4"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 887.402 24.802 L 866.602 44.002 A 48.147 48.147 0 0 0 851.829 32.247 A 44.868 44.868 0 0 0 831.402 27.602 A 50.649 50.649 0 0 0 817.663 29.405 A 43.309 43.309 0 0 0 808.202 33.302 Q 798.002 39.002 792.302 49.202 A 44.991 44.991 0 0 0 786.875 66.848 A 55.434 55.434 0 0 0 786.602 72.402 A 50.649 50.649 0 0 0 788.406 86.141 A 43.309 43.309 0 0 0 792.302 95.602 Q 798.002 105.802 808.202 111.502 A 44.991 44.991 0 0 0 825.849 116.929 A 55.434 55.434 0 0 0 831.402 117.202 A 44.023 44.023 0 0 0 864.342 103.094 A 57.298 57.298 0 0 0 866.602 100.602 L 887.402 119.802 Q 877.402 132.002 862.602 138.402 A 78.096 78.096 0 0 1 839.571 144.296 A 95.988 95.988 0 0 1 829.602 144.802 A 84.851 84.851 0 0 1 804.454 141.169 A 75.672 75.672 0 0 1 790.902 135.502 Q 773.602 126.202 763.702 109.702 Q 753.802 93.202 753.802 72.402 A 74.847 74.847 0 0 1 757.573 48.365 A 67.695 67.695 0 0 1 763.702 35.102 Q 773.602 18.602 790.902 9.302 A 78.466 78.466 0 0 1 821.853 0.329 A 95.097 95.097 0 0 1 829.802 0.002 A 89.269 89.269 0 0 1 849.17 2.027 A 73.895 73.895 0 0 1 862.702 6.402 Q 877.402 12.802 887.402 24.802 Z"
                id="5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 938.202 142.402 L 938.202 28.802 L 893.402 28.802 L 893.402 2.402 L 1015.402 2.402 L 1015.402 28.802 L 970.602 28.802 L 970.602 142.402 L 938.202 142.402Z"
                id="6"
                vectorEffect="non-scaling-stroke"
                style={{ transform: "translateX(15px)" }}
              />
            </g>
          </svg>
        </AnimatedHeader>
      )}
      sectionStyle={{ minHeight: "80vh", maxHeight: "100vh" }}
    >
      <ContactCard />
    </HomeSection>
  )
})

export default Contact
