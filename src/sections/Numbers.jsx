import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

export default function Numbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemsList = [
    {
      number: 1,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.`,
    },
    {
      number: 2,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.`,
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-primary-gray text-5xl lg:text-6xl">
        Main Focus/Mission Statement
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {itemsList.map((item, index) => {
          return (
            <motion.div
              ref={ref}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              initial={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeIn", delay: index / 2 }}
              key={index}
              className={
                index === 0 ? "justify-self-start" : "md:justify-self-end"
              }
            >
              <Item item={item} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="flex items-center gap-8 md:gap-3 lg:gap-8 max-w-100">
      <h1 className="text-gray text-9xl font-bold">{item.number}</h1>
      <p>{item.text}</p>
    </div>
  );
}
