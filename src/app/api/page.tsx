'use client'

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "@/components/ui/use-toast";
import {useStore} from "@/app/store";


function ApiPage() {
  const FormSchema = z.object({
    apiKey: z.string(),
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      apiKey: useStore((state: { apiKey: string }) => state.apiKey),
    },
  })
  const updateApiKey = useStore((state: { updateApiKey: string }) => state.updateApiKey);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    updateApiKey(data.apiKey);
    toast({
      title: "Api token saved in local storage",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <span className="text-white">{JSON.stringify(data, null, 2)}</span>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="apiKey"
          render={({field}) => (
            <FormItem>
              <FormLabel>API Key</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your private API Key.
              </FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ApiPage
