import { Line } from "react-chartjs-2";

const LineChart = ({ dataObj }) => {
  return (
    <div className="purchase-trend">
      <Line
        data={dataObj}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Nett Damage Over Time (SGD)",
            },
            legend: {
              display: false,
            },
          },
        }}
        style={{width:"100%"}}
      />
    </div>
  );
};

export default LineChart;
