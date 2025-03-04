interface Model {
  [key: string]: string;
}

export const controllerToGamePadSVG : Model = {
  '0': 'buttonDown',
  '1': 'buttonRight',
  '2': 'buttonLeft',
  '3': 'buttonUp',
  '4': 'TriggerFrontLeft',
  '5': 'TriggerFrontRight',
  '6': 'TriggerBackLeft',
  '7': 'TriggerBackRight',
  '8': 'select',
  '9': 'start',
  // '10': 'analogLeft',
  // '11': 'analogRight',
  '12': 'directionUp',
  '13': 'directionDown',
  '14': 'directionLeft',
  '15': 'directionRight',
}
