import * as S from "./styled";

export default function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <div>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperFullName>Full name</S.WrapperFullName>
        <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
          {fullName}
        </S.WrapperLink>
      </div>
    </S.Wrapper>
  );
}
