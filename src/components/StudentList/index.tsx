import { ReactNode } from "react";
import { useDeleteMode } from "../../store";
import * as S from "./style";

interface Prop {
  children: ReactNode;
}

const StudentList = ({ children }: Prop) => {
  const mode = useDeleteMode((state) => state.mode);

  const onClick = useDeleteMode((state) => state.setToggle);

  return (
    <S.Wrapper>
      <S.DeleteWrapper>
        <S.DeleteButton onClick={onClick}>
          {mode ? "취소" : "삭제"}
        </S.DeleteButton>
      </S.DeleteWrapper>
      <S.StudentList>{children}</S.StudentList>
    </S.Wrapper>
  );
};

export default StudentList;
