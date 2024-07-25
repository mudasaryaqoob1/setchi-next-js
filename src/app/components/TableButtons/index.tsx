import { Pagination } from "antd";
import React from 'react'

export const TableButtons = () => {
    
  return (
    <div className="flex items-center justify-between pt-[20px]">
    <div className="">
      <button className="flex items-center gap-2 py-2 px-[14px] border-[1px] rounded-[8px] border-[#D0D5DD]">
        <img src="/Icon (1).png" alt="" />
       <h1 className="text-[14px] font-semibold"> Previous</h1>
        </button>
    </div>
    <div className="">
                  <Pagination defaultCurrent={1} align="center" total={50} />
                </div>
    <div className="">
      <button className="flex items-center gap-2 py-2 px-[14px] border-[1px] rounded-[8px] border-[#D0D5DD]">
       <h1 className="text-[14px] font-semibold">Next</h1>
       <img src="/arrow-right.png" alt="" />
        </button>
    </div>
  </div>
  )
}
