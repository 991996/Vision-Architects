import MyLabel from "@/components/MyLabel";
import { useLocation } from "react-router-dom";
import image1 from "@/assets/project-details/chart.jpg";
import image2 from "@/assets/project-details/office.jpg";

export default function Project() {
  const { state } = useLocation();
  const project = state?.project;
  console.log(project);
  if (!project) return <p className=" font-medium text-2xl">No Project Data</p>;
  return (
    <div className="mt-10 lg:mt-20 flex flex-col gap-6">
      <MyLabel
        label1={project.title.split(" ")[0]}
        label2={project.title.split(" ").slice(1).join(" ")}
      />
      <hr />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 max-h-100">
          <img
            src={project.image}
            alt="project image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 lg:col-span-1 max-h-100">
          <img
            src={image2}
            alt="project image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with.
          </p>
        </div>
        <div className="col-span-3 max-h-100">
          <img
            src={image1}
            alt="project image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
