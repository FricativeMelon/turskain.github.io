if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement, fromIndex) {
		var k;

		if (this == null) {
			throw new TypeError('"this" equals null or n is undefined');
		}

		var O = Object(this);

		var len = O.length >>> 0;

		if (len === 0) {
			return -1;
		}

		var n = +fromIndex || 0;

		if (Math.abs(n) === Infinity) {
			n = 0;
		}
		if (n >= len) {
			return -1;
		}

		k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
		while (k < len) {
			if (k in O && O[k] === searchElement) {
	    	return k;
	  	}
	  	k++;
		}
		return -1;
	};
}

// input field validation
var bounds = {
	"level": [0, 100],
	"leveloverride": [0, 100],
	"base": [1, 255],
	"evs": [0, 252],
	"ivs": [0, 31],
	"ivsoverride": [0, 31],
	"dvs": [0, 15],
	"move-bp": [0, 999]
};
for (var bounded in bounds) {
	attachValidation(bounded, bounds[bounded][0], bounds[bounded][1]);
}
function attachValidation(clazz, min, max) {
	$("." + clazz).keyup(function () {
		validate($(this), min, max);
	});
}
function validate(obj, min, max) {
	obj.val(Math.max(min, Math.min(max, ~~obj.val())));
}

// auto-calc stats and current HP on change
$(".level").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcHP(poke);
	calcStats(poke);
});

function calcStatRev(a, stat)
{
	var target_total = stat.find(".total").val();
	var low = 0;
	var high = 31;
	while (low <= high)
	{
		var curr = Math.floor((high + low) / 2);
		stat.find(".iv").val(curr);
		calcStat(a, stat);
		var actual_total = stat.find(".total").val();
		if (actual_total < target_total)
		{
			//iv too low
			//check higher 
			low = curr + 1;

		}
		else if (actual_total > target_total)
		{
			//iv too high
			//check lower 
			high = curr - 1;
		}
		else
		{
			//jackpot, that works!
			break;
		}
	}
}

function calcStatAny(poke, statName)
{
	if (statName == "hp")
		calcHP(poke);
	else
		calcStat(poke, statName);
}

function calcStatRev(poke, statName)
{
	var stat = poke.find("." + statName);
	var target_total = parseInt(stat.find(".total").val());
	var low = 0;
	var high = 31;
	while (low <= high)
	{
		var curr = Math.floor((high + low) / 2);
		stat.find(".ivs").val(curr);
		calcStatAny(poke, statName);
		var actual_total = parseInt(stat.find(".total").val());
		if (actual_total < target_total)
		{
			//iv too low
			//check higher 
			low = curr + 1;

		}
		else if (actual_total > target_total)
		{
			//iv too high
			//check lower 
			high = curr - 1;
		}
		else
		{
			//jackpot, that works!
			break;
		}
	}
}

$(".nature").bind("keyup change", function () {
	calcStats($(this).closest(".poke-info"));
});
$(".hp .base, .hp .evs, .hp .ivs").bind("keyup change", function () {
	calcHP($(this).closest(".poke-info"));
});
$(".at .base, .at .evs, .at .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'at');
});
$(".df .base, .df .evs, .df .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'df');
});
$(".sa .base, .sa .evs, .sa .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'sa');
});
$(".sd .base, .sd .evs, .sd .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'sd');
});
$(".sp .base, .sp .evs, .sp .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'sp');
});


$(".hp .total").on("change", function () {
	calcStatRev($(this).closest(".poke-info"), 'hp');
});
$(".at .total").on("change", function () {
	calcStatRev($(this).closest(".poke-info"), 'at');
});
$(".df .total").on("change", function () {
	calcStatRev($(this).closest(".poke-info"), 'df');
});
$(".sa .total").on("change", function () {
	calcStatRev($(this).closest(".poke-info"), 'sa');
});
$(".sd .total").on("change", function () {
	calcStatRev($(this).closest(".poke-info"), 'sd');
});
$(".sp .total").on("change", function () {
	calcStatRev($(this).closest(".poke-info"), 'sp');
});


$(".evs").bind("keyup change", function () {
	calcEvTotal($(this).closest(".poke-info"));
});
$(".sl .base").keyup(function () {
	calcStat($(this).closest(".poke-info"), 'sl');
});
$(".at .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'at');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".df .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'df');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".sa .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'sa');
	poke.find(".sd .dvs").val($(this).val());
	calcStat(poke, 'sd');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".sp .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'sp');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".sl .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'sl');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});

function getHPDVs(poke) {
	return (~~poke.find(".at .dvs").val() % 2) * 8 +
(~~poke.find(".df .dvs").val() % 2) * 4 +
(~~poke.find(".sp .dvs").val() % 2) * 2 +
(~~poke.find(gen === 1 ? ".sl .dvs" : ".sa .dvs").val() % 2);
}

function calcStats(poke) {
	for (var i = 0; i < STATS.length; i++) {
		calcStat(poke, STATS[i]);
	}
}

function calcEvTotal(poke) {
	var total = 0;
	poke.find('.evs').each(function (idx, elt) { total += 1 * $(elt).val(); });
	var newClass = total > 510 ? 'overLimit' : 'underLimit';
	var left = 510 - total;
	var newClassLeft = left < 0 ? 'overLimit' : 'underLimit';
	var evTotal = poke.find('.ev-total');
	evTotal.removeClass('underLimit overLimit').text(total).addClass(newClass);
	var evLeft = poke.find('.ev-left');
	evLeft.removeClass('underLimit overLimit').text(left).addClass(newClassLeft);
}

function calcCurrentHP(poke, max, percent) {
	var current = Math.ceil(percent * max / 100);
	poke.find(".current-hp").val(current);
	drawHealthBar(poke, max, current);
}
function calcPercentHP(poke, max, current) {
	var percent = Math.floor(100 * current / max);
	poke.find(".percent-hp").val(percent);
	drawHealthBar(poke, max, current);
}
function drawHealthBar(poke, max, current) {
	var fillPercent = Math.floor(100 * current / max);
	var fillColor = fillPercent > 50 ? "green" : fillPercent > 20 ? "yellow" : "red";

	var healthbar = poke.find(".hpbar");
	healthbar.addClass("hp-" + fillColor);
	var unwantedColors = ["green", "yellow", "red"];
	unwantedColors.splice(unwantedColors.indexOf(fillColor), 1);
	for (var i = 0; i < unwantedColors.length; i++) {
		healthbar.removeClass("hp-" + unwantedColors[i]);
	}

	healthbar.css("background", "linear-gradient(to right, " + fillColor + " " + fillPercent + "%, white 0%");
}

//HACK! input validation
//$(".ivsoverride").keyup(function () {
//    validate($(this), 0, 31);
//});
//$(".leveloverride").keyup(function () {
//    validate($(this), 1, 100);
//});
//HACK!!
$(".leveloverride").val("50");
$(".ivsoverrideR1").val("31");
$(".ivsoverrideL1").val("31");
//HACK to fix the 55 bug? idk where it comes from


$(".current-hp").keyup(function () {
	var max = $(this).parent().children(".max-hp").val();
	validate($(this), 0, max);
	var current = $(this).val();
	calcPercentHP($(this).parent(), max, current);
});
$(".percent-hp").keyup(function () {
	var max = $(this).parent().children(".max-hp").val();
	validate($(this), 0, 100);
	var percent = $(this).val();
	calcCurrentHP($(this).parent(), max, percent);
});

$(".ability").bind("keyup change", function () {
	$(this).closest(".poke-info").find(".move-hits").val($(this).val() === 'Skill Link' ? 5 : 3);
});

$("#p1 .ability").bind("keyup change", function () {
	autosetWeather($(this).val(), 0);
	autosetTerrain($(this).val(), 0);
});

var lastManualWeather = "";
var lastAutoWeather = ["", ""];
function autosetWeather(ability, i) {
	var currentWeather = $("input:radio[name='weather']:checked").val();
	if (lastAutoWeather.indexOf(currentWeather) === -1) {
		lastManualWeather = currentWeather;
		lastAutoWeather[1 - i] = "";
	}
	switch (ability) {
	case "Drought":
		lastAutoWeather[i] = "Sun";
		$("#sun").prop("checked", true);
		break;
	case "Drizzle":
		lastAutoWeather[i] = "Rain";
		$("#rain").prop("checked", true);
		break;
	case "Sand Stream":
		lastAutoWeather[i] = "Sand";
		$("#sand").prop("checked", true);
		break;
	case "Snow Warning":
		lastAutoWeather[i] = "Hail";
		$("#hail").prop("checked", true);
		break;
	case "Desolate Land":
		lastAutoWeather[i] = "Harsh Sunshine";
		$("#harsh-sunshine").prop("checked", true);
		break;
	case "Primordial Sea":
		lastAutoWeather[i] = "Heavy Rain";
		$("#heavy-rain").prop("checked", true);
		break;
	case "Delta Stream":
		lastAutoWeather[i] = "Strong Winds";
		$("#strong-winds").prop("checked", true);
		break;
	default:
		lastAutoWeather[i] = "";
		var newWeather = lastAutoWeather[1 - i] !== "" ? lastAutoWeather[1 - i] : "";
		$("input:radio[name='weather'][value='" + newWeather + "']").prop("checked", true);
		break;
	}
}

var lastManualTerrain = "";
var lastAutoTerrain = ["", ""];
function autosetTerrain() {
	var ability1 = $("#p1 .ability").val();
	var ability2 = $("#p2 .ability").val();
	if ((ability1 == "Electric Surge" || ability2 == "Electric Surge")) {
		$("input:radio[id='electric']").prop("checked", true);
		lastTerrain = 'electric';
	} else if ((ability1 == "Grassy Surge" || ability2 == "Grassy Surge")) {
		$("input:radio[id='grassy']").prop("checked", true);
		lastTerrain = 'grassy';
	} else if ((ability1 == "Misty Surge" || ability2 == "Misty Surge")) {
		$("input:radio[id='misty']").prop("checked", true);
		lastTerrain = 'misty';
	} else if ((ability1 == "Psychic Surge" || ability2 == "Psychic Surge")) {
		$("input:radio[id='psychic']").prop("checked", true);
		lastTerrain = 'psychic';
	} else
		$("input:radio[id='noterrain']").prop("checked", true);
}

$("#p1 .item").bind("keyup change", function () {
	autosetStatus("#p1", $(this).val());
});
$("#p2 .item").bind("keyup change", function () {
	autosetStatus("#p2", $(this).val());
});

var lastManualStatus = {"#p1": "Healthy", "#p2": "Healthy"};
var lastAutoStatus = {"#p1": "Healthy", "#p2": "Healthy"};
function autosetStatus(p, item) {
	var currentStatus = $(p + " .status").val();
	if (currentStatus !== lastAutoStatus[p]) {
		lastManualStatus[p] = currentStatus;
	}
	if (item === "Flame Orb") {
		lastAutoStatus[p] = "Burned";
		$(p + " .status").val("Burned");
		$(p + " .status").change();
	} else if (item === "Toxic Orb") {
		lastAutoStatus[p] = "Badly Poisoned";
		$(p + " .status").val("Badly Poisoned");
		$(p + " .status").change();
	} else {
		lastAutoStatus[p] = "Healthy";
		if (currentStatus !== lastManualStatus[p]) {
			$(p + " .status").val(lastManualStatus[p]);
			$(p + " .status").change();
		}
	}
}

$(".status").bind("keyup change", function () {
	if ($(this).val() === 'Badly Poisoned') {
		$(this).parent().parent().find(".toxic-counter").show();
	} else {
		$(this).parent().parent().find(".toxic-counter").hide();
	}
});

$("#clear").change(function () {
	if ($(this).prop("checked")) {
		var x = $(this).parent().parent().find("#notes-weather");
		x.hide();
	}
});

$("#sun").change(function () {
	if ($(this).prop("checked")) {
		var x = $(this).parent().parent().find("#notes-weather");
		x.css("left", "105px");
		x.show();
	}
});

$("#rain").change(function () {
	if ($(this).prop("checked")) {
		var x = $(this).parent().parent().find("#notes-weather");
		x.css("left", "165px");
		x.show();
	}
});

$("#sand").change(function () {
	if ($(this).prop("checked")) {
		var x = $(this).parent().parent().find("#notes-weather");
		x.css("left", "225px");
		x.show();
	}
});

$("#hail").change(function () {
	if ($(this).prop("checked")) {
		var x = $(this).parent().parent().find("#notes-weather");
		x.css("left", "280px");
		x.show();
	}
});

$("#reflectL").change(function () {
	var x = $("#notes-reflectL");
	if ($(this).prop("checked"))
	{
		x.show();
	}
	else
	{
		x.hide();
	}
});

$("#reflectR").change(function () {
	var x = $("#notes-reflectR");
	if ($(this).prop("checked")) {
		x.show();
	}
	else
	{
		x.hide();
	}
});

$("#lightScreenL").change(function () {
	var x = $("#notes-lightScreenL");
	if ($(this).prop("checked")) {
		x.show();
	}
	else
	{
		x.hide();
	}
});

$("#lightScreenR").change(function () {
	var x = $("#notes-lightScreenR");
	if ($(this).prop("checked")) {
		x.show();
	}
	else
	{
		x.hide();
	}
});

$(".ability").change(function () {
	checkPressure();
});

var lockerMove = "";
// auto-update move details on select
$(".move-selector").change(function () {
	var moveName = $(this).val();
	var move = moves[moveName] || moves['(No Move)'];
	var moveGroupObj = $(this).parent();
	moveGroupObj.children(".move-bp").val(move.bp);
	moveGroupObj.children(".move-type").val(move.type);
	moveGroupObj.children(".move-cat").val(move.category);
	moveGroupObj.children(".move-crit").prop("checked", move.alwaysCrit === true);
	moveGroupObj.children(".move-pp").val(move.pp);
	moveGroupObj.children(".move-pp").attr("max", move.pp);
	moveGroupObj.children(".metronome").prop("disabled", !!move.dropsStats);
	if (move.isMultiHit) {
		moveGroupObj.children(".stat-drops").hide();
		moveGroupObj.children(".move-hits").show();
		moveGroupObj.children(".move-hits").val($(this).closest(".poke-info").find(".ability").val() === 'Skill Link' ? 5 : 3);
		moveGroupObj.children(".move-hits").val($(this).closest(".poke-info").find(".item").val() === 'Grip Claw' ? 5 : 3);
	} else if (move.dropsStats) {
		moveGroupObj.children(".move-hits").hide();
		moveGroupObj.children(".stat-drops").show();
	} else {
		moveGroupObj.children(".move-hits").hide();
		moveGroupObj.children(".stat-drops").hide();
	}
	moveGroupObj.children(".move-z").prop("checked", false);
});

$(".item").change(function () {
	var itemName = $(this).val();
	var $metronomeControl = $(this).closest('.poke-info').find('.metronome');
	if (itemName === "Metronome") {
		$metronomeControl.show();
	} else {
		$metronomeControl.hide();
	}
});

$(".p2m1").change(function () {
	$("#notes-pp1").prop("title", $(this).val());
});

$(".move1").change(function () {
	$("#notes-pp1").prop("title", $(".p2m1").val());
});

$(".p2m2").change(function () {
	$("#notes-pp2").prop("title", $(this).val());
});

$(".move2").change(function () {
	$("#notes-pp2").prop("title", $(".p2m2").val());
});

$(".p2m3").change(function () {
	$("#notes-pp3").prop("title", $(this).val());
});

$(".move3").change(function () {
	$("#notes-pp3").prop("title", $(".p2m3").val());
});

$(".p2m4").change(function () {
	$("#notes-pp4").prop("title", $(this).val());
});

$(".move4").change(function () {
	$("#notes-pp4").prop("title", $(".p2m4").val());
});

function shallowDictCopy(d)
{
	res = {};
	for (k in d)
	{
		res[k] = d[k];
	};
	return res;
}

$(".save-IVs").click(function () {
	var pokeObj = $(this).closest(".poke-info");
	var setsel = pokeObj.find(".set-selector");
	var fullSetName = setsel.text().trim();
	var pokemonName, setName;
	pokemonName = fullSetName.substring(0, fullSetName.lastIndexOf("-"));
	setName = fullSetName.substring(0, fullSetName.indexOf("]")+1);
	if (pokemonName in setdex && setName in setdex[pokemonName])
	{
		var set = setdex[pokemonName][setName];
		var d = shallowDictCopy(set);
		d.ivs = {};
		d.ivs["hp"] = pokeObj.find(".hp .ivs").val();
		for (i = 0; i < STATS.length; i++) {
			d.ivs[STATS[i]] = pokeObj.find("." + STATS[i] + " .ivs").val();
		}
		d.ability = pokeObj.find(".ability").val();
		d.gender = pokeObj.find(".gender").val();
		d.nameProp = setName.substring(0, setName.indexOf("[")+1) + pokeObj.find(".save-name").val() + "]";
		//console.log(d.nameProp);
		d.name = pokemonName;
		addToDex(d);
		setsel.val(pokemonName + " (" + d.nameProp + ")");
		setsel.change();
	}
});

$("#saveIVsR1").click(function () {
	var fullSetName = $("#setSelectorR1").val();
});

// auto-update set details on select
$(".set-selector").change(function () {
	var fullSetName = $(this).val();
	var pokemonName, setName;
	pokemonName = fullSetName.substring(0, fullSetName.indexOf(" ("));
	setName = fullSetName.substring(fullSetName.indexOf("(") + 1, fullSetName.lastIndexOf(")"));
	var pokemon = pokedex[pokemonName];
	if (pokemon) {
		if (pokemonName in setdex && setName in setdex[pokemonName])
		{
			var found = recentSets.indexOf(fullSetName);
			if (found != -1)
			{
				recentSets.splice(found, 1);
			}
			else if (recentSets.length == 10)
			{
				recentSets.splice(0, 1);
			}
			recentSets.push(fullSetName);
		}
		var pokeObj = $(this).closest(".poke-info");
		if (stickyMoves.getSelectedSide() === pokeObj.prop("id")) {
			stickyMoves.clearStickyMove();
		}
		pokeObj.find(".type1").val(pokemon.t1);
		pokeObj.find(".type2").val(pokemon.t2);
		pokeObj.find(".hp .base").val(pokemon.bs.hp);
		var i;
		for (i = 0; i < STATS.length; i++) {
			pokeObj.find("." + STATS[i] + " .base").val(pokemon.bs[STATS[i]]);
		}
		pokeObj.find(".weight").val(pokemon.w);
		pokeObj.find(".boost").val(0);
		pokeObj.find(".percent-hp").val(100);
		pokeObj.find(".status").val("Healthy");
		$(".status").change();
		var moveObj;
		var abilityObj = pokeObj.find(".ability");
		var itemObj = pokeObj.find(".item");


    //HACK! blame turskain for this
    this.ivsoverride = ~~pokeObj.find(".ivsoverride").val();
				if (this.ivsoverride <= 31) {
				  var ivsoverride = this.ivsoverride
				} else {
					var ivsoverride = 31
        }
    //HACK! level override button
		this.leveloverride = ~~document.getElementById("leveloverride").value;
				if ( (this.leveloverride !== 50 ) || (this.leveloverride !== 55 )) {
				  var leveloverride = this.leveloverride
				} else {
					var leveloverride = 50
        }
    //HACK! following section: ivsoverride replaces the usual "31" being filled in, leveloverride same thing

		if (pokemonName in setdex && setName in setdex[pokemonName]) {
			var set = setdex[pokemonName][setName];
			//pokeObj.find(".level").val(50);
			pokeObj.find(".level").val(this.leveloverride);
			pokeObj.find(".hp .evs").val((set.evs && set.evs.hp !== undefined) ? set.evs.hp : 0);
			// pokeObj.find(".hp .ivs").val((set.ivs && set.ivs.hp !== undefined) ? set.ivs.hp : 31);
			pokeObj.find(".hp .ivs").val((set.ivs && set.ivs.hp !== undefined) ? set.ivs.hp : ivsoverride);
			pokeObj.find(".hp .dvs").val((set.dvs && set.dvs.hp !== undefined) ? set.dvs.hp : 15);
			for (i = 0; i < STATS.length; i++) {
				pokeObj.find("." + STATS[i] + " .evs").val((set.evs && set.evs[STATS[i]] !== undefined) ? set.evs[STATS[i]] : 0);
			//	pokeObj.find("." + STATS[i] + " .ivs").val((set.ivs && set.ivs[STATS[i]] !== undefined) ? set.ivs[STATS[i]] : 31);
				pokeObj.find("." + STATS[i] + " .ivs").val((set.ivs && set.ivs[STATS[i]] !== undefined) ? set.ivs[STATS[i]] : ivsoverride);
				pokeObj.find("." + STATS[i] + " .dvs").val((set.dvs && set.dvs[STATS[i]] !== undefined) ? set.dvs[STATS[i]] : 15);
			}
			setSelectValueIfValid(pokeObj.find(".nature"), set.nature, "Hardy");
			setSelectValueIfValid(abilityObj, pokemon.ab ? pokemon.ab : set.ability, "");
			setSelectValueIfValid(itemObj, set.item, "");
			for (i = 0; i < 4; i++) {
				moveObj = pokeObj.find(".move" + (i + 1) + " select.move-selector");
				setSelectValueIfValid(moveObj, set.moves[i], "(No Move)");
				moveObj.change();
			}
		} else {
			pokeObj.find(".level").val(50);
			pokeObj.find(".hp .evs").val(0);
			pokeObj.find(".hp .ivs").val(31);
			pokeObj.find(".hp .dvs").val(15);
			for (i = 0; i < STATS.length; i++) {
				pokeObj.find("." + STATS[i] + " .evs").val(0);
				pokeObj.find("." + STATS[i] + " .ivs").val(31);
				pokeObj.find("." + STATS[i] + " .dvs").val(15);
			}
			pokeObj.find(".nature").val("Hardy");
			setSelectValueIfValid(abilityObj, pokemon.ab, "");
			itemObj.val("");
			for (i = 0; i < 4; i++) {
				moveObj = pokeObj.find(".move" + (i + 1) + " select.move-selector");
				moveObj.val("(No Move)");
				moveObj.change();
			}
		}
		var ab = gSpeciesInfo[pokemonName]["abilities"];
		if (ab[1] == ABILITY_NONE)
		{
			abilityObj.val(ab[0]);
		}
		var formeObj = $(this).siblings().find(".forme").parent();
		itemObj.prop("disabled", false);
		if (pokemon.formes) {
			showFormes(formeObj, setName, pokemonName, pokemon);
		} else {
			formeObj.hide();
		}
		calcHP(pokeObj);
		calcStats(pokeObj);
		calcEvTotal(pokeObj);
		abilityObj.change();
		itemObj.change();
		if (pokemon.gender === "genderless") {
			pokeObj.find(".gender").parent().hide();
			pokeObj.find(".gender").val("");
		} else pokeObj.find(".gender").parent().show();
	}
	//$(this).text(fullSetName + "<b>HI</b>");
});

function showFormes(formeObj, setName, pokemonName, pokemon) {
	var defaultForme = 0;

	if (setName !== "Blank Set") {
		var set = setdex[pokemonName][setName];
		if (set.item) {
		// Repurpose the previous filtering code to provide the "different default" logic
			if (set.item.indexOf("ite") !== -1 && set.item.indexOf("ite Y") === -1 ||
            pokemonName === "Groudon" && set.item.indexOf("Red Orb") !== -1 ||
            pokemonName === "Kyogre" && set.item.indexOf("Blue Orb") !== -1 ||
            pokemonName === "Meloetta" && set.moves.indexOf("Relic Song") !== -1 ||
            pokemonName === "Rayquaza" && set.moves.indexOf("Dragon Ascent") !== -1 ||
        pokemonName === "Necrozma-Dusk Mane" && set.item.indexOf("Ultranecrozium Z") !== -1 ||
        pokemonName === "Necrozma-Dawn Wings" && set.item.indexOf("Ultranecrozium Z") !== -1) {
				defaultForme = 1;
			} else if (set.item.indexOf("ite Y") !== -1) {
				defaultForme = 2;
			}
		}
	}

	var formeOptions = getSelectOptions(pokemon.formes, false, defaultForme);
	formeObj.children("select").find("option").remove().end().append(formeOptions).change();
	formeObj.show();
}

function setSelectValueIfValid(select, value, fallback) {
	a = select.children('option[value="' + value + '"]');
	select.val(a.length !== 0 ? value : fallback);
}

$(".forme").change(function () {
	var altForme = pokedex[$(this).val()],
		container = $(this).closest(".info-group").siblings(),
		fullSetName = container.find(".select2-chosen").first().text(),
		pokemonName = fullSetName.substring(0, fullSetName.indexOf(" (")),
		setName = fullSetName.substring(fullSetName.indexOf("(") + 1, fullSetName.lastIndexOf(")"));

	$(this).parent().siblings().find(".type1").val(altForme.t1);
	$(this).parent().siblings().find(".type2").val(typeof altForme.t2 != "undefined" ? altForme.t2 : "");
	$(this).parent().siblings().find(".weight").val(altForme.w);
	var STATS_WITH_HP = ["hp", "at", "df", "sa", "sd", "sp"];
	for (var i = 0; i < STATS_WITH_HP.length; i++) {
		var baseStat = container.find("." + STATS_WITH_HP[i]).find(".base");
		baseStat.val(altForme.bs[STATS_WITH_HP[i]]);
		baseStat.keyup();
	}

	if (abilities.indexOf(altForme.ab) > -1) {
		container.find(".ability").val(altForme.ab);
	} else if (setName !== "Blank Set" && abilities.indexOf(setdex[pokemonName][setName].ability) > -1) {
		container.find(".ability").val(setdex[pokemonName][setName].ability);
	} else {
		container.find(".ability").val("");
	}
	container.find(".ability").keyup();

	if ($(this).val().indexOf("-Mega") !== -1 && $(this).val() !== "Rayquaza-Mega") {
		container.find(".item").val("").keyup();
	} else {
		container.find(".item").prop("disabled", false);
	}
});


function Pokemon(pokeInfo) {
	if (typeof pokeInfo === "string") { // in this case, pokeInfo is the id of an individual setOptions value whose moveset's tier matches the selected tier(s)
		this.name = pokeInfo.substring(0, pokeInfo.indexOf(" ("));
		var setName = pokeInfo.substring(pokeInfo.indexOf("(") + 1, pokeInfo.lastIndexOf(")"));
		var pokemon = pokedex[this.name];
		this.type1 = pokemon.t1;
		this.type2 = (pokemon.t2 && typeof pokemon.t2 !== "undefined") ? pokemon.t2 : "";
		this.rawStats = [];
		this.boosts = [];
		this.stats = [];
		this.evs = [];

		var set = setdex[this.name][setName];
		this.level = set.level;
		//HACK! level override for mass calc
		this.leveloverride = ~~document.getElementById("leveloverride").value;
		if (this.level !== this.leveloverride) {
			this.level = this.leveloverride;
		}
		//HACK!
    
		this.HPEVs = (set.evs && typeof set.evs.hp !== "undefined") ? set.evs.hp : 0;
		if (gen < 3) {
			var HPDVs = 15;
			this.maxHP = ~~(((pokemon.bs.hp + HPDVs) * 2 + 63) * this.level / 100) + this.level + 10;
		} else if (pokemon.bs.hp === 1) {
			this.maxHP = 1;
		} else {
//HACK! blame turskain for this, HP IVs for some reason are separate from the rest
		    this.ivsoverridehonk = ~~document.getElementById("ivsoverridehonk").value;
				if (this.ivsoverridehonk <= 31) {
				  var realhpivs = this.ivsoverridehonk;
				} else {
					var realhpivs = 31;
        }
			//var HPIVs = 31;
			var HPIVs = realhpivs;
//HACK! blame ends here
			this.maxHP = ~~((pokemon.bs.hp * 2 + HPIVs + ~~(this.HPEVs / 4)) * this.level / 100) + this.level + 10;
		}
		this.curHP = this.maxHP;
		this.nature = set.nature;
		for (var i = 0; i < STATS.length; i++) {
			var stat = STATS[i];
			this.boosts[stat] = 0;
			this.evs[stat] = (set.evs && typeof set.evs[stat] !== "undefined") ? set.evs[stat] : 0;
			if (gen < 3) {
				var dvs = 15;
				this.rawStats[stat] = ~~(((pokemon.bs[stat] + dvs) * 2 + 63) * this.level / 100) + 5;
			} else {
//HACK! blame turskain for this
		    this.ivsoverridehonk = ~~document.getElementById("ivsoverridehonk").value;
				if (this.ivsoverridehonk <= 31) {
				  this.realivs = this.ivsoverridehonk;
				} else {
					this.realivs = 31;
				}
				var ivs = (set.ivs && typeof set.ivs[stat] !== "undefined") ? set.ivs[stat] : this.realivs;
//HACK! blame ends here
				var natureMods = NATURES[this.nature];
				var nature = natureMods[0] === stat ? 1.1 : natureMods[1] === stat ? 0.9 : 1;
				this.rawStats[stat] = ~~((~~((pokemon.bs[stat] * 2 + ivs + ~~(this.evs[stat] / 4)) * this.level / 100) + 5) * nature);
			}
		}
		this.ability = (set.ability && typeof set.ability !== "undefined") ? set.ability :
			(pokemon.ab && typeof pokemon.ab !== "undefined") ? pokemon.ab : "";
		this.item = (set.item && typeof set.item !== "undefined" && (set.item === "Eviolite" || set.item.indexOf("ite") < 0)) ? set.item : "";
		this.status = "Healthy";
		this.toxicCounter = 0;
		this.moves = [];
		for (var i = 0; i < 4; i++) {
			var moveName = set.moves[i];
			var defaultDetails = moves[moveName] || moves['(No Move)'];
			this.moves.push($.extend({}, defaultDetails, {
				name: (defaultDetails.bp === 0) ? "(No Move)" : moveName,
				bp: defaultDetails.bp,
				type: defaultDetails.type,
				category: defaultDetails.category,
				isCrit: !!defaultDetails.alwaysCrit,
				pp: defaultDetails.pp,
				hits: defaultDetails.isMultiHit ? ((this.ability === "Skill Link" || this.item === "Grip Claw") ? 5 : 3) : defaultDetails.isTwoHit ? 2 : 1,
				usedTimes: defaultDetails.usedTimes
			}));
		}
		this.weight = pokemon.w;
		this.gender = pokemon.gender ? "genderless" : "Male";
	} else {
		var setName = pokeInfo.find("input.set-selector").val();
		if (setName.indexOf("(") === -1) {
			this.name = setName;
		} else {
			var pokemonName = setName.substring(0, setName.indexOf(" ("));
			this.name = (pokedex[pokemonName].formes) ? pokeInfo.find(".forme").val() : pokemonName;
		}

		this.type1 = pokeInfo.find(".type1").val();
		this.type2 = pokeInfo.find(".type2").val();
		this.level = ~~pokeInfo.find(".level").val();
		this.maxHP = ~~pokeInfo.find(".hp .total").val();
		this.curHP = ~~pokeInfo.find(".current-hp").val();
		this.HPEVs = ~~pokeInfo.find(".hp .evs").val();
		this.rawStats = [];
		this.boosts = [];
		this.stats = [];
		this.evs = [];


      

		for (var i = 0; i < STATS.length; i++) {
			this.rawStats[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .total").val();
			this.boosts[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .boost").val();
			this.evs[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .evs").val();
		}
		this.nature = pokeInfo.find(".nature").val();
		this.ability = pokeInfo.find(".ability").val();
		this.item = pokeInfo.find(".item").val();
		this.status = pokeInfo.find(".status").val();
		this.toxicCounter = this.status === 'Badly Poisoned' ? ~~pokeInfo.find(".toxic-counter").val() : 0;
		this.moves = [
			getMoveDetails(pokeInfo.find(".move1"), this.item),
			getMoveDetails(pokeInfo.find(".move2"), this.item),
			getMoveDetails(pokeInfo.find(".move3"), this.item),
			getMoveDetails(pokeInfo.find(".move4"), this.item)
		];
		this.weight = +pokeInfo.find(".weight").val();
		this.gender = pokeInfo.find(".gender").is(":visible") ? pokeInfo.find(".gender").val() : "genderless";
	}

	this.hasType = function (type) {
		return this.type1 === type || this.type2 === type;
	};
}

function getMoveDetails(moveInfo, item) {
	var moveName = moveInfo.find("select.move-selector").val();
	var defaultDetails = moves[moveName];
	var isZMove = gen >= 7 && moveInfo.find("input.move-z").prop("checked");

	// If z-move is checked but there isn't a corresponding z-move, use the original move
	if (isZMove && "zp" in defaultDetails) {
		var zMoveName = getZMoveName(moveName, defaultDetails.type, item);
		return $.extend({}, moves[zMoveName], {
			name: zMoveName,
			bp: moves[zMoveName].bp === 1 ? defaultDetails.zp : moves[zMoveName].bp,
			category: defaultDetails.category,
			isCrit: moveInfo.find(".move-crit").prop("checked"),
			hits: 1
		});
	} else {
		return $.extend({}, defaultDetails, {
			name: moveName,
			bp: ~~moveInfo.find(".move-bp").val(),
			type: moveInfo.find(".move-type").val(),
			category: moveInfo.find(".move-cat").val(),
			isCrit: moveInfo.find(".move-crit").prop("checked"),
			hits: defaultDetails.isMultiHit ? ~~moveInfo.find(".move-hits").val() : defaultDetails.isTwoHit ? 2 : 1,
			usedTimes: defaultDetails.dropsStats ? ~~moveInfo.find(".stat-drops").val() : 1,
			metronomeCount: moveInfo.find(".metronome").is(':visible') ? ~~moveInfo.find(".metronome").val() : 1
		});
	}
}

function getZMoveName(moveName, moveType, item) {
	return moveName.indexOf("Hidden Power") !== -1 ? "Breakneck Blitz" : // Hidden Power will become Breakneck Blitz
		moveName === "Clanging Scales" && item === "Kommonium Z" ? "Clangorous Soulblaze" :
			moveName === "Darkest Lariat" && item === "Incinium Z" ? "Malicious Moonsault" :
				moveName === "Giga Impact" && item === "Snorlium Z" ? "Pulverizing Pancake" :
					moveName === "Moongeist Beam" && item === "Lunalium Z" ? "Menacing Moonraze Maelstrom" :
						moveName === "Photon Geyser" && item === "Ultranecrozium Z" ? "Light That Burns the Sky" :
							moveName === "Play Rough" && item === "Mimikium Z" ? "Let\'s Snuggle Forever" :
								moveName === "Psychic" && item === "Mewnium Z" ? "Genesis Supernova" :
									moveName === "Sparkling Aria" && item === "Primarium Z" ? "Oceanic Operetta" :
										moveName === "Spectral Thief" && item === "Marshadium Z" ? "Soul-Stealing 7-Star Strike" :
											moveName === "Spirit Shackle" && item === "Decidium Z" ? "Sinister Arrow Raid" :
												moveName === "Stone Edge" && item === "Lycanium Z" ? "Splintered Stormshards" :
													moveName === "Sunsteel Strike" && item === "Solganium Z" ? "Searing Sunraze Smash" :
														moveName === "Thunderbolt" && item === "Aloraichium Z" ? "Stoked Sparksurfer" :
															moveName === "Thunderbolt" && item === "Pikashunium Z" ? "10,000,000 Volt Thunderbolt" :
																moveName === "Volt Tackle" && item === "Pikanium Z" ? "Catastropika" :
																	moveName === "Nature\'s Madness" && item === "Tapunium Z" ? "Guardian of Alola" :
																		ZMOVES_TYPING[moveType];
}

function Field() {
	var format = $("input:radio[name='format']:checked").val();
	var isGravity = $("#gravity").prop("checked");
	var isSR = [$("#srL").prop("checked"), $("#srR").prop("checked")];
	var weather;
	var spikes;
	if (gen === 2) {
		spikes = [$("#gscSpikesL").prop("checked") ? 1 : 0, $("#gscSpikesR").prop("checked") ? 1 : 0];
		weather = $("input:radio[name='gscWeather']:checked").val();
	} else {
		weather = $("input:radio[name='weather']:checked").val();
		spikes = [~~$("input:radio[name='spikesL']:checked").val(), ~~$("input:radio[name='spikesR']:checked").val()];
	}
	var terrain = ($("input:radio[name='terrain']:checked").val()) ? $("input:radio[name='terrain']:checked").val() : "";
	var isReflect = [$("#reflectL").prop("checked"), $("#reflectR").prop("checked")];
	var isLightScreen = [$("#lightScreenL").prop("checked"), $("#lightScreenR").prop("checked")];
	var isProtected = [$("#protectL").prop("checked"), $("#protectR").prop("checked")];
	var isSeeded = [$("#leechSeedL").prop("checked"), $("#leechSeedR").prop("checked")];
	var isForesight = [$("#foresightL").prop("checked"), $("#foresightR").prop("checked")];
	var isHelpingHand = [$("#helpingHandR").prop("checked"), $("#helpingHandL").prop("checked")]; // affects attacks against opposite side
	var isFriendGuard = [$("#friendGuardL").prop("checked"), $("#friendGuardR").prop("checked")];
	var isAuroraVeil = [$("#auroraVeilL").prop("checked"), $("#auroraVeilR").prop("checked")];
	var isBattery = [$("#batteryR").prop("checked"), $("#batteryL").prop("checked")];
	var isMinimized = [$("#minimL").prop("checked"), $("#minimR").prop("checked")];

	this.getWeather = function () {
		return weather;
	};
	this.clearWeather = function () {
		weather = "";
	};
	this.getSide = function (i) {
		return new Side(format, terrain, weather, isGravity, isSR[i], spikes[i], isReflect[i], isLightScreen[i], isProtected[i], isSeeded[1 - i], isSeeded[i], isForesight[i], isHelpingHand[i], isFriendGuard[i], isAuroraVeil[i], isBattery[i], isMinimized[i]);
	};
}

function Side(format, terrain, weather, isGravity, isSR, spikes, isReflect, isLightScreen, isProtected, isAttackerSeeded, isDefenderSeeded, isForesight, isHelpingHand, isFriendGuard, isAuroraVeil, isBattery, isMinimized) {
	this.format = format;
	this.terrain = terrain;
	this.weather = weather;
	this.isGravity = isGravity;
	this.isSR = isSR;
	this.spikes = spikes;
	this.isReflect = isReflect;
	this.isLightScreen = isLightScreen;
	this.isProtected = isProtected;
	this.isAttackerSeeded = isAttackerSeeded;
	this.isDefenderSeeded = isDefenderSeeded;
	this.isForesight = isForesight;
	this.isHelpingHand = isHelpingHand;
	this.isFriendGuard = isFriendGuard;
	this.isAuroraVeil = isAuroraVeil;
	this.isBattery = isBattery;
	this.isMinimized = isMinimized;
}

var gen, genWasChanged, notation, pokedex, setdex, typeChart, moves, abilities, items, STATS, calcHP, calcStat;
var recentSets, moveCalcHidden, moveCalcResults, searchHistory, spreadsheetColors, settingsHidden, spreadsheetFont, openLevel;

$(".gen").change(function () {
	gen = ~~$(this).val();
	genWasChanged = true;
	recentSets = [];
	moveCalcHidden = false;
	spreadsheetColors = false;
	spreadsheetFont = 12;
	switch (gen) {
	case 1:
		pokedex = POKEDEX_RBY;
		setdex = SETDEX_RBY;
		typeChart = TYPE_CHART_RBY;
		moves = MOVES_RBY;
		items = [];
		abilities = [];
		STATS = STATS_RBY;
		calcHP = CALC_HP_RBY;
		calcStat = CALC_STAT_RBY;
		break;
	case 2:
		pokedex = POKEDEX_GSC;
		setdex = SETDEX_GSC;
		typeChart = TYPE_CHART_GSC;
		moves = MOVES_GSC;
		items = ITEMS_GSC;
		abilities = [];
		STATS = STATS_GSC;
		calcHP = CALC_HP_RBY;
		calcStat = CALC_STAT_RBY;
		break;
	case 3:
		pokedex = POKEDEX_ADV;
		setdex = SETDEX_ADV;
		typeChart = TYPE_CHART_GSC;
		moves = MOVES_ADV;
		items = ITEMS_ADV;
		abilities = ABILITIES_ADV;
		STATS = STATS_GSC;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		break;
	case 4:
		pokedex = POKEDEX_DPP;
		setdex = SETDEX_DPP;
		typeChart = TYPE_CHART_GSC;
		moves = MOVES_DPP;
		items = ITEMS_DPP;
		abilities = ABILITIES_DPP;
		STATS = STATS_GSC;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		break;
	case 5:
		pokedex = POKEDEX_BW;
		setdex = SETDEX_BW;
		typeChart = TYPE_CHART_GSC;
		moves = MOVES_BW;
		items = ITEMS_BW;
		abilities = ABILITIES_BW;
		STATS = STATS_GSC;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		break;
	case 6:
		pokedex = POKEDEX_XY;
		setdex = SETDEX_XY;
		typeChart = TYPE_CHART_XY;
		moves = MOVES_XY;
		items = ITEMS_XY;
		abilities = ABILITIES_XY;
		STATS = STATS_GSC;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		break;
	default:
		pokedex = POKEDEX_SM;
		setdex = SETDEX_SM;
		typeChart = TYPE_CHART_XY;
		moves = MOVES_SM;
		items = ITEMS_SM;
		abilities = ABILITIES_SM;
		STATS = STATS_GSC;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
	}
	clearField();
	$("#importedSets").prop("checked", false);
	loadDefaultLists();
	$(".gen-specific.g" + gen).show();
	$(".gen-specific").not(".g" + gen).hide();
	var typeOptions = getSelectOptions(Object.keys(typeChart));
	$("select.type1, select.move-type").find("option").remove().end().append(typeOptions);
	$("select.type2").find("option").remove().end().append("<option value=\"\">(none)</option>" + typeOptions);
	var moveOptions = getSelectOptions(Object.keys(moves), true);
	$("select.move-selector").find("option").remove().end().append(moveOptions);
	var abilityOptions = getSelectOptions(abilities, true);
	$("select.ability").find("option").remove().end().append("<option value=\"\">(other)</option>" + abilityOptions);
	var itemOptions = getSelectOptions(items, true);
	$("select.item").find("option").remove().end().append("<option value=\"\">(none)</option>" + itemOptions);
	var typeHintList = Object.keys(typeChart);
	typeHintList[0] = "No hint";
	var typeHintOptions = getSelectOptions(typeHintList);
	$("select.type-hint").find("option").remove().end().append("<option value=\"\">(N/A)</option>" + typeHintOptions);
	
	searchHistory="";

	setO = getSetOptions();
	for (i = 0; i < 4; i++)
	{
		if (setO[i].set)
		{
			$(".set-selector").val(setO[i].id);
			$(".set-selector").change();
			break;
		}
	}
});

function generateTable(listOfRows) {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < listOfRows.length; i++) {
	var arr = listOfRows[i];
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < arr.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = jQuery.parseHTML(arr[j]);
      cell.appendChild(cellText[0]);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  tbl.setAttribute("border", "2");
  // appends <table> into <body>
  return tbl;
  // sets the border attribute of tbl to '2'
}

$("#settings-toggle").change(function () {
	settingsHidden = this.checked;
	if (this.checked)
	{
		$("#settings").hide(100, function () {});
	}
	else
	{
		$("#settings").show(100, function () {});
	}
});

$("#hide-move-calc").change(function () {
	moveCalcHidden = this.checked;
	if (this.checked)
	{
		$(".move-result-group").hide(100, function () {});
		$("#p2-data").hide(100, function () {});
		//$(".spreadsheet-sorters").show(100, function () {});
		$("#p1").hide(100, function () {});
		$("#p2").width("690px");
		$("#p2").css("top", 150-parseInt($("#spaceAdjuster3").val()) + "px");

		$("#results1").hide(100, function () {});
		$("#results2").hide(100, function () {});
		$("#field-container").css("left", "850px");
	}
	else
	{
		if (moveCalcResults)
		{
			$("#results1").hide(100, function () {});
			$("#results2").show(100, function () {});
		}
		else
		{
			$("#results1").show(100, function () {});
			$("#results2").hide(100, function () {});
		}
		$(".move-result-group").show(100, function () {});
		$("#p2-data").show(100, function () {});
		//$(".spreadsheet-sorters").hide(100, function () {});
		$("#p1").show(100, function () {});
		$("#p2").width((parseInt($("#spaceAdjuster2").val())/2+300) + "px");
		$("#p2").css("top", "-40px");
		$("#field-container").css("left", (parseInt($("#spaceAdjuster2").val())+785) + "px");
	}
});

$("#move-calc-results").change(function () {
	var a = this.checked;
	localStorage.setItem("move-calc-results", a);
	moveCalcResults = this.checked;
	if (moveCalcHidden)
		return;
	if (this.checked)
	{
		$("#results1").hide(100, function () {});
		$("#results2").show(100, function () {});
	}
	else
	{
		$("#results1").show(100, function () {});
		$("#results2").hide(100, function () {});
	}
});

$("#spreadsheet-colors").change(function () {
	var a = this.checked;
	localStorage.setItem("spreadsheet-colors", a);
	spreadsheetColors = this.checked;
});

$("#open-level").change(function () {
	var a = this.checked;
	localStorage.setItem("open-level", a);
	openLevel = this.checked;
	$("#leveloverride").val(openLevel ? 100 : 50);
	$("#leveloverride").change();
});

$("#spaceAdjuster1").change(function () {
	var a = $(this).val();
	localStorage.setItem("spaceAdjuster1", a);
	$("#rightCalc").css("left", (parseInt(a) - 250)+"px");
});

$("#spreadsheetAdjusterHor").change(function () {
	var a = $(this).val();
	localStorage.setItem("spreadsheetAdjusterHor", a);
	$("#spreadsheet-display").css("left", parseInt(a)+"px");
});

$("#spreadsheetAdjusterVer").change(function () {
	var a = $(this).val();
	localStorage.setItem("spreadsheetAdjusterVer", a);
	$("#spreadsheet-display").css("top", parseInt(a)+"px");
});

$("#fontAdjuster1").change(function () {
	var a = $(this).val();
	localStorage.setItem("fontAdjuster1", a);
	$("#results1").css("font-size", a+"px");
	$("#results2").css("font-size", a+"px");
});

$("#fontAdjuster2").change(function () {
	var a = $(this).val();
	localStorage.setItem("fontAdjuster2", a);
	spreadsheetFont = a;
});

$("#spaceAdjuster2").change(function () {
	var a = $(this).val();
	localStorage.setItem("spaceAdjuster2", a);
	$("#p1").css("width", (parseInt(a)/2+300) + "px");
	if (moveCalcHidden)
	{
		$("#p2").css("width", "690px");
		$("#field-container").css("left", "850px");
	}
	else
	{
		$("#p2").css("width", (parseInt(a)/2+300) + "px");
		$("#field-container").css("left", (parseInt(a)+785) + "px");
	}
});

$("#spaceAdjuster3").change(function () {
	var a = $(this).val();
	localStorage.setItem("spaceAdjuster3", a);
	if (moveCalcHidden)
	{
		$("#p2").css("top", 150-parseInt(a) + "px");
	}
	else
	{
		//$("#p2").css("top", parseInt(a) + "px");
	}
});

$(".notation").change(function () {
	notation = $(this).val();
});

function clearField() {
	$("#doubles-format").prop("checked", false);
	$("#clear").prop("checked", true);
	$("#gscClear").prop("checked", true);
	$("#gravity").prop("checked", false);
	$("#srL").prop("checked", false);
	$("#srR").prop("checked", false);
	$("#spikesL0").prop("checked", true);
	$("#spikesR0").prop("checked", true);
	$("#gscSpikesL").prop("checked", false);
	$("#gscSpikesR").prop("checked", false);
	$("#reflectL").prop("checked", false);
	$("#reflectR").prop("checked", false);
	$("#lightScreenL").prop("checked", false);
	$("#lightScreenR").prop("checked", false);
	$("#protectL").prop("checked", false);
	$("#protectR").prop("checked", false);
	$("#leechSeedL").prop("checked", false);
	$("#leechSeedR").prop("checked", false);
	$("#foresightL").prop("checked", false);
	$("#foresightR").prop("checked", false);
	$("#helpingHandL").prop("checked", false);
	$("#helpingHandR").prop("checked", false);
	$("#friendGuardL").prop("checked", false);
	$("#friendGuardR").prop("checked", false);
	$("#auroraVeilL").prop("checked", false);
	$("#auroraVeilR").prop("checked", false);
	$("#minimizeL").prop("checked", false);
	$("#minimizeR").prop("checked", false);
}

function fullSetOption(pokeName, setName)
{
	var res = {
		pokemon: pokeName,
		set: setName,
		text: setName,
		id: pokeName + " (" + setName + ")",
		isCommon: setdex[pokeName][setName]["isCommon"],
		afterForty: setdex[pokeName][setName]["afterForty"],
		isCustom: setdex[pokeName][setName].isCustomSet,
		nickname: setdex[pokeName][setName].nickname || "",
		moves: setdex[pokeName][setName].moves || ["(No Move)", "(No Move)", "(No Move)", "(No Move)"],
		item: setdex[pokeName][setName].item || "None"
	};
	return res;
}

var legendPoke1 = ["Articuno", "Zapdos", "Moltres", "Raikou", "Entei", "Suicune"];
var legendPoke2 = ["Registeel", "Regice", "Regirock", "Latios", "Latias"];
var legendPoke3 = ["Tyranitar", "Dragonite"];
var legendPokeAll = legendPoke1.concat(legendPoke2, legendPoke3);


function isPokeInRound(pokemon, set, round)
{
	if (round == 0)
	{
		return true;
	}
	var monNum = parseInt(set.substring(set.indexOf("[")+1, set.indexOf("]")))-1;
	if (openLevel)
	{
		return monNum >= factoryMonsLvl100[Math.min(round, 8)-1][0] && monNum <= factoryMonsLvl100[Math.min(round, 8)-1][1];
	}
	return monNum >= factoryMonsLvl50[Math.min(round, 8)-1][0] && monNum <= factoryMonsLvl50[Math.min(round, 8)-1][1] && monNum != 126;
	/*round = parseInt(round);
	if (round == 0)
		return true;
	var setNum = set[set.indexOf("[")-2];
	var setCount = Object.keys(setdex[pokemon]).length;
	if (legendPokeAll.indexOf(pokemon) != -1)
	{
		if (legendPoke1.indexOf(pokemon) != -1 && (setNum == "5" || setNum == "6" || round < 8))
			return false;
		if (legendPoke2.indexOf(pokemon) != -1 && round < 8)
			return false;
		if (legendPoke3.indexOf(pokemon) != -1)
			return false;
	}

	switch (round)
	{
		case 1:
			return setCount <= 2 && setNum == "1";
		case 2:
			return setCount <= 2 && setNum == "1";
		case 3:
			return setCount == 2 && setNum == "2";
		case 4:
			return setCount > 2 && setNum == "1";
		case 5:
			return setCount > 2 && setNum == "2";
		case 6:
			return setCount > 2 && setNum == "3";
		case 7:
			return setCount > 2 && setNum == "4";
		default:
			return setCount > 2 && setNum != "s";
	}*/
}

function getPhraseCount(pokemon, set, phraseHint)
{		
	var phr1 = 0;
	if (phraseHint != 0)
	{			
		for (i=0; i < 4; i++)
		{
			if (PHRASE_CATEGORIES[phraseHint-1].indexOf(setdex[pokemon][set].moves[i]) != -1)
			{
				phr1 += 1;
			}
		}
	}
	/*else
	{			
		for (i=0; i < 4; i++)
		{
			if (PHRASE_CATEGORIES[7].indexOf(setdex[pokemon][set].moves[i]) == -1)
			{
				phr1 += 1;
			}
		}
	}*/
	return phr1;
}

function getSetOptions(sets) {
	var setsHolder = sets;
	if (setsHolder === undefined) {
		setsHolder = pokedex;
	}
	var pokeNames = Object.keys(setsHolder);
	pokeNames.sort();
	var setOptions = [];
	var idNum = 0;
	if (!moveCalcHidden)
	{
		for (var i = recentSets.length - 1; i >= 0; i--) {
			var fullSetName = recentSets[i];
			pokeName = fullSetName.substring(0, fullSetName.indexOf(" ("));
			setName = fullSetName.substring(fullSetName.indexOf("(") + 1, fullSetName.lastIndexOf(")"));
			setOptions.push(fullSetOption(pokeName, setName));
		}
		for (var i = 0; i < pokeNames.length; i++) {
			var pokeName = pokeNames[i];
			if (pokeName in setdex) {
				var setNames = Object.keys(setdex[pokeName]);
				for (var j = 0; j < setNames.length; j++) {
					var setName = setNames[j];
					setOptions.push(fullSetOption(pokeName, setName));
				}
			}
		}
	}
	else 
	{
		var typeHint = $("select.type-hint option:selected").val();
		var roundHint = $("#hint1").val();
		var phraseHint = $("#hint3").val();
		var counts = {};
		for (var i = 0; i < pokeNames.length; i++) {
			var pokeName = pokeNames[i];
			if (pokeName in setdex) {
				var setNames = Object.keys(setdex[pokeName]);
				for (var j = 0; j < setNames.length; j++) {
					var setName = setNames[j];
					if (isPokeInRound(pokeName, setName, roundHint))
					{
						setOptions.push(fullSetOption(pokeName, setName));
					}
				}
			}
		}
		/*trying to figure out num of sets
		for (let i = 0; i < setOptions.length; i++)
		{
			for (let j = i+1; j < setOptions.length; j++)
			{
				for (let k = j+1; k < setOptions.length; k++)
				{
				}
			}
		}*/
		setOptions.sort(function (a, b) {

			var p1 = (pokedex[a.pokemon].t1 == typeHint) || (pokedex[a.pokemon].t2 == typeHint);
			var p2 = (pokedex[b.pokemon].t1 == typeHint) || (pokedex[b.pokemon].t2 == typeHint);
			if (p1 && !p2)
				return -1;
			if (!p1 && p2)
				return 1;
			p1 = getPhraseCount(a.pokemon, a.set, phraseHint);
			p2 = getPhraseCount(b.pokemon, b.set, phraseHint);
			if (p1 > p2)
				return -1;
			if (p1 < p2)
				return 1;
			return 0;
		});
	}

	return setOptions;
}

function getSelectOptions(arr, sort) {
	if (sort) {
		arr.sort();
	}
	var r = '';
	for (var i = 0; i < arr.length; i++) {
		r += '<option value="' + arr[i] + '">' + arr[i] + '</option>';
	}
	return r;
}
var stickyMoves = (function () {
	var lastClicked = 'resultMoveL1';
	$(".result-move").click(function () {
		if (this.id === lastClicked) {
			$(this).toggleClass("locked-move");
		} else {
			$('.locked-move').removeClass('locked-move');
		}
		lastClicked = this.id;
	});

	return {
		clearStickyMove: function () {
			lastClicked = null;
			$('.locked-move').removeClass('locked-move');
		},
		setSelectedMove: function (slot) {
			lastClicked = slot;
		},
		getSelectedSide: function () {
			if (lastClicked) {
				if (lastClicked.indexOf('resultMoveL') !== -1) {
					return 'p1';
				} else if (lastClicked.indexOf('resultMoveR') !== -1) {
					return 'p2';
				}
			}
			return null;
		}
	};
})();

function isGrounded(pokeInfo) {
	return $("#gravity").prop("checked") || (
		pokeInfo.find(".type1").val() !== "Flying" &&
        pokeInfo.find(".type2").val() !== "Flying" &&
        pokeInfo.find(".ability").val() !== "Levitate" &&
        pokeInfo.find(".item").val() !== "Air Balloon"
	);
}

function getTerrainEffects() {
	var className = $(this).prop("className");
	className = className.substring(0, className.indexOf(" "));
	switch (className) {
	case "type1":
	case "type2":
	case "ability":
	case "item":
		var id = $(this).closest(".poke-info").prop("id");
		var terrainValue = $("input:checkbox[name='terrain']:checked").val();
		if (terrainValue === "Electric") {
			$("#" + id).find("[value='Asleep']").prop("disabled", isGrounded($("#" + id)));
		} else if (terrainValue === "Misty") {
			$("#" + id).find(".status").prop("disabled", isGrounded($("#" + id)));
		}
		break;
	default:
		$("input:checkbox[name='terrain']").not(this).prop("checked", false);
		if ($(this).prop("checked") && $(this).val() === "Electric") {
			$("#p1").find("[value='Asleep']").prop("disabled", isGrounded($("#p1")));
			$("#p2").find("[value='Asleep']").prop("disabled", isGrounded($("#p2")));
		} else if ($(this).prop("checked") && $(this).val() === "Misty") {
			$("#p1").find(".status").prop("disabled", isGrounded($("#p1")));
			$("#p2").find(".status").prop("disabled", isGrounded($("#p2")));
		} else {
			$("#p1").find("[value='Asleep']").prop("disabled", false);
			$("#p1").find(".status").prop("disabled", false);
			$("#p2").find("[value='Asleep']").prop("disabled", false);
			$("#p2").find(".status").prop("disabled", false);
		}
		break;
	}
}

function pad(pad, str) {
	if (str.length > 2 * pad.length - 1)
	{
		a = str.indexOf(" ")
		while (a != -1)
		{
			str = str.substring(0, a) + str.substring(a+1, str.length);
			console.log(str);
			a = str.indexOf(" ");
		}
	}
	if (typeof str === 'undefined') 
		return pad;
	return (pad + str + pad).substring(str.length / 2 + 1, str.length / 2 + 2 * pad.length);
}

var phraseColors = [
	"#000000",
	"#00BB00",
	"#0000FF",
	"#BBBB00",
	"#FF0000",
	"#009999",
	"#DD00DD",
	"#FF7700",
	"#999999",
]

function getPhrase(move)
{
	for (j=1; j < 9; j++)
	{
		if (PHRASE_CATEGORIES[j-1].indexOf(move) != -1)
			return j;
	}
	return 0;
}

function setToSpreadsheetDisplay(object)
{
	if (moveCalcHidden)
	{
		if (object.set)
		{
			var phraseHint = $("#hint3").val();
			var padding = Array(8).join('-');
			var eles = [object.set.substring(0, object.set.indexOf("[")-1),
						object.item, object.moves[0], object.moves[1], object.moves[2], object.moves[3]];
			var styleCode = "";
			for (i=0; i < 4; i++)
			{
				var movePhrase = getPhrase(object.moves[i]);
				styleCode = `${styleCode} ${movePhrase}`;
				if (phraseHint != 0 && phraseHint == movePhrase)
				{
					eles[i+2] = `<u>${eles[i+2]}</u>`;
				}
				if (spreadsheetColors)
				{
					eles[i+2] = `<span title = ${movePhrase} style="color:${phraseColors[movePhrase]}">${eles[i+2]}</span>`;
				}
				else
				{
					eles[i+2] = `<span title = ${movePhrase}>${eles[i+2]}</span>`;
				}
			}
			return eles;
			//return pad(padding, object.set.substring(0, object.set.indexOf("[")-1), false) + "|"; 
			//`|<b>${object.item.padEnd(120, " ")}</b>|${object.moves[0].padEnd(12, " ")}|${object.moves[1].padEnd(12, " ")}` +
			//`|${object.moves[2].padEnd(12, " ")}|${object.moves[3].padEnd(12, " ")}`);
		}
	}
	else if (object.set)
	{
		return [];//["&nbsp;&nbsp;&nbsp;" + object.set];
	}
	return [];//["<b>" + object.text + "</b>"];
}

function evSlashFormat(evs)
{
	return `${evs['hp']}/${evs['at']}/${evs['df']}/${evs['sa']}/${evs['sd']}/${evs['sp']}`;
}

function moveSlashFormat(moves)
{
	return `${moves[0]}/${moves[1]}/${moves[2]}/${moves[3]}`;
}

function setToOptionDisplay(object)
{
	if (moveCalcHidden)
	{
		if (object.set)
		{
			var phraseHint = $("#hint3").val();
			var padding = Array(8).join('-');
			var eles = [object.set.substring(0, object.set.indexOf("[")-1),
						object.item, object.moves[0], object.moves[1], object.moves[2], object.moves[3]];

			var styleCode = "";
			var evs = setdex[object.pokemon][object.set]["evs"];
			eles[0] = `<span title = "${evSlashFormat(evs)}"><b>` + eles[0]+"</b></span>"
			for (i=0; i < 4; i++)
			{
				var movePhrase = getPhrase(object.moves[i]);
				styleCode = `${styleCode} ${movePhrase}`;
				if (phraseHint != 0 && phraseHint == movePhrase)
				{
					eles[i+2] = `<u>${eles[i+2]}</u>`;
				}
				if (spreadsheetColors)
				{
					eles[i+2] = `<span title = ${movePhrase}><span style="color:${phraseColors[movePhrase]}">${eles[i+2]}</span></span>`;
				}
				else
				{
					eles[i+2] = `<span title = ${movePhrase}>${eles[i+2]}</span>`;
				}
			}
			for (i=0; i < eles.length; i++)
			{
				//eles[i] = pad(padding, eles[i], false);
				eles[i] = '<td style="border:1px solid black;">' + eles[i] + '</td>';
			}
			var res = '<table class="fixed" style="text-align:center;padding:0px;border-spacing:0px;"><col width="110px" /> <col width="120px" /> <col width="120px" /> <col width="120px" /> <col width="120px" /> <col width="120px" />';
			res = res +`<tr>`;
			res = res+eles.join("")+'</tr></table>';
 			//`<span title = '${styleCode}'>${eles.join("|")}</span>`;
			return res;
			//return pad(padding, object.set.substring(0, object.set.indexOf("[")-1), false) + "|"; 
			//`|<b>${object.item.padEnd(120, " ")}</b>|${object.moves[0].padEnd(12, " ")}|${object.moves[1].padEnd(12, " ")}` +
			//`|${object.moves[2].padEnd(12, " ")}|${object.moves[3].padEnd(12, " ")}`);
		}
	}
	else if (object.set)
	{	
		var evs = setdex[object.pokemon][object.set]["evs"];
		var resu = `<span title="${moveSlashFormat(object.moves)}/${evSlashFormat(evs)}">`+object.text+'</span>';
		var item = setdex[object.pokemon][object.set]["item"];
		if (item_png_path[item])
			resu = resu + '<img src="graphics/items/icons/'+item_png_path[item]+'" />';
				var abs = gSpeciesInfo[object.pokemon]["abilities"];
		if (abs.length  < 2 || abs[1] == "None")
		{
			resu = resu + abs[0];
		}
		return resu;
	}
	return false;//("<b>" + object.text + "</b>");
}

function loadDefaultLists() {
	$(".set-selector").select2({
		formatResult: function (object) {
			return setToOptionDisplay(object);
		},
		formatSelection: function (object) {
			var resu = object.text;
			var item = setdex[object.pokemon][object.set]["item"];
			if (item_png_path[item])
				resu = resu + '<img src="graphics/items/icons/'+item_png_path[item]+'" />';
			var abs = gSpeciesInfo[object.pokemon]["abilities"];
			if (abs.length  < 2 || abs[1] == "None")
			{
				resu = resu + abs[0];
			}
			return resu;
		},
		query: function (query) {
			var pageSize = 30;
			var results = _.filter(getSetOptions(), function (option) {
				var pokeName = option.pokemon.toUpperCase();
				return !query.term || query.term.toUpperCase().split(" ").every(function (term) {
					return pokeName.indexOf(term) === 0 || pokeName.indexOf("-" + term) >= 0 || pokeName.indexOf(" " + term) >= 0;
				});
			});
			if (moveCalcHidden)
			{
				$("#spreadsheet-display").empty();
				var r = []
				for (var i = 0; i < Math.min(results.length, 10); i++)
				{
					r.push(setToSpreadsheetDisplay(results[i]));
				}
				$("#spreadsheet-display").append(generateTable(r));
			}
			query.callback({
				results: results.slice((query.page - 1) * pageSize, query.page * pageSize),
				more: results.length >= query.page * pageSize
			});
		},
		initSelection: function (element, callback) {
			var data = getSetOptions()[gen < 3 ? 3 : 1];
			callback(data);
		}
	});
	
   // this part is responsible for setting last search when select2 is opening
	$('.set-selector').on('select2-open', function () {
		var elems = $(".select2-results");
		elems.removeClass("select2-results-size-10 select2-results-size-11 select2-results-size-12 select2-results-size-13 select2-results-size-14 "+
			"select2-results-size-15 select2-results-size-16 select2-results-size-17 select2-results-size-18 select2-results-size-19")
		if (moveCalcHidden)
		{
			elems.addClass("select2-results-size-" + spreadsheetFont);
		}
		if (moveCalcHidden && searchHistory) {
			var xin = $('.select2-search').find('input');
			xin.val(searchHistory).trigger("paste");
			xin[xin.length-1].setSelectionRange(0, searchHistory.length);
		}
	});
	$('.select2-search').on('keyup', function () {
		if (moveCalcHidden)	searchHistory = $(this).find('input').val();
	});
}


/*
.select2-selection__rendered {
    //line-height: 31px !important;
}
.select2-container .select2-selection--single {
    //height: 35px !important;
}
.select2-selection__arrow {
    //height: 34px !important;
}*/


function bothPokemon(selector) {
	return "#p1 " + selector + ", #p2 " + selector;
}

function checkPressure() {
    for (var j = 1; j < 3; j++) {
        for (var i = 1; i < 5; i++) {
            var t = $("#p" + (3-j) ).find(".move" + i + " .move-pp");
            var isEnemyPressure = $("#p" + j + " .ability").val() === "Pressure";
            t.attr("max",  t.val());
        t.attr("min",  isEnemyPressure ? (t.val() % 2 * (-1)) : 0);
            t.attr("step", isEnemyPressure ? 2 : 1);
        }
    }
}

function loadCustomList(id) {
	var customSetsOptions = getSetOptions(customSets);
	$("#" + id + " .set-selector").select2({
		formatResult: function (set) {
			return (set.nickname ? set.pokemon + " (" + set.nickname + ")" : set.id);
		},
		query: function (query) {
			var pageSize = 20;
			var results = _.filter(getSetOptions(), function (option) {
				if (option.isCustom) {
					return (option.nickname ? option.pokemon + " (" + option.nickname + ")" : option.id);
				}
			});
			query.callback({
				results: results,
				more: results.length >= query.page * pageSize
			});
		},
		initSelection: function (element, callback) {
			var data = "";
			callback(data);
		}
	});
}

function loadFromCache()
{
	$("#spaceAdjuster1").val(localStorage.getItem("spaceAdjuster1"));
	$("#spaceAdjuster1").change();
	$("#spaceAdjuster2").val(localStorage.getItem("spaceAdjuster2"));
	$("#spaceAdjuster2").change();
	$("#spaceAdjuster3").val(localStorage.getItem("spaceAdjuster3"));
	$("#spaceAdjuster3").change();
	$("#fontAdjuster1").val(localStorage.getItem("fontAdjuster1"));
	$("#fontAdjuster1").change();
	$("#fontAdjuster2").val(localStorage.getItem("fontAdjuster2"));
	$("#fontAdjuster2").change();
	$("#spreadsheetAdjusterHor").val(localStorage.getItem("spreadsheetAdjusterHor"));
	$("#spreadsheetAdjusterHor").change();
	$("#spreadsheetAdjusterVer").val(localStorage.getItem("spreadsheetAdjusterVer"));
	$("#spreadsheetAdjusterVer").change();
	$("#move-calc-results").prop("checked", localStorage.getItem("move-calc-results") == 'true');
	$("#move-calc-results").change();
	$("#spreadsheet-colors").prop("checked", localStorage.getItem("spreadsheet-colors") == 'true');
	$("#spreadsheet-colors").change();
	
	$("#open-level").prop("checked", localStorage.getItem("open-level") == 'true');
	$("#open-level").change();

}

$(document).ready(function () {
	$("#gen3").prop("checked", true);
	$("#gen3").change();
	$("#percentage").prop("checked", true);
	$("#percentage").change();
	loadFromCache();
	loadDefaultLists();
	$(".move-selector").select2({
		dropdownAutoWidth: true,
		matcher: function (term, text) {
			// 2nd condition is for Hidden Power
			return text.toUpperCase().indexOf(term.toUpperCase()) === 0 || text.toUpperCase().indexOf(" " + term.toUpperCase()) >= 0;
		}
	});
	setO = getSetOptions();
	for (var i = 0; i < 4; i++)
	{
		if (setO[i].set)
		{
			$(".set-selector").val(setO[i].id);
			$(".set-selector").change();
			break;
		}
	}

    $(".terrain-trigger").bind("change keyup", getTerrainEffects);
});
