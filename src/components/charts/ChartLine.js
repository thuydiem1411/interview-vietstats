import Chart from "react-apexcharts";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ChartLine = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const chartOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
    },
    xaxis: {
      categories: [
        "",
        "Basic English",
        "Children English",
        "Math",
        "Tutor",
        "1:1 Online",
        "Literature",
        "Exam Math",
        "Exam English",
        "M",
      ],
      labels: {
        style: {
          fontFamily: "Lexend, sans-serif",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 48,
      tickAmount: 6,
      labels: {
        style: {
          fontFamily: "Lexend, sans-serif",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        useSeriesColors: false,
        style: {
          fontFamily: "Lexend, sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          color: "#333",
        },
      },
    },
    colors: ["#FF5733", "#5A01A7"],
    markers: {
      size: 0,
      hover: {
        size: 7,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Lexend, sans-serif",
        fontSize: "12px",
        color: "#fff",
      },
      marker: {
        show: true,
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
    },
  };

  const chartSeries = [
    {
      name: "This month",
      data: [39, 34, 28, 32, 30, 28, 26, 24, 32, 26],
      fill: {
        gradient: {
          shade: "light",
          type: "horizontal",
          gradientToColors: ["#F4450E"],
          stops: [0, 100],
        },
      },
      color: "#FF8831",
    },
    {
      name: "Previous Month",
      data: [8, 12, 15, 18, 22, 20, 19, 23, 25, 16],
      fill: {
        gradient: {
          shade: "light",
          type: "horizontal",
          gradientToColors: ["#9804DE"],
          stops: [0, 100],
        },
      },
      color: "#268AFF",
    },
  ];
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between items-center">
        <div className="font-bold text-[20px] leading-5 text-[#3D3D3D]">
          Learn Activity
        </div>
        <div className="flex items-center gap-2 text-[#3D3D3D]">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="text-[14px] leading-[17.5px]">Feb 2023</span>
          <ArrowRightIcon className="h-4 w-4" />
        </div>
        <div>
          <Menu placement="bottom-end" open={openMenu} handler={setOpenMenu}>
            <MenuHandler className="flex gap-1 bg-white t max-w-[163px] h-[32px] p-3 items-center rounded-[4px] border-[#808080] border shadow-none ">
              <Button className="text-[14px]">
                <span className="normal-case text-[#3D3D3D] font-normal">
                  This month
                </span>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-4 w-4 transition-transform text-[#808080] ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>This month</MenuItem>
              <MenuItem>Previous Month</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={380}
      />
    </div>
  );
};
export default ChartLine;
