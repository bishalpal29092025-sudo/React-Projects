export default function ProfileCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>

      <div className="stats">
        <div>
          <span>{user.followers}</span>
          <p>Followers</p>
        </div>
        <div>
          <span>{user.following}</span>
          <p>Following</p>
        </div>
        <div>
          <span>{user.public_repos}</span>
          <p>Repos</p>
        </div>
      </div>

      <a href={user.html_url} target="_blank">
        View Profile →
      </a>
    </div>
  );
}