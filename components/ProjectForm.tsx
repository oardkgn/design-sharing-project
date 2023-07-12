"use client";

import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { FormState, SessionInterface, ProjectInterface } from "@/common.types";
import CategoriesMenu from "./CategoriesMenu";
import Button from "./Button";
import FormField from "./FormField";
import Image from "next/image";
import { categoryFilters } from "@/constant";
import { fetchToken,createNewProject } from "@/lib/actions";
import { useRouter } from "next/navigation";

type Props = {
  type: string;
  session: SessionInterface;
  project?: ProjectInterface;
};

function ProjectForm({ type, session, project }: Props) {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    title: project?.title || "",
    description: project?.description || "",
    image: project?.image || "",
    liveSiteUrl: project?.liveSiteUrl || "",
    githubUrl: project?.githubUrl || "",
    category: project?.category || "",
  });

  const router = useRouter();

  const handleStateChange = (fieldName: keyof FormState, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.includes("image")) {
      alert("Please upload an image!");
      return;
    }
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;
      handleStateChange("image", result);
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    const { token } = await fetchToken();

    try {
      await createNewProject(form, session?.user?.id, token);
      router.push("/");
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <form className=" w-full" onSubmit={handleSubmit}>
      <div className=" flex flex-col mb-8 w-full relative">
        <label
          htmlFor="image"
          className="cursor-pointer z-30 border-dashed w-full lg:min-h-[400px] min-h-[200px] flex justify-center items-center mx-auto border border-[#a2d2ff] rounded-lg"
        >
          {!form.image && "Choose a poster for your project"}
        </label>

        <input
          id="image"
          type="file"
          accept="image/*"
          required={type === "create" ? true : false}
          className="hidden"
          onChange={(e) => handleChangeImage(e)}
        />
        {form.image && (
          <Image
            src={form?.image}
            className="absolute left-0 top-0  sm:p-10 max-w-full max-h-full max-h mx-auto object-contain z-20"
            alt="image"
            fill
          />
        )}
      </div>
      <div className=" flex flex-col gap-3">
        <FormField
          title="Title"
          state={form.title}
          placeholder="Graphix"
          setState={(value) => handleStateChange("title", value)}
        />

        <FormField
          title="Description"
          state={form.description}
          placeholder="Showcase and discover remarkable developer projects."
          isTextArea
          setState={(value) => handleStateChange("description", value)}
        />

        <FormField
          type="Website Url"
          title="Website URL"
          state={form.liveSiteUrl}
          placeholder="https://jsgraphix.pro"
          setState={(value) => handleStateChange("liveSiteUrl", value)}
        />

        <FormField
          type="Github Url"
          title="GitHub URL"
          state={form.githubUrl}
          placeholder="https://github.com/ardakgn"
          setState={(value) => handleStateChange("githubUrl", value)}
        />
      </div>
      <div className=" mt-8">
        <label htmlFor="cate" className=" text-sm pl-2">
          Select Category
        </label>
        <CategoriesMenu
          title="Categories"
          state={form.category}
          filters={categoryFilters}
          setState={(value) => handleStateChange("category", value)}
        />
      </div>
      <div className=" flex justify-end pt-28">
        <Button submitting={submitting} type="submit" title="Create" leftIcon="/plus.svg" />
      </div>
    </form>
  );
}

export default ProjectForm;
