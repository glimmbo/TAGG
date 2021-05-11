import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 30vw;
  height: auto;
  z-index: 2;

  .text {
    display: flex;
    flex-direction: column;
    margin-right: 1%;
    z-index: 2;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  img {
    height: 20vh;
    transform: translate(5%, -25%);
  }

  h3 {
    background-color: transparent;
    color: var(--red);
    margin: 0.15em;
    font-family: Montserrat-ExtraBold;
    text-transform: uppercase;
  }

  h4 {
    background-color: var(--red);
    color: var(--white);
    margin: 0.15em;
    padding: 0.2em 0.5em;
    transform: translateX(-0.7em);
    font-family: Montserrat-Bold;
  }

  p {
    background-color: transparent;
    color: var(--grey);
    font-family: Consolas;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 25;
    transform: translateX(0.01em);
  }
`

export default function RosterCard({ given, sur, role, bio, head }) {
  return (
    <Card className="wrap">
      <img src={head} alt={`profile picture of ${given} ${sur}`} />
      <div className="text">
        <h3>{given}</h3>
        <h3>{sur}</h3>
        <h4>{role}</h4>
        {bio && <p>{bio}</p>}
      </div>
    </Card>
  )
}
