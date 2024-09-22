import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const ChartBarReveneu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const chartData = {
    series: [
      {
        name: "Value",
        data: [28, 47],
        style: {
          fontSize: "12px",
          colors: ["#0A5011"],
        },
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 225,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: true,
        },
      },
      colors: ["#008FFB", "#008FFB"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Yesterday", "Today"],
      },
      yaxis: {
        title: {
          text: "($)",
          style: {
            color: "#949CA9",
            fontSize: "10px",
            fontFamily: "'Lexend', sans-serif",
            fontWeight: 600,
          },
          rotate: 0,
          offsetX: 20,
          offsetY: -105,
        },
        labels: {
          style: {
            colors: ["#949CA9"],
            fontSize: "10px",
            fontFamily: "'Lexend', sans-serif",
          },
          formatter: function (value) {
            return +value;
          },
        },
      },
      grid: {
        show: true,
      },
      legend: {
        show: false,
      },
    },
  };
  return (
    <>
      <div>
        <div className="flex justify-between">
          <span className=" text-[#3D3D3D] font-bold text-[20px]">Revenue</span>
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
              <MenuItem>Yesterday</MenuItem>
              <MenuItem>Today</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="flex gap-1 justify-center items-center p-8 mt-9">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={250}
            width={210}
          />
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col gap-1  justify-center items-center">
              <span className="text-[20px] text-[#949CA9]">Today</span>
              <div className="font-bold text-[48px] leading-[37.5px] text-[#3D3D3D]">
                <span className="text-[24px] leading-[25px]">$</span>47
              </div>
            </div>
            <div className=" flex flex-col gap-1 items-center">
              <div className="text-center max-w-[44px] h-[28px] bg-[#E7FFE9] text-[#43C378]">
                +25%
              </div>
              <span className="text-[#949CA9]">vs Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChartBarReveneu;
