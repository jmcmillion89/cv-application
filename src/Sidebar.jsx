import AddEducationInfo from "./Components/AddEducationInfo";
import AddExperienceInfo from "./Components/AddExperienceInfo";
import AddPersonalInfo from "./Components/AddPersonalInfo";

function Sidebar() {
  return (
    <div className="sidebar">
      <AddPersonalInfo />
      <AddEducationInfo />
      <AddExperienceInfo />
    </div>
  );
}

export default Sidebar;
