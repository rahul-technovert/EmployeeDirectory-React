import "./SearchAndFilter.scss";
import { useFilter } from "../../../contexts/FilterContext";

export default function SearchAndFilter({
  toggleForm,
}: {
  toggleForm: () => void;
}) {
  const { filter, setFilter } = useFilter();

  const { keyword } = filter;
  console.log(filter);
  return (
    <div className="search-filter-block">
      <div className="d-flex justify-content-between mt-4 mb-4">
        <div className="d-flex align-items-center gap-5 search-block ">
          <div>
            <label className="label-text" htmlFor="fs-5  ">
              Search
            </label>
            <input
              placeholder="Enter any keyword"
              className="ms-2"
              value={keyword}
              onChange={(e) =>
                setFilter({ ...filter, keyword: e.target.value })
              }
              type="text"
            />
            <button
              className=" ms-4 clear-btn"
              onClick={() => setFilter({ ...filter, keyword: "" })}
            >
              Clear
            </button>
          </div>
          <div>
            <label className="label-text" htmlFor="fs-5 ">
              Filter By
            </label>
            <select
              onChange={(e) =>
                setFilter({ ...filter, filterBy: e.target.value })
              }
              className="ms-2"
              aria-label="Default select example"
            >
              <option value="firstName">Preferred Name</option>
              <option value="office">Preferred Office</option>
              <option value="department">Preferred Department</option>
              <option value="jobTitle">Preferred Job Title</option>
            </select>
          </div>
        </div>
        <button onClick={toggleForm} type="button" className="add-employee-btn">
          Add Employee
        </button>
      </div>

      <div className="note mb-2">
        Please use the advanced filter options to refine your results
      </div>
    </div>
  );
}
