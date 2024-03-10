import { useCreateSpecificationCategoriesMutation } from "../../store/features/specifications/categories/specificationCategoriesApi.ts";
import { SpecificationCategoryForm } from "../../components/templates/forms";
import { TSpecificationCategory } from "../../validation";
import { H1 } from "../../components/atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoryAdd = () => {
  const [create, { isLoading, isSuccess, data }] = useCreateSpecificationCategoriesMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/specifications/categories');
    }
  }, [isSuccess, data]);

  const handleSubmit = (data: TSpecificationCategory) => {
    create(data);
  };

  return (
    <>
      <H1 className="text-center">Specification Category Add</H1>
      <SpecificationCategoryForm submit={handleSubmit} isLoading={isLoading} />
    </>
  )
}
export default CategoryAdd;