import "./filterSection.css";

import { useDispatch, useSelector } from "react-redux";

export default function Filters(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (!props.show) {
    return null;
  }

  return (
    <div className="filters">
      <h3 className="filtersHeading">Filters</h3>

      <span
        className="clear-btn"
        onClick={() => dispatch({ type: "clearFilter" })}
      >
        {" "}
        Clear
      </span>

      <div className="filters-price">
        <p>Price range</p>
        <input
          onChange={(e) =>
            dispatch({ type: "filterByPrice", payload: e.target.value })
          }
          type="range"
          min="500"
          max="5000"
          list="values"
          id="price"
          value={state.price}
        />
        <datalist id="values">
          <option className="priceValue" value="500" label="500"></option>
          <option className="priceValue" value="5000" label="5000"></option>
        </datalist>
      </div>

      <div className="filters-category">
        <p>
          <b>Expertise</b>
        </p>
        <label>
          <input
            onChange={(e) => dispatch({ type: "checkBoxValue", payload: e })}
            value="Cardiology"
            type="checkbox"
            name="category"
            checked={state.checkBoxValues.includes("Cardiology")}
          />{" "}
          Cardiology
        </label>
        <label>
          <input
            onChange={(e) => dispatch({ type: "checkBoxValue", payload: e })}
            value="Neurology"
            type="checkbox"
            name="category"
            checked={state.checkBoxValues.includes("Neurology")}
          />{" "}
          Neurology
        </label>
        <label>
          <input
            onChange={(e) => dispatch({ type: "checkBoxValue", payload: e })}
            value="Orthopedics"
            type="checkbox"
            name="category"
            checked={state.checkBoxValues.includes("Orthopedics")}
          />{" "}
          Orthopedics
        </label>
        <label>
          <input
            onChange={(e) => dispatch({ type: "checkBoxValue", payload: e })}
            value="Dermatology"
            type="checkbox"
            name="category"
            checked={state.checkBoxValues.includes("Dermatology")}
          />{" "}
          Dermatology
        </label>
        <label>
          <input
            onChange={(e) => dispatch({ type: "checkBoxValue", payload: e })}
            value="Endocrinology"
            type="checkbox"
            name="category"
            checked={state.checkBoxValues.includes("Endocrinology")}
          />{" "}
          Endocrinology
        </label>
      </div>

      <div className="filters-rating">
        <p>
          <b>Rating</b>
        </p>
        <label>
          <input
            onChange={(e) =>
              dispatch({ type: "filterByRating", payload: e.target.value })
            }
            type="radio"
            name="rating"
            value="4"
            checked={state.rating === "4" ? true : false}
          />{" "}
          4 star & above
        </label>
        <label>
          <input
            onChange={(e) =>
              dispatch({ type: "filterByRating", payload: e.target.value })
            }
            type="radio"
            name="rating"
            value="3"
            checked={state.rating === "3" ? true : false}
          />{" "}
          3 star & above
        </label>
        <label>
          <input
            onChange={(e) =>
              dispatch({ type: "filterByRating", payload: e.target.value })
            }
            type="radio"
            name="rating"
            value="2"
            checked={state.rating === "2" ? true : false}
          />{" "}
          2 star & above
        </label>
        <label>
          <input
            onChange={(e) =>
              dispatch({ type: "filterByRating", payload: e.target.value })
            }
            type="radio"
            name="rating"
            value="1"
            checked={state.rating === "1" ? true : false}
          />{" "}
          1 star & above
        </label>
      </div>
    </div>
  );
}
