import "./chart-pie.scss";
import { TiChartPie } from "react-icons/ti";

const ChartPie = () => {
  return (
    <div>
      <div className="chart-header">
        <p>SUMMARY OF EXPENSES</p>
        <TiChartPie className="pie-chart" />
      </div>
    </div>
  );
};

export default ChartPie;
