import styled from "styled-components";
import { useState } from "react";
import type { Windmill } from "../../../types/windmill/WindmillTypes";
import { useWindmillContext } from "../../../providers/WindmillProvider";
import { WINDMILL_COLUMNS } from "../WindmillColumns";
import { InputField } from "../../inputField";
import { WindmillItemManagementButtons } from "../windmillItemManagement/WindmillItemMangementButtons";

interface Props {
  /**
   * Specific windmill object containing details about the windmill.
   */
  windmill: Windmill;
}

/**
 * Handles managmming of a windmill item
 */
export const WindmillItemManagement: React.FC<Props> = (props) => {
  const { windmill } = props;
  const { brand, model, installedCapacityMw, id } = windmill;

  const { handleDeleteWindmill, handleUpdateWindmill } = useWindmillContext();

  const [formData, setFormData] = useState<Windmill>({
    id: id,
    brand: brand,
    model: model,
    installedCapacityMw: installedCapacityMw,
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

  return (
    <Root>
      <Title>Windmill Item Management for model: {model}</Title>

      {WINDMILL_COLUMNS.map((field, index) => (
        <InputField
          field={field}
          values={formData[field.key]}
          onChange={(value) => handleInputChange(field.key, value)}
          key={index}
        />
      ))}
      <WindmillItemManagementButtons
        updateOnClick={() => handleUpdateWindmill(id, formData)}
        deleteOnClick={handleDelete}
      />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px;
  margin: 16px;
  background-color: white;
  border-radius: 6px;
  width: 75%;
`;

const Title = styled.h2`
  margin: 0;
`;
