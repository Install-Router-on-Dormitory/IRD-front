import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const StudentList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);

  @media (min-width: 1200px) and (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 900px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 570px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 100px) and (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DeleteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0;
`;

export const DeleteButton = styled.button`
  color: #d32f2f;
  padding: 0.5rem 1rem;
`;
