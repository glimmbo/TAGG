import RedStrokeHeader from "../RedStrokeHeader"
import HoverLogo from "../elements/HoverLogo"

export default function WorkedWith() {
  return (
    <section
      id="worked-with"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <RedStrokeHeader style={{ transform: "translateY(1vh)" }}>
        Worked With
      </RedStrokeHeader>

      <div
        style={{
          display: "flex",
          transform: "translateX(7vw)",
          marginBottom: "3vh",
        }}
      >
        <HoverLogo
          active={"/clients/client_EDM-active.svg"}
          inactive={"/clients/client_EDM-inactive.svg"}
        />
        <HoverLogo
          active={"/clients/client_HW-active.svg"}
          inactive={"/clients/client_HW-inactive.svg"}
        />
        <HoverLogo
          active={"/clients/client_MC-active.svg"}
          inactive={"/clients/client_MC-inactive.svg"}
        />
        <HoverLogo
          active={"/clients/client_modo-active.svg"}
          inactive={"/clients/client_modo-inactive.svg"}
        />
      </div>
      <div
        style={{
          display: "flex",
          transform: "translateX(-7vw)",
        }}
      >
        <HoverLogo
          active={"/clients/client_TB-active.svg"}
          inactive={"/clients/client_TB-inactive.svg"}
        />
        <HoverLogo
          active={"/clients/client_TED-active.svg"}
          inactive={"/clients/client_TED-inactive.svg"}
        />
        <HoverLogo
          active={"/clients/client_TS-active.svg"}
          inactive={"/clients/client_TS-inactive.svg"}
        />
        <HoverLogo
          active={"/clients/client_ZGM-active.svg"}
          inactive={"/clients/client_ZGM-inactive.svg"}
        />
      </div>
    </section>
  )
}
