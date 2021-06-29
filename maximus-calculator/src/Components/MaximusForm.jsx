import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import ResultsView from './ResultsView'
import Attack from "../Helpers/Attack";
import { orange } from '@material-ui/core/colors';

import {NORMAL_ROLL,ADVANTAGE,DISADVANTAGE} from "../Helpers/AdvantageEnum"

const OrangeButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
    },
  }))(Button);

const OrangeSwitch = withStyles({
    switchBase: {
      color: orange[300],
      '&$checked': {
        color: orange[500],
      },
      '&$checked + $track': {
        backgroundColor: orange[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const OrangeRadio = withStyles({
    root: {
      color: orange[400],
      '&$checked': {
        color: orange[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

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
    const [attack, setAttack] = React.useState(null)
    const classes = useStyles();

    const [state, setState] = React.useState(DEFAULT_STATE);

    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleAdvantageChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
    };


    const roll =()=>{
    let attack = new Attack(state) 
    attack.doAttack()
    setAttack(attack)
    }

    const reset = ()=>{
        setState(DEFAULT_STATE)
        setAttack(null)
    }


    return(
        <div className={classes.root}>
            <div className={classes.root}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Advantage / Disadvantage</FormLabel>
                <RadioGroup aria-label="Advantage" name="Advantage" value={state.advantage} onChange={handleAdvantageChange}>
                    <FormControlLabel value={NORMAL_ROLL}  control={<OrangeRadio />} name="advantage" label="None" />
                    <FormControlLabel value={ADVANTAGE}    control={<OrangeRadio />} name="advantage" label="Advantage" />
                    <FormControlLabel value={DISADVANTAGE} control={<OrangeRadio />} name="advantage" label="Disadvantage" />
                </RadioGroup>

                <br/>

                <FormLabel component="legend">Modifiers</FormLabel>
                
                <br/>

                <FormLabel component="legend">Every hit</FormLabel>
                <FormControlLabel
                    control={<OrangeSwitch checked={state.rage} onChange={handleChange} name="rage" />}
                    label="Rage (+3 bludgeoning)"
                />
                <FormControlLabel
                    control={<OrangeSwitch checked={state.eldritchMaul} onChange={handleChange} name="eldritchMaul" />}
                    label="Eldritch Maul (+1d6 force)"
                />
                <FormControlLabel
                    control={<OrangeSwitch checked={state.potionOfGrowth} onChange={handleChange} name="potionOfGrowth" />}
                    label="Potion of Growth (+1d4 bludegoning)"
                />

                <br/>
                
                <FormLabel component="legend">Once per turn</FormLabel>
                <FormControlLabel
                    control={<OrangeSwitch checked={state.divineFury} onChange={handleChange} name="divineFury" />}
                    label="Divine Fury (+1d6+4 radiant)"
                />
                <FormControlLabel
                    control={<OrangeSwitch checked={state.giantsMight} onChange={handleChange} name="giantsMight" />}
                    label="Giants Might (+1d6 bludgeoning)"
                />
                <FormControlLabel
                    control={<OrangeSwitch checked={state.radiantConsumption} onChange={handleChange} name="radiantConsumption" />}
                    label="Radiant Consumption (+11 radiant)"
                />

                <br/>
                
                <div className={classes.root}>
                    <OrangeButton variant="contained" onClick={roll} >Roll</OrangeButton>
                    <Button variant="contained" onClick={reset}>Reset</Button>
                </div>
            </FormControl>
            </div>

            <div>
            <ResultsView attack={attack}/>
            </div>
        </div>
    )
}
export default MaximusForm