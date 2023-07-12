import React from "react";
import { Modal, ProjectForm } from "@/components";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";


  const CreateProject = async () => {
    const session = await getCurrentUser();

    if (!session?.user) redirect("/");

    return (
      <Modal>
        <h3 className=" mb-8 text-lg md:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4A55A2] to-[#a2d2ff]">Create a New Project</h3>

        <ProjectForm type="create" session={session} />
      </Modal>
    );
  };


export default CreateProject;
