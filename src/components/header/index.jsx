import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import { useState } from "react";

export default function Header() {
  const { getUser } = useGithub();
  const [usernameToSearch, setUsernameToSearch] = useState();
  const submitGetUser = () => {
    if (!usernameToSearch) {
      return;
    }
    return getUser(usernameToSearch);
  };
  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Type the Github username"
          onChange={(event) => setUsernameToSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          SEARCH
        </button>
      </S.Wrapper>
    </header>
  );
}
