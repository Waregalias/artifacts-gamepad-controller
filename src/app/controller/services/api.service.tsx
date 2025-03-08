import {ArtifactResponse} from "@/app/controller/models/artifact.model";

export const move = async (apiKey: string, name: string, fx: number, fy: number, dx: number, dy: number): Promise<ArtifactResponse> => {
  return fetch(`https://api.artifactsmmo.com/my/${name}/action/move`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: `{"x":${fx + dx},"y":${fy + dy}}`,
    })
    .then(response => response.json())
    .then((response) => response.data)
    .catch((error => error.data));
}
