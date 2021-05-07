import styles from "../styles/RosterCard"
export default function RosterCard({ given, sur, role, bio, head }) {
  return (
    <div class="wrap">
      <img src={head} alt={`profile picture of ${given} ${sur}`} />
      <div class="text">
        <h3>{given}</h3>
        <h3>{sur}</h3>
        <h4>{role}</h4>
        {bio && <p>{bio}</p>}
      </div>
    </div>
  )
}
