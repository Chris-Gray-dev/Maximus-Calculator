function roll(dieSize)
{
    return Math.floor(Math.random() * (dieSize) + 1);
}

function d4()
{
    return roll(4)
}

function d6()
{
    return roll(6)
}

function d8()
{
    return roll(8)
}

function d20()
{
    return roll(20)
}

export{d4,d6,d8,d20}


