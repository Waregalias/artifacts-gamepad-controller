import {useEffect, useState} from 'react';
import {useGamepads} from 'react-gamepads';
import {cn} from "@/lib/utils";
import GamepadSvg from "@/app/controller/components/gamepad/Gamepad.svg";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {controllerToGamePadSVG} from "@/app/controller/components/gamepad/Gamepad.model";

/**
 * GamePad View
 * @constructor
 */
function Gamepad({gamePadEvent}: any) {
  const myObj: { [index: string]: any } = {}
  const [gamepads, setGamepads] = useState(myObj);
  useGamepads(gamepads => setGamepads(gamepads));
  const gamepadId = Object.keys(gamepads).shift();
  let buttonsClicked = {};

  if (gamepadId && gamepads[gamepadId].buttons && gamepads[gamepadId].buttons.length > 0) {
    gamepads[gamepadId].buttons.map((button: { pressed: boolean; }, index: number) => {
      const parameter = controllerToGamePadSVG[index] || 'notFound';
      buttonsClicked = {...buttonsClicked, [parameter]: button.pressed};
      handleGamePadEvent();
    });
  }

  function handleGamePadEvent() {
    gamePadEvent(buttonsClicked);
  }

  return (
    <>
      <div className={"flex"}>
        <Card className={cn("border-0", "w-full")}>
          <CardHeader>
            <CardTitle>XBOX Controller</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center space-x-4 rounded-md border p-4">
              <GamepadSvg
                {...buttonsClicked}
              ></GamepadSvg>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Gamepad
