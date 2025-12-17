import { useCallback, useEffect, useState } from "react";
import Display from "./Component/Body/Display";
import Table from "./Component/Body/Table";
import Header from "./Component/Header/Header";

function App() {
  const [box, setBox] = useState();
  const [tableData, setTableData] = useState([]);
  const [time, setTime] = useState(null);
  const [start, setStart] = useState(false);
  const [recordTime, setRecordTime] = useState(null);

  useEffect(() => {
    if (!start) return;

    let randomBox;
    do {
      randomBox = Math.floor(Math.random() * 9) + 1;
    } while (randomBox === box);

    const timer = setTimeout(() => {
      setBox(randomBox);
    }, time);

    return () => clearTimeout(timer);
  }, [start, time, box]);

  const handleStartButton = () => {
    setStart(true);
    setRecordTime(Date.now());
  };

  const handlePauseButton = () => {
    setStart(false);
  };

  const handleResetButton = () => {
    setBox(null);
    setTableData([]);
    setTime(null);
    setStart(false);
  };

  const handleBoxClick = useCallback(() => {
    if (start && box) {
      setTableData((prev) => {
        return [...prev, (Date.now() - recordTime) / 1000];
      });
      setRecordTime(Date.now());
    }
  });

  return (
    <div className="w-full h-screen flex border justify-center items-center font-bold">
      <div className="w-2/6 border">
        <Header
          handleStartButton={handleStartButton}
          handleResetButton={handleResetButton}
          handlePauseButton={handlePauseButton}
          setTime={setTime}
          time={time}
        />
        <div className="px-10 py-5 grid grid-rows-2 space-y-4">
          <Display box={box} handleBoxClick={handleBoxClick} />
          <Table list={tableData} />
        </div>
      </div>
    </div>
  );
}

export default App;
