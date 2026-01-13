export default function MyLabel({ label1, label2 }) {
  return (
    <div className="flex flex-col gap-0">
      <h1 className=" uppercase text-primary-gray text-5xl lg:text-6xl">
        {label1}
      </h1>
      <h1 className=" capitalize text-4xl lg:text-5xl font-bold">{label2}</h1>
    </div>
  );
}
