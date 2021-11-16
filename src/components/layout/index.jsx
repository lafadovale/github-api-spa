import Header from "../header";
import Footer from "../footer";
import * as S from "./styled";

export default function Layout({ children }) {
  return (
    <>
      <S.WrapperLayout>
        <Header />
        {children}
      </S.WrapperLayout>
      <Footer />
    </>
  );
}
