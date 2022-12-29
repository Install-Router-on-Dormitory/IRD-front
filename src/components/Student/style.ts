import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.7rem 1rem;
  background: #0a0a0a;
  border-radius: 0.75rem;
  gap: 1rem;
  position: relative;

  @media (prefers-color-scheme: light) {
    background: #e0e0e0;
  }
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
`;

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StudentName = styled.h2`
  margin: 0;
`;

export const StudentEmail = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #9e9e9e;
`;
