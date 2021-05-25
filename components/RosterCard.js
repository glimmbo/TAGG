import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: auto;
  z-index: 2;

  .text {
    display: flex;
    flex-direction: column;
    margin-right: 1%;
    z-index: 2;
  }

  img {
    height: 20vh;
    transform: translate(5%, -25%);

    /* face cover, this plus image clip */
    /* .image-container {
      position: relative;
      width: 200px;
      height: 300px;
    }

    .image-container .after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      color: #fff;
    }

    .image-container:hover .after {
      display: block;
      background: rgba(0, 0, 0, 0.6);
    } */
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
    opacity: 0;
    background-color: transparent;
    color: var(--grey);
    font-family: Consolas;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 25;
    transform: translateX(0.01em);
    max-width: 100%;
  }

  :hover {
    p {
      opacity: 1;
    }
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
