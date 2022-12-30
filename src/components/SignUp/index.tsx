import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { gauthQuery } from "../../query";
import * as S from "./style";

interface FormType {
  email: string;
  password: string;
  verify: boolean;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    setValue,
  } = useForm<FormType>({ defaultValues: { verify: false } });
  const navigate = useNavigate();

  const onSubmit = async (form: FormType) => {
    if (!form.verify)
      return setError("verify", { message: "이메일 인증을 해주세요" });

    try {
      await gauthQuery.post("/auth/signup", { ...form, verify: undefined });
      navigate("/success");
    } catch (e) {
      setError("password", { message: "회원가입 실패" });
    }
  };

  const onVerify = async () => {
    try {
      await gauthQuery.post("/email", { email: watch("email") });
      setValue("verify", true);
    } catch (e) {
      setError("email", { message: "이메일 인증 실패" });
    }
  };

  return (
    <S.Wrapper>
      <S.Content onSubmit={handleSubmit(onSubmit)}>
        <S.Title>GAUTH</S.Title>

        <S.Inputs>
          <S.WrapInput>
            <S.EmailVerify>
              <S.Input
                {...register("email", {
                  required: true,
                  pattern: {
                    message: "gsm 계정을 사용해 주세요",
                    value: /^[a-zA-Z0-9]+@gsm.hs.kr$/,
                  },
                })}
                placeholder="@gsm.hs.kr"
              />
              {!watch("verify") && (
                <S.VerifyBtn onClick={onVerify}>인증</S.VerifyBtn>
              )}
            </S.EmailVerify>
            <S.Label>
              {errors?.email?.message ?? errors?.verify?.message}
            </S.Label>
            {watch("verify") && (
              <S.Label success>이메일을 확인해 주세요</S.Label>
            )}
          </S.WrapInput>

          <S.WrapInput>
            <S.Input
              {...register("password", {
                required: true,
                minLength: { value: 8, message: "최소 8자 이상" },
                maxLength: { value: 20, message: "최대 8자" },
                pattern: {
                  message: "대문자, 소문자, 숫자, 특수문자($@!%*#?&) 1개 이상",
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
                },
              })}
              placeholder="Password"
              type="password"
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
