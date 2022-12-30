import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.form`
  width: 80%;
  max-width: 35rem;
  background-color: #353535;
  border-radius: 0.75rem;
  box-sizing: border-box;
  padding: 2rem 8rem;

  @media (prefers-color-scheme: light) {
    background: #e0e0e0;
  }

  @media (min-width: 570px) and (max-width: 700px) {
    padding: 2rem 3rem;
  }

  @media (min-width: 100px) and (max-width: 570px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const WrapInput = styled.div`
  width: 100%;
  text-align: right;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  border-radius: 0.3rem;
  outline: none;
  border: none;
  background: #424242;

  @media (prefers-color-scheme: light) {
    background: #eeeeee;
  }
`;
export const Label = styled.div<{ success?: boolean }>`
  color: ${({ success }) => (success ? "#81C784" : "#e57373")};
  font-size: 0.8rem;
  text-align: left;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 2rem;
`;

export const EmailVerify = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const VerifyBtn = styled.button`
  white-space: nowrap;
`;
