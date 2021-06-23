import "./ExpensesFilter.scss";

const ExpensesFilter = (props) => {
  console.log(props);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select
          onChange={(e) => props.onChangeFilter(e.target.value)}
          value={props.selectedValue}
        >
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
