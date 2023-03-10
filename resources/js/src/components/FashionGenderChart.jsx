import { useEffect, useState } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useTranslation } from "react-i18next";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const FashionGenderChart = ({ gender }) => {
    const { t } = useTranslation(["dashboard"]);
    const [chartConfigs, setChartConfigs] = useState(null);

    useEffect(() => {
        if (gender) {
            let data = gender;

            setChartConfigs({
                type: "pie2d", // The chart type
                width: "100%", // Width of the chart
                height: "100%", // Height of the chart
                dataFormat: "json", // Data type
                dataSource: {
                    chart: {
                        caption: "Fashion Trends Across Gender",
                        theme: "fusion",
                        startingAngle: "310",
                        showLegend: "1",
                        decimals: "1",
                        valuePosition: "inside",
                        minAngleForValue: "40",
                    },
                    data,
                },
            });
        }
    }, [gender]);

    return (
        <div className="card" style={{ minHeight: 400 }}>
            <div className="card-body">
                {gender && chartConfigs && <ReactFC {...chartConfigs} />}
            </div>
        </div>
    );
};

export default FashionGenderChart;
