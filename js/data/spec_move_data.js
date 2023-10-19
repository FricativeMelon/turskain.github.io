const var FLAG_MAKES_CONTACT        = (1 << 0);
const var FLAG_PROTECT_AFFECTED     = (1 << 1);
const var FLAG_MAGIC_COAT_AFFECTED  = (1 << 2);
const var FLAG_SNATCH_AFFECTED      = (1 << 3);
const var FLAG_MIRROR_MOVE_AFFECTED = (1 << 4);
const var FLAG_KINGS_ROCK_AFFECTED  = (1 << 5);

const var MOVE_TARGET_SELECTED            0;
const var MOVE_TARGET_DEPENDS             (1 << 0);
const var MOVE_TARGET_USER_OR_SELECTED    (1 << 1);
const var MOVE_TARGET_RANDOM              (1 << 2);
const var MOVE_TARGET_BOTH                (1 << 3);
const var MOVE_TARGET_USER                (1 << 4);
const var MOVE_TARGET_FOES_AND_ALLY       (1 << 5);
const var MOVE_TARGET_OPPONENTS_FIELD     (1 << 6);

const var EFFECT_HIT = 0;
const var EFFECT_SLEEP = 1;
const var EFFECT_POISON_HIT = 2;
const var EFFECT_ABSORB = 3;
const var EFFECT_BURN_HIT = 4;
const var EFFECT_FREEZE_HIT = 5;
const var EFFECT_PARALYZE_HIT = 6;
const var EFFECT_EXPLOSION = 7;
const var EFFECT_DREAM_EATER = 8;
const var EFFECT_MIRROR_MOVE = 9;
const var EFFECT_ATTACK_UP = 10;
const var EFFECT_DEFENSE_UP = 11;
const var EFFECT_SPEED_UP = 12;
const var EFFECT_SPECIAL_ATTACK_UP = 13;
const var EFFECT_SPECIAL_DEFENSE_UP = 14;
const var EFFECT_ACCURACY_UP = 15;
const var EFFECT_EVASION_UP = 16;
const var EFFECT_ALWAYS_HIT = 17;
const var EFFECT_ATTACK_DOWN = 18;
const var EFFECT_DEFENSE_DOWN = 19;
const var EFFECT_SPEED_DOWN = 20;
const var EFFECT_SPECIAL_ATTACK_DOWN 21  // = unused;
const var EFFECT_SPECIAL_DEFENSE_DOWN 22  // = unused;
const var EFFECT_ACCURACY_DOWN = 23;
const var EFFECT_EVASION_DOWN = 24;
const var EFFECT_HAZE = 25;
const var EFFECT_BIDE = 26;
const var EFFECT_RAMPAGE = 27;
const var EFFECT_ROAR = 28;
const var EFFECT_MULTI_HIT = 29;
const var EFFECT_CONVERSION = 30;
const var EFFECT_FLINCH_HIT = 31;
const var EFFECT_RESTORE_HP = 32;
const var EFFECT_TOXIC = 33;
const var EFFECT_PAY_DAY = 34;
const var EFFECT_LIGHT_SCREEN = 35;
const var EFFECT_TRI_ATTACK = 36;
const var EFFECT_REST = 37;
const var EFFECT_OHKO = 38;
const var EFFECT_RAZOR_WIND = 39;
const var EFFECT_SUPER_FANG = 40;
const var EFFECT_DRAGON_RAGE = 41;
const var EFFECT_TRAP = 42;
const var EFFECT_HIGH_CRITICAL = 43;
const var EFFECT_DOUBLE_HIT = 44;
const var EFFECT_RECOIL_IF_MISS = 45;
const var EFFECT_MIST = 46;
const var EFFECT_FOCUS_ENERGY = 47;
const var EFFECT_RECOIL = 48;
const var EFFECT_CONFUSE = 49;
const var EFFECT_ATTACK_UP_2 = 50;
const var EFFECT_DEFENSE_UP_2 = 51;
const var EFFECT_SPEED_UP_2 = 52;
const var EFFECT_SPECIAL_ATTACK_UP_2 = 53;
const var EFFECT_SPECIAL_DEFENSE_UP_2 = 54;
const var EFFECT_ACCURACY_UP_2 = 55;
const var EFFECT_EVASION_UP_2 = 56;
const var EFFECT_TRANSFORM = 57;
const var EFFECT_ATTACK_DOWN_2 = 58;
const var EFFECT_DEFENSE_DOWN_2 = 59;
const var EFFECT_SPEED_DOWN_2 = 60;
const var EFFECT_SPECIAL_ATTACK_DOWN_2 = 61;
const var EFFECT_SPECIAL_DEFENSE_DOWN_2 = 62;
const var EFFECT_ACCURACY_DOWN_2 = 63;
const var EFFECT_EVASION_DOWN_2 = 64;
const var EFFECT_REFLECT = 65;
const var EFFECT_POISON = 66;
const var EFFECT_PARALYZE = 67;
const var EFFECT_ATTACK_DOWN_HIT = 68;
const var EFFECT_DEFENSE_DOWN_HIT = 69;
const var EFFECT_SPEED_DOWN_HIT = 70;
const var EFFECT_SPECIAL_ATTACK_DOWN_HIT = 71;
const var EFFECT_SPECIAL_DEFENSE_DOWN_HIT = 72;
const var EFFECT_ACCURACY_DOWN_HIT = 73;
const var EFFECT_EVASION_DOWN_HIT = 74;
const var EFFECT_SKY_ATTACK = 75;
const var EFFECT_CONFUSE_HIT = 76;
const var EFFECT_TWINEEDLE = 77;
const var EFFECT_VITAL_THROW = 78;
const var EFFECT_SUBSTITUTE = 79;
const var EFFECT_RECHARGE = 80;
const var EFFECT_RAGE = 81;
const var EFFECT_MIMIC = 82;
const var EFFECT_METRONOME = 83;
const var EFFECT_LEECH_SEED = 84;
const var EFFECT_SPLASH = 85;
const var EFFECT_DISABLE = 86;
const var EFFECT_LEVEL_DAMAGE = 87;
const var EFFECT_PSYWAVE = 88;
const var EFFECT_COUNTER = 89;
const var EFFECT_ENCORE = 90;
const var EFFECT_PAIN_SPLIT = 91;
const var EFFECT_SNORE = 92;
const var EFFECT_CONVERSION_2 = 93;
const var EFFECT_LOCK_ON = 94;
const var EFFECT_SKETCH = 95;
const var EFFECT_UNUSED_60 96  // = thaw;
const var EFFECT_SLEEP_TALK = 97;
const var EFFECT_DESTINY_BOND = 98;
const var EFFECT_FLAIL = 99;
const var EFFECT_SPITE = 100;
const var EFFECT_FALSE_SWIPE = 101;
const var EFFECT_HEAL_BELL = 102;
const var EFFECT_QUICK_ATTACK = 103;
const var EFFECT_TRIPLE_KICK = 104;
const var EFFECT_THIEF = 105;
const var EFFECT_MEAN_LOOK = 106;
const var EFFECT_NIGHTMARE = 107;
const var EFFECT_MINIMIZE = 108;
const var EFFECT_CURSE = 109;
const var EFFECT_UNUSED_6E = 110;
const var EFFECT_PROTECT = 111;
const var EFFECT_SPIKES = 112;
const var EFFECT_FORESIGHT = 113;
const var EFFECT_PERISH_SONG = 114;
const var EFFECT_SANDSTORM = 115;
const var EFFECT_ENDURE = 116;
const var EFFECT_ROLLOUT = 117;
const var EFFECT_SWAGGER = 118;
const var EFFECT_FURY_CUTTER = 119;
const var EFFECT_ATTRACT = 120;
const var EFFECT_RETURN = 121;
const var EFFECT_PRESENT = 122;
const var EFFECT_FRUSTRATION = 123;
const var EFFECT_SAFEGUARD = 124;
const var EFFECT_THAW_HIT = 125;
const var EFFECT_MAGNITUDE = 126;
const var EFFECT_BATON_PASS = 127;
const var EFFECT_PURSUIT = 128;
const var EFFECT_RAPID_SPIN = 129;
const var EFFECT_SONICBOOM = 130;
const var EFFECT_UNUSED_83 = 131;
const var EFFECT_MORNING_SUN = 132;
const var EFFECT_SYNTHESIS = 133;
const var EFFECT_MOONLIGHT = 134;
const var EFFECT_HIDDEN_POWER = 135;
const var EFFECT_RAIN_DANCE = 136;
const var EFFECT_SUNNY_DAY = 137;
const var EFFECT_DEFENSE_UP_HIT = 138;
const var EFFECT_ATTACK_UP_HIT = 139;
const var EFFECT_ALL_STATS_UP_HIT = 140;
const var EFFECT_UNUSED_8D 141  // incomplete fake out in gen = 2;
const var EFFECT_BELLY_DRUM = 142;
const var EFFECT_PSYCH_UP = 143;
const var EFFECT_MIRROR_COAT = 144;
const var EFFECT_SKULL_BASH = 145;
const var EFFECT_TWISTER = 146;
const var EFFECT_EARTHQUAKE = 147;
const var EFFECT_FUTURE_SIGHT = 148;
const var EFFECT_GUST = 149;
const var EFFECT_FLINCH_MINIMIZE_HIT 150  // STOMP ASTONISH EXTRASENSORY = NEEDLE_ARM;
const var EFFECT_SOLAR_BEAM = 151;
const var EFFECT_THUNDER = 152;
const var EFFECT_TELEPORT = 153;
const var EFFECT_BEAT_UP = 154;
const var EFFECT_SEMI_INVULNERABLE = 155;
const var EFFECT_DEFENSE_CURL = 156;
const var EFFECT_SOFTBOILED = 157;
const var EFFECT_FAKE_OUT = 158;
const var EFFECT_UPROAR = 159;
const var EFFECT_STOCKPILE = 160;
const var EFFECT_SPIT_UP = 161;
const var EFFECT_SWALLOW = 162;
const var EFFECT_UNUSED_A3 = 163;
const var EFFECT_HAIL = 164;
const var EFFECT_TORMENT = 165;
const var EFFECT_FLATTER = 166;
const var EFFECT_WILL_O_WISP = 167;
const var EFFECT_MEMENTO = 168;
const var EFFECT_FACADE = 169;
const var EFFECT_FOCUS_PUNCH = 170;
const var EFFECT_SMELLINGSALT = 171;
const var EFFECT_FOLLOW_ME = 172;
const var EFFECT_NATURE_POWER = 173;
const var EFFECT_CHARGE = 174;
const var EFFECT_TAUNT = 175;
const var EFFECT_HELPING_HAND = 176;
const var EFFECT_TRICK = 177;
const var EFFECT_ROLE_PLAY = 178;
const var EFFECT_WISH = 179;
const var EFFECT_ASSIST = 180;
const var EFFECT_INGRAIN = 181;
const var EFFECT_SUPERPOWER = 182;
const var EFFECT_MAGIC_COAT = 183;
const var EFFECT_RECYCLE = 184;
const var EFFECT_REVENGE = 185;
const var EFFECT_BRICK_BREAK = 186;
const var EFFECT_YAWN = 187;
const var EFFECT_KNOCK_OFF = 188;
const var EFFECT_ENDEAVOR = 189;
const var EFFECT_ERUPTION = 190;
const var EFFECT_SKILL_SWAP = 191;
const var EFFECT_IMPRISON = 192;
const var EFFECT_REFRESH = 193;
const var EFFECT_GRUDGE = 194;
const var EFFECT_SNATCH = 195;
const var EFFECT_LOW_KICK = 196;
const var EFFECT_SECRET_POWER = 197;
const var EFFECT_DOUBLE_EDGE = 198;
const var EFFECT_TEETER_DANCE = 199;
const var EFFECT_BLAZE_KICK = 200;
const var EFFECT_MUD_SPORT = 201;
const var EFFECT_POISON_FANG = 202;
const var EFFECT_WEATHER_BALL = 203;
const var EFFECT_OVERHEAT = 204;
const var EFFECT_TICKLE = 205;
const var EFFECT_COSMIC_POWER = 206;
const var EFFECT_SKY_UPPERCUT = 207;
const var EFFECT_BULK_UP = 208;
const var EFFECT_POISON_TAIL = 209;
const var EFFECT_WATER_SPORT = 210;
const var EFFECT_CALM_MIND = 211;
const var EFFECT_DRAGON_DANCE = 212;
const var EFFECT_CAMOUFLAGE = 213;

const var NUM_BATTLE_MOVE_EFFECTS = 214;

const var TYPE_NONE             = 255;
const var TYPE_NORMAL           = 0;
const var TYPE_FIGHTING         = 1;
const var TYPE_FLYING           = 2;
const var TYPE_POISON           = 3;
const var TYPE_GROUND           = 4;
const var TYPE_ROCK             = 5;
const var TYPE_BUG              = 6;
const var TYPE_GHOST            = 7;
const var TYPE_STEEL            = 8;
const var TYPE_MYSTERY          = 9;
const var TYPE_FIRE             = 10;
const var TYPE_WATER            = 11;
const var TYPE_GRASS            = 12;
const var TYPE_ELECTRIC         = 13;
const var TYPE_PSYCHIC          = 14;
const var TYPE_ICE              = 15;
const var TYPE_DRAGON           = 16;
const var TYPE_DARK             = 17;
const var NUMBER_OF_MON_TYPES   = 18;

gBattleMoves =
{
    'None' :
    {
        effect : EFFECT_HIT,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 0,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : 0,
    },

    'Pound' :
    {
        effect : EFFECT_HIT,
        power : 40,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 35,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Karate Chop' :
    {
        effect : EFFECT_HIGH_CRITICAL,
        power : 50,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 25,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Double Slap' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 15,
        type : TYPE_NORMAL,
        accuracy : 85,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Comet Punch' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 18,
        type : TYPE_NORMAL,
        accuracy : 85,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Mega Punch' :
    {
        effect : EFFECT_HIT,
        power : 80,
        type : TYPE_NORMAL,
        accuracy : 85,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Pay Day' :
    {
        effect : EFFECT_PAY_DAY,
        power : 40,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Fire Punch' :
    {
        effect : EFFECT_BURN_HIT,
        power : 75,
        type : TYPE_FIRE,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Ice Punch' :
    {
        effect : EFFECT_FREEZE_HIT,
        power : 75,
        type : TYPE_ICE,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Thunder Punch' :
    {
        effect : EFFECT_PARALYZE_HIT,
        power : 75,
        type : TYPE_ELECTRIC,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Scratch' :
    {
        effect : EFFECT_HIT,
        power : 40,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 35,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Vice Grip' :
    {
        effect : EFFECT_HIT,
        power : 55,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Guillotine' :
    {
        effect : EFFECT_OHKO,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 30,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Razor Wind' :
    {
        effect : EFFECT_RAZOR_WIND,
        power : 80,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Swords Dance' :
    {
        effect : EFFECT_ATTACK_UP_2,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Cut' :
    {
        effect : EFFECT_HIT,
        power : 50,
        type : TYPE_NORMAL,
        accuracy : 95,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Gust' :
    {
        effect : EFFECT_GUST,
        power : 40,
        type : TYPE_FLYING,
        accuracy : 100,
        pp : 35,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Wing Attack' :
    {
        effect : EFFECT_HIT,
        power : 60,
        type : TYPE_FLYING,
        accuracy : 100,
        pp : 35,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Whirlwind' :
    {
        effect : EFFECT_ROAR,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : -6,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Fly' :
    {
        effect : EFFECT_SEMI_INVULNERABLE,
        power : 70,
        type : TYPE_FLYING,
        accuracy : 95,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Bind' :
    {
        effect : EFFECT_TRAP,
        power : 15,
        type : TYPE_NORMAL,
        accuracy : 75,
        pp : 20,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Slam' :
    {
        effect : EFFECT_HIT,
        power : 80,
        type : TYPE_NORMAL,
        accuracy : 75,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Vine Whip' :
    {
        effect : EFFECT_HIT,
        power : 35,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Stomp' :
    {
        effect : EFFECT_FLINCH_MINIMIZE_HIT,
        power : 65,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Double Kick' :
    {
        effect : EFFECT_DOUBLE_HIT,
        power : 30,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Mega Kick' :
    {
        effect : EFFECT_HIT,
        power : 120,
        type : TYPE_NORMAL,
        accuracy : 75,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Jump Kick' :
    {
        effect : EFFECT_RECOIL_IF_MISS,
        power : 70,
        type : TYPE_FIGHTING,
        accuracy : 95,
        pp : 25,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Rolling Kick' :
    {
        effect : EFFECT_FLINCH_HIT,
        power : 60,
        type : TYPE_FIGHTING,
        accuracy : 85,
        pp : 15,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Sand-Attack' :
    {
        effect : EFFECT_ACCURACY_DOWN,
        power : 0,
        type : TYPE_GROUND,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Headbutt' :
    {
        effect : EFFECT_FLINCH_HIT,
        power : 70,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Horn Attack' :
    {
        effect : EFFECT_HIT,
        power : 65,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 25,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Fury Attack' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 15,
        type : TYPE_NORMAL,
        accuracy : 85,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Horn Drill' :
    {
        effect : EFFECT_OHKO,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 30,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Tackle' :
    {
        effect : EFFECT_HIT,
        power : 35,
        type : TYPE_NORMAL,
        accuracy : 95,
        pp : 35,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Body Slam' :
    {
        effect : EFFECT_PARALYZE_HIT,
        power : 85,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Wrap' :
    {
        effect : EFFECT_TRAP,
        power : 15,
        type : TYPE_NORMAL,
        accuracy : 85,
        pp : 20,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Take Down' :
    {
        effect : EFFECT_RECOIL,
        power : 90,
        type : TYPE_NORMAL,
        accuracy : 85,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Thrash' :
    {
        effect : EFFECT_RAMPAGE,
        power : 90,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_RANDOM,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Double-Edge' :
    {
        effect : EFFECT_DOUBLE_EDGE,
        power : 120,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Tail Whip' :
    {
        effect : EFFECT_DEFENSE_DOWN,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Poison Sting' :
    {
        effect : EFFECT_POISON_HIT,
        power : 15,
        type : TYPE_POISON,
        accuracy : 100,
        pp : 35,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Twineedle' :
    {
        effect : EFFECT_TWINEEDLE,
        power : 25,
        type : TYPE_BUG,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 20,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Pin Missile' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 14,
        type : TYPE_BUG,
        accuracy : 85,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Leer' :
    {
        effect : EFFECT_DEFENSE_DOWN,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Bite' :
    {
        effect : EFFECT_FLINCH_HIT,
        power : 60,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 25,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Growl' :
    {
        effect : EFFECT_ATTACK_DOWN,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Roar' :
    {
        effect : EFFECT_ROAR,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : -6,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Sing' :
    {
        effect : EFFECT_SLEEP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 55,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Supersonic' :
    {
        effect : EFFECT_CONFUSE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 55,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Sonic Boom' :
    {
        effect : EFFECT_SONICBOOM,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 90,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Disable' :
    {
        effect : EFFECT_DISABLE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 55,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Acid' :
    {
        effect : EFFECT_DEFENSE_DOWN_HIT,
        power : 40,
        type : TYPE_POISON,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Ember' :
    {
        effect : EFFECT_BURN_HIT,
        power : 40,
        type : TYPE_FIRE,
        accuracy : 100,
        pp : 25,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Flamethrower' :
    {
        effect : EFFECT_BURN_HIT,
        power : 95,
        type : TYPE_FIRE,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Mist' :
    {
        effect : EFFECT_MIST,
        power : 0,
        type : TYPE_ICE,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Water Gun' :
    {
        effect : EFFECT_HIT,
        power : 40,
        type : TYPE_WATER,
        accuracy : 100,
        pp : 25,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Hydro Pump' :
    {
        effect : EFFECT_HIT,
        power : 120,
        type : TYPE_WATER,
        accuracy : 80,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Surf' :
    {
        effect : EFFECT_HIT,
        power : 95,
        type : TYPE_WATER,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Ice Beam' :
    {
        effect : EFFECT_FREEZE_HIT,
        power : 95,
        type : TYPE_ICE,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Blizzard' :
    {
        effect : EFFECT_FREEZE_HIT,
        power : 120,
        type : TYPE_ICE,
        accuracy : 70,
        pp : 5,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Psybeam' :
    {
        effect : EFFECT_CONFUSE_HIT,
        power : 65,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Bubble Beam' :
    {
        effect : EFFECT_SPEED_DOWN_HIT,
        power : 65,
        type : TYPE_WATER,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Aurora Beam' :
    {
        effect : EFFECT_ATTACK_DOWN_HIT,
        power : 65,
        type : TYPE_ICE,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Hyper Beam' :
    {
        effect : EFFECT_RECHARGE,
        power : 150,
        type : TYPE_NORMAL,
        accuracy : 90,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Peck' :
    {
        effect : EFFECT_HIT,
        power : 35,
        type : TYPE_FLYING,
        accuracy : 100,
        pp : 35,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Drill Peck' :
    {
        effect : EFFECT_HIT,
        power : 80,
        type : TYPE_FLYING,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Submission' :
    {
        effect : EFFECT_RECOIL,
        power : 80,
        type : TYPE_FIGHTING,
        accuracy : 80,
        pp : 25,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Low Kick' :
    {
        effect : EFFECT_LOW_KICK,
        power : 1,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Counter' :
    {
        effect : EFFECT_COUNTER,
        power : 1,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_DEPENDS,
        priority : -5,
        flags : FLAG_MAKES_CONTACT | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Seismic Toss' :
    {
        effect : EFFECT_LEVEL_DAMAGE,
        power : 1,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Strength' :
    {
        effect : EFFECT_HIT,
        power : 80,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Absorb' :
    {
        effect : EFFECT_ABSORB,
        power : 20,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Mega Drain' :
    {
        effect : EFFECT_ABSORB,
        power : 40,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Leech Seed' :
    {
        effect : EFFECT_LEECH_SEED,
        power : 0,
        type : TYPE_GRASS,
        accuracy : 90,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Growth' :
    {
        effect : EFFECT_SPECIAL_ATTACK_UP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Razor Leaf' :
    {
        effect : EFFECT_HIGH_CRITICAL,
        power : 55,
        type : TYPE_GRASS,
        accuracy : 95,
        pp : 25,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Solar Beam' :
    {
        effect : EFFECT_SOLAR_BEAM,
        power : 120,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Poison Powder' :
    {
        effect : EFFECT_POISON,
        power : 0,
        type : TYPE_POISON,
        accuracy : 75,
        pp : 35,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Stun Spore' :
    {
        effect : EFFECT_PARALYZE,
        power : 0,
        type : TYPE_GRASS,
        accuracy : 75,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Sleep Powder' :
    {
        effect : EFFECT_SLEEP,
        power : 0,
        type : TYPE_GRASS,
        accuracy : 75,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Petal Dance' :
    {
        effect : EFFECT_RAMPAGE,
        power : 70,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_RANDOM,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'String Shot' :
    {
        effect : EFFECT_SPEED_DOWN,
        power : 0,
        type : TYPE_BUG,
        accuracy : 95,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Dragon Rage' :
    {
        effect : EFFECT_DRAGON_RAGE,
        power : 1,
        type : TYPE_DRAGON,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Fire Spin' :
    {
        effect : EFFECT_TRAP,
        power : 15,
        type : TYPE_FIRE,
        accuracy : 70,
        pp : 15,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Thunder Shock' :
    {
        effect : EFFECT_PARALYZE_HIT,
        power : 40,
        type : TYPE_ELECTRIC,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Thunderbolt' :
    {
        effect : EFFECT_PARALYZE_HIT,
        power : 95,
        type : TYPE_ELECTRIC,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Thunder Wave' :
    {
        effect : EFFECT_PARALYZE,
        power : 0,
        type : TYPE_ELECTRIC,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Thunder' :
    {
        effect : EFFECT_THUNDER,
        power : 120,
        type : TYPE_ELECTRIC,
        accuracy : 70,
        pp : 10,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Rock Throw' :
    {
        effect : EFFECT_HIT,
        power : 50,
        type : TYPE_ROCK,
        accuracy : 90,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Earthquake' :
    {
        effect : EFFECT_EARTHQUAKE,
        power : 100,
        type : TYPE_GROUND,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_FOES_AND_ALLY,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Fissure' :
    {
        effect : EFFECT_OHKO,
        power : 1,
        type : TYPE_GROUND,
        accuracy : 30,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Dig' :
    {
        effect : EFFECT_SEMI_INVULNERABLE,
        power : 60,
        type : TYPE_GROUND,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Toxic' :
    {
        effect : EFFECT_TOXIC,
        power : 0,
        type : TYPE_POISON,
        accuracy : 85,
        pp : 10,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Confusion' :
    {
        effect : EFFECT_CONFUSE_HIT,
        power : 50,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 25,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Psychic' :
    {
        effect : EFFECT_SPECIAL_DEFENSE_DOWN_HIT,
        power : 90,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Hypnosis' :
    {
        effect : EFFECT_SLEEP,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 60,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Meditate' :
    {
        effect : EFFECT_ATTACK_UP,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Agility' :
    {
        effect : EFFECT_SPEED_UP_2,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Quick Attack' :
    {
        effect : EFFECT_QUICK_ATTACK,
        power : 40,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 1,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Rage' :
    {
        effect : EFFECT_RAGE,
        power : 20,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Teleport' :
    {
        effect : EFFECT_TELEPORT,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Night Shade' :
    {
        effect : EFFECT_LEVEL_DAMAGE,
        power : 1,
        type : TYPE_GHOST,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Mimic' :
    {
        effect : EFFECT_MIMIC,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED,
    },

    'Screech' :
    {
        effect : EFFECT_DEFENSE_DOWN_2,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 85,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Double Team' :
    {
        effect : EFFECT_EVASION_UP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Recover' :
    {
        effect : EFFECT_RESTORE_HP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Harden' :
    {
        effect : EFFECT_DEFENSE_UP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Minimize' :
    {
        effect : EFFECT_MINIMIZE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Smokescreen' :
    {
        effect : EFFECT_ACCURACY_DOWN,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Confuse Ray' :
    {
        effect : EFFECT_CONFUSE,
        power : 0,
        type : TYPE_GHOST,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Withdraw' :
    {
        effect : EFFECT_DEFENSE_UP,
        power : 0,
        type : TYPE_WATER,
        accuracy : 0,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Defense Curl' :
    {
        effect : EFFECT_DEFENSE_CURL,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Barrier' :
    {
        effect : EFFECT_DEFENSE_UP_2,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Light Screen' :
    {
        effect : EFFECT_LIGHT_SCREEN,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Haze' :
    {
        effect : EFFECT_HAZE,
        power : 0,
        type : TYPE_ICE,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED,
    },

    'Reflect' :
    {
        effect : EFFECT_REFLECT,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Focus Energy' :
    {
        effect : EFFECT_FOCUS_ENERGY,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Bide' :
    {
        effect : EFFECT_BIDE,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Metronome' :
    {
        effect : EFFECT_METRONOME,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_DEPENDS,
        priority : 0,
        flags : 0,
    },

    'Mirror Move' :
    {
        effect : EFFECT_MIRROR_MOVE,
        power : 0,
        type : TYPE_FLYING,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_DEPENDS,
        priority : 0,
        flags : 0,
    },

    'Self-Destruct' :
    {
        effect : EFFECT_EXPLOSION,
        power : 200,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_FOES_AND_ALLY,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Egg Bomb' :
    {
        effect : EFFECT_HIT,
        power : 100,
        type : TYPE_NORMAL,
        accuracy : 75,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Lick' :
    {
        effect : EFFECT_PARALYZE_HIT,
        power : 20,
        type : TYPE_GHOST,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Smog' :
    {
        effect : EFFECT_POISON_HIT,
        power : 20,
        type : TYPE_POISON,
        accuracy : 70,
        pp : 20,
        secondaryEffectChance : 40,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Sludge' :
    {
        effect : EFFECT_POISON_HIT,
        power : 65,
        type : TYPE_POISON,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Bone Club' :
    {
        effect : EFFECT_FLINCH_HIT,
        power : 65,
        type : TYPE_GROUND,
        accuracy : 85,
        pp : 20,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Fire Blast' :
    {
        effect : EFFECT_BURN_HIT,
        power : 120,
        type : TYPE_FIRE,
        accuracy : 85,
        pp : 5,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Waterfall' :
    {
        effect : EFFECT_HIT,
        power : 80,
        type : TYPE_WATER,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Clamp' :
    {
        effect : EFFECT_TRAP,
        power : 35,
        type : TYPE_WATER,
        accuracy : 75,
        pp : 10,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Swift' :
    {
        effect : EFFECT_ALWAYS_HIT,
        power : 60,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Skull Bash' :
    {
        effect : EFFECT_SKULL_BASH,
        power : 100,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Spike Cannon' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 20,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Constrict' :
    {
        effect : EFFECT_SPEED_DOWN_HIT,
        power : 10,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 35,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Amnesia' :
    {
        effect : EFFECT_SPECIAL_DEFENSE_UP_2,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Kinesis' :
    {
        effect : EFFECT_ACCURACY_DOWN,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 80,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Soft-Boiled' :
    {
        effect : EFFECT_SOFTBOILED,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Hi Jump Kick' :
    {
        effect : EFFECT_RECOIL_IF_MISS,
        power : 85,
        type : TYPE_FIGHTING,
        accuracy : 90,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Glare' :
    {
        effect : EFFECT_PARALYZE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 75,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Dream Eater' :
    {
        effect : EFFECT_DREAM_EATER,
        power : 100,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Poison Gas' :
    {
        effect : EFFECT_POISON,
        power : 0,
        type : TYPE_POISON,
        accuracy : 55,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Barrage' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 15,
        type : TYPE_NORMAL,
        accuracy : 85,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Leech Life' :
    {
        effect : EFFECT_ABSORB,
        power : 20,
        type : TYPE_BUG,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Lovely Kiss' :
    {
        effect : EFFECT_SLEEP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 75,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Sky Attack' :
    {
        effect : EFFECT_SKY_ATTACK,
        power : 140,
        type : TYPE_FLYING,
        accuracy : 90,
        pp : 5,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Transform' :
    {
        effect : EFFECT_TRANSFORM,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : 0,
    },

    'Bubble' :
    {
        effect : EFFECT_SPEED_DOWN_HIT,
        power : 20,
        type : TYPE_WATER,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Dizzy Punch' :
    {
        effect : EFFECT_CONFUSE_HIT,
        power : 70,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 20,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Spore' :
    {
        effect : EFFECT_SLEEP,
        power : 0,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Flash' :
    {
        effect : EFFECT_ACCURACY_DOWN,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 70,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Psywave' :
    {
        effect : EFFECT_PSYWAVE,
        power : 1,
        type : TYPE_PSYCHIC,
        accuracy : 80,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Splash' :
    {
        effect : EFFECT_SPLASH,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Acid Armor' :
    {
        effect : EFFECT_DEFENSE_UP_2,
        power : 0,
        type : TYPE_POISON,
        accuracy : 0,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Crabhammer' :
    {
        effect : EFFECT_HIGH_CRITICAL,
        power : 90,
        type : TYPE_WATER,
        accuracy : 85,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Explosion' :
    {
        effect : EFFECT_EXPLOSION,
        power : 250,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_FOES_AND_ALLY,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Fury Swipes' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 18,
        type : TYPE_NORMAL,
        accuracy : 80,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Bonemerang' :
    {
        effect : EFFECT_DOUBLE_HIT,
        power : 50,
        type : TYPE_GROUND,
        accuracy : 90,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Rest' :
    {
        effect : EFFECT_REST,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Rock Slide' :
    {
        effect : EFFECT_FLINCH_HIT,
        power : 75,
        type : TYPE_ROCK,
        accuracy : 90,
        pp : 10,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Hyper Fang' :
    {
        effect : EFFECT_FLINCH_HIT,
        power : 80,
        type : TYPE_NORMAL,
        accuracy : 90,
        pp : 15,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Sharpen' :
    {
        effect : EFFECT_ATTACK_UP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Conversion' :
    {
        effect : EFFECT_CONVERSION,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Tri Attack' :
    {
        effect : EFFECT_TRI_ATTACK,
        power : 80,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 20,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Super Fang' :
    {
        effect : EFFECT_SUPER_FANG,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 90,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Slash' :
    {
        effect : EFFECT_HIGH_CRITICAL,
        power : 70,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Substitute' :
    {
        effect : EFFECT_SUBSTITUTE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Struggle' :
    {
        effect : EFFECT_RECOIL,
        power : 50,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 1,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Sketch' :
    {
        effect : EFFECT_SKETCH,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 1,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : 0,
    },

    'Triple Kick' :
    {
        effect : EFFECT_TRIPLE_KICK,
        power : 10,
        type : TYPE_FIGHTING,
        accuracy : 90,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Thief' :
    {
        effect : EFFECT_THIEF,
        power : 40,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Spider Web' :
    {
        effect : EFFECT_MEAN_LOOK,
        power : 0,
        type : TYPE_BUG,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Mind Reader' :
    {
        effect : EFFECT_LOCK_ON,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Nightmare' :
    {
        effect : EFFECT_NIGHTMARE,
        power : 0,
        type : TYPE_GHOST,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Flame Wheel' :
    {
        effect : EFFECT_THAW_HIT,
        power : 60,
        type : TYPE_FIRE,
        accuracy : 100,
        pp : 25,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Snore' :
    {
        effect : EFFECT_SNORE,
        power : 40,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Curse' :
    {
        effect : EFFECT_CURSE,
        power : 0,
        type : TYPE_MYSTERY,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : 0,
    },

    'Flail' :
    {
        effect : EFFECT_FLAIL,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Conversion 2' :
    {
        effect : EFFECT_CONVERSION_2,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Aeroblast' :
    {
        effect : EFFECT_HIGH_CRITICAL,
        power : 100,
        type : TYPE_FLYING,
        accuracy : 95,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Cotton Spore' :
    {
        effect : EFFECT_SPEED_DOWN_2,
        power : 0,
        type : TYPE_GRASS,
        accuracy : 85,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Reversal' :
    {
        effect : EFFECT_FLAIL,
        power : 1,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Spite' :
    {
        effect : EFFECT_SPITE,
        power : 0,
        type : TYPE_GHOST,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Powder Snow' :
    {
        effect : EFFECT_FREEZE_HIT,
        power : 40,
        type : TYPE_ICE,
        accuracy : 100,
        pp : 25,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Protect' :
    {
        effect : EFFECT_PROTECT,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 3,
        flags : 0,
    },

    'Mach Punch' :
    {
        effect : EFFECT_QUICK_ATTACK,
        power : 40,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 1,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Scary Face' :
    {
        effect : EFFECT_SPEED_DOWN_2,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 90,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Faint Attack' :
    {
        effect : EFFECT_ALWAYS_HIT,
        power : 60,
        type : TYPE_DARK,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Sweet Kiss' :
    {
        effect : EFFECT_CONFUSE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 75,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Belly Drum' :
    {
        effect : EFFECT_BELLY_DRUM,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Sludge Bomb' :
    {
        effect : EFFECT_POISON_HIT,
        power : 90,
        type : TYPE_POISON,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Mud-Slap' :
    {
        effect : EFFECT_ACCURACY_DOWN_HIT,
        power : 20,
        type : TYPE_GROUND,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Octazooka' :
    {
        effect : EFFECT_ACCURACY_DOWN_HIT,
        power : 65,
        type : TYPE_WATER,
        accuracy : 85,
        pp : 10,
        secondaryEffectChance : 50,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Spikes' :
    {
        effect : EFFECT_SPIKES,
        power : 0,
        type : TYPE_GROUND,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_OPPONENTS_FIELD,
        priority : 0,
        flags : 0,
    },

    'Zap Cannon' :
    {
        effect : EFFECT_PARALYZE_HIT,
        power : 100,
        type : TYPE_ELECTRIC,
        accuracy : 50,
        pp : 5,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Foresight' :
    {
        effect : EFFECT_FORESIGHT,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Destiny Bond' :
    {
        effect : EFFECT_DESTINY_BOND,
        power : 0,
        type : TYPE_GHOST,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Perish Song' :
    {
        effect : EFFECT_PERISH_SONG,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Icy Wind' :
    {
        effect : EFFECT_SPEED_DOWN_HIT,
        power : 55,
        type : TYPE_ICE,
        accuracy : 95,
        pp : 15,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Detect' :
    {
        effect : EFFECT_PROTECT,
        power : 0,
        type : TYPE_FIGHTING,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 3,
        flags : 0,
    },

    'Bone Rush' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 25,
        type : TYPE_GROUND,
        accuracy : 80,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Lock-On' :
    {
        effect : EFFECT_LOCK_ON,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Outrage' :
    {
        effect : EFFECT_RAMPAGE,
        power : 90,
        type : TYPE_DRAGON,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_RANDOM,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Sandstorm' :
    {
        effect : EFFECT_SANDSTORM,
        power : 0,
        type : TYPE_ROCK,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Giga Drain' :
    {
        effect : EFFECT_ABSORB,
        power : 60,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Endure' :
    {
        effect : EFFECT_ENDURE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 3,
        flags : 0,
    },

    'Charm' :
    {
        effect : EFFECT_ATTACK_DOWN_2,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Rollout' :
    {
        effect : EFFECT_ROLLOUT,
        power : 30,
        type : TYPE_ROCK,
        accuracy : 90,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'False Swipe' :
    {
        effect : EFFECT_FALSE_SWIPE,
        power : 40,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Swagger' :
    {
        effect : EFFECT_SWAGGER,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 90,
        pp : 15,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Milk Drink' :
    {
        effect : EFFECT_SOFTBOILED,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_SNATCH_AFFECTED,
    },

    'Spark' :
    {
        effect : EFFECT_PARALYZE_HIT,
        power : 65,
        type : TYPE_ELECTRIC,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Fury Cutter' :
    {
        effect : EFFECT_FURY_CUTTER,
        power : 10,
        type : TYPE_BUG,
        accuracy : 95,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Steel Wing' :
    {
        effect : EFFECT_DEFENSE_UP_HIT,
        power : 70,
        type : TYPE_STEEL,
        accuracy : 90,
        pp : 25,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Mean Look' :
    {
        effect : EFFECT_MEAN_LOOK,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Attract' :
    {
        effect : EFFECT_ATTRACT,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Sleep Talk' :
    {
        effect : EFFECT_SLEEP_TALK,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_DEPENDS,
        priority : 0,
        flags : 0,
    },

    'Heal Bell' :
    {
        effect : EFFECT_HEAL_BELL,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Return' :
    {
        effect : EFFECT_RETURN,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Present' :
    {
        effect : EFFECT_PRESENT,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 90,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Frustration' :
    {
        effect : EFFECT_FRUSTRATION,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Safeguard' :
    {
        effect : EFFECT_SAFEGUARD,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 25,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Pain Split' :
    {
        effect : EFFECT_PAIN_SPLIT,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Sacred Fire' :
    {
        effect : EFFECT_THAW_HIT,
        power : 100,
        type : TYPE_FIRE,
        accuracy : 95,
        pp : 5,
        secondaryEffectChance : 50,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Magnitude' :
    {
        effect : EFFECT_MAGNITUDE,
        power : 1,
        type : TYPE_GROUND,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_FOES_AND_ALLY,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Dynamic Punch' :
    {
        effect : EFFECT_CONFUSE_HIT,
        power : 100,
        type : TYPE_FIGHTING,
        accuracy : 50,
        pp : 5,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Megahorn' :
    {
        effect : EFFECT_HIT,
        power : 120,
        type : TYPE_BUG,
        accuracy : 85,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Dragon Breath' :
    {
        effect : EFFECT_PARALYZE_HIT,
        power : 60,
        type : TYPE_DRAGON,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Baton Pass' :
    {
        effect : EFFECT_BATON_PASS,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Encore' :
    {
        effect : EFFECT_ENCORE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Pursuit' :
    {
        effect : EFFECT_PURSUIT,
        power : 40,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Rapid Spin' :
    {
        effect : EFFECT_RAPID_SPIN,
        power : 20,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Sweet Scent' :
    {
        effect : EFFECT_EVASION_DOWN,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Iron Tail' :
    {
        effect : EFFECT_DEFENSE_DOWN_HIT,
        power : 100,
        type : TYPE_STEEL,
        accuracy : 75,
        pp : 15,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Metal Claw' :
    {
        effect : EFFECT_ATTACK_UP_HIT,
        power : 50,
        type : TYPE_STEEL,
        accuracy : 95,
        pp : 35,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Vital Throw' :
    {
        effect : EFFECT_VITAL_THROW,
        power : 70,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : -1,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Morning Sun' :
    {
        effect : EFFECT_MORNING_SUN,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Synthesis' :
    {
        effect : EFFECT_SYNTHESIS,
        power : 0,
        type : TYPE_GRASS,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Moonlight' :
    {
        effect : EFFECT_MOONLIGHT,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Hidden Power' :
    {
        effect : EFFECT_HIDDEN_POWER,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Cross Chop' :
    {
        effect : EFFECT_HIGH_CRITICAL,
        power : 100,
        type : TYPE_FIGHTING,
        accuracy : 80,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Twister' :
    {
        effect : EFFECT_TWISTER,
        power : 40,
        type : TYPE_DRAGON,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 20,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Rain Dance' :
    {
        effect : EFFECT_RAIN_DANCE,
        power : 0,
        type : TYPE_WATER,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Sunny Day' :
    {
        effect : EFFECT_SUNNY_DAY,
        power : 0,
        type : TYPE_FIRE,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Crunch' :
    {
        effect : EFFECT_SPECIAL_DEFENSE_DOWN_HIT,
        power : 80,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 20,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Mirror Coat' :
    {
        effect : EFFECT_MIRROR_COAT,
        power : 1,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_DEPENDS,
        priority : -5,
        flags : FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Psych Up' :
    {
        effect : EFFECT_PSYCH_UP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Extreme Speed' :
    {
        effect : EFFECT_QUICK_ATTACK,
        power : 80,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 1,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Ancient Power' :
    {
        effect : EFFECT_ALL_STATS_UP_HIT,
        power : 60,
        type : TYPE_ROCK,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Shadow Ball' :
    {
        effect : EFFECT_SPECIAL_DEFENSE_DOWN_HIT,
        power : 80,
        type : TYPE_GHOST,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 20,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Future Sight' :
    {
        effect : EFFECT_FUTURE_SIGHT,
        power : 80,
        type : TYPE_PSYCHIC,
        accuracy : 90,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : 0,
    },

    'Rock Smash' :
    {
        effect : EFFECT_DEFENSE_DOWN_HIT,
        power : 20,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 50,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Whirlpool' :
    {
        effect : EFFECT_TRAP,
        power : 15,
        type : TYPE_WATER,
        accuracy : 70,
        pp : 15,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Beat Up' :
    {
        effect : EFFECT_BEAT_UP,
        power : 10,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Fake Out' :
    {
        effect : EFFECT_FAKE_OUT,
        power : 40,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 1,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Uproar' :
    {
        effect : EFFECT_UPROAR,
        power : 50,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_RANDOM,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Stockpile' :
    {
        effect : EFFECT_STOCKPILE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Spit Up' :
    {
        effect : EFFECT_SPIT_UP,
        power : 100,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Swallow' :
    {
        effect : EFFECT_SWALLOW,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Heat Wave' :
    {
        effect : EFFECT_BURN_HIT,
        power : 100,
        type : TYPE_FIRE,
        accuracy : 90,
        pp : 10,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Hail' :
    {
        effect : EFFECT_HAIL,
        power : 0,
        type : TYPE_ICE,
        accuracy : 0,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED,
    },

    'Torment' :
    {
        effect : EFFECT_TORMENT,
        power : 0,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Flatter' :
    {
        effect : EFFECT_FLATTER,
        power : 0,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Will-O-Wisp' :
    {
        effect : EFFECT_WILL_O_WISP,
        power : 0,
        type : TYPE_FIRE,
        accuracy : 75,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Memento' :
    {
        effect : EFFECT_MEMENTO,
        power : 0,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Facade' :
    {
        effect : EFFECT_FACADE,
        power : 70,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Focus Punch' :
    {
        effect : EFFECT_FOCUS_PUNCH,
        power : 150,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : -3,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED,
    },

    'Smelling Salt' :
    {
        effect : EFFECT_SMELLINGSALT,
        power : 60,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Follow Me' :
    {
        effect : EFFECT_FOLLOW_ME,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 3,
        flags : 0,
    },

    'Nature Power' :
    {
        effect : EFFECT_NATURE_POWER,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 95,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_DEPENDS,
        priority : 0,
        flags : 0,
    },

    'Charge' :
    {
        effect : EFFECT_CHARGE,
        power : 0,
        type : TYPE_ELECTRIC,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Taunt' :
    {
        effect : EFFECT_TAUNT,
        power : 0,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED,
    },

    'Helping Hand' :
    {
        effect : EFFECT_HELPING_HAND,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 5,
        flags : 0,
    },

    'Trick' :
    {
        effect : EFFECT_TRICK,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Role Play' :
    {
        effect : EFFECT_ROLE_PLAY,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : 0,
    },

    'Wish' :
    {
        effect : EFFECT_WISH,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED,
    },

    'Assist' :
    {
        effect : EFFECT_ASSIST,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_DEPENDS,
        priority : 0,
        flags : 0,
    },

    'Ingrain' :
    {
        effect : EFFECT_INGRAIN,
        power : 0,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Superpower' :
    {
        effect : EFFECT_SUPERPOWER,
        power : 120,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Magic Coat' :
    {
        effect : EFFECT_MAGIC_COAT,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_DEPENDS,
        priority : 4,
        flags : 0,
    },

    'Recycle' :
    {
        effect : EFFECT_RECYCLE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Revenge' :
    {
        effect : EFFECT_REVENGE,
        power : 60,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : -4,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Brick Break' :
    {
        effect : EFFECT_BRICK_BREAK,
        power : 75,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Yawn' :
    {
        effect : EFFECT_YAWN,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Knock Off' :
    {
        effect : EFFECT_KNOCK_OFF,
        power : 20,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Endeavor' :
    {
        effect : EFFECT_ENDEAVOR,
        power : 1,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Eruption' :
    {
        effect : EFFECT_ERUPTION,
        power : 150,
        type : TYPE_FIRE,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Skill Swap' :
    {
        effect : EFFECT_SKILL_SWAP,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Imprison' :
    {
        effect : EFFECT_IMPRISON,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED,
    },

    'Refresh' :
    {
        effect : EFFECT_REFRESH,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Grudge' :
    {
        effect : EFFECT_GRUDGE,
        power : 0,
        type : TYPE_GHOST,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Snatch' :
    {
        effect : EFFECT_SNATCH,
        power : 0,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_DEPENDS,
        priority : 4,
        flags : FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Secret Power' :
    {
        effect : EFFECT_SECRET_POWER,
        power : 70,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Dive' :
    {
        effect : EFFECT_SEMI_INVULNERABLE,
        power : 60,
        type : TYPE_WATER,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Arm Thrust' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 15,
        type : TYPE_FIGHTING,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Camouflage' :
    {
        effect : EFFECT_CAMOUFLAGE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Tail Glow' :
    {
        effect : EFFECT_SPECIAL_ATTACK_UP_2,
        power : 0,
        type : TYPE_BUG,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Luster Purge' :
    {
        effect : EFFECT_SPECIAL_DEFENSE_DOWN_HIT,
        power : 70,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 50,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Mist Ball' :
    {
        effect : EFFECT_SPECIAL_ATTACK_DOWN_HIT,
        power : 70,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 50,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Feather Dance' :
    {
        effect : EFFECT_ATTACK_DOWN_2,
        power : 0,
        type : TYPE_FLYING,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Teeter Dance' :
    {
        effect : EFFECT_TEETER_DANCE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_FOES_AND_ALLY,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED,
    },

    'Blaze Kick' :
    {
        effect : EFFECT_BLAZE_KICK,
        power : 85,
        type : TYPE_FIRE,
        accuracy : 90,
        pp : 10,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Mud Sport' :
    {
        effect : EFFECT_MUD_SPORT,
        power : 0,
        type : TYPE_GROUND,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Ice Ball' :
    {
        effect : EFFECT_ROLLOUT,
        power : 30,
        type : TYPE_ICE,
        accuracy : 90,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Needle Arm' :
    {
        effect : EFFECT_FLINCH_MINIMIZE_HIT,
        power : 60,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Slack Off' :
    {
        effect : EFFECT_RESTORE_HP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Hyper Voice' :
    {
        effect : EFFECT_HIT,
        power : 90,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Poison Fang' :
    {
        effect : EFFECT_POISON_FANG,
        power : 50,
        type : TYPE_POISON,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Crush Claw' :
    {
        effect : EFFECT_DEFENSE_DOWN_HIT,
        power : 75,
        type : TYPE_NORMAL,
        accuracy : 95,
        pp : 10,
        secondaryEffectChance : 50,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Blast Burn' :
    {
        effect : EFFECT_RECHARGE,
        power : 150,
        type : TYPE_FIRE,
        accuracy : 90,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Hydro Cannon' :
    {
        effect : EFFECT_RECHARGE,
        power : 150,
        type : TYPE_WATER,
        accuracy : 90,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Meteor Mash' :
    {
        effect : EFFECT_ATTACK_UP_HIT,
        power : 100,
        type : TYPE_STEEL,
        accuracy : 85,
        pp : 10,
        secondaryEffectChance : 20,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Astonish' :
    {
        effect : EFFECT_FLINCH_MINIMIZE_HIT,
        power : 30,
        type : TYPE_GHOST,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Weather Ball' :
    {
        effect : EFFECT_WEATHER_BALL,
        power : 50,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Aromatherapy' :
    {
        effect : EFFECT_HEAL_BELL,
        power : 0,
        type : TYPE_GRASS,
        accuracy : 0,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Fake Tears' :
    {
        effect : EFFECT_SPECIAL_DEFENSE_DOWN_2,
        power : 0,
        type : TYPE_DARK,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Air Cutter' :
    {
        effect : EFFECT_HIGH_CRITICAL,
        power : 55,
        type : TYPE_FLYING,
        accuracy : 95,
        pp : 25,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Overheat' :
    {
        effect : EFFECT_OVERHEAT,
        power : 140,
        type : TYPE_FIRE,
        accuracy : 90,
        pp : 5,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Odor Sleuth' :
    {
        effect : EFFECT_FORESIGHT,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Rock Tomb' :
    {
        effect : EFFECT_SPEED_DOWN_HIT,
        power : 50,
        type : TYPE_ROCK,
        accuracy : 80,
        pp : 10,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Silver Wind' :
    {
        effect : EFFECT_ALL_STATS_UP_HIT,
        power : 60,
        type : TYPE_BUG,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Metal Sound' :
    {
        effect : EFFECT_SPECIAL_DEFENSE_DOWN_2,
        power : 0,
        type : TYPE_STEEL,
        accuracy : 85,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Grass Whistle' :
    {
        effect : EFFECT_SLEEP,
        power : 0,
        type : TYPE_GRASS,
        accuracy : 55,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Tickle' :
    {
        effect : EFFECT_TICKLE,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Cosmic Power' :
    {
        effect : EFFECT_COSMIC_POWER,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Water Spout' :
    {
        effect : EFFECT_ERUPTION,
        power : 150,
        type : TYPE_WATER,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Signal Beam' :
    {
        effect : EFFECT_CONFUSE_HIT,
        power : 75,
        type : TYPE_BUG,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Shadow Punch' :
    {
        effect : EFFECT_ALWAYS_HIT,
        power : 60,
        type : TYPE_GHOST,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Extrasensory' :
    {
        effect : EFFECT_FLINCH_MINIMIZE_HIT,
        power : 80,
        type : TYPE_PSYCHIC,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Sky Uppercut' :
    {
        effect : EFFECT_SKY_UPPERCUT,
        power : 85,
        type : TYPE_FIGHTING,
        accuracy : 90,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Sand Tomb' :
    {
        effect : EFFECT_TRAP,
        power : 15,
        type : TYPE_GROUND,
        accuracy : 70,
        pp : 15,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Sheer Cold' :
    {
        effect : EFFECT_OHKO,
        power : 1,
        type : TYPE_ICE,
        accuracy : 30,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Muddy Water' :
    {
        effect : EFFECT_ACCURACY_DOWN_HIT,
        power : 95,
        type : TYPE_WATER,
        accuracy : 85,
        pp : 10,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_BOTH,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Bullet Seed' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 10,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Aerial Ace' :
    {
        effect : EFFECT_ALWAYS_HIT,
        power : 60,
        type : TYPE_FLYING,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Icicle Spear' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 10,
        type : TYPE_ICE,
        accuracy : 100,
        pp : 30,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Iron Defense' :
    {
        effect : EFFECT_DEFENSE_UP_2,
        power : 0,
        type : TYPE_STEEL,
        accuracy : 0,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Block' :
    {
        effect : EFFECT_MEAN_LOOK,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MAGIC_COAT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Howl' :
    {
        effect : EFFECT_ATTACK_UP,
        power : 0,
        type : TYPE_NORMAL,
        accuracy : 0,
        pp : 40,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Dragon Claw' :
    {
        effect : EFFECT_HIT,
        power : 80,
        type : TYPE_DRAGON,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Frenzy Plant' :
    {
        effect : EFFECT_RECHARGE,
        power : 150,
        type : TYPE_GRASS,
        accuracy : 90,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Bulk Up' :
    {
        effect : EFFECT_BULK_UP,
        power : 0,
        type : TYPE_FIGHTING,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Bounce' :
    {
        effect : EFFECT_SEMI_INVULNERABLE,
        power : 85,
        type : TYPE_FLYING,
        accuracy : 85,
        pp : 5,
        secondaryEffectChance : 30,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Mud Shot' :
    {
        effect : EFFECT_SPEED_DOWN_HIT,
        power : 55,
        type : TYPE_GROUND,
        accuracy : 95,
        pp : 15,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Poison Tail' :
    {
        effect : EFFECT_POISON_TAIL,
        power : 50,
        type : TYPE_POISON,
        accuracy : 100,
        pp : 25,
        secondaryEffectChance : 10,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Covet' :
    {
        effect : EFFECT_THIEF,
        power : 40,
        type : TYPE_NORMAL,
        accuracy : 100,
        pp : 40,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED,
    },

    'Volt Tackle' :
    {
        effect : EFFECT_DOUBLE_EDGE,
        power : 120,
        type : TYPE_ELECTRIC,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Magical Leaf' :
    {
        effect : EFFECT_ALWAYS_HIT,
        power : 60,
        type : TYPE_GRASS,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Water Sport' :
    {
        effect : EFFECT_WATER_SPORT,
        power : 0,
        type : TYPE_WATER,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : 0,
    },

    'Calm Mind' :
    {
        effect : EFFECT_CALM_MIND,
        power : 0,
        type : TYPE_PSYCHIC,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Leaf Blade' :
    {
        effect : EFFECT_HIGH_CRITICAL,
        power : 70,
        type : TYPE_GRASS,
        accuracy : 100,
        pp : 15,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_MAKES_CONTACT | FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Dragon Dance' :
    {
        effect : EFFECT_DRAGON_DANCE,
        power : 0,
        type : TYPE_DRAGON,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_USER,
        priority : 0,
        flags : FLAG_SNATCH_AFFECTED,
    },

    'Rock Blast' :
    {
        effect : EFFECT_MULTI_HIT,
        power : 25,
        type : TYPE_ROCK,
        accuracy : 80,
        pp : 10,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Shock Wave' :
    {
        effect : EFFECT_ALWAYS_HIT,
        power : 60,
        type : TYPE_ELECTRIC,
        accuracy : 0,
        pp : 20,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Water Pulse' :
    {
        effect : EFFECT_CONFUSE_HIT,
        power : 60,
        type : TYPE_WATER,
        accuracy : 100,
        pp : 20,
        secondaryEffectChance : 20,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },

    'Doom Desire' :
    {
        effect : EFFECT_FUTURE_SIGHT,
        power : 120,
        type : TYPE_STEEL,
        accuracy : 85,
        pp : 5,
        secondaryEffectChance : 0,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : 0,
    },

    'Psycho Boost' :
    {
        effect : EFFECT_OVERHEAT,
        power : 140,
        type : TYPE_PSYCHIC,
        accuracy : 90,
        pp : 5,
        secondaryEffectChance : 100,
        target : MOVE_TARGET_SELECTED,
        priority : 0,
        flags : FLAG_PROTECT_AFFECTED | FLAG_MIRROR_MOVE_AFFECTED | FLAG_KINGS_ROCK_AFFECTED,
    },
};