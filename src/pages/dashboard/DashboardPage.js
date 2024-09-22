import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

import GirlWithTabletImage from "../../assets/girl-with-tablet.png";
import BannerImage from "../../assets/banner.png";
import IconCardClass from "../../assets/icon-card-class.png";
import IconCardStudent from "../../assets/icon-card-student.png";
import IconCardTutor from "../../assets/icon-card-tutor.png";
import IconCardRevenue from "../../assets/icon-card-revenue.png";
import ChartBar from "../../components/charts/ChartBar";
import ChartLine from "../../components/charts/ChartLine";
import ChartBarReveneu from "../../components/charts/ChartBarReveneu";
const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex gap-7 h-[812px]">
        <div className="w-4/5 flex flex-col justify-between">
          <div className="h-[205px] relative">
            <img
              src={BannerImage}
              alt=""
              className="absolute mt-[30px] h-[117px] w-full object-cover"
            />
            <div className="flex items-center relative z-10 mx-[60px] px-[17px] gap-[77px]">
              <div>
                <img src={GirlWithTabletImage} alt="GirlWithTabletImage" />
              </div>
              <div>
                <div className="text-[30px] leading-[37.5px] text-[#3D3D3D] font-bold w-full">
                  Hello, User ID
                </div>
                <div className="text-4 leading-6 text-[#3D3D3D] w-full">
                  Manage your activities in this dashboard.
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 h-[158px]">
            <div className="w-1/4 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-4 flex flex-col justify-between items-center">
              <div>
                <img src={IconCardClass} alt="IconCardClass" />
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="font-bold text-[30px] leading-[37.5px] text-[#3D3D3D]">
                  254
                </div>
                <div className="text-[14px] leading-5 text-[#949CA9]">
                  Class
                </div>
              </div>
            </div>
            <div className="w-1/4 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-4 flex flex-col justify-between items-center">
              <div>
                <img src={IconCardTutor} alt="IconCardTutor" />
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="font-bold text-[30px] leading-[37.5px] text-[#3D3D3D]">
                  647
                </div>
                <div className="text-[14px] leading-5 text-[#949CA9]">
                  Tutor
                </div>
              </div>
            </div>
            <div className="w-1/4 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-4 flex flex-col justify-between items-center">
              <div>
                <img src={IconCardStudent} alt="IconCardStudent" />
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="font-bold text-[30px] leading-[37.5px] text-[#312424]">
                  834
                </div>
                <div className="text-[14px] leading-5 text-[#949CA9]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-1/4 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-4 flex flex-col justify-between items-center">
              <div>
                <img src={IconCardRevenue} alt="IconCardClass" />
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="font-bold text-[30px] leading-[37.5px] text-[#3D3D3D]">
                  <span className="text-[20px] leading-[25px]">$</span>834
                </div>
                <div className="text-[14px] leading-5 text-[#949CA9]">
                  Total Revenue
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 h-[411px]">
            <div className="w-4/6 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-4">
              <ChartBar />
            </div>
            <div className="w-2/6 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-4">
              <ChartBarReveneu />
            </div>
          </div>
        </div>
        <div className="w-1/5 flex flex-col justify-between">
          <div className="h-[300px] rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-4"></div>
          <div className="h-[490px] rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-4"></div>
        </div>
      </div>
      <div className="flex gap-7 h-[468px]">
        <div className="w-3/4 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-4 px-8">
          <ChartLine />
        </div>
        <div className="w-1/4 flex flex-col justify-between gap-6">
          <div className="h-1/4 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-6 flex justify-between items-center">
            <div className="flex flex-col justify-between h-full">
              <div className="text-[16px] leading-5 text-[#3D3D3DB2]">
                Total Class
              </div>
              <div className="font-bold text-[24px] leading-[30px] text-[#3D3D3D]">
                20 CLASS
              </div>
            </div>
            <div className="flex justify-center items-center border gap-1 border-[#43C378] rounded-[22px] px-5 py-1 bg-[#43C37833]">
              <ArrowUpIcon
                className={`h-4 w-4 transition-transform text-black`}
              />
              <span className="text-[16px] leading-5">15%</span>
            </div>
          </div>
          <div className="h-1/4 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-6 flex justify-between items-center">
            <div className="flex flex-col justify-between h-full">
              <div className="text-[16px] leading-5 text-[#3D3D3DB2]">
                New Class
              </div>
              <div className="font-bold text-[24px] leading-[30px] text-[#3D3D3D]">
                6 CLASS
              </div>
            </div>
            <div className="flex justify-center items-center border gap-1 border-[#43C378] rounded-[22px] px-5 py-1 bg-[#43C37833]">
              <ArrowUpIcon
                className={`h-4 w-4 transition-transform text-black`}
              />
              <span className="text-[16px] leading-5">50%</span>
            </div>
          </div>
          <div className="h-1/4 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-6 flex justify-between items-center">
            <div className="flex flex-col justify-between h-full">
              <div className="text-[16px] leading-5 text-[#3D3D3DB2]">
                Stopped Class
              </div>
              <div className="font-bold text-[24px] leading-[30px] text-[#3D3D3D]">
                4 CLASS
              </div>
            </div>
            <div className="flex justify-center items-center border gap-1 border-[#FF6968] rounded-[22px] px-5 py-1 bg-[#FF696833]">
              <ArrowDownIcon
                className={`h-4 w-4 transition-transform text-black`}
              />
              <span className="text-[16px] leading-5">5%</span>
            </div>
          </div>
          <div className="h-1/4 rounded-2xl bg-white shadow-[0px_0px_24px_0px_#00000033] p-6 flex justify-between items-center">
            <div className="flex flex-col justify-between h-full">
              <div className="text-[16px] leading-5 text-[#3D3D3DB2]">
                Class Today
              </div>
              <div className="font-bold text-[24px] leading-[30px] text-[#3D3D3D]">
                12 CLASS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
