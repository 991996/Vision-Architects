import MapComponent from "@/components/MapComponent";
import MyButton from "@/components/MyButton";
import MyLabel from "@/components/MyLabel";
import { contactInfo } from "@/data/Data";

export default function Contact() {
  return (
    <div className="mt-10 lg:mt-20 flex flex-col gap-6">
      <MyLabel label1="contact" label2="information" />
      <hr />
      <div className="flex justify-between items-center">
        {/* Text */}
        <div className="flex flex-col pt-10 justify-between h-80">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="font-medium">Location : </p>
              <p>{contactInfo.location}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium">Phone Number : </p>
              <p>{contactInfo.phoneNumber}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium">Email : </p>
              <p>{contactInfo.email}</p>
            </div>
          </div>

          <MyButton text="contact us" className="bg-primary-black text-white" />
        </div>
        {/* MAP */}
        <div className="w-[60%]">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
