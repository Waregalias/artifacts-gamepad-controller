import {ArtifactCharacter} from "@/app/settings/models/api.model";

export const getCharacters = async (apiKey: string): Promise<ArtifactCharacter[]> => {
  return fetch(`https://api.artifactsmmo.com/my/characters`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    })
    .then(response => response.json())
    .then((response) => response.data);
}
