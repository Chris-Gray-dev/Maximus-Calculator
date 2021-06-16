import {NORMAL_ROLL,ADVANTAGE,DISADVANTAGE} from "./AdvantageEnum"
import {d4,d6,d8,d20} from "./dice"

class Attack
{
    #TO_HIT
    #TO_DMG
    #DIVINE_FURY_DMG
    #RAGE_DMG
    #RADIANT_CONSUMPTION_DMG

    constructor(state)
    {
        this.state = state

        this.#TO_HIT = 13
        this.#TO_DMG = 9
        this.#DIVINE_FURY_DMG = 4   
        this.#RAGE_DMG = 2
        this.#RADIANT_CONSUMPTION_DMG = 11

        this.IsCrit = false

        // Numbers
        this.ToHit       = 0
        this.TotalDamage = 0 
        this.Bludgeoning = 0
        this.Force       = 0
        this.Radiant     = 0

        // Dice
        this.AttackDice         = [0,0]
        this.FistDice           = [0,0]
        this.GiantsMightDice    = [0,0]
        this.PotionOfGrowthDice = [0,0]
        this.EldritchMaulDice   = [0,0]
        this.DivineFuryDice     = [0,0]
    }

    #CalcToHit()
    {
        let toHit = -1

        if(this.state.advantage === NORMAL_ROLL)
        {
            toHit = d20()
            this.AttackDice[0] = toHit
        }
        else
        {
            let toHitArray = [d20(),d20()]
            this.AttackDice = toHitArray

            if(this.state.advantage === ADVANTAGE)
            {
                toHit = Math.max(...toHitArray)
            }
            else
            {
                toHit = Math.min(...toHitArray)
            }
        }

        if(toHit === 20)
        {
            this.IsCrit = true
        }

        this.ToHit = toHit + this.#TO_HIT
    }

    #CalcFistDamage()
    {
        let roll = d8()
        this.FistDice[0] = roll
        this.Bludgeoning += roll

        if(this.IsCrit)
        {
            let roll2 = d8()
            this.FistDice[1] = roll2
            this.Bludgeoning += roll2
        }

        this.Bludgeoning += this.#TO_DMG 
    }

    #CalcDivineFuryDamage()
    {
        if(this.state.divineFury)
        {
            let roll = d6()
            this.DivineFuryDice[0] = roll
            this.Radiant += roll
            
            if(this.IsCrit)
            {
                let roll2 = d6()
                this.DivineFuryDice[1] = roll2
                this.Radiant += roll2
            }

            this.Radiant += this.#DIVINE_FURY_DMG
        }
    }

    #CalcGiantsMightDamage()
    {
        if(this.state.giantsMight)
        {
            let roll = d6()
            this.GiantsMightDice[0] = roll
            this.Bludgeoning += roll
            
            if(this.IsCrit)
            {
                let roll2 = d6()
                this.GiantsMightDice[1] = roll2
                this.Bludgeoning += roll2
            }
        }
    }

    #CalcPotionOfGrowthDamage()
    {
        if(this.state.potionOfGrowth)
        {
            let roll = d4()
            this.PotionOfGrowthDice[0] = roll
            this.Bludgeoning += roll
            
            if(this.IsCrit)
            {
                let roll2 = d4()
                this.PotionOfGrowthDice[1] = roll2
                this.Bludgeoning += roll2
            }
        }
    }

    #CalcEldritchMaulDamage()
    {
        if(this.state.eldritchMaul)
        {
            let roll = d6()
            this.EldritchMaulDice[0] = roll
            this.Force += roll
            
            if(this.IsCrit)
            {
                let roll2 = d6()
                this.EldritchMaulDice[1] = roll2
                this.Force += roll2
            }
        }
    }

    #CalcRageDamage()
    {
        if(this.state.rage)
        {
            this.Bludgeoning += this.#RAGE_DMG
        }
    }

    #CalcRadiantConsumption()
    {
        if(this.state.radiantConsumption)
        {
            this.Radiant += this.#RADIANT_CONSUMPTION_DMG
        }
    }

    doAttack()
    {
        this.#CalcToHit()
        this.#CalcFistDamage()

        this.#CalcRageDamage()
        this.#CalcEldritchMaulDamage()
        this.#CalcPotionOfGrowthDamage()

        this.#CalcDivineFuryDamage()
        this.#CalcGiantsMightDamage()
        this.#CalcRadiantConsumption()

        this.TotalDamage = this.Bludgeoning + this.Radiant + this.Force
    }
}

export default Attack