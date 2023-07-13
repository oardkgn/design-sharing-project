"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { deleteProject, fetchToken } from "@/lib/actions";

type Props = {
  projectId: string;
};

const ProjectActions = ({ projectId }: Props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const router = useRouter();

  const handleDeleteProject = async () => {
    setIsDeleting(true);

    const { token } = await fetchToken();

    try {
      await deleteProject(projectId, token);

      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flex items-center justify-center p-2 transition-all hover:bg-yellow-600 bg-yellow-400 rounded-md"
      >
        <Image src="/pencile.svg" width={20} height={20} alt="edit" />
      </Link>

      <button
        type="button"
        disabled={isDeleting}
        className={`flex items-center justify-center p-2 bg-red-400 transition-all hover:bg-red-700 rounded-md ${
          isDeleting ? " bg-red-950 " : " bg-red-400"
        }`}
        onClick={handleDeleteProject}
      >
        <Image src="/trash.svg" width={20} height={20} alt="delete" />
      </button>
    </>
  );
};

export default ProjectActions;
