import {ThemeProvider} from "@/app/components/theme-provider.tsx";
import {ModeToggle} from "@/app/components/mode-toggle.tsx";
import {Controller} from "@/app/views/Controller/Controller.tsx";

export function Home() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
      <Controller></Controller>
    </ThemeProvider>
  )
}
