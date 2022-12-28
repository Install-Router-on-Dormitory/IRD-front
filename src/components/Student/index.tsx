import { mutate } from "swr";
import { useDeleteMode } from "../../store";
import { StudentType } from "../../types";
import * as S from "./style";

interface Prop {
  student: StudentType;
}

const Student = ({ student }: Prop) => {
  const mode = useDeleteMode((set) => set.mode);

  const removeStudent = async () => {
    const result = await mutate<StudentType[]>("/students");
    return result?.filter((i) => i.id !== student.id);
  };

  const onDelete = async () => {
    if (!confirm(`정말 "${student.name}"님을 삭제하시겠습니까?`)) return;

    mutate("/students", removeStudent());
  };

  return (
    <S.Wrapper>
      {mode && <S.DeleteButton onClick={onDelete}>❌</S.DeleteButton>}
      <S.StudentImg src={student.profileUrl} />
      <S.StudentInfo>
        <S.StudentName>{student.name}</S.StudentName>
        <S.StudentEmail>{student.email}</S.StudentEmail>
        <div>
          {student.grade}학년 {student.class}반 {student.num}번
        </div>
      </S.StudentInfo>
    </S.Wrapper>
  );
};

export default Student;
