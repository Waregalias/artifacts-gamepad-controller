export type ArtifactResponse = {
  cooldown: ArtifactCooldown,
  destination: ArtifactDestination,
  character: ArtifactCharacter,
}

export type ArtifactCharacter = {
  name?: string,
  account?: string,
  skin?: string,
  level?: number,
  xp?: number,
  max_xp?: number,
  gold?: number,
  speed?: number,
  mining_level?: number,
  mining_xp?: number,
  mining_max_xp?: number,
  woodcutting_level?: number,
  woodcutting_xp?: number,
  woodcutting_max_xp?: number,
  fishing_level?: number,
  fishing_xp?: number,
  fishing_max_xp?: number,
  weaponcrafting_level?: number,
  weaponcrafting_xp?: number,
  weaponcrafting_max_xp?: number,
  gearcrafting_level?: number,
  gearcrafting_xp?: number,
  gearcrafting_max_xp?: number,
  jewelrycrafting_level?: number,
  jewelrycrafting_xp?: number,
  jewelrycrafting_max_xp?: number,
  cooking_level?: number,
  cooking_xp?: number,
  cooking_max_xp?: number,
  alchemy_level?: number,
  alchemy_xp?: number,
  alchemy_max_xp?: number,
  hp?: number,
  max_hp?: number,
  haste?: number,
  critical_strike?: number,
  wisdom?: number,
  prospecting?: number,
  attack_fire?: number,
  attack_earth?: number,
  attack_water?: number,
  attack_air?: number,
  dmg?: number,
  dmg_fire?: number,
  dmg_earth?: number,
  dmg_water?: number,
  dmg_air?: number,
  res_fire?: number,
  res_earth?: number,
  res_water?: number,
  res_air?: number,
  x?: number,
  y?: number,
  cooldown?: number,
  cooldown_expiration?: "2019-08-24T14:15:22Z",
  weapon_slot?: string,
  rune_slot?: string,
  shield_slot?: string,
  helmet_slot?: string,
  body_armor_slot?: string,
  leg_armor_slot?: string,
  boots_slot?: string,
  ring1_slot?: string,
  ring2_slot?: string,
  amulet_slot?: string,
  artifact1_slot?: string,
  artifact2_slot?: string,
  artifact3_slot?: string,
  utility1_slot?: string,
  utility1_slot_quantity?: number,
  utility2_slot?: string,
  utility2_slot_quantity?: number,
  bag_slot?: string,
  task?: string,
  task_type?: string,
  task_progress?: number,
  task_total?: number,
  inventory_max_items?: number,
  inventory?: [
    {
      slot: number,
      code: string,
      quantity: number
    }
  ]
};

export type ArtifactCooldown = {
  total_seconds: 10,
  remaining_seconds: 10,
  started_at: '2025-03-08T22:53:40.951836Z',
  expiration: '2025-03-08T22:53:50.800654Z',
  reason: 'movement'
};

export type ArtifactDestination = {
  name: 'City',
  skin: 'forest_cs1',
  x: 1,
  y: 1,
  content: { type: 'workshop', code: 'cooking' }
};

export enum ArtifactActionMoveX {
  directionUp = 1,
  directionDown = -1,
}

export enum ArtifactActionMoveY {
  directionLeft = -1,
  directionRight = 1,
}

