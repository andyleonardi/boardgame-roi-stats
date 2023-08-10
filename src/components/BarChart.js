import { Bar } from "react-chartjs-2";

const BarChart = ({ dataObj }) => {
  return (
    <div className="purchase-trend">
      <Bar
        data={dataObj}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Games in & out of collection",
            },
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        }}
        style={{width:"100%"}}
      />
    </div>
  );
};

export default BarChart;