'use client'

import Gamepad from "@/app/controller/components/gamepad/Gamepad";
import {useStore} from "@/app/store";

function ControllerPage() {
  const actions = useStore((state: { actionsPad: [] }) => state.actionsPad);
  const updateActions = useStore((state: { updateActions: string }) => state.updateActions);

  function handleGamePadEvent(newAction: { [key: string]: boolean }) {
    if (Object.keys(newAction).some((value: string) => value === 'true'))
      updateActions([...actions, newAction]);
  }

  return (
    <Gamepad gamePadEvent={handleGamePadEvent}></Gamepad>
  )
}

export default ControllerPage
