import styled from "styled-components";
import { useState } from "react";
import type { Windmill } from "../../../services/windmill-types";
import { useWindmillContext } from "../../../providers/WindmillProvider";

interface Props {
  brand: string;
  model: string;
  installedCapacityMW: number;
  id: number;
}

const WindmillItemManagement: React.FC<Props> = (props) => {
  const { brand, model, installedCapacityMW, id } = props;
  const { handleDeleteWindmill, handleUpdateWindmill } = useWindmillContext();

  const [formData, setFormData] = useState<Windmill>({
    id: id,
    brand: brand,
    model: model,
    installedCapacityMw: installedCapacityMW,
  });

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete windmill ${brand} ${model} with ID (ID: ${id})? this action cannot be undone.`,
    );
    if (confirmed) {
      handleDeleteWindmill(id);
    }
  };

  const handleInputChange = (field: keyof Windmill, value: {}) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const fields: Array<{ key: keyof Windmill; label: string; type: "text" | "number" }> = [
    { key: "brand", label: "Brand name", type: "text" },
    { key: "model", label: "Model name", type: "text" },
    { key: "installedCapacityMw", label: "Installed Capacity (MW)", type: "number" },
  ];

  return (
    <>
      <Root>
        <Title>Windmill Item Management for model: {model}</Title>
        <ManagementContainer>
          {fields.map((field) => (
            <Row key={field.key}>
              <Label>{field.label}</Label>
              <StyledInput
                type={field.type}
                value={formData[field.key]}
                onChange={(e) =>
                  handleInputChange(field.key, field.type === "number" ? Number(e.target.value) : e.target.value)
                }
              />
            </Row>
          ))}
        </ManagementContainer>

        <Button color="#076f40" onClick={() => handleUpdateWindmill(id, formData)}>
          Update Windmill
        </Button>
        <Button color="#ba0c2f" onClick={handleDelete}>
          DELETE {brand} {model} ID: {id}
        </Button>
      </Root>
    </>
  );
};

const Label = styled.label`
  min-width: 150px;
  font-weight: 500;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px;
  margin: 16px;
  background-color: white;
  border-radius: 6px;
  width: 50%;
`;

const Title = styled.h2`
  margin: 0;
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

const ManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Button = styled.button<{ color: string }>`
  font-size: 1.2rem;
  padding: 16px 24px;
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => color};
    opacity: 0.9;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default WindmillItemManagement;
