import React from "react";
import { fetchAllProjects } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";
import { Pagination, ProjectCard } from "@/components";

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

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

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
    <div className="min-h-[580px] flex flex-col justify-start">
      {category ? <h4 className=" font-semibold text-lg py-1">Search for {category}</h4> : <h4 className=" font-semibold text-lg py-1">All Projects</h4> }
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl ">
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
    <Pagination 
        startCursor={data?.projectSearch?.pageInfo?.startCursor} 
        endCursor={data?.projectSearch?.pageInfo?.endCursor} 
        hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage} 
        hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}
      />
    </div>
  );
}

export default Home;
