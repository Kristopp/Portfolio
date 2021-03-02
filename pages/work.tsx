import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import GitList from "@components/github-list";

const GIT_USER = process.env.NEXT_PUBLIC_GIT_USER;
const GIT_HUB_LINK = `https://api.github.com/users/${GIT_USER}/repos`;

export type GitData = {
  id: number;
  html_url: string;
  createdAt: string;
  description: string;
  updated_at: string;
};
export type GitListProps = {
  data: GitData[];
};

function sortData(data: GitData[]) {
  const compareDate = function (date1: GitData, date2: GitData) {
    return date1 > date2 ? 1 : -1;
  };

  const sortedData = data.sort(compareDate)
  return sortedData
}
export const Work = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const sortedData: GitData = sortData(data);

  return <GitList data={sortedData} />;
};

export const getStaticProps = async () => {
  const res = await fetch(GIT_HUB_LINK, {
    headers: { Accept: "application/vnd.github.v3+json", sort: "updated" },
  });
  const data = await res.json();
  if (!data) {
    return {
      notfound: true,
    };
  } else {
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
};

export default Work;
