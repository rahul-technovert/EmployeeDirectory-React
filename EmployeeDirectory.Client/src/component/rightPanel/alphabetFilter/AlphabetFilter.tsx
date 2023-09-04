import Utils from "../../../common/utils/Utils";
import { FaUser } from "react-icons/fa";
import "./AlphabetFilter.scss";
import { useFilter } from "../../../contexts/FilterContext";

export default function AlphabetFilter() {
  const { filter, setFilter } = useFilter();

  const utils = new Utils();
  const alphabets = utils.generateAlphabets();

  const handleAlphabetSelect = (alphabet: string) => {
    if (filter.alphabets.includes(alphabet))
      setFilter({
        ...filter,
        alphabets: filter.alphabets.filter((char) => char !== alphabet),
      });
    else {
      setFilter({
        ...filter,
        alphabets: [...filter.alphabets, alphabet],
      });
    }
  };
  return (
    <div className="alphabets">
      <ul className="list-groups d-flex p-0 justify-content-between">
        <li className="list-group-item">
          <button
            className="btn"
            onClick={() => setFilter({ ...filter, alphabets: [] })}
          >
            <FaUser />
          </button>
        </li>
        {alphabets.map((char) => (
          <li key={char} className="list-group-item">
            <button
              onClick={() => {
                handleAlphabetSelect(char);
              }}
              className={
                "btn " + (filter.alphabets.includes(char) ? "active" : "")
              }
            >
              {char}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
