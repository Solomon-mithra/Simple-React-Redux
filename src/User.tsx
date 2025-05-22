
function User(props: { username: string; email: string; age: number }) {
  return (
    <div>
      <h3>User Details</h3>
      <p>Username: {props.username}</p>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default User;