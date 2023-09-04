import { useState } from "react";
import { Profile } from "./profile/Profile";
import AlphabetFilter from "../rightPanel/alphabetFilter/AlphabetFilter";
import SearchAndFilter from "../rightPanel/searchAndFilter/SearchAndFilter";
import Form from "../common/form/Form";
import CategoryFilter from "./categoryFilter/CategoryFilter";
import RightPanel from "../rightPanel/RightPanel";
import EmployeeCardView from "../rightPanel/employeeCardView/EmployeeCardView";

import "./dashboard.scss";

export default function Dashboard() {
  const [selectedId, setId] = useState<number | null>(null);
  const [isFormVisible, setFormVisibility] = useState<boolean>(false);
  const [isProfileVisible, setProfileVisibility] = useState<boolean>(false);

  const toggleForm = () => setFormVisibility((prev) => !prev);

  const handleProfileView = (id: number) => {
    setProfileVisibility(true);
    setId(id);
  };

  const handleProfileClose = () => {
    setProfileVisibility(false);
    setId(null);
  };

  return (
    <div className="dashboard">
      <CategoryFilter />

      <RightPanel>
        <AlphabetFilter />
        <SearchAndFilter toggleForm={toggleForm} />
        <EmployeeCardView onViewProfile={handleProfileView} />
      </RightPanel>

      {isFormVisible && <Form toggleForm={toggleForm} id={selectedId} />}
      {isProfileVisible && (
        <Profile
          onCloseProfile={handleProfileClose}
          toggleForm={toggleForm}
          id={selectedId}
        />
      )}
    </div>
  );
}
