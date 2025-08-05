import styled from "styled-components";

interface Props {
  /**
   * InputField component props.
   */
  field: {
    key: string;
    label: string;
    type: string;
  };
  /**
   * Values for the input field.
   */
  values: string | number;
  /**
   * Callback to handle changes for the input field.
   */
  onChange: (text: string | number) => void;
}

/**
 * Inputfield for rendering a single input field along  with label.
 */
export const InputField: React.FC<Props> = (props) => {
  const { field, values, onChange } = props;
  const { key, label, type } = field;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Row key={key}>
      <Label key={key}>{label}</Label>
      <Row key={key}>
        <StyledInput name={key} value={values} type={type} onChange={handleInputChange} />
      </Row>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

const Label = styled.div`
  min-width: 150px;

  font-weight: 500;
`;

const StyledInput = styled.input`
  padding: 16px;

  border: 1px solid #d1d5db;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #ba0c2f;
  }
`;
