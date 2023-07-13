import React from "react";
import { fetchAllProjects } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";
import { ProjectCard } from "@/components";

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
};

type Props = {
  searchParams: SearchParams;
};

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};

async function Home({ searchParams: { category, endcursor } }: Props) {
  const data = (await fetchAllProjects(category, endcursor)) as ProjectSearch;
  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="">
        <p className="text-center">No projects found, go create some first.</p>
      </section>
    );
  }

  return (
    <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => {
        console.log(node);

        return (
          <ProjectCard
            key={`${node?.id}`}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            liveSiteUrl={node?.liveSiteUrl}
            name={node?.createdBy.name}
            avatarUrl={node?.createdBy.avatarUrl}
            userId={node?.createdBy.id}
          />
        );
      })}
    </section>
  );
}

export default Home;
