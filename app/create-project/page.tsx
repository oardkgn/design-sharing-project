import React from "react";
import { Modal,ProjectForm } from "@/components";

function page() {
  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>

      <ProjectForm />
    </Modal>
  );
}

export default page;
