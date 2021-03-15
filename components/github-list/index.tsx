import React, { useEffect } from "react";
import Link from "next/link";
import { GitData, GitListProps } from "../../pages/work";
import { container, cardStyle, row, linkStyle } from "./style";
import { containerGridMobile, gradientTextStyle } from "@shared/reusableStyles";
import moment from "moment";
import anime from "animejs";

const toUpper = (stringInput: string): string => {
  if (!stringInput) {
    return "no language";
  } else {
    return stringInput.toUpperCase();
  }
};

const formatDate = (data: moment.MomentInput) => {
  if (!data) {
    return "update data missing";
  } else {
    let now = moment(data).format("MM-DD-YYYY");
    return now;
  }
};

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
      translateX: [1000, 0],
      delay: anime.stagger(100, { start: 500 }),
    });
  }, []);
  toUpper(language);
  return (
    <div key={id} css={cardStyle} className="fromRight">
      <li>
        <h2 css={gradientTextStyle}>{toUpper(name)}</h2>
        <section>
          <Link href={html_url}>
            <a css={linkStyle}>{html_url}</a>
          </Link>
          <p>{description}</p>
          <section css={row}>
            <p>language used:</p>
            <p css={gradientTextStyle}>{toUpper(language)}</p>
          </section>
          <section css={row}>
            <p>Last update: </p>
            <p css={gradientTextStyle}>{formatDate(created_at)}</p>
          </section>
        </section>
      </li>
    </div>
  );
};

const PostGitItems = ({ data }: GitListProps) => {
  return (
    <div css={containerGridMobile}>
      <div css={container}>
        <ul>{data.map(GitListItems)}</ul>
      </div>
    </div>
  );
};

export default PostGitItems;
