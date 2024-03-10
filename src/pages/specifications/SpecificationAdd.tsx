import { useCreateSpecificationMutation } from "../../store/features/specifications/specificationApi";
import { SpecificationForm } from "../../components/templates/forms";
import { TSpecification } from "../../validation";
import { H1 } from "../../components/atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SpecificationAdd = () => {
  const [create, { isLoading, isSuccess, data }] = useCreateSpecificationMutation({});

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/specifications');
    }
  }, [isSuccess, data]);

  const handleSubmit = (data: TSpecification) => {
    console.log(data);

    create(data);
  };

  return (
    <>
      <H1 className="text-center">Specification Add</H1>
      <SpecificationForm submit={handleSubmit} isLoading={isLoading} />
    </>
  )
}
export default SpecificationAdd;