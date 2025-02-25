import ProductUpdate from "../../../../features/products/update";

const ProductDetailsPage = () => {
  return (
    <>
      {/* <Breadcrumbs pt="xl">
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/products" className="link-blue">
          Products
        </Link>
        <Link
          to={`/products/${params["product-id"]}/details`}
          className="link-blue"
        >
          Product-{params["product-id"]}
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Product Details
      </Title> */}
      {/* <Divider mt="xs" mb="xl" /> */}
      <div style={{ marginTop: "32px" }}>
        <ProductUpdate />
      </div>
    </>
  );
};

export default ProductDetailsPage;
