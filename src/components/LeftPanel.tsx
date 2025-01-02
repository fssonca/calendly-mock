import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import camera from "../assets/camera.svg";
import clock from "../assets/clock.svg";
import calendar from "../assets/calendar.svg";
import arrowBack from "../assets/arrow-back.svg";
import globe from "../assets/globe.svg";
import {
  setConfirmationStep,
  setSelectedDate,
  setSelectedTimeSlot,
} from "../store/scheduleSlice";
import { getFormattedDateTime } from "../utils/dateUtils";

const data = {
  company_logo:
    "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_auto/vista-logos-pages/en-US/images/logomaker/template-example-01",
  user_img:
    "https://www.icon0.com/free/static2/preview2/stock-photo-teen-boy-avatar-people-icon-character-cartoon-33260.jpg",
  user_name: "John Doe",
};

const LeftPanel = () => {
  const selectedDateKey = useSelector(
    (state: RootState) => state.schedule.selectedDateKey
  );

  const confirmationStep = useSelector(
    (state: RootState) => state.schedule.confirmationStep
  );

  const selectedTimeSlot = useSelector(
    (state: RootState) => state.schedule.selectedTimeSlot
  );

  const selectedTimezone = useSelector(
    (state: RootState) => state.schedule.selectedTimezone
  );

  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setSelectedDate(null));
    dispatch(setSelectedTimeSlot(null));
    dispatch(setConfirmationStep(false));
  };

  const widthClass =
    selectedDateKey || confirmationStep ? "w-[35%]" : "w-[50%]";

  return (
    <div
      className={`
          ${widthClass}
          min-w-[300px]
          transition-all
          duration-200 
          ease-out
          border-r border-[#1a1a1a1a]
          flex flex-col
        `}
    >
      <div className="text-slate-700 flex-grow flex flex-col">
        <div className="w-full flex items-center justify-center py-6 border-b border-[#1a1a1a1a] relative">
          {confirmationStep && (
            <button
              onClick={handleBack}
              className="absolute w-10 h-10 left-6 top-6 border border-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-100"
            >
              <img src={arrowBack} className="w-7" />
            </button>
          )}

          <img
            src={data.company_logo}
            alt="Company logo"
            className="max-h-[120px] rounded-md"
          />
        </div>
        <div className="w-full flex-column justify-items-start p-6">
          <img
            src={data.user_img}
            alt={data.user_name}
            className="h-[65px] rounded-full"
          />
          <div className="font-bold text-base text-[#1a1a1a9c] mt-2">
            {data.user_name}
          </div>
          <div className="text-2xl font-bold text-slate-900">
            30 Minute Interview
          </div>

          <div className="flex py-2 mt-3">
            <img src={clock} alt="clock" className="h-5" />
            <span className="font-bold text-sm text-[#1a1a1a9c] ml-2">
              30 min
            </span>
          </div>

          <div className="flex items-center py-2">
            <img src={camera} alt="clock" className="h-5" />
            <span className="font-bold text-sm text-[#1a1a1a9c] ml-2 text-left">
              Web conferencing details provided upon confirmation.
            </span>
          </div>

          {confirmationStep && selectedTimeSlot && (
            <>
              <div className="flex items-center py-2">
                <img src={calendar} alt="calendar" className="h-5" />
                <span className="font-bold text-sm text-[#1a1a1a9c] ml-2 text-left">
                  {getFormattedDateTime(selectedTimeSlot)}
                </span>
              </div>

              <div className="flex items-center py-2">
                <img src={globe} alt="globe" className="h-5 opacity-55" />
                <span className="font-bold text-sm text-[#1a1a1a9c] ml-2 text-left">
                  {selectedTimezone.label}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-auto flex justify-between px-6 py-5">
        <a href="#" className="text-base text-blue-800 hover:underline">
          Cookie settings
        </a>
        <a href="#" className="text-sm text-slate-900 hover:underline">
          Report abuse
        </a>
      </div>
    </div>
  );
};

export default LeftPanel;
