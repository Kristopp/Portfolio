import Link from "next/link";
import { GitData, GitListProps } from "../../pages/work";
import { container } from "./style";
import { gradientTextStyle} from "@shared/reusableStyles"

const GitListItems = ({
  id,
  name,
  html_url,
  created_at,
  description,
  language,
}: GitData) => {
  return (
    <li key={id}>
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
  );
};

const PostGitItems = ({ data }: GitListProps) => {
  return (
    <div css={container}>
      <ul>{data.map(GitListItems)}</ul>
    </div>
  );
};

export default PostGitItems;
