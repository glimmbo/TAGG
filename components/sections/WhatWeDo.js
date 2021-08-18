import PoppedHeader from "../PoppedHeader"
import RedStrokeHeader from "../RedStrokeHeader"
import { Stagger } from "./Foundation"
import styled from "styled-components"

const TextBox = styled.div`
  margin: 2em 0;
`

export default function WhatWeDo() {
  // TODO: did Troy get rid of this section?
  return (
    <Stagger>
      <RedStrokeHeader>What We Do</RedStrokeHeader>
      <TextBox stagger="text">
        <PoppedHeader>Video Branding</PoppedHeader>
        <p>
          We create a unique video aeshetic consistent with your company's
          ethos. Whether that means aligning with your current brand or creating
          an entirely new one, we work with you to develop a unified signature
          that can be applied across platforms.
        </p>
      </TextBox>
      <TextBox stagger="text">
        <PoppedHeader>Conceptualization</PoppedHeader>
        <p>
          This is the incubation process. We determine the end goal of your
          video and implement all the necessary tools to achieve it. This
          includes copywriting, scripting, storyboarding and anything that
          enriches the blueprint of your video.
        </p>
      </TextBox>
      <TextBox stagger="text">
        <PoppedHeader>Production</PoppedHeader>
        <p>
          We bring the concept to life. With our extensive network in the film
          and commercial industry - we're able to put the right people in the
          right places to shoot the content at an exceptionally high level. All
          while remaining in-house.
        </p>
      </TextBox>
      <TextBox stagger="text">
        <PoppedHeader>Post Production</PoppedHeader>
        <p>
          To maximize the consistency between the concept and end product, all
          of our editing is done in-house. Other post-production services such
          as colour timing, sound design and motion graphics are offered to give
          content that extra pop and definition.
        </p>
      </TextBox>
    </Stagger>
  )
}
