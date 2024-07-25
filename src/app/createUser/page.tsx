"use client";

import React, { useState } from "react";
import { Button, Modal, Space } from "antd";

const CreateUser = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showModal}>
          Invite
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Modal.confirm({
              title: "Confirm",
              content: "Bla bla ...",
              footer: (
                <>
                  <Button onClick={() => console.log("Custom button clicked")}>
                    Custom Button
                  </Button>
                  <Button onClick={() => Modal.destroyAll()}>Cancel</Button>
                  <Button type="primary" onClick={() => Modal.destroyAll()}>
                    OK
                  </Button>
                </>
              ),
            });
          }}
        >
          Open Modal Confirm
        </Button>
      </Space>
      <Modal
        open={open}
        title="Invite Contractor"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="custom"
            onClick={() => console.log("Custom button clicked")}
          >
            Setting
          </Button>,
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleOk}>
            Send Email
          </Button>,
        ]}
      >
        <div className="flex items-center border-[1px] border-[#D0D5DD] rounded-[8px] gap-[20px]">
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
        <div className="mt-[21px]">
          <textarea
            className="border-[1px] border-[#D0D5DD] rounded-[6px] w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500  resize-none"
            name="Enter description"
            id=""
            rows={4}
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <div className="">
              <h1 className="font-inter text-[16px] leading-[24px] font-medium">
                Packages
              </h1>
            </div>
            <div className="flex gap-[39px]">
              <div className="flex items-center">
                <input type="checkbox" id="Individual1" className="mr-3" />
                <label htmlFor="Individual1">
                  <h1>Individual</h1>
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="enterprise1" className="mr-3" />
                <label htmlFor="enterprise1">
                  <h1>Enterprise</h1>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full py-4 px-3 border-[1px] border-[#D0D5DD] rounded-[8px]">
            <select
              className="flex justify-between w-full outline-none"
              name=""
              id=""
            >
              <option className="text-[#98A2B3]" value="option1">
                Select plan
              </option>
              <option className="text-[#98A2B3]" value="option2">
                Select plan
              </option>
            </select>
          </div>
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
        <div className="">
        <h1 className="font-inter text-[16px] leading-[12px] text-[#475467] p-1">
          <span className="border-b-2 border-[#475467]">Download Template</span>
        </h1>
            </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateUser;
