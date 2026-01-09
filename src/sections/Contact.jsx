import MyButton from "@/components/MyButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactImage from "@/assets/contact.png";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-primary-gray text-5xl lg:text-6xl">Contact Us</h1>
      <div className="flex flex-col-reverse md:flex-row gap-6">
        <form className="flex flex-col gap-2 w-full lg:w-[35%]">
          <Input
            placeholder="Name"
            type="text"
            className="border-none bg-gray rounded-none p-6"
          />
          <Input
            placeholder="Phone Number"
            type="phone"
            className="border-none bg-gray rounded-none p-6"
          />
          <Input
            placeholder="Email"
            type="email"
            className="border-none bg-gray rounded-none p-6"
          />
          <Input
            placeholder="Interested in"
            type="text"
            className="border-none bg-gray rounded-none p-6"
          />
          <Textarea
            placeholder="Message"
            className="border-none bg-gray rounded-none p-6 min-h-30"
          />
          <div className="mt-10">
            <MyButton
              className="bg-primary-black text-white"
              text="send email"
            />
          </div>
        </form>
        <div className="w-full lg:w-[65%]">
          <img
            src={contactImage}
            alt="contact image"
            className="w-full h-[74%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
