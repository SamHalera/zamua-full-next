import Link from "next/link";
import ProjectsListTable from "./ProjectsListTable";

const ProjectsList = () => {
  return (
    <div>
      <Link href={"/admin/projects/new"} className="custom-btn">
        new project
      </Link>
      <ProjectsListTable />
    </div>
  );
};

export default ProjectsList;
