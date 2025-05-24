import { useEffect } from "react";

function User(props: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [props]);

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