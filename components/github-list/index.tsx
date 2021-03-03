import Link from "next/link";
import { GitData , GitListProps } from "../../pages/work"

/* export type GitData = {
  id: number;
  html_url: string;
  createdAt: string;
  description: string;
  updated_at: string;
};
type GitListProps = {
  data: GitListProps;
}; */
const GitListItems = ({
  id,
  html_url,
  createdAt,
  description,
}: GitData) => {
  return (
    <li key={id}>
      <Link href={html_url}>
        <a>{html_url}</a>
      </Link>
    </li>
  );
};

const PostGitItems = ({ data }: GitListProps) => {
  console.log(data)

  return <ul>{data.map(GitListItems)}</ul>;
};

export default PostGitItems;
