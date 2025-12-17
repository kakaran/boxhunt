const Header = (props) => {
  const {
    handleStartButton,
    handleResetButton,
    handlePauseButton,
    setTime,
    time,
  } = props;
  return (
    <div className="flex justify-center gap-5 py-5 border-b">
      <button
        className="border px-6 py-1 cursor-pointer"
        onClick={() => handleStartButton()}
      >
        Start
      </button>
      <button className="border px-6 py-1" onClick={() => handlePauseButton()}>
        Pause
      </button>
      <button className="border px-6 py-1" onClick={() => handleResetButton()}>
        Reset
      </button>
      <input
        type="number"
        value={time / 1000}
        className="border w-20"
        onChange={(e) => setTime(e.target.value * 1000)}
      />
    </div>
  );
};

export default Header;
