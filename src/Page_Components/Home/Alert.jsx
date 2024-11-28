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
  // Check if notificationData is empty or undefined
  const hasNotifications = notificationData?.filter((item) => item.showOnWeb && item.active).length > 0;

  return (
    <div className="ticker-wrapper bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="ticker text-white">
        {/* If no notifications, show a default welcome message */}
        {hasNotifications ? (
          notificationData?.filter((item) => item.showOnWeb && item.active).map((notification, index) => (
            <div key={index} className="ticker-item flex-none px-8 text-white font-semibold text-lg">
              <span className="font-bold">{notification.title}: </span>
              {notification.message}
            </div>
          ))
        ) : (
          <div className="ticker-item flex-none px-8 text-white font-semibold text-lg">
            <span className="font-bold">Welcome to DP Memorial Homoeopathy Clinic!</span>
            We are committed to supporting your health journey through holistic healing. Whether you are a first-time visitor or a long-time patient, we focus on providing personalized care and natural remedies that prioritize your overall wellness.
            <br /><br />
            Explore our range of treatments, services, and resources carefully designed to help you lead a healthy, balanced life. If you have any questions or need assistance, feel free to reach out to us at any time. We are here to help!
          </div>
        )}
      </div>
    </div>
  );
};
