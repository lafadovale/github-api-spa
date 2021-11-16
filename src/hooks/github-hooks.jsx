import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

export default function useGithub() {
  const { githubState, getUser, getRepos, getStarred } =
    useContext(GithubContext);

  return { githubState, getUser, getRepos, getStarred };
}
