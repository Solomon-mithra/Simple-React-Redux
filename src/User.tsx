
function User(props: any) {
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