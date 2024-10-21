import {useState} from "react";
import {Input} from "@/app/components/ui/input.tsx"
import './ApiCaller.css';
import {cn} from "@/app/lib/utils.ts";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/app/components/ui/card.tsx";
import {Button} from "@/app/components/ui/button.tsx";

export function ApiKey({ apiKeyData }: any) {
  const [apiKey, setApiKey] = useState<string>('');

  function handleSave() {
    apiKeyData(apiKey);
  }

  return (
    <>
      <Card className={cn("w-[380px]", 'api-key')}>
        <CardHeader>
          <CardTitle>My account</CardTitle>
          <CardDescription>To use your Xbox controller, insert your API Key</CardDescription>
        </CardHeader>
        <CardContent>
          <Input type="text" placeholder="Token" value={apiKey} onChange={(e) => setApiKey(e.target.value)}/>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSave}>Save</Button>
        </CardFooter>
      </Card>
    </>
  )
}
