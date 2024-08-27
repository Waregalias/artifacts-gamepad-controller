import {useState} from "react";
import {Input} from "@/components/ui/input"
import './ApiCaller.css';
import {cn} from "@/lib/utils.ts";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

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
