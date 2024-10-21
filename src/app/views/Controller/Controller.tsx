import './Controller.css';
import Gamepad from "@/app/views/Controller/GamePad/Gamepad.tsx";
import {ApiKey} from "@/app/views/ApiKey/ApiKey.tsx";


export function Controller() {
  function handleApiKeyData(data: any) {
    console.log(data);
  }
  function handleGamePadEvent(data: any) {
    // console.log(data);
  }

  return (
    <>
      <ApiKey apiKeyData={handleApiKeyData}></ApiKey>
      <Gamepad gamePadEvent={handleGamePadEvent}></Gamepad>
    </>
  )
}
