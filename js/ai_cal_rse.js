function checkSleepBad(attacker, defender, move, score)
{
	switch (move.name)
	{
	case "Sing": case "Sleep Powder": case "Hypnosis":
	case "Lovely Kiss": case "Spore": case "Grass Whistle":
		score -= 10;
		break;
	}
	return score;
}

function checkBadMove(attacker, defender, move, score)
{
	switch (move.name)
	{
		case "Horn Drill": case "Fissure":
			if (TypeCalc(attacker, defender, move) == 0) 
			{
				score -= 10;
			}
			break;
		default:
			break;
	}
	switch (defender.ability)
	{
		case "Volt Absorb":
			if (move.type == "Electric")
			{
				score -= 12;
			}
			break;
		case "Water Absorb":
			if (move.type == "Water")
			{
				score -= 12;
			}
			break;
		case "Flash Fire":
			if (move.type == "Fire")
			{
				score -= 12;
			}
			break;
		case "Soundproof":
			switch (move.name)
			{
				case "Growl": case "Roar": case "Sing": case "Supersonic": case "Screech":
				case "Snore": case "Uproar": case "Metal Sound": case "Grass Whistle":
					score -= 10;
					break;
			}
		
			break;
		case "Insomnia": case "Vital Spirit":
			score = checkSleepBad(attacker, defender, move, score);
	}
	switch (defender.status)
	{
		case "Asleep":
			score = checkSleepBad(attacker, defender, move, score);
	}
			
	return score;
}

function getScore(attacker, defender, move)
{
	return checkBadMove(attacker, defender, move, 0);
}

function TypeCalc(attacker, defender, move)
{
    if (move.moveName == "Struggle")
        return 1;

    // check stab
	//if (attacker.type1 == move.type || attacker.type2 == move.type)
    //{
    //    gBattleMoveDamage = gBattleMoveDamage * 15;
    //    gBattleMoveDamage = gBattleMoveDamage / 10;
    //}

	res = 1;

    if (defender.ability == "Levitate" && move.type == "Ground")
    {
		return 0;
        //flags |= (MOVE_RESULT_MISSED | MOVE_RESULT_DOESNT_AFFECT_FOE);
    }
    else
    {
        res = res*typeChart[move.type][defender.type1];
		res = res*typeChart[move.type][defender.type2];
    }

    if (defender.ability == "Wonder Guard" && (res < 2))
    {
        return 0;
    }
    return res;
}