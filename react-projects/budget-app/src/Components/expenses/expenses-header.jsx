import "./style/expenses-header.scss";

const ExpensesHeader = () => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select className="yearFilter">
          <option>Filter by Year</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
        </select>
        <select className="sort">
          <option>Sort</option>
          <option>A - Z</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesHeader;
