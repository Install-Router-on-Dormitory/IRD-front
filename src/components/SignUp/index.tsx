import { useForm } from "react-hook-form";
import * as S from "./style";

interface FormType {
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = async (form: FormType) => {
    console.log(form);
  };

  return (
    <S.Wrapper>
      <S.Content onSubmit={handleSubmit(onSubmit)}>
        <S.Title>GAUTH</S.Title>

        <S.Inputs>
          <S.WrapInput>
            <S.Input
              {...register("email", {
                required: true,
                pattern: {
                  message: "gsm 계정 메일을 사용해 주세요",
                  value: /^[a-zA-Z0-9]+@gsm.hs.kr$/,
                },
              })}
              placeholder="@gsm.hs.kr"
            />
            <S.Label>{errors?.email?.message}</S.Label>
          </S.WrapInput>

          <S.WrapInput>
            <S.Input
              {...register("password", {
                required: true,
                pattern: {
                  message: "대문자, 소문자, 숫자, 특수문자($@!%*#?&) 1개 이상",
                  value:
                    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[\$@\$!%*#?&])[A-Za-z[0-9]\$@\$!%*#?&]{8,20}$/,
                },
              })}
              placeholder="Password"
            />
            <S.Label>{errors?.password?.message}</S.Label>
          </S.WrapInput>
        </S.Inputs>

        <S.Button>회원가입</S.Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default SignUp;
