import { EmployeeCard } from "./employeeCard/EmployeeCard";
import { useEmployeeCard } from "../../../contexts/EmployeeCardContext";
import { useFilter } from "../../../contexts/FilterContext";

import "./EmployeeCardView.scss";

interface IProp {
  onViewProfile: (id: number) => void;
}

export default function EmployeeCardView({ onViewProfile }: IProp) {
  const { employeeCards: cards } = useEmployeeCard();
  const { filter } = useFilter();

  const filterCards = () => {
    let filteredCards = cards;
    if (filter.department)
      filteredCards = filteredCards.filter(
        (card) => card.department.departmentName === filter.department
      );
    if (filter.office)
      filteredCards = filteredCards.filter(
        (card) => card.office.officeName === filter.office
      );
    if (filter.jobTitle)
      filteredCards = filteredCards.filter(
        (card) => card.jobTitle.jobTitleName === filter.jobTitle
      );

    if (filter.alphabets.length > 0)
      filteredCards = filteredCards.filter((card) =>
        filter.alphabets.includes(card.firstName[0])
      );

    if (filter.keyword) {
      const { keyword } = filter;
      switch (filter.filterBy) {
        case "firstName":
          filteredCards = filteredCards.filter((card) =>
            card.firstName
              .toLocaleLowerCase()
              .startsWith(keyword.toLocaleLowerCase())
          );
          break;

        case "department":
          filteredCards = filteredCards.filter((card) =>
            card.department.departmentName
              .toLocaleLowerCase()
              .startsWith(keyword.toLocaleLowerCase())
          );
          break;
        case "office":
          filteredCards = filteredCards.filter((card) =>
            card.office.officeName
              .toLocaleLowerCase()
              .startsWith(keyword.toLocaleLowerCase())
          );
          break;
        case "jobTitle":
          filteredCards = filteredCards.filter((card) =>
            card.jobTitle.jobTitleName
              .toLocaleLowerCase()
              .startsWith(keyword.toLocaleLowerCase())
          );
          break;
      }
    }
    return filteredCards;
  };

  const filteredCards = filterCards();

  return (
    <div className="employees-card-content">
      {filteredCards.length === 0 ? (
        <h3>No Employees</h3>
      ) : (
        filteredCards.map((card) => (
          <EmployeeCard
            onViewProfile={onViewProfile}
            deleteEmployee={() => "deleted"}
            key={card.id}
            card={card}
          />
        ))
      )}
    </div>
  );
}
