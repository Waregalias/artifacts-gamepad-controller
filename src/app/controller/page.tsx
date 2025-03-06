'use client'

import Gamepad from "@/app/controller/components/gamepad/Gamepad";
import {useStore} from "@/app/store";

function ControllerPage() {
  const actions = useStore((state: { actionsPad: [] }) => state.actionsPad);
  const updateActions = useStore((state: { updateActions: string }) => state.updateActions);

  function handleGamePadEvent(newAction: { [key: string]: boolean }) {
    const list = Object.fromEntries(Object.entries(newAction).filter(([, value]) => value));
    if (Object.keys(list).length > 0) {
      console.log([...actions, list])
      updateActions([...actions, list]);
    }
  }

  return (
    <Gamepad gamePadEvent={handleGamePadEvent}></Gamepad>
  )
}

export default ControllerPage
