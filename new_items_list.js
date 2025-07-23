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
		stats: 
		[
			{ text: "+50% clip size", color: "Positive" },
			{ text: "Fires 2 rockets at the same time", color: "Positive" },
			{ text: "-40% damage penalty", color: "Negative" },
			{ text: "-20% blast radius", color: "Negative" },
			{ text: "+2 degrees random projectile deviation", color: "Negative" },
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
		stats: 
		[
			{ text: "On Hit: Freeze target for 8 seconds", color: "Positive" },
			{ text: "50% fire damage dealt to frozen targets is returned as health", color: "Positive" },
			{ text: "-24% damage penalty", color: "Negative" },
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
		stats: 
		[
			{ text: "+120% damage bonus", color: "Positive" },
			{ text: "20% more accurate", color: "Positive" },
			{ text: "-50% bullets per shot", color: "Negative" },
			{ text: "15% slower firing speed", color: "Negative" },
			{ text: "20% slower reload time", color: "Negative" },
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

const medic = 
[
	{ 
		id: "Freds Website/items/medic/Anesthetizer.png", 
		name: "The Anesthetizer", 
		quantity: 1, 
		quality: "Unique",
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
];

const spy = 
[
	{ 
		id: "Freds Website/items/spy/En Passant.png", 
		name: "The En Passant", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "On a successful sidestab: +1 speed bonus and decloak time bonus (stacks up to 3)", color: "Positive" },
			{ text: "An unsuccessful sidestab resets all bonuses", color: "Negative" },
			{ text: "1.5 sec longer cloak blink", color: "Negative" },
		]
	},
];