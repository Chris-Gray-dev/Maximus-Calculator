import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import { makeStyles } from '@material-ui/core/styles';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

function ResultsView(props)
{
    const classes = useStyles();
    let attack = props.attack 
    if(attack === null)
    {
        return(<></>)
    }
    return(
        <Box width="20%">
        <Card variant="outlined">
        <CardContent>
            <Typography>To hit: {attack.ToHit} {attack.IsCrit && <span>CRITICAL HIT!</span>}</Typography>

            <Accordion className={classes.heading} >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>Damage Total: {attack.TotalDamage}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                    <Typography>Bludgeoning: {attack.Bludgeoning}</Typography>
                    {attack.Force > 0 && <Typography>Force: {attack.Force}</Typography>}            
                    {attack.Radiant > 0 && <Typography>Radiant: {attack.Radiant}</Typography>}
                    </div>
                </AccordionDetails>
            </Accordion>

        </CardContent>
        </Card>                   
        </Box>
    )
    
}


export default ResultsView