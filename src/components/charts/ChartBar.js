import React from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const chartConfig = {
  type: "line",
  height: 320,
  series: [
    {
      name: "Class",
      type: "column",
      data: [36, 28, 22, 30, 35, 40, 18, 38, 29, 10, 31, 36],
    },
    {
      name: "Revenue",
      type: "line",
      data: [
        3000, 4000, 2500, 2799, 3500, 3200, 2500, 3006, 2001, 2800, 4000, 999,
      ],
      markers: {
        size: 5,
        colors: ["#0A5011"],
        strokeColors: "#fff",
        strokeWidth: 2,
        shape: "circle",
      },
      dataLabels: {
        enabled: true,
        offsetY: -10,
        style: {
          fontSize: "12px",
          colors: ["#0A5011"],
        },
      },
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 1],
      curve: "smooth",
      dashArray: [0, 7],
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [0],
      offsetY: -5,
      style: {
        fontSize: "12px",
        colors: ["#0A5011"],
      },
      formatter: function (val) {
        return val;
      },
    },
    colors: ["#43C378", "#0A5011"],
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 4,
      },
    },
    xaxis: {
      categories: [
        "Course 1",
        "Course 2",
        "Course 3",
        "Course 4",
        "Course 5",
        "Course 6",
        "Course 7",
        "Course 8",
        "Course 9",
        "Course 10",
        "Course 11",
        "Tutor 12",
      ],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        rotate: -60,
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "'Lexend', sans-serif",
          fontWeight: 400,
        },
        hideOverlappingLabels: false,
      },
      tickPlacement: "between",
    },
    yaxis: [
      {
        title: {
          text: "(classes)",
          style: {
            color: "#949CA9",
            fontFamily: "Lexend, sans-serif",
          },
          rotate: 0,
          offsetX: 20,
          offsetY: -120,
        },
        labels: {
          style: {
            colors: "#949CA9",
            fontSize: "10px",
            fontWeight: 400,
            fontFamily: "Lexend, sans-serif",
          },
          formatter: (value) => `${value}`,
        },
      },

      {
        opposite: true,
        title: {
          text: "($)",
          style: {
            color: "#949CA9",
            fontFamily: "Lexend, sans-serif",
          },
          rotate: 0,
          offsetX: -20,
          offsetY: -120,
        },
        labels: {
          style: {
            colors: "#949CA9",
            fontSize: "10px",
            fontWeight: 400,
            fontFamily: "Lexend, sans-serif",
          },
          formatter: (value) => `${value}`,
        },
      },
    ],
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        show: false,
      },
      y: {
        formatter: (val, { seriesIndex }) => {
          if (seriesIndex === 0) return `${val}`;
          return `$${val}`;
        },
      },
    },
    legend: {
      show: false,
    },
    markers: {
      size: 6,
    },
  },
};

const ChartBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <span className=" text-[#3D3D3D] font-bold text-[20px]">
          New Classes
        </span>
        <Menu placement="bottom-end" open={openMenu} handler={setOpenMenu}>
          <MenuHandler className="flex gap-1 bg-[#D3D3D3] max-w-[75px] h-[26px] p-3 items-center rounded-[6px] shadow-none">
            <Button className="text-[14px]">
              <span className="normal-case text-[#3D3D3D]">Today</span>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-4 w-4 transition-transform text-[#808080] ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Last day</MenuItem>
            <MenuItem>Today</MenuItem>
            <MenuItem>Tomorrow</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <Chart {...chartConfig} className="pt-7" />
    </div>
  );
};

export default ChartBar;
