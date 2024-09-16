import {
  Animator,
  batch,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  Sticky,
} from "react-scroll-motion";
import MedicineList from "../Page_Components/Medicines/MedicineList";

function Medicines() {
  const FadeUp = batch(FadeIn(), MoveIn(0, 100));
  return (
    <div className="flex flex-col gap-y-4 my-28">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-center font-bold text-4xl">
          Our Popular Medicines
        </h1>
        <div className="w-9/12 text-start mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          asperiores, inventore mollitia, ipsam deserunt quasi assumenda eveniet
          unde debitis at similique vel totam quisquam saepe sunt qui. Quis,
          sapiente fuga, laudantium iure itaque repudiandae voluptatibus, qui
          officiis ex omnis minima at fugit tenetur facere cum.
        </div>
      </div>

      <MedicineList />
    </div>
  );
}

export default Medicines;
