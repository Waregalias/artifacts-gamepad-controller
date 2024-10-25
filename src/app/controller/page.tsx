'use client'

import Gamepad from "@/app/controller/components/Gamepad";

function ControllerPage() {
  function handleGamePadEvent(data: any) {
    console.log(data);
  }

  return (
    <>
      <Gamepad gamePadEvent={handleGamePadEvent}></Gamepad>
    </>
  )
}

export default ControllerPage
