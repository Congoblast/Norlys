import styled from "styled-components";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <InputWrapper>
      <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #2196f3;
  }
`;

export default SearchInput;
