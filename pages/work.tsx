import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import GitList from "@components/github-list";
import { css } from "@emotion/react"

const container = css`

  h1 { 
    overflow: auto;
    padding: 0 0 0 2%;
  }
`

const GIT_USER = process.env.NEXT_PUBLIC_GIT_USER;
const GIT_HUB_LINK = `https://api.github.com/users/${GIT_USER}/repos?per_page=25&sort=created`;

export type GitData = {
  id: number;
  html_url: string;
  created_at: string;
  description: string;
  updated_at: string;
  language: string
};
export type GitListProps = {
  data: GitData[];
};

function sortData(data: GitData[]) {
  const compareDate = function (date1: GitData, date2: GitData) {
    return date1 > date2 ? -1 : 1;
  };

  const sortData = data.sort(compareDate);
  return sortData;
}
export const Work = ({
  sortedData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div css={container}>
      <h1>This is my git hub repo list sorted by last update</h1>
      <GitList data={sortedData} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(GIT_HUB_LINK, {
    headers: { Accept: "application/vnd.github.v3+json"},
  });
  const data = await res.json();
  if (!data) {
    return {
      notfound: true,
    };
  } else {
    const sortedData: GitData = sortData(data);
    return {
      props: { sortedData }, // will be passed to the page component as props
    };
  }
};

export default Work;
