import {useState} from 'react';
import {useGamepads} from 'react-gamepads';
import GamepadSvg from "@/app/controller/components/Gamepad.svg";
import {controllerToGamePadSVG} from "@/app/controller/components/Gamepad.model";
import {cn} from "@/lib/utils";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Disc} from "lucide-react";


/**
 * GamePad View
 * @constructor
 */

function Gamepad({ gamePadEvent }: any) {
  const myObj: { [index: string]: any } = {}
  const [gamepads, setGamepads] = useState(myObj);
  useGamepads(gamepads => setGamepads(gamepads));
  const gamepadId = Object.keys(gamepads).shift();
  let buttonsClicked = {};

  if (gamepadId && gamepads[gamepadId].buttons && gamepads[gamepadId].buttons.length > 0) {
    gamepads[gamepadId].buttons.map((button: { pressed: any; }, index: number) => {
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
      <Card className={cn("w-[380px]", 'controller')}>
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
    </>
  )
}

export default Gamepad
