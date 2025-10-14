import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineFileDownload } from "react-icons/md";

export default function ImportProduct({ handleImportClick }) {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-20 bg-black/40">
      <div className="w-[55%] py-5 mx-auto mt-10 bg-white rounded-md flex flex-col items-center justify-center gap-5 shadow-2xl">
        <div className="w-full px-3 pb-5 border-[#8d5ccd1f] border-b-[1px] flex justify-between">
          <span className="text-[15px] text-stone-900 text-extrabold">
            Import Product
          </span>
          <LiaTimesSolid
            onClick={() => handleImportClick()}
            className="text-stone-500 text-2xl trigger_times cursor-pointer"
          />
        </div>
        <div className="w-full px-3 flex flex-col gap-3 text-stone-500">
          <span className="text-xs italic">
            The field labels marked with * are required input fields.
          </span>
          <span>
            The correct column order is (image, name*, code*, type*, brand,
            category*, unit_code*, cost*, profit_margin(%), price,
            product_details, variant_name, item_code, additional_price) and you
            must follow this.
          </span>
          <span>
            If you provide profit_margin, then price will be calculated based on
            profit_margin:{" "}
            <span className="text-stone-900 text-extrabold">
              price = cost * (1 + profit_margin / 100)
            </span>
          </span>
          <span>
            To display Image it must be stored in images/product directory.
            Image name must be same as product name
          </span>

          <div className="flex gap-3 items-center w-full">
            <div className="flex flex-col gap-1  p-2 w-[50%]">
              <span>Upload CSV File *</span>
              <input
                type="file"
                className="text-sm border-[1px] border-[#858c85] rounded-sm p-3"
              />
            </div>
            <div className="flex flex-col items-center gap-1 w-[50%]">
              <span>Sample File</span>
              <div className="py-3 bg-[#17a2b8] flex items-center justify-center gap-1 text-sm text-white rounded-sm cursor-pointer w-full">
                <MdOutlineFileDownload />
                <span>Download</span>
              </div>
            </div>
          </div>

          <button className="bg-[#7c5cc4] px-3 py-2 w-fit text-white rounded-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
