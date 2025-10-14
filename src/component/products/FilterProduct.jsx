import ProductListFilterInput from "@/component/form/ProductListFilterInput";

function FilterProduct({ productListInputData }) {
  return (
    <div className="border-[#8d5ccd1f] border-[1px] rounded-sm w-full grid grid-cols-4 items-center mt-5 gap-3 px-3 py-7">
      {productListInputData?.map((item, i) => (
        <div key={i}>
          {item && item?.placeholder === "Submit" ? (
            <div className="text-sm rounded-sm text-white bg-[#7c5cc4] w-fit py-2 px-3">
              {item?.placeholder}
            </div>
          ) : (
            <ProductListFilterInput
              placeholder={item?.placeholder}
              legendTag={item?.legendTag}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default FilterProduct;
