import {
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import * as S from "./style";
import { FormType } from "./index";
import { gauthQuery } from "../../query";

interface Prop {
  register: UseFormRegister<FormType>;
  watch: UseFormWatch<FormType>;
  setValue: UseFormSetValue<FormType>;
  setError: UseFormSetError<FormType>;
  emailError?: string;
  verifyError?: string;
}

const EmailInput = ({
  register,
  watch,
  setValue,
  setError,
  emailError,
  verifyError,
}: Prop) => {
  const onVerify = async () => {
    try {
      await gauthQuery.post("/email", { email: watch("email") });
      setValue("verify", true);
    } catch (e) {
      setError("email", { message: "이메일 인증 실패" });
    }
  };

  return (
    <S.WrapInput>
      <S.EmailVerify>
        <S.Input
          {...register("email", {
            required: true,
            pattern: {
              message: "gsm 계정을 사용해 주세요",
              value: /s[0-9]{5}@gsm.hs.kr/,
            },
          })}
          placeholder="@gsm.hs.kr"
        />
        {!watch("verify") && <S.VerifyBtn onClick={onVerify}>인증</S.VerifyBtn>}
      </S.EmailVerify>
      <S.Label>{emailError ?? verifyError}</S.Label>
      {watch("verify") && <S.Label success>이메일을 확인해 주세요</S.Label>}
    </S.WrapInput>
  );
};
export default EmailInput;
