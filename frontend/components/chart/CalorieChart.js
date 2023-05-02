import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { fetchCalorieChartData } from "../../util/chart_api_util";

Chart.register(CategoryScale);

export default function CalorieChart() {
    const [chartData, setChartData] = useState(false);

    useEffect(() => {
        const getChartData = () => {
            fetchCalorieChartData().then(data => {
                setChartData(data);
            })
        }

        getChartData();
    }, [])

    const parseChartData = () => {
        const chartDataObject = {
            labels: Object.keys(chartData[0]).reverse().map(date => date),
            datasets: [
                {
                    label: "Calories",
                    data: Object.values(chartData[0]).reverse().map(calories => calories),
                    borderColor: '#00a82d',
                    backgroundColor: '#00a82d'
                }
            ]
        }
        return chartDataObject;
    }

    if (chartData) {
        return (
            <div className="chart-container">
                <Line width={500} height={500}
                    data={parseChartData()}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Calorie Chart"
                            }
                        }
                    }} />
            </div>
          )
    } else {
        return "";
    }
  
}
