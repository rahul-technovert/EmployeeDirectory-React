import { MdOpenInNew } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useEmployeeCard } from "../../../../contexts/EmployeeCardContext";
import { useCategory } from "../../../../contexts/CategoryContext";
import profile from "../../../../assets/profile.jpg";
import IEmployeeCard from "../../../../interfaces/IEmployeeCard";
import EmployeeService from "../../../../services/EmployeeService";

import "./employeeCard.scss";

interface Props {
  card: IEmployeeCard;
  onViewProfile: (id: number) => void;
  deleteEmployee: () => void;
}

export const EmployeeCard = ({ card, onViewProfile }: Props) => {
  const { employeeCards, setEmployeeCards } = useEmployeeCard();
  const employeeServices = new EmployeeService();
  const { setCategories } = useCategory();

  const handleDelete = (id: number) => {
    setEmployeeCards(employeeCards.filter((c) => c.id !== id));
    employeeServices.removeEmployee(card.id).then(() => {
      employeeServices.getCounts().then(({ data }) => setCategories(data));
    });
  };

  return (
    <div className="d-flex p-2 employee-card">
      <div className="icons">
        <button onClick={() => onViewProfile(card.id)} data-id={card.id}>
          <MdOpenInNew size="12" color="#9999" />
        </button>
        <button data-id={card.id} onClick={() => handleDelete(card.id)}>
          <AiFillDelete size="12" color="#999" />
        </button>
      </div>
      <div className="img-block me-3 ">
        <img src={profile} alt="" />
      </div>
      <div className="info-block">
        <h3 className="name mb-1">{card.firstName + " " + card.lastName}</h3>
        <p className="job-title job-title">{card.jobTitle.jobTitleName}</p>
        <p className="department department">
          {card.department.departmentName}
        </p>
      </div>
    </div>
  );
};
