import Typography from '@material-ui/core/Typography';
function ResultsView(props)
{
    let attack = props.attack 
    if(attack === null)
    {
        return(<></>)
    }
    return(
        
        <div>
            <Typography>To hit: {attack.ToHit}</Typography>
            <Typography>Bludgeoning: {attack.Bludgeoning}</Typography>
            {attack.Force > 0 && <Typography>Force: {attack.Force}</Typography>}            
            {attack.Radiant > 0 && <Typography>Radiant: {attack.Radiant}</Typography>}
            <Typography>Total: {attack.TotalDamage}</Typography>            
        </div>
    )
    
}


export default ResultsView