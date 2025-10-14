import { paymentStatus, purchaseStatus } from "../../data/purchases";
import { availableSearchFilter } from "../../utility/dataArr";

function PurchaseFilterSearch({
  filterForm,
  wareHouse,
  setwareHouse,
  purStatus,
  setpurStatus,
  payStatus,
  setpayStatus,
}) {
  return (
    <div
      className={
        filterForm
          ? "w-full border-[1px] border-[rgb(228,230,252)] rounded-md h-[200px] py-11 px-6  flex flex-col gap-10"
          : "hidden"
      }
    >
      <div className="grid grid-cols-4 justify-between w-full">
        <div className="w-[200px] h-[40px] text-[rgb(72,79,86)] text-[12px] border-[1px] border-[rgb(228,   230,252)] rounded-md relative">
          <label
            htmlFor="myDropdown"
            className="text-[rgb(94,88,115)] font-semibold absolute left-[10px] bg-white px-[3px] top-[-9px]"
          >
            Date
          </label>
          <input type="date" />
        </div>
        <div className="w-[240px] h-[40px] text-[rgb(72,79,86)] text-[12px] border-[1px] border-[rgb(228,230,252)] rounded-sm relative">
          <label className="text-[rgb(94,88,115)] font-semibold absolute left-[10px] bg-white px-[3px] top-[-9px]">
            Warehouse
          </label>
          <select
            name=""
            id="myDropdown"
            value={wareHouse}
            className="px-2 rounded-sm border-[rgb(228,230,252)] h-10 text-[rgb(161,92,200)]  w-full"
            onChange={setwareHouse}
          >
            {availableSearchFilter?.map((item, i) => (
              <option
                key={i}
                value={item.title}
                className="p-4 text-sm rounded-md]"
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[240px] h-[40px] text-[rgb(72,79,86)] text-[12px] border-[1px] border-[rgb(228,230,252)] rounded-sm relative">
          <label
            htmlFor="myDropdown"
            className="text-[rgb(94,88,115)] font-semibold absolute left-[10px] bg-white px-[3px] top-[-9px]"
          >
            Purchase Status
          </label>
          <select
            name=""
            id="myDropdown"
            value={purStatus}
            className="px-2 rounded-sm border-[rgb(228,230,252)] h-10 text-[rgb(161,92,200)]  w-full"
            onChange={setpurStatus}
          >
            {purchaseStatus?.map((item, i) => (
              <option
                key={i}
                value={item}
                className="p-4 text-sm rounded-md]"
              >
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[240px] h-[40px] text-[rgb(72,79,86)] text-[12px] border-[1px] border-[rgb(228,230,252)] rounded-sm relative">
          <label
            htmlFor="myDropdown"
            className="text-[rgb(94,88,115)] font-semibold absolute left-[10px] bg-white px-[3px] top-[-9px]"
          >
            Payment Status
          </label>
          <select
            name=""
            id="myDropdown"
            value={payStatus}
            className="px-2 rounded-sm border-[rgb(228,230,252)] h-10 text-[rgb(161,92,200)]  w-full"
            onChange={setpayStatus}
          >
            {paymentStatus?.map((item, i) => (
              <option
                key={i}
                value={item}
                className="p-4 text-sm rounded-md]"
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <div className="bg-[rgb(124,92,196)] text-white flex item-center justify-center rounded-sm w-[80px] ">
            <AppSubmitButton title="submit" />
          </div> */}
    </div>
  );
}

export default PurchaseFilterSearch;
