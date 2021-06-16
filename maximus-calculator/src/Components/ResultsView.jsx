import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import DamageResults from "./DamageResults"

const useStyles = makeStyles((theme) => ({
    strike: {
        textDecorationStyle: 'linethrough'
    },
  }));

function ResultsView(props)
{
    const classes = useStyles()

    let attack = props.attack 
    if(attack === null)
    {
        return(<></>)
    }
    return(
        <Box width="20%">
        <Card variant="outlined">
        <CardContent>
            <Typography >
                    To hit ({attack.AttackDice[0]} {attack.AttackDice[1] > 0 && <span>,<span style={{textDecoration:"line-through"}}>{attack.AttackDice[1]}</span></span>} + {attack.TO_HIT}): {attack.ToHit} 
                    {attack.IsCrit && <span style={{fontWeight:"bold"}}> CRITICAL HIT!</span>} 
                    {attack.IsFail && <span style={{fontWeight:"bold"}}> CRITICAL MISS!</span>} 
            </Typography>
            {!attack.IsFail && <DamageResults attack={attack}/> }
        </CardContent>
        </Card>                   
        </Box>
    )
    
}


export default ResultsView