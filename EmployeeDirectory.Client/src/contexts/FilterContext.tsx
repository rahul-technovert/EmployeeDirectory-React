import { createContext, useState, ReactNode, useContext } from "react";

interface IFilter {
  department: string;
  jobTitle: string;
  office: string;
  alphabets: string[];
  filterBy: string;
  keyword: string;
}

interface IContext {
  filter: IFilter;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

const defaultFilterObject: IFilter = {
  department: "",
  office: "",
  jobTitle: "",
  alphabets: [],
  filterBy: "firstName",
  keyword: "",
};

export const FilterContext = createContext<IContext>({
  filter: defaultFilterObject,
  setFilter: () => {
    throw new Error("Method is not created");
  },
});

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<IFilter>(defaultFilterObject);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
