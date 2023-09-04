import { useFilter } from "../../../contexts/FilterContext";
import { Category } from "../../../common/enums/Enums";
import { useCategory } from "../../../contexts/CategoryContext";

import "./CategoryFilter.scss";

export default function CategoryFilter() {
  const { categories } = useCategory();
  const { filter, setFilter } = useFilter();

  console.log(categories);

  return (
    <div className="categories-container">
      <div className=" mb-4">
        <h3 className="heading">Departments</h3>
        <ul className="categories">
          {categories.map((c) =>
            c.category === Category.DEPARTMENT ? (
              <li className="category" key={c.name}>
                <button
                  className={filter.department === c.name ? "fw-bold" : ""}
                  onClick={() =>
                    setFilter({
                      ...filter,
                      department: filter.department === c.name ? "" : c.name,
                    })
                  }
                >{`${c.name} (${c.total})`}</button>
              </li>
            ) : null
          )}
        </ul>
      </div>
      <div className=" mb-4">
        <h3 className="heading">Offices</h3>
        <ul className="categories">
          {categories.map((c) =>
            c.category === Category.OFFICE ? (
              <li className="category" key={c.name}>
                <button
                  className={filter.office === c.name ? "fw-bold" : ""}
                  onClick={() =>
                    setFilter({
                      ...filter,
                      office: filter.office === c.name ? "" : c.name,
                    })
                  }
                >{`${c.name} (${c.total})`}</button>
              </li>
            ) : null
          )}
        </ul>
      </div>
      <div className="">
        <h3 className="heading">Job Title</h3>
        <ul className="categories mb-3">
          {categories.map((c) =>
            c.category === Category.JobTitle ? (
              <li className="category" key={c.name}>
                <button
                  className={filter.jobTitle === c.name ? "fw-bold" : ""}
                  onClick={() =>
                    setFilter({
                      ...filter,
                      jobTitle: filter.jobTitle === c.name ? "" : c.name,
                    })
                  }
                >{`${c.name} (${c.total})`}</button>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}
