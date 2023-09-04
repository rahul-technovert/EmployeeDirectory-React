import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import ICategoryCount from "../interfaces/ICategoryCount";
import EmployeeService from "../services/EmployeeService";

interface IContext {
  categories: ICategoryCount[];
  setCategories: React.Dispatch<React.SetStateAction<ICategoryCount[]>>;
}

const CategoryContext = createContext<IContext>({
  categories: [],
  setCategories: () => {
    throw new Error("setCategories function is not yet implemented");
  },
});

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<ICategoryCount[]>([]);
  console.log("i m done");
  useEffect(() => {
    const services = new EmployeeService();
    console.log(services);
    services
      .getCounts()
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};
