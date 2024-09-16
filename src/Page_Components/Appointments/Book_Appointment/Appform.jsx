export default function Appform() {
  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="max-w-lg w-full bg-white mx-auto">
          <form action="/appointment" method="POST">
            <h2 className="text-3xl mb-5 text-center font-medium">
              Book An Appointment
            </h2>

            <div className="mb-5">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-gray-900 mb-3"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block font-medium text-lg text-gray-900 mb-3"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block font-medium text-lg text-gray-900 mb-3"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3 mb-5">
                <label
                  htmlFor="date"
                  className="block font-medium text-lg text-gray-900 mb-3"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
                />
              </div>

              <div className="w-full sm:w-1/2 px-3 mb-5">
                <label
                  htmlFor="time"
                  className="block font-medium text-lg text-gray-900 mb-3"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  min="09:00"
                  max="21:00"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div className="mb-5 pt-3">
              <label className="block font-semibold text-xl text-gray-900 mb-5">
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Enter Your message here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
                rows="5"
              ></textarea>
            </div>

            <div className="mb-5 pt-3">
              <label className="block font-semibold text-xl text-gray-900 mb-5">
                Upload Images (Optional)
              </label>
              <input type="file" className="block w-full text-gray-900" />
            </div>

            <div>
              <button className="w-full text-center font-semibold text-lg bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-200">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
