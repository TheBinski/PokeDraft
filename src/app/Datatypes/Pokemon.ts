export type Pokemon = {
    dexNum: number,
    tier: string,
    name: string;
    type1: string;
    type2: string | null;
    ability1: string;
    ability2: string | null;
    ability3: string | null;
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
}