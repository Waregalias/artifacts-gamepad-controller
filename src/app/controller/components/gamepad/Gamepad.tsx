import {useEffect, useRef, useState} from 'react';
import {useGamepads} from 'react-gamepads';
import {cn} from "@/lib/utils";
import GamepadSvg from "@/app/controller/components/gamepad/Gamepad.svg";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {controllerToGamePadSVG, Gpad} from "@/app/controller/models/Gamepad.model";

interface GamepadProps {
  gamePadEvent: (buttons: { [key: string]: boolean }) => void;
}

/**
 * GamePad View
 * @constructor
 */
function Gamepad({gamePadEvent}: GamepadProps) {
  const [gamepads, setGamepads] = useState<Gpad>({});
  const [currentButtonsClicked, setCurrentButtonsClicked] = useState<{ [key: string]: boolean }>({});
  useGamepads(gamepads => setGamepads(gamepads as unknown as Gpad));
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const gamepadId = Object.keys(gamepads).shift();
    let newButtonsClicked = {};

    if (gamepadId && gamepads && gamepads[gamepadId].buttons && gamepads[gamepadId].buttons.length > 0) {
      gamepads[gamepadId].buttons.forEach((button: { pressed: boolean }, index: number) => {
        const parameter = controllerToGamePadSVG[index] || 'notFound';
        newButtonsClicked = { ...newButtonsClicked, [parameter]: button.pressed };
      });
      setCurrentButtonsClicked(newButtonsClicked);
    }
  }, [gamepads]);

  useEffect(() => {
    const pressedButtons = Object.entries(currentButtonsClicked)
      .filter(([, isPressed]) => isPressed)
      .map(([button]) => button);

    if (pressedButtons.length > 0) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        gamePadEvent(currentButtonsClicked);
      }, 200);
    } else {
      gamePadEvent(currentButtonsClicked);
    }
  }, [currentButtonsClicked, gamePadEvent]);

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
                {...currentButtonsClicked}
              ></GamepadSvg>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Gamepad
