import { Link } from "react-router-dom";
import Alert from "./Alert";

export default function Header() {
  return (
    <>
      <Alert />
      <div className="font-nunito">
        <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/originals/5e/6b/1c/5e6b1c6a633aeeaa013312b69c89ab11.jpg')]">
          <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[rgba(21,21,21,0.7)] p-10">
            <div className="max-w-5xl mx-auto mb-20">
              <p className="text-white text-4xl font-bold leading-[55px]">
                DP MEMORIAL HOMOEOPATHY CLINIC
              </p>
              <img src="" alt="" id="logo1" className="w-12 mt-4 mb-6" />
              <p className="text-white text-xl leading-[35px] mb-6">
                Dr. Amit Gupta
                <br />A Doctor in New Delhi
              </p>
              <p className="text-white mb-2">Timings</p>
              <p className="text-white mb-6">
                Mon-Sat: 12:00 pm - 3:00 pm || 6:00–9:00 pm
              </p>
              <h3 className="text-white text-lg font-semibold">Address</h3>
              <p className="text-white mb-6">
                F 22/102, Shop Number 5, 6, Rohini Sector 3, Delhi - 110085
                (Beside State Bank Of, Near Gopal Jee Bhaturewale)
              </p>
              <h3 className="text-white text-lg font-semibold">Phone</h3>
              <p className="text-white mb-6">7654602444, 9716749169</p>

              <Link to="/Appointment" className="inline-block">
                <button className="w-full bg-[#f49892] hover:bg-[#f49832] text-white font-bold py-4 px-6 rounded-lg text-lg mx-auto">
                  Book An Appointment
                </button>
              </Link>
            </div>
            <a href="#iuy3u" className="mt-10">
              <img
                className="w-10 h-20 cursor-pointer"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw2.svg"
                alt="down arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
