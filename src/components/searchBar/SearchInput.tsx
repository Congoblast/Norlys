import styled from "styled-components";

interface Props {
  /**
   * The current value of the search input.
   */
  value: string;
  /**
   * Callback function to handle changes to the search input.
   */
  onChange: (value: string) => void;
  /**
   * Optional placeholder text for the search input. If not provided, no placeholder will be shown.
   */
  placeholder?: string;
}

/**
 * Search Input component that renders a styled input field for searching.
 */
export const SearchInput: React.FC<Props> = (props) => {
  const { value, onChange, placeholder } = props;

  return <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />;
};

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
