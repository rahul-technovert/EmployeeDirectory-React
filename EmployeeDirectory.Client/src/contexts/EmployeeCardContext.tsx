import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import IEmployeeCard from "../interfaces/IEmployeeCard";
import EmployeeService from "../services/EmployeeService";

interface IContext {
  employeeCards: IEmployeeCard[];
  setEmployeeCards: React.Dispatch<React.SetStateAction<IEmployeeCard[]>>;
}

const EmployeeCardsContext = createContext<IContext>({
  employeeCards: [],
  setEmployeeCards: () => {
    throw new Error("Mehtod is not created");
  },
});

export const EmployeeCardsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [employeeCards, setEmployeeCards] = useState<IEmployeeCard[]>([]);

  useEffect(() => {
    const services = new EmployeeService();
    services
      .getCards()
      .then(({ data }) => setEmployeeCards(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <EmployeeCardsContext.Provider value={{ employeeCards, setEmployeeCards }}>
      {children}
    </EmployeeCardsContext.Provider>
  );
};

export const useEmployeeCard = () => {
  return useContext(EmployeeCardsContext);
};
