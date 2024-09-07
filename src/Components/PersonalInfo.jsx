import { PersonalStore } from "../stores/personalStore";

function PersonalInfo() {
  const { fullname, email, location, phone } = PersonalStore();

  return (
    <div className="personal">
      <h1>{fullname}</h1>
      {phone} | {email} | {location}
    </div>
  );
}

export default PersonalInfo;
