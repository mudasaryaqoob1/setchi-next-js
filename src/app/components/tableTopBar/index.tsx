"use client";

import React, { useState } from "react";
import { Button, Modal, Space, Calendar } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import { theme } from "antd"; // Import theme from antd

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

export const TableTopBar = () => {
  const [openInviteModal, setOpenInviteModal] = useState(false); // State for Invite modal
  const [openAddContractorModal, setOpenAddContractorModal] = useState(false); // State for Add Contractor modal
  const [openEmail, setOpenEmail] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const { token } = theme.useToken();
  const showEmailModal = () => {
    setOpenEmail(true);
  };
  const showExportModal = () => {
    setOpenExport(true);
  };

  const handleExportOk = () => {
    setOpenExport(false);
  };

  const handleExportCancel = () => {
    setOpenExport(false);
  };

  const handleEmailOk = () => {
    setOpenEmail(false);
  };

  const handleEmailCancel = () => {
    setOpenEmail(false);
  };



  const showInviteModal = () => {
    setOpenInviteModal(true);
  };

  const handleInviteOk = () => {
    setOpenInviteModal(false);
  };

  const handleInviteCancel = () => {
    setOpenInviteModal(false);
  };


  const showAddContractorModal = () => {
    setOpenAddContractorModal(true);
  };

  const handleAddContractorOk = () => {
    setOpenAddContractorModal(false);
  };

  const handleAddContractorCancel = () => {
    setOpenAddContractorModal(false);
  };

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    // Table top bar start
    <div className="p-[20px] flex justify-between items-center">
      <div>
        <h1 className="font-inter text-[20px] text-[#1D2939] font-semibold">Contractor</h1>
      </div>
      <div className="flex gap-3">
        <div className="flex w-[295px] rounded-[8px] border-[1px] border-[#D0D7EA] gap-[8px] py-[10px] px-[14px]">
          <img className="" src="/Icon.png" alt="Frame3" />
          <input
            className="border-none outline-none text-black w-full"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <button onClick={showEmailModal} className="border-[1px] border-[#D0D5DD] rounded-[8px] flex items-center gap-2 py-[10px] px-[18px]">
            <img src="/mail-03.png" alt="" />
            <h1 className="text-[16px] font-inter font-semibold leading-[24px]">Email</h1>
          </button>
        </div>
        <div>
          <button onClick={showExportModal} className="border-[1px] border-[#D0D5DD] rounded-[8px] flex items-center gap-2 py-[10px] px-[18px]">
            <img src="/upload-cloud-01.png" alt="" />
            <h1 className="text-[16px] font-inter font-semibold leading-[24px]">Export</h1>
          </button>
        </div>
        <div>
          <button onClick={showInviteModal} className="border-[1px] border-[#E6F2F8] rounded-[8px] flex items-center gap-2 py-[10px] px-[18px] bg-[#E6F2F8]">
            <img src="/plus.png" alt="" />
            <h1 className="text-[16px] font-inter font-semibold leading-[24px] text-[#007AB6]">Invite</h1>
          </button>
        </div>
        <div>
          <button onClick={showAddContractorModal} className="border-[1px] border-[#D0D5DD] rounded-[8px] flex gap-2 items-center py-[10px] px-[18px] bg-[#007AB6]">
            <img src="/plus (1).png" alt="" />
            <h1 className="text-[16px] font-inter font-semibold leading-[24px] text-[#FFFFFF]">Add contractor</h1>
          </button>
        </div>
      </div>
      {/* add email modal */}
      
      <Modal
        open={openEmail}
        title="Email"
        onOk={handleEmailOk}
        onCancel={handleEmailCancel}
        footer={[
          <Button
            key="custom"
            onClick={() => console.log("Custom button clicked")}
          >
            Setting
          </Button>,
          <Button key="cancel" onClick={handleEmailCancel}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleEmailOk}>
            Send Email
          </Button>,
        ]}
      >
        <div className=" py-[20px] px-[24px]">
        <div className="flex items-center border-[1px] border-[#D0D5DD] rounded-[8px] gap-[20px] ">
          <div className="bg-[#E6F2F8] py-[14.5px] px-[10px]">
            <h1 className="font-inter text-[16px] leading-[24px]">To</h1>
          </div>
          <div className="flex justify-between w-full">
            <input
              className="font-[Inter] text-[16px] leading-[24px] outline-none border-none w-full"
              type="text"
              placeholder="Type an email"
            />
            <h1 className="text-[#98A2B3] font-[Inter] text-[16px] leading-[24px] pr-[21px]">
              cc
            </h1>
          </div>
        </div>
        <div className="mt-[21px] border-[1px] border-[#D0D5DD] rounded-[6px] ">
          <div className="h-[54px]"><h1 className="py-[15px] px-[14px] text-[#667085]">Subject</h1></div>
          <textarea
            className="border-t-[1px] border-[#D0D5DD] w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500  resize-none"
            name="Enter description"
            id=""
            rows={5}
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="flex flex-col gap-3">
        <div className="w-full border-dashed border-2 border-[#D0D5DD] rounded-[8px] mt-[21px]">
          <div className="py-2 px-3 flex items-center gap-3">
            <div className="">
              <img src="/Group 1000004452.png" alt="" />
            </div>
            <div className="">
                <h1 className="font-inter text-[16px] leading-[12px] text-[#98A2B3]">Select a email file or drag and drop here</h1>
            </div>
            <div className="">
                <h1 className="font-inter text-[16px] leading-[12px] text-[#007AB6] border-b-2 border-[#007AB6]">Browse</h1>
            </div>
          </div>
        </div>
        </div>
        </div>
        
      </Modal>
      {/* add email modal end */}
      {/* export modal  */}

      <Modal className="w-[364px!important]"
        open={openExport}
        title="Changed Status "
        onOk={handleExportOk}
        onCancel={handleExportCancel}
        footer={[
          <Button key="cancel" onClick={handleExportCancel}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleExportOk}>
            Update
          </Button>,
        ]}
      >
        
        <div className="flex flex-col gap-2 py-[20px] px-[24px]">
          <div className="">
            <div className="">
              <h1 className="font-inter text-[16px] text-[#344054] leading-[24px] font-medium pb-[6px]">Change Status</h1>
              <h1 className="font-inter text-[16px] text-[#667085] leading-[24px] font-medium pb-[20px]">
              You can change organization status
              </h1>
            </div>
            <div className="flex gap-[16px] flex-col">
              <div className="flex items-center">
                <input type="radio" id="Individual1" className="mr-3" />
                <label htmlFor="Active">
                  <h1>Active</h1>
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="enterprise1" className="mr-3" />
                <label htmlFor="Block1">
                  <h1>Block</h1>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* export modal end */}
      {/* Invite modal */}
      <Modal
        open={openInviteModal}
        title="Invite Contractor"
        onOk={handleInviteOk}
        onCancel={handleInviteCancel}
        footer={[
          <Button key="custom" onClick={() => console.log("Custom button clicked")}>Setting</Button>,
          <Button key="cancel" onClick={handleInviteCancel}>Cancel</Button>,
          <Button key="ok" type="primary" onClick={handleInviteOk}>Send Email</Button>,
        ]}
      >
        <div className=" py-[20px] px-[24px]">
        <div className="flex items-center border-[1px] border-[#D0D5DD] rounded-[8px] gap-[20px]">
          <div className="bg-[#E6F2F8] py-[14.5px] px-[10px]">
            <h1 className="font-inter text-[16px] leading-[24px]">To</h1>
          </div>
          <div className="flex justify-between w-full">
            <input className="font-[Inter] text-[16px] leading-[24px] outline-none border-none w-full" type="text" placeholder="Type an email" />
            <h1 className="text-[#98A2B3] font-[Inter] text-[16px] leading-[24px] pr-[21px]">cc</h1>
          </div>
        </div>
        <div className="mt-[21px]">
          <textarea className="border-[1px] text-[16px] leading-[24px] border-[#D0D5DD] rounded-[6px] w-full py-[10px] px-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" name="Enter description" id="" rows={8} placeholder="Enter description"></textarea>
        </div>
        <div className="flex flex-col gap-2 mt-[21px]">
          <div>
            <h1 className="font-inter text-[16px] leading-[24px] font-medium text-[#475467]">Packages</h1>
            <div className="flex gap-[39px]">
              <div className="flex items-center">
                <input type="radio" id="Individual1" className="mr-3" />
                <label htmlFor="Individual1">
                  <h1 className="text-[#475467] text-[14px] leading-[24px]">Individual</h1>
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="enterprise1" className="mr-3" />
                <label htmlFor="enterprise1">
                  <h1 className="text-[#475467]">Enterprise</h1>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full py-4 px-3 border-[1px] border-[#D0D5DD] rounded-[8px] text-[#98A2B3]">
            <select className="flex justify-between w-full outline-none" name="" id="">
              <option className="text-[#98A2B3]" value="option1">Select plan</option>
              <option className="text-[#98A2B3]" value="option2">Select plan</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full border-dashed border-2 border-[#D0D5DD] rounded-[8px] mt-[21px]">
            <div className="py-2 px-3 flex items-center gap-3">
              <div>
                <img src="/Group 1000004452.png" alt="" />
              </div>
              <div>
                <h1 className="font-inter text-[16px] leading-[12px] text-[#98A2B3]">Select an email file or drag and drop here</h1>
              </div>
              <div>
                <h1 className="font-inter text-[16px] leading-[12px] text-[#007AB6] border-b-2 border-[#007AB6]">Browse</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-inter text-[16px] leading-[12px] text-[#475467] p-1">
              <span className="border-b-2 border-[#475467] text-[#475467]">Download Template</span>
            </h1>
          </div>
        </div>
        </div>
       
      </Modal>
      
      {/* Add Contractor modal */}
      <Modal className="w-[362px!important]"
        open={openAddContractorModal}
        title="Manage Package"
        onOk={handleAddContractorOk}
        onCancel={handleAddContractorCancel}
        footer={[
          <Button key="custom" onClick={() => console.log("Custom button clicked")}>Cancel Package</Button>,
          <Button key="ok" type="primary" onClick={handleAddContractorOk}>Save</Button>,
        ]}
      >
        <div className="py-[20px] px-[24px]">
        <div style={wrapperStyle}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
        <div className="flex flex-col gap-2 mt-[21px] pb-6">
          <div>
            <h1 className="font-inter text-[16px] leading-[24px] font-medium text-[#475467]">Packages</h1>
            <div className="flex gap-[39px]">
              <div className="flex items-center">
                <input type="radio" id="Individual1" className="mr-3" />
                <label htmlFor="Individual1">
                  <h1 className="text-[#475467] text-[14px] leading-[24px]">Individual</h1>
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="enterprise1" className="mr-3" />
                <label htmlFor="enterprise1">
                  <h1 className="text-[#475467]">Enterprise</h1>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full py-4 px-3 border-[1px] border-[#D0D5DD] rounded-[8px] text-[#98A2B3]">
            <select className="flex justify-between w-full outline-none" name="" id="">
              <option className="text-[#98A2B3]" value="option1">Select plan</option>
              <option className="text-[#98A2B3]" value="option2">Select plan</option>
            </select>
          </div>
        </div>
        </div>
       
      </Modal>
    </div>
    // Table top bar end
  );
};
