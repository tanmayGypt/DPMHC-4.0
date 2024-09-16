import "./Ticker.css";

function Alert() {
  return (
    <div>
      <Ticker />
    </div>
  );
}

export default Alert;

const Ticker = () => {
  return (
    <div className="ticker-wrapper bg-red-500">
      <div className="ticker text-black">
        <div className="ticker-item text-black font-bold">
          Your moving text goes here
        </div>
        <div className="ticker-item text-black font-bold">
          More text to scroll
        </div>
        <div className="ticker-item text-black font-bold">
          Another piece of text
        </div>
        <div className="ticker-item text-black font-bold">
          Your moving text goes here
        </div>
        <div className="ticker-item text-black font-bold">
          More text to scroll
        </div>
        <div className="ticker-item text-black font-bold">
          Another piece of text
        </div>
        <div className="ticker-item text-black font-bold">
          Your moving text goes here
        </div>
        <div className="ticker-item text-black font-bold">
          More text to scroll
        </div>
        <div className="ticker-item text-black font-bold">
          Another piece of text
        </div>
        <div className="ticker-item text-black font-bold">
          Your moving text goes here
        </div>
        <div className="ticker-item text-black font-bold">
          More text to scroll
        </div>
        <div className="ticker-item text-black font-bold">
          Another piece of text
        </div>
      </div>
    </div>
  );
};
