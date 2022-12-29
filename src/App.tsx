import useSWR from "swr";
import { Loading, Student, StudentList, Error } from "./components";
import query from "./query";
import { StudentType } from "./types";

const fetcher = async (url: string) => (await query.get(url)).data;

function App() {
  const { data, isLoading, error } = useSWR<StudentType[]>(
    "/students",
    fetcher
  );

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

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
