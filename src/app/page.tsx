"use client";
import Image from "next/image";
import { NavigetionBar } from "./components/navigetionBar";
import { SideBar } from "./components/sideBar";
import { TableTopBar } from "./components/tableTopBar";
import { TableButtons } from "./components/TableButtons";
import { TableTabs } from "./components/TableTabs";

import React from "react";
export default function Home() {
  // tabs
 

 

  return (
    <>
      <body className="flex flex-col h-screen bg-[rgb(243,244,246)]">
        <NavigetionBar />
        <div className="flex flex-1 pt-[64px] w-[px]">
          <SideBar />

          {/* Main content start */}
          <main className="flex-1 m-4 ">
            <div className="w-full h-[100%] mb-4  items-center">
              <div className="w-full bg-white rounded-[16px] h-[697px]">
                <TableTopBar />
                <TableTabs/>
                {/* table pagination and buttons start */}
                <TableButtons />
                
              </div>
            </div>
          </main>
          {/* Main content end */}
        </div>
      </body>
    </>
  );
}
