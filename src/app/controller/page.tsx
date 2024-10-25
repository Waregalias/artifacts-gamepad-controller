'use client'

import Gamepad from "@/app/controller/components/gamepad/Gamepad";
import History from "@/app/controller/components/history/History";
import {useState} from "react";

function ControllerPage() {
  const [historyActions, setHistoryActions] = useState([null])

  function handleGamePadEvent(data: any) {
    historyActions.push(data);
    setHistoryActions(historyActions);
  }

  return (
    <>
      <Gamepad gamePadEvent={handleGamePadEvent}></Gamepad>
      {/*<History>{...historyActions}</History>*/}
    </>
  )
}

export default ControllerPage
