import * as S from "./styled";

export default function Footer() {
  return (
    <S.Wrapper>
      <footer>
        <h3>{`@${new Date().getFullYear()} Lafaiete do Vale - all rights reserved.`}</h3>
      </footer>
    </S.Wrapper>
  );
}
