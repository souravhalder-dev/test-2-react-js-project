import { use } from "react";

export default function users({ featchData }) {
  const user = use(featchData);
  console.log(user);
  return (
    <div>
      <h1>User:{user.length} </h1>
    </div>
  );
}
