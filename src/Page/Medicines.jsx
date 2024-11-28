import { useEffect } from "react";
import MedicineList from "../Page_Components/Medicines/MedicineList";

function Medicines() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col gap-y-4 my-28">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-center font-bold text-4xl">
          Our Popular Medicines
        </h1>
        <div className="w-9/12 text-start mx-auto">
          At DP Memorial Homoeopathy Clinic, we offer a wide range of popular homeopathic medicines that have been trusted for their effectiveness in treating various health conditions. From Arnica Montana, known for its ability to heal injuries and bruises, to Nux Vomica, which helps with stress-related digestive issues, our medicines are carefully selected based on individual patient needs. Remedies like Calcarea Carbonica support overall wellness and vitality, while Rhus Toxicodendron is a go-to treatment for joint pain and stiffness. Whether you are dealing with skin conditions, fatigue, or nerve pain, our homeopathic treatments aim to address the root causes of your ailments, offering a natural and holistic approach to healing. We believe in using medicines that promote long-term health, and our experienced professionals are always ready to guide you in finding the most suitable remedy for your specific needs.
        </div>
      </div>

      <MedicineList />
    </div>
  );
}

export default Medicines;
