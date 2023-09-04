import { CategoriesProvider } from "../../contexts/CategoryContext";
import { EmployeeCardsProvider } from "../../contexts/EmployeeCardContext";
import { FiltersProvider } from "../../contexts/FilterContext";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../common/navbar/Navbar";

import "./app.scss";

function App() {
  return (
    <div className="container-block">
      <Navbar />
      <CategoriesProvider>
        <EmployeeCardsProvider>
          <FiltersProvider>
            <Dashboard />
          </FiltersProvider>
        </EmployeeCardsProvider>
      </CategoriesProvider>
    </div>
  );
}
export default App;
