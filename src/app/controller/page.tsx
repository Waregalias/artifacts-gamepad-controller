'use client'

import {useState} from "react";
import Gamepad from "@/app/controller/components/gamepad/Gamepad";
import History from "@/app/controller/components/history/History";

function ControllerPage() {
  const [historyActions, setHistoryActions]: any = useState([])

  function handleGamePadEvent(data: never) {
    historyActions.push(data);
    setHistoryActions(historyActions);
  }

  return (
    <>
      <Gamepad gamePadEvent={handleGamePadEvent}></Gamepad>
      <History>{...historyActions}</History>
    </>
  )
}

export default ControllerPage
