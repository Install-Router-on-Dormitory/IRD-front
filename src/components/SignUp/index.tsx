import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { gauthQuery } from "../../query";
import EmailInput from "./EmailInput";
import * as S from "./style";

export interface FormType {
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

  return (
    <S.Wrapper>
      <S.Content onSubmit={handleSubmit(onSubmit)}>
        <S.Title>GAUTH</S.Title>

        <S.Inputs>
          <EmailInput
            watch={watch}
            setError={setError}
            setValue={setValue}
            register={register}
            emailError={errors.email?.message}
            verifyError={errors.verify?.message}
          />

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
