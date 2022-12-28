import useSWR from "swr";
import { Student, StudentList } from "./components";
import query from "./query";
import { StudentType } from "./types";

const fetcher = async (url: string) => (await query.get(url)).data;

function App() {
  const { data } = useSWR<StudentType[]>("/students", fetcher);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>기숙사 입소 학생 정보</h1>
      <StudentList>
        {data?.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </StudentList>
    </>
  );
}

export default App;
