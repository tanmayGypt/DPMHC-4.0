import "./Ticker.css";

function Alert({ notificationData }) {
  return (
    <div>
      <Ticker notificationData={notificationData} />
    </div>
  );
}

export default Alert;

const Ticker = ({ notificationData }) => {
  return (
    <div className="ticker-wrapper bg-red-500">
      <div className="ticker text-black">
        {notificationData?.map((notification, index) => (
          <div
            key={index}
            className="ticker-item flex-none px-8 text-black font-bold"
          >
            {notification.title}: {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};
