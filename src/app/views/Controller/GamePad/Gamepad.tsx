import {useState} from 'react';
import {useGamepads} from 'react-gamepads';
import GamepadSvg from "@/app/views/Controller/GamePad/GamepadSvg.tsx";
import {controllerToGamePadSVG} from "@/app/views/Controller/GamePad/GamePad.model.tsx";
import {cn} from "@/app/lib/utils.ts";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/app/components/ui/card.tsx";
import {Button} from "@/app/components/ui/button.tsx";
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
        <CardFooter>
          <Button className="w-full">
            <Disc className={'disc'}/>ON LIVE: Execute action in your game.
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default Gamepad
