import useGithub from "./hooks/github-hooks";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import NoSearch from "./components/no-search";

export default function App() {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}
