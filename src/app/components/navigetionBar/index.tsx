import React from 'react'

export const NavigetionBar = () => {
  return (
    <header className="bg-white w-full fixed top-0 z-10">
    {/* Top bar menu start */}
    <div className="flex justify-between h-[64px]">
      <div className="bg-[#007AB6] w-[81px] pt-4">
        <img src="/Frame-2147224038.png" alt="Logo" />
      </div>
      <div className="flex items-center gap-[16px] pr-[24px]">
        <img src="/Button.png" alt="Button" />
        <img src="/Frame 1261156627.png" alt="Icon1" />
        <img src="/Frame 1261156626.png" alt="Icon2" />
        <img src="/Frame 1261156628.png" alt="Icon3" />
        <img src="/Button (1).png" alt="Button2" />
      </div>
    </div>
    {/* Top bar end */}
  </header>

  )
}
