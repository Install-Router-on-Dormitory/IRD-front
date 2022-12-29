import * as S from "./style";

const SignUp = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>GAUTH</S.Title>

        <S.Inputs>
          <S.Input placeholder="@gsm.hs.kr" />
          <S.Input placeholder="Password" />
        </S.Inputs>

        <S.Button>회원가입</S.Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default SignUp;
