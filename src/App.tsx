import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";
import {Controller} from "@/views/Controller.tsx";


/**
 * GamePad View
 * @constructor
 */

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle></ModeToggle>
        <Controller></Controller>
      </ThemeProvider>
    </>
  )
}

export default App
