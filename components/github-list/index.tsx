import React, { useEffect } from "react";
import Link from "next/link";
import { GitData, GitListProps } from "../../pages/work";
import { container, cardStyle } from "./style";
import { gradientTextStyle } from "@shared/reusableStyles";
import anime from "animejs";

const GitListItems = ({
  id,
  name,
  html_url,
  created_at,
  description,
  language,
}: GitData) => {
  useEffect(() => {
    anime({
      targets: ".fromRight",
      translateX: [2000, 0],
      delay: anime.stagger(100, {start: 500})
    });
  }, []);
  return (
    <div key={id} css={cardStyle} className="fromRight">
      <li>
        <h2 css={gradientTextStyle}>{name}</h2>
        <section>
          <Link href={html_url}>
            <a>{html_url}</a>
          </Link>
          <p>{description}</p>
          <small>{language}</small>
          <small> {created_at}</small>
        </section>
      </li>
    </div>
  );
};

const PostGitItems = ({ data }: GitListProps) => {
  return (
    <div css={container} >
      <ul>{data.map(GitListItems)}</ul>
    </div>
  );
};

export default PostGitItems;
