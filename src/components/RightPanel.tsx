import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { TimeSlotForm } from "./TimeSlotForm";
import ConfirmationForm from "./ConfirmationForm";
import { ScheduleSection } from "./ScheduleSection";

const RightPanel = () => {
  const selectedDateKey = useSelector(
    (state: RootState) => state.schedule.selectedDateKey
  );
  const confirmationStep = useSelector(
    (state: RootState) => state.schedule.confirmationStep
  );

  const widthClass = selectedDateKey ? "w-[65%]" : "w-[50%]";

  return (
    <div
      className={`
        ${widthClass}
        bg-white
        transition-all
        duration-200
        ease-out
        text-slate-700
        relative
        py-7 px-3
      `}
    >
      {!confirmationStep ? (
        <>
          <h2 className="text-lg font-bold text-slate-900 px-4 w-full text-left">
            Select a Date & Time
          </h2>
          {selectedDateKey ? (
            <div className="flex w-full h-full">
              <div className="w-[60%] p-2">
                <ScheduleSection />
              </div>
              <div className="w-[40%]">
                <TimeSlotForm />
              </div>
            </div>
          ) : (
            <div className="w-full h-full">
              <ScheduleSection />
            </div>
          )}
        </>
      ) : (
        <div>
          <ConfirmationForm />
        </div>
      )}
    </div>
  );
};

export default RightPanel;
