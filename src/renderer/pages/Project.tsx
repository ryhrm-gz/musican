import { useMatch } from "@tanstack/react-location";

export const Project = () => {
  const { id } = useMatch().params;
  console.log(id);
  return (
    <div>
      <h1>Project</h1>
    </div>
  );
};
