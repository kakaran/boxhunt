const Display = (props) => {
  const { box, handleBoxClick } = props;
  return (
    <div className="grid grid-cols-3 grid-rows-3 border h-60">
      <div
        className={`border ${box === 1 ? "bg-red-500" : ""}`}
        onClick={() => handleBoxClick()}
      ></div>
      <div
        className={`border ${box === 2 ? "bg-red-500" : ""}`}
        onClick={() => handleBoxClick()}
      ></div>
      <div
        className={`border ${box === 3 ? "bg-red-500" : ""}`}
        onClick={() => handleBoxClick()}
      ></div>
      <div
        className={`border ${box === 4 ? "bg-red-500" : ""}`}
        onClick={() => handleBoxClick()}
      ></div>
      <div
        className={`border ${box === 5 ? "bg-red-500" : ""}`}
        onClick={() => handleBoxClick()}
      ></div>
      <div
        className={`border ${box === 6 ? "bg-red-500" : ""}`}
        onClick={() => handleBoxClick()}
      ></div>
      <div
        className={`border ${box === 7 ? "bg-red-500" : ""}`}
        onClick={() => handleBoxClick()}
      ></div>
      <div
        className={`border ${box === 8 ? "bg-red-500" : ""}`}
        onClick={() => handleBoxClick()}
      ></div>
      <div
        className={`border ${box === 9 ? "bg-red-500" : ""}`}
        onClick={() => handleBoxClick()}
      ></div>
    </div>
  );
};

export default Display;
