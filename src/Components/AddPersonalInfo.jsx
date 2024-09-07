import { PersonalStore } from "../stores/personalStore";

function AddPersonalInfo() {
  const {
    fullname,
    setFullName,
    email,
    setEmail,
    location,
    setLocation,
    phone,
    setPhone,
  } = PersonalStore();

  return (
    <div>
      <h3>Personal Information</h3>
      <span>Name:</span>
      <br />
      <input
        type="text"
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}
      />
      <br />
      <span>Email:</span>
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <span>Location:</span>
      <br />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      <span>Phone:</span>
      <br />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
}

export default AddPersonalInfo;
