const attributeColors = {
  Neutral: '#EBE2CA',
  Positive: '#99CCFF',
  Negative: '#FF4040',
  Description: '#756B5E',
};
const scout = 
[
	{ 
		id: "Freds Website/items/multi/Gambit.png", 
		name: "The Gambit", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2933504975",
		stats: 
		[
			{ text: "50% faster firing speed", color: "Positive" },
			{ text: "+50% clip size", color: "Positive" },
			{ text: "+100% max secondary ammo on wearer", color: "Positive" },
			{ text: "-50% damage penalty", color: "Negative" },
			{ text: "20% less accurate", color: "Negative" },
		]
	},
];

const soldier = 
[
	{ 
		id: "Freds Website/items/multi/Vintimille.png", 
		name: "The Vintimille", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3131465908",
		stats: 
		[
			{ text: "+120% damage bonus", color: "Positive" },
			{ text: "20% more accurate", color: "Positive" },
			{ text: "-50% bullets per shot", color: "Negative" },
			{ text: "15% slower firing speed", color: "Negative" },
			{ text: "20% slower reload time", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/multi/Soft Soles.png", 
		name: "The Soft Soles", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Wearer never takes falling damage", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/Monroe Doctrine.png", 
		name: "The Monroe Doctrine", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3238530771",
		stats: 
		[
			{ text: "+35% damage bonus", color: "Positive" },
			{ text: "+35% explosion radius", color: "Positive" },
			{ text: "+15% self damage force", color: "Positive" },
			{ text: "Rockets travel in an arch", color: "Neutral" },
			{ text: "+30% damage to self", color: "Negative" },
			{ text: "-75% clip size", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/Hornet's Nest.png", 
		name: "The Hornet's Nest", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=875862228",
		stats: 
		[
			{ text: "+50% clip size", color: "Positive" },
			{ text: "Fires 2 rockets at the same time", color: "Positive" },
			{ text: "-40% damage penalty", color: "Negative" },
			{ text: "-20% blast radius", color: "Negative" },
			{ text: "+2 degrees random projectile deviation", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/multi/Lead Barrel.png", 
		name: "The Lead Barrel", 
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2485133469",
		quantity: 1, 
		quality: "Haunted",
		stats: 
		[
			{ text: "Gain 4 random attributes on respawn", color: "Positive" },
			{ text: "Holiday Restriction: Halloween / Full Moon", color: "Negative" },
			{ text: "In the future, Weapons will be randomly generated!", color: "Description" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/Double Trouble.png", 
		name: "The Double Trouble", 
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3377417391",
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "+50% bullets per shot", color: "Positive" },
			{ text: "+30% faster firing speed", color: "Positive" },
			{ text: "Knockback on the target and shooter", color: "Positive" },
			{ text: "Alt-Fire: Fires a Meathook, which launches you toward the target", color: "Positive" },
			{ text: "Weapon spread increases as health decreases", color: "Negative" },
			{ text: "-67% clip size penalty", color: "Negative" },
		]
	},
];

const pyro = 
[
	{ 
		id: "Freds Website/items/multi/Vintimille.png", 
		name: "The Vintimille", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3131465908",
		stats: 
		[
			{ text: "+120% damage bonus", color: "Positive" },
			{ text: "20% more accurate", color: "Positive" },
			{ text: "-50% bullets per shot", color: "Negative" },
			{ text: "15% slower firing speed", color: "Negative" },
			{ text: "20% slower reload time", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/Ice Breaker.png", 
		name: "Ice Breaker", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=113310453",
		stats: 
		[
			{ text: "On Hit: Freeze target for 8 seconds", color: "Positive" },
			{ text: "50% fire damage dealt to frozen targets is returned as health", color: "Positive" },
			{ text: "-24% damage penalty", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/multi/Lead Barrel.png", 
		name: "The Lead Barrel", 
		quantity: 1, 
		quality: "Haunted",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2485133469",
		stats: 
		[
			{ text: "Gain 4 random attributes on respawn", color: "Positive" },
			{ text: "Holiday Restriction: Halloween / Full Moon", color: "Negative" },
			{ text: "In the future, Weapons will be randomly generated!", color: "Description" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/Double Trouble.png", 
		name: "The Double Trouble", 
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3377417391",
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "+50% bullets per shot", color: "Positive" },
			{ text: "+30% faster firing speed", color: "Positive" },
			{ text: "Knockback on the target and shooter", color: "Positive" },
			{ text: "Alt-Fire: Fires a Meathook, which launches you toward the target", color: "Positive" },
			{ text: "Weapon spread increases as health decreases", color: "Negative" },
			{ text: "-67% clip size penalty", color: "Negative" },
		]
	},
];

const demoman = 
[
	{ 
		id: "Freds Website/items/multi/Soft Soles.png", 
		name: "The Soft Soles", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Wearer never takes falling damage", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/demo/Primed Directive.png", 
		name: "The Primed Directive", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1439260629",
		stats: 
		[
			{ text: "Hold down primary fire to prevent detonation", color: "Neutral" },
			{ text: "Explosion detonates your own projectiles and destroys enemy stickybombs", color: "Positive" },
			{ text: "-75% clip size", color: "Negative" },
			{ text: "-15% projectile speed", color: "Negative" },
		]
	},
];

const heavy = 
[
	{ 
		id: "Freds Website/items/multi/Vintimille.png", 
		name: "The Vintimille", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3131465908",
		stats: 
		[
			{ text: "+120% damage bonus", color: "Positive" },
			{ text: "20% more accurate", color: "Positive" },
			{ text: "-50% bullets per shot", color: "Negative" },
			{ text: "15% slower firing speed", color: "Negative" },
			{ text: "20% slower reload time", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/multi/Lead Barrel.png", 
		name: "The Lead Barrel", 
		quantity: 1, 
		quality: "Haunted",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2485133469",
		stats: 
		[
			{ text: "Gain 4 random attributes on respawn", color: "Positive" },
			{ text: "Holiday Restriction: Halloween / Full Moon", color: "Negative" },
			{ text: "In the future, Weapons will be randomly generated!", color: "Description" },
		]
	},
];

const engineer = 
[
	{ 
		id: "Freds Website/items/multi/Vintimille.png", 
		name: "The Vintimille", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3131465908",
		stats: 
		[
			{ text: "+120% damage bonus", color: "Positive" },
			{ text: "20% more accurate", color: "Positive" },
			{ text: "-50% bullets per shot", color: "Negative" },
			{ text: "15% slower firing speed", color: "Negative" },
			{ text: "20% slower reload time", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/multi/Gambit.png", 
		name: "The Gambit", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2933504975",
		stats: 
		[
			{ text: "50% faster firing speed", color: "Positive" },
			{ text: "+50% clip size", color: "Positive" },
			{ text: "+100% max secondary ammo on wearer", color: "Positive" },
			{ text: "-50% damage penalty", color: "Negative" },
			{ text: "20% less accurate", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/multi/Lead Barrel.png", 
		name: "The Lead Barrel", 
		quantity: 1, 
		quality: "Haunted",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2485133469",
		stats: 
		[
			{ text: "Gain 4 random attributes on respawn", color: "Positive" },
			{ text: "Holiday Restriction: Halloween / Full Moon", color: "Negative" },
			{ text: "In the future, Weapons will be randomly generated!", color: "Description" },
		]
	},
	{ 
		id: "Freds Website/items/engineer/Scrap Sentinel.png", 
		name: "The Scrap Sentinel", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=673352097",
		stats: 
		[
			{ text: "Replaces the Sentry with a Sentry-Drone that follows the player", color: "Positive" },
			{ text: "Sentry gun cannot be upgraded", color: "Negative" },
			{ text: "-15 max health on wearer", color: "Negative" },
		]
	},
];

const medic = 
[
	{ 
		id: "Freds Website/items/medic/Anesthetizer.png", 
		name: "The Anesthetizer", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2822325393",
		stats: 
		[
			{ text: "Attach to an enemy to drain health", color: "Positive" },
			{ text: "Helaing also heals you at 25% effeciency", color: "Positive" },
			{ text: "Übercharge explodes you and your enemies!", color: "Neutral" },
			{ text: "-20% heal rate", color: "Negative" },
			{ text: "-25 max health on wearer", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/medic/Hypodermic Injector.png", 
		name: "The Hypodermic Injector", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=433097312",
		stats: 
		[
			{ text: "On Hit Teammate: Heal +75 health", color: "Positive" },
			{ text: "On Hit: Bleed for 10 seconds", color: "Positive" },
			{ text: "-20% damage penalty", color: "Negative" },
			{ text: "-20% slower firing speed", color: "Negative" },
		]
	},
];

const sniper = 
[
	{ 
		id: "Freds Website/items/sniper/Usurper.png", 
		name: "The Usurper", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3367685493",
		stats: 
		[
			{ text: "Crits on headshot", color: "Positive" },
			{ text: "+20% clip size", color: "Positive" },
			{ text: "+15 max health on wearer", color: "Positive" },
			{ text: "+20% max secondary ammo on wearer", color: "Positive" },
			{ text: "-88% max primary ammo on wearer", color: "Negative" },
			{ text: "Critical damage is affected by range", color: "Negative" },
		]
	},
];

const spy = 
[
	{ 
		id: "Freds Website/items/spy/En Passant.png", 
		name: "The En Passant", 
		quantity: 1, 
		quality: "Unique",
		url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2854346396",
		stats: 
		[
			{ text: "On a successful sidestab: +1 speed bonus and decloak time bonus (stacks up to 3)", color: "Positive" },
			{ text: "An unsuccessful sidestab resets all bonuses", color: "Negative" },
			{ text: "1.5 sec longer cloak blink", color: "Negative" },
		]
	},
];