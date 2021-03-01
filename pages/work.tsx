import { GetStaticProps } from "next";
import { useState } from "react";

const GIT_USER = process.env.NEXT_PUBLIC_GIT_USER;
const GIT_HUB_LINK = `https://api.github.com/users/${GIT_USER}/repos` ;

const query= { 
sort: "full"
}

export const Work = ({ ...data }: Props) => {


  return <div>}</div>;
};

export const getStaticProps = async () => {
  const res = await fetch(GIT_HUB_LINK,);
  const data = await res.json();
  if (!data) {
    return {
      notfound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
};

export default Work;
