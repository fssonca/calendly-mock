import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { fetchAvailableTimes } from "./store/scheduleSlice";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  // 1) Grab loading & error states from Redux
  const isLoading = useSelector((state: RootState) => state.schedule.isLoading);
  const error = useSelector((state: RootState) => state.schedule.error);

  // 2) Also get any needed info for layout
  const selectedDateKey = useSelector(
    (state: RootState) => state.schedule.selectedDateKey
  );
  const confirmationStep = useSelector(
    (state: RootState) => state.schedule.confirmationStep
  );

  // 3) On mount, fetch the times
  useEffect(() => {
    dispatch(fetchAvailableTimes());
  }, [dispatch]);

  // 4) If loading, show a spinner or text
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-bold">Loading available times...</p>
      </div>
    );
  }

  // 5) If an error occurred, show an error message
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-bold text-red-500">
          Error fetching times: {error}
        </p>
      </div>
    );
  }

  // 6) Otherwise, render the main UI
  const containerClasses =
    selectedDateKey || confirmationStep
      ? "min-w-[900px] max-w-[1060px]"
      : "w-full max-w-[800px]";

  return (
    <div
      className={`
        mx-auto
        flex
        mt-[33px]
        min-h-[700px]
        ${containerClasses}
        transition-all
        duration-200
        ease-out
        rounded-lg
        overflow-hidden
        shadow-custom 
        border border-[#1a1a1a1a]
      `}
    >
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
