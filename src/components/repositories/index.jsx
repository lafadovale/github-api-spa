import { useState, useEffect } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

export default function Repositories() {
  const { githubState, getRepos, getStarred } = useGithub();
  const [hasUserForRepos, setHasUserForRepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getRepos(githubState.user.login);
      getStarred(githubState.user.login);
    }
    setHasUserForRepos(!!githubState.repositories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => {
                return (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.html_url}
                    fullName={item.full_name}
                  />
                );
              })}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
}
