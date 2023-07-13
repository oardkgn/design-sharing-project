import React from "react";
import { Modal, ProjectForm } from "@/components";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { getProjectDetails } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";


  const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
    const session = await getCurrentUser();
    const result = await getProjectDetails(id) as { project?: ProjectInterface };
    if (!session?.user) redirect("/");

    if (!result?.project) return (
        <p className="no-result-text">Failed to fetch project info</p>
      )

    return (
      <Modal>
        <h3 className=" mb-8 text-lg md:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4A55A2] to-[#a2d2ff]">Edit Project</h3>
        <ProjectForm type="edit" session={session} project={result?.project} />
      </Modal>
    );
  };


export default EditProject;