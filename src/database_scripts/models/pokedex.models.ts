import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Pokedex extends Model<Pokedex> {
    @Column
    name?: string;

    @Column
    dexNumber?: number;

    @Column
    type1?: string;

    @Column
    type2?: string;

    @Column
    ability1?: string;

    @Column
    ability2?: string;

    @Column
    abilityH?: string;

    @Column
    hp?: number;

    @Column
    attack?: number;

    @Column
    defense?: number;

    @Column
    spAttack?: number;

    @Column
    spDefense?: number;

    @Column
    speed?: number;

    @Column
    statTotal?: number;

}