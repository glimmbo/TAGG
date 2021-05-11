import RedStrokeHeader from "../RedStrokeHeader"
import HoverLogo from "../elements/HoverLogo"

export default function WorkedWith() {
  return (
    <section id="worked-with">
      <RedStrokeHeader style={{ transform: "translateY(13vh)" }}>
        Worked With
      </RedStrokeHeader>

      <HoverLogo
        active={"/clients/client_EDM-active.svg"}
        inactive={"/clients/client_EDM-inactive.svg"}
      />
    </section>
  )
}
