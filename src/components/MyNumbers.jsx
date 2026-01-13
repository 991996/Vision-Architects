export default function MyNumbers({ number1, number2 }) {
  return (
    <div className="flex items-center gap-5 text-primary-gray text-xl">
      <div className="flex flex-col">
        <p>0</p>
        <p>{number1}</p>
      </div>
      <div className="bg-primary-gray h-0.5 w-10 -rotate-45"></div>
      <p>0{number2}</p>
    </div>
  );
}
