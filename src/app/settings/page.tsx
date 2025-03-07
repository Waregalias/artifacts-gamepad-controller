'use client'

import {useState} from "react";
import * as React from "react";
import {Controller, useForm} from "react-hook-form"
import Image from "next/image";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useStore} from "@/app/store";
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
import {getCharacters} from "@/app/settings/services/api.service";
import {ArtifactCharacter} from "@/app/settings/models/api.model";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"


function ApiPage() {
  const FormSchema = z.object({
    apiKey: z.string(),
    character: z.string(),
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      apiKey: useStore((state: { apiKey: string }) => state.apiKey),
      character: useStore((state: { character: string }) => state.character),
    },
  })
  const initialCharacter = useStore((state: { character: string }) => state.character);
  const initialSkin = useStore((state: { skin: string }) => state.skin);
  const [characters, setCharacters] = useState<ArtifactCharacter[]>([
    {name: initialCharacter, skin: initialSkin}
  ]);
  const updateApiKeyAndCharacters = useStore((state: {
    updateApiKeyAndCharacters: { apiKey: string, character: string }
  }) => state.updateApiKeyAndCharacters);

  async function loadCharacters() {
    const apiKey = form.getValues('apiKey');
    setCharacters(await getCharacters(apiKey));
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    updateApiKeyAndCharacters(
      data.apiKey,
      data.character,
      characters.find((character) => character.name === data.character)?.skin || ''
    );
    toast({
      title: "Token and character locally saved. Let's play !",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <div className={"flex items-center"}>
          <FormField
            control={form.control}
            name="apiKey"
            render={({field}) => (
              <FormItem>
                <FormLabel>API Key</FormLabel>
                <FormControl>
                  <Input placeholder="eyJ0fXAi0i..." {...field} />
                </FormControl>
                <FormDescription>
                  This is your private API Key.
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <Button className={"ml-5"} type={"button"} onClick={loadCharacters}>Load Characters</Button>
        </div>
        <FormField
          control={form.control}
          name="character"
          render={() => (
            <FormItem>
              <FormLabel>Select your character</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="character"
                  render={({field}) => (
                    <Select
                      disabled={characters?.[0]?.name === ''}
                      onValueChange={field.onChange} // Bind onChange to update form state
                      value={field.value} // Bind value to form state
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a character"/>
                      </SelectTrigger>
                      <SelectContent>
                        {characters
                          .filter((character) => character.name)
                          .map((character, index) => (
                            <SelectItem key={character.account || character.name || index} value={character.name ?? ''}>
                              <div className="flex items-center">
                                <Image
                                  src={`/images/skins/${character.skin}.png`}
                                  alt={`${character.name}'s skin`}
                                  width={16}
                                  height={16}
                                  className="mr-3"
                                  style={{width: 'auto', height: 'auto'}}
                                  priority
                                />
                                {character.name}
                              </div>
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type={"submit"}>Submit</Button>
      </form>
    </Form>
  )
}

export default ApiPage
