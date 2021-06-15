import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

import Damage from "../Helpers/damage"

import {d4,d6,d8,d20} from "../Helpers/dice"

// Constants
const NORMAL_ROLL  = "norm"
const ADVANTAGE    = "adv"
const DISADVANTAGE = "disadv"

const DEFAULT_STATE = {
    advantage         : NORMAL_ROLL,
    divineFury        : false,
    rage              : false,
    giantsMight       : false,
    eldritchMaul      : false,
    radiantConsumption: false,
    potionOfGrowth    : false
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function MaximusForm()
{
    const [result, setResult] = React.useState("...")
    const classes = useStyles();

    let dmg = new Damage()
      const [state, setState] = React.useState(DEFAULT_STATE);
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const handleAdvantageChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
      };


      const roll =()=>{
        setResult(JSON.stringify(state))
      }
      const reset = ()=>{
          setState(DEFAULT_STATE)
          setResult("...")
      }


    return(
        <div className={classes.root}>
            <div className={classes.root}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Advantage / Disadvantage</FormLabel>
                <RadioGroup aria-label="Advantage" name="Advantage" value={state.advantage} onChange={handleAdvantageChange}>
                    <FormControlLabel value={NORMAL_ROLL} control={<Radio />} name="advantage" label="None" />
                    <FormControlLabel value={ADVANTAGE} control={<Radio />} name="advantage" label="Advantage" />
                    <FormControlLabel value={DISADVANTAGE} control={<Radio />} name="advantage" label="Disadvantage" />
                </RadioGroup>
                <br></br>
                <FormLabel component="legend">Modifiers</FormLabel>
                <FormControlLabel
                    control={<Switch checked={state.divineFury} onChange={handleChange} name="divineFury" />}
                    label="Divine Fury"
                />
                <FormControlLabel
                    control={<Switch checked={state.rage} onChange={handleChange} name="rage" />}
                    label="Rage"
                />
                <FormControlLabel
                    control={<Switch checked={state.giantsMight} onChange={handleChange} name="giantsMight" />}
                    label="Giants Might"
                />
                <FormControlLabel
                    control={<Switch checked={state.eldritchMaul} onChange={handleChange} name="eldritchMaul" />}
                    label="Eldritch Maul"
                />
                <FormControlLabel
                    control={<Switch checked={state.radiantConsumption} onChange={handleChange} name="radiantConsumption" />}
                    label="Radiant Consumption"
                />
                <FormControlLabel
                    control={<Switch checked={state.potionOfGrowth} onChange={handleChange} name="potionOfGrowth" />}
                    label="Potion of Growth"
                />
                <div className={classes.root}>
                    <Button variant="contained" color="primary" onClick={roll} >Roll</Button>
                    <Button variant="contained" onClick={reset}>Reset</Button>
                </div>
            </FormControl>
            </div>

            <div>
            <Card variant="outlined">
                <CardContent>
                    <Typography>{result}</Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}

export default MaximusForm