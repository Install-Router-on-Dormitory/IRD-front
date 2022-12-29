import * as S from "./style";
import * as SVG from "../../assets";
import { AxiosError } from "axios";

interface Prop {
  error: unknown | Error | AxiosError;
}

const Error = ({ error }: Prop) => {
  return (
    <S.Wrapper>
      <SVG.ErrorTriangle />
      {error instanceof AxiosError && error.response?.status} Error
    </S.Wrapper>
  );
};

export default Error;
