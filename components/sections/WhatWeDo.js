import PoppedHeader from "../PoppedHeader"
import HomeSection from "./HomeSection"
import { Wrap, Text } from "./Foundation"

export default function WhatWeDo() {
  // TODO: did Troy get rid of this section?
  return (
    <HomeSection id="what-we-do" header="what we do">
      <Wrap>
        <Text gridArea="a">
          <PoppedHeader>Video Branding</PoppedHeader>
          <p>
            We create a unique video aeshetic consistent with your company's
            ethos. Whether that means aligning with your current brand or
            creating an entirely new one, we work with you to develop a unified
            signature that can be applied across platforms.
          </p>
        </Text>
        <Text gridArea="b">
          <PoppedHeader>Creative</PoppedHeader>
          <p>
            This is the incubation process. We determine the end goal of your
            video and implement all the necessary tools to achieve it. This
            includes copywriting, scripting, storyboarding and anything that
            enriches the blueprint of your video.
          </p>
        </Text>
        <Text gridArea="c">
          <PoppedHeader>Production</PoppedHeader>
          <p>
            We bring the concept to life. With our extensive network in the film
            and commercial industry - we're able to put the right people in the
            right places to shoot the content at an exceptionally high level.
            All while remaining in-house.
          </p>
        </Text>
        <Text gridArea="d">
          <PoppedHeader>Post</PoppedHeader>
          <p>
            To maximize the consistency between the concept and end product, all
            of our editing is done in-house. Other post-production services such
            as colour timing, sound design and motion graphics are offered to
            give content that extra pop and definition.
          </p>
        </Text>
      </Wrap>
    </HomeSection>
  )
}
