import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  z-index: 2;
  padding: 0 1em;
  max-width: 500px; // image width

  .text {
    display: flex;
    flex-direction: column;
    z-index: 2;
    filter: grayscale(100%);
    transition: all 0.35s ease;
  }

  img {
    width: 100%;
    /* transform: translate(5%, -25%); */
    transition: all 0.35s ease;
    filter: grayscale(100%);
  }

  .image-container {
    position: relative;
    width: fit-content;
    height: fit-content;
    margin-top: -3%;
    /* transform: */
  }

  .image-container .after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    opacity: 0.98;
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
    width: fit-content;
    margin: 0.15em 6px;
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
    transition: all 0.35s ease;
  }

  :hover {
    p {
      opacity: 1;
    }

    img {
      filter: grayscale(0%);
    }

    .after {
      display: block;
      opacity: 0;
    }

    .text {
      filter: grayscale(0%);
    }
  }

  @media screen and (max-width: 425px) {
    p {
      opacity: 1;
    }

    img {
      filter: grayscale(0%);
    }

    .after {
      display: block;
      opacity: 0;
    }

    .text {
      filter: grayscale(0%);
    }
  }
`

export default function RosterCard({ given, sur, role, bio, head, mask }) {
  return (
    <Card>
      <div className="image-container">
        <img src={head} alt={`profile picture of ${given} ${sur}`} />
        <img src={mask} className="after"></img>
      </div>
      <div className="text">
        <h3>
          {given}&nbsp;{sur}
        </h3>
        <h4>{role}</h4>
        {bio && <p>{bio}</p>}
      </div>
    </Card>
  )
}
