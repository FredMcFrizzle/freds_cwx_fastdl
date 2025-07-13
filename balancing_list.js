const attributeColors = {
  Neutral: '#EBE2CA',
  Positive: '#99CCFF',
  Negative: '#FF4040'
};
const scout = 
[
	{ 
		id: "Freds Website/items/scout/icon/Baby Face's Blaster.png", 
		name: "Baby Face's Blaster", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Speed boost penalty for getting hit reduced from 4% to 1%", color: "Positive" },
			{ text: "Increased movement speed penalty from 10% to 20%", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/scout/icon/Back Scatter.png", 
		name: "The Back Scatter", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "20% less accurate changed to 20% more accurate", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/scout/icon/Candy Cane.png", 
		name: "The Candy Cane", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
		{ text: "+100% health from packs on wearer", color: "Positive" },
		{ text: "-100% maximum overheal on wearer", color: "Negative" },
		{ text: "-15 max health on wearer", color: "Negative" },
		{ text: "Removed:", color: "Neutral" },
		{ text: "25% explosion vulnerability", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/scout/icon/Mad Milk.png", 
		name: "Mad Milk", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Resupply does not affect Milk meter", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/scout/icon/Flying Guillotine.png", 
		name: "Mad Milk", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+50% damage vs stunned players", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased charge timer from 5 seconds to 7 seconds", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/scout/icon/Sandman.png", 
		name: "The Sandman", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Sandman's baseballs always critical hit", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Decreased recharge time from 10 seconds to 7 seconds", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/scout/icon/Shortstop.png", 
		name: "The Shortstop", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+15% faster reload speed", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/scout/icon/Sun-on-a-Stick.png", 
		name: "The Sun-on-a-Stick", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "-25% damage vs non-burning players", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "-25% damage penalty", color: "Negative" },
		]
	},
];

const soldier = 
[
	{ 
		id: "Freds Website/items/soldier/icon/Air strike.png", 
		name: "The Air strike", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+15% faster reload time", color: "Positive" },
			{ text: "-15% slower projectile speed", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "-15% blast damage from rocket jumps", color: "Positive" },
			{ text: "-10% explosion radius", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/icon/Buff Banner.png", 
		name: "The Buff Banner", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+25% max primary ammo on wearer", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/icon/Disciplinary Action.png", 
		name: "The Disciplinary Action", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "On Hit: Gain a small speed boost for 3 seconds", color: "Positive" },
			{ text: "This weapon deploys and holsters slower", color: "Negative" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased damage penalty from -25% to -30%", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/icon/Righteous Bison.png", 
		name: "The Righteous Bison", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+35% faster projectile speed", color: "Positive" },
			{ text: "+45% damage bonus", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/icon/Liberty Launcher.png", 
		name: "The Liberty Launcher", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+30% more explosion knockback", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Decreased blast damage from rocket jumps from -25% to -35%", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/icon/Mantreads.png", 
		name: "The Mantreads", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+15% faster move speed on wearer", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/icon/Market Gardener.png", 
		name: "The Market Gardener", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+2% damage bonus", color: "Positive" },
			{ text: "Weapon glows while blast jumping", color: "Neutral" },
		]
	},
	{ 
		id: "Freds Website/items/soldier/icon/Original.png", 
		name: "The Original", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "New Stats:", color: "Neutral" },
			{ text: "No Clip", color: "Positive" },
			{ text: "-35% damage penalty", color: "Negative" },
			{ text: "-20% max primary ammo on wearer", color: "Negative" },
		]
	},
];

const pyro = 
[
	{ 
		id: "Freds Website/items/pyro/icon/Axtinguisher.png", 
		name: "The Axtinguisher", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Decreased damage penalty from -33% to -25%", color: "Positive" },
			{ text: "Decreased weapon holster time from 35% to 25% slower", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Back Scratcher.png", 
		name: "The Back Scratcher", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "On Kill: Gain 20% of base health", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Degreaser.png", 
		name: "The Degreaser", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Afterburn damage penalty decreased from -66% to -50%", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Detonator.png", 
		name: "The Detonator", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+15% self damage force", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Gas Passer.png", 
		name: "The Gas Passer", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Gas covered enemies explode on ignite", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Recharge time changed from 60 seconds to 45 seconds", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Manmelter.png", 
		name: "The Manmelter", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+35% damage bonus vs burning players", color: "Positive" },
			{ text: "Projectiles home toward burning players and dont arch", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Decreased projectile speed from +50% to -20%", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Neon Annihilator.png", 
		name: "The Neon Annihilator", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Water doesn't slow wearer", color: "Positive" },
			{ text: "Wearer is immune to being wet", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased damage penalty from 20% to 23%", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "Damage removes sappers", color: "Positive" },
		]
	},
	{	 
		id: "Freds Website/items/pyro/icon/Powerjack.png", 
		name: "The Powerjack", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased movement speed while active from +15% to +20%", color: "Positive" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "+25 health on kill", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Scorch Shot.png", 
		name: "The Scorch Shot", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Removed:", color: "Neutral" },
			{ text: "+100% mini-crits vs burning players", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Sharpened Volcano Fragment.png", 
		name: "Sharpened Volcano Fragment", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+100% mini-crits vs burning players", color: "Positive" },
			{ text: "-35% damage penalty vs non-burning players", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "-20% damage penalty", color: "Negative" },
		]
	},	
	{ 
		id: "Freds Website/items/pyro/icon/Thermal Thruster.png", 
		name: "The Thermal Thruster", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Able to re-launch while already in flight", color: "Positive" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "hidden 0.8 second holster time", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Third Degree.png", 
		name: "The Third Degree", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "100% mini-crits from behind", color: "Positive" },
			{ text: "+15% damage vs burning players", color: "Positive" },
			{ text: "-35% damage vs non-burning players", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/pyro/icon/Hot Hand.png", 
		name: "The Hot Hand", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Removed:", color: "Neutral" },
			{ text: "-20% damage penalty", color: "Negative" },
		]
	},
];

const demoman = 
[
	{ 
		id: "Freds Website/items/demo/icon/Ali Baba's Wee Booties.png", 
		name: "Ali Baba's Wee Booties", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "New Stats:", color: "Neutral" },
			{ text: "-40% blast damage from explosive jumping", color: "Positive" },
			{ text: "+400% increase in turning control while charging", color: "Positive" },
			{ text: "+15% max health on wearer", color: "Positive" },
			{ text: "+7% faster move speed on wearer (shield required)", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Bootlegger.png", 
		name: "The Bootlegger", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Altered footstep sound effect to sound more peglegged", color: "Neutral" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Chargin' Targe.png", 
		name: "The Chargin' Targe", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+75% increase in charge impact damage", color: "Positive" },
			{ text: "+33% increase in charge recharge rate", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Claidheamh Mor.png", 
		name: "The Claidheamh Mor", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "-15 max health on wearer", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "While weapon is active", color: "Neutral" },
			{ text: "-15% damage vulnerability on wearer", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Loose Cannon.png", 
		name: "The Loose Cannon", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "-20% blast damage from explosive jumping", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Scotsman's Skullcutter.png", 
		name: "The Scotsman's Skullcutter", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Melee attacks hit all enemies in range", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Scottish Handshake.png", 
		name: "The Scottish Handshake", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "New Stats:", color: "Neutral" },
			{ text: "Deals crits while the wielder is blast jumping", color: "Positive" },
			{ text: "+2% damage bonus", color: "Positive" },
			{ text: "Weapon glows while blast jumping", color: "Neutral" },
			{ text: "-20% slower firing speed", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Scottish Resistance.png", 
		name: "The Scottish Resistance", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+15% faster reload time", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Splendid Screen.png", 
		name: "The Splendid Screen", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "New Stats:", color: "Neutral" },
			{ text: "75% reduction in push force taken from airblast", color: "Positive" },
			{ text: "50% reduction in push force taken from damage", color: "Positive" },
			{ text: "+66% increase in charge recharge rate", color: "Positive" },
			{ text: "+30% bullet damage resistance", color: "Positive" },
			{ text: "Attacking doesnt cancel charge", color: "Positive" },
			{ text: "Crits only after impact", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Ullapool Caber.png", 
		name: "The Ullapool Caber", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Caber becomes re-armed after 30 seconds or on kill", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Nessie's Nine Iron.png", 
		name: "Nessie's Nine Iron", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "New Stats:", color: "Neutral" },
			{ text: "+100% Knockback on target", color: "Positive" },
			{ text: "This weapon has a longer melee range and deploys slower", color: "Neutral" },
			{ text: "20% slower firing speed", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/demo/icon/Loch-n-Load.png", 
		name: "The Loch-n-Load", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Mini-crits targets launched airborne by explosions, grapple hooks or rocket packs", color: "Positive" },
		]
	},
];

const heavy = 
[
	{ 
		id: "Freds Website/items/heavy/icon/Brass Beast.png", 
		name: "The Brass Beast", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased damage bonus from 20% to 30%", color: "Positive" },
			{ text: "Increased damage resistance when spun up and below 50% health from 20% to 35%", color: "Positive" },
			{ text: "Increased move speed penalty while active from 60% to 100%", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Buffalo Steak Sandvich.png", 
		name: "The Buffalo Steak Sandvich", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+33% faster recharge rate", color: "Positive" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "+20% damage vulernability while active", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Dalokohs Bar.png", 
		name: "The Dalokohs Bar", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+57% faster recharge rate", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Eviction Notice.png", 
		name: "The Eviction Notice", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Decreased damage penalty from 60% to 50%", color: "Positive" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "+15% faster move speed on wearer", color: "Positive" },
			{ text: "Maximum health is drained while item is active", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Family Business.png", 
		name: "The Family Business", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+20% faster reload speed", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased damage penalty from 15% to 20%", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Holiday Punch.png", 
		name: "The Holiday Punch", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+20% faster firing speed", color: "Positive" },
			{ text: "-26% damage penalty", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Huo-Long Heater.png", 
		name: "The Huo-Long Heater", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "100% mini-crits vs burning players", color: "Positive" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "+25% damage bonus vs burning players", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Killing Gloves of Boxing.png", 
		name: "The Killing Gloves of Boxing", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Killing the same class gives +1 to your combo which increases fire rate. (stacks up to 3)", color: "Positive" },
			{ text: "Killing an enemy while under the effects of a lunchbox item will reset the duration of the effect.", color: "Positive" },
			{ text: "Killing an enemy restores 25% of base health", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "fire rate penalty increased from -20% to -30%", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "On Kill: 5 seconds of 100% critical chance", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Natascha.png", 
		name: "Natascha", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "On Hit: Gain a speed boost for 1 second", color: "Positive" },
			{ text: "+25% faster move speed while deployed", color: "Positive" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "+20% damage resistance when below 50% health and spun up", color: "Positive" },
			{ text: "On Hit: 100% chance to slow target", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Sandvich.png", 
		name: "The Sandvich", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased health healed from 300hp to 400hp", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Second Banana.png", 
		name: "The Second Banana", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+25% faster consuption rate", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/heavy/icon/Warrior's Spirit.png", 
		name: "The Warrior's Spirit", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "-50% maximum overheal on wearer", color: "Negative" },
			{ text: "This weapon deploys 50% slower", color: "Negative" },
			{ text: "This weapon holsters 75% slower", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "While weapon is active", color: "Neutral" },
			{ text: "30% damage vulnerability on wearer", color: "Negative" },
		]
	},
];

const engineer = 
[
	{ 
		id: "Freds Website/items/engineer/icon/Eureka Effect.png", 
		name: "The Eureka Effect", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Removed:", color: "Neutral" },
			{ text: "20% less metal from pickups and dispensers", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/engineer/icon/Jag.png", 
		name: "The Jag", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Decreased repair rate from -20% to -33%", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/engineer/icon/Pomson 6000.png", 
		name: "The Pomson 6000", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+100% faster projectile speed", color: "Positive" },
			{ text: "+25% damage bonus", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased reload speed to match shotgun", color: "Positive" },
			{ text: "Increased fire rate to match shotgun", color: "Positive" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "On Hit: Victim loses up to 20% cloak", color: "Negative" },
			{ text: "On Hit: Victim loses up to 10% medigun charge", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/engineer/icon/Short Circuit.png", 
		name: "The Short Circuit", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+50% damage bonus (primary fire)", color: "Positive" },
			{ text: "+100% self damage force", color: "Positive" },
			{ text: "-100% damage to self", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/engineer/icon/Southern Hospitality.png", 
		name: "The Southern Hospitality", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "New Stats:", color: "Neutral" },
			{ text: "+50% dispenser range", color: "Positive" },
			{ text: "+25% faster dispenser heal / metal rate", color: "Positive" },
			{ text: "Sentries you build are smaller but require less metal to upgrade", color: "Neutral" },
			{ text: "-50% sentry gun damage", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/engineer/icon/Widowmaker.png", 
		name: "The Widowmaker", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased damage to sentry target from 10% to 20%", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/engineer/icon/Wrangler.png", 
		name: "The Wrangler", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Removed:", color: "Neutral" },
			{ text: "Wrangled sentries gain a shield that reduces damage and repairs by 66%", color: "Neutral" },
		]
	},
];

const medic = 
[
	{ 
		id: "Freds Website/items/medic/icon/Amputator.png", 
		name: "The Amputator", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Taunt can be canceled by moving", color: "Positive" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "While weapon is active", color: "Neutral" },
		]
	},
	{ 
		id: "Freds Website/items/medic/icon/Blutsauger.png", 
		name: "The Blutsauger", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "On Hit: Mad Milk target up to a max of 4 seoconds", color: "Positive" },
			{ text: "-30% damage penalty", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "On Hit: Gain up to +3 health", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/medic/icon/Crusader's Crossbow.png", 
		name: "Crusader's Crossbow", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased max ammo penalty from -75% to -90%", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/medic/icon/Overdose.png", 
		name: "The Overdose", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "On Hit: Gain a speed boost for 2 seconds", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/medic/icon/Solemn Vow.png", 
		name: "The Solemn Vow", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+33% health from packs on wearer", color: "Positive" },
			{ text: "-66% health from healers on wearer", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "-10% slower firing speed", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/medic/icon/Ubersaw.png", 
		name: "The Ubersaw", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Wearer cannot be healed while weapon is active", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/medic/icon/Vaccinator.png", 
		name: "The Vaccinator", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Overheal build rate increased from -66% to -33%", color: "Positive" },
			{ text: "Übercharge now gives all resistances", color: "Positive" },
			{ text: "Übercharge damage resistances decreased from 75% to 50%", color: "Negative" },
			{ text: "Decreased Übercharges stored from 4 to 3", color: "Negative" },
		]
	},
];

const sniper = 
[
	{ 
		id: "Freds Website/items/sniper/icon/Sniper Rifle.png", 
		name: "All Sniper Rifles", 
		quantity: 1, 
		quality: "Normal",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Weapon fires tracer rounds", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Bushwacka.png", 
		name: "The Bushwacka", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "This weapon deploys and holsters 50% slower", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Classic.png", 
		name: "The Classic", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+50% faster move speed while charging", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Cleaner's Carbine.png", 
		name: "The Cleaner's Carbine", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased charge meter time from 8 seconds to 12 seconds", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Darwin's Danger Shield.png", 
		name: "Darwin's Danger Shield", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "New Stats:", color: "Neutral" },
			{ text: "+15 max health on wearer", color: "Positive" },
			{ text: "+10% faster move speed on wearer", color: "Positive" },
			{ text: "33% critical hit damage vulnerability on wearer", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Fortified Compound.png", 
		name: "The Fortified Compound", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "New Stats:", color: "Neutral" },
			{ text: "Projectiles penetrate players", color: "Positive" },
			{ text: "-30% damage penalty", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Jarate.png", 
		name: "The Jarate", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Resupply does not affect Jarate meter", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Machina.png", 
		name: "The Machina", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased full charge shot damage from +15% to +20%", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Razorback.png", 
		name: "The Razorback", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "New Stats:", color: "Neutral" },
			{ text: "All damage taken from behind is absorbed by the Razorback", color: "Positive" },
			{ text: "The Razorback is immune to crit damage", color: "Positive" },
			{ text: "The Razorback breaks if it absorbed 100 damage", color: "Negative" },
			{ text: "-100% maximum overheal on wearer", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Sydney Sleeper.png", 
		name: "The Sydney Sleeper", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+10% headshot damage bonus", color: "Positive" },
			{ text: "Headshots and Full Charge shots make a small jarate explosion", color: "Positive" },
			{ text: "Mini-crits whenever it should normally crit", color: "Negative" },
			{ text: "Weapon fires tracer rounds", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "No Headshots", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/sniper/icon/Tribalman's Shiv.png", 
		name: "The Tribalman's Shiv", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "-50% damage to self", color: "Positive" },
			{ text: "On Miss: Hit yourself, Wanka!", color: "Negative" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Decreased damage penalty from -50% to -35%", color: "Positive" },
		]
	},
];

const spy = 
[
	{ 
		id: "Freds Website/items/spy/icon/Spy.png", 
		name: "The Spy", 
		quantity: 1, 
		quality: "Normal",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "Spy Walk: Holding Special Attack or Reload allows you to move at your max speed while disguised", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/spy/icon/Ambassador.png", 
		name: "The Ambassador", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "100% more accurate", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Decreased firing speed from -20% to -30%", color: "Negative" },
			{ text: "Removed:", color: "Neutral" },
			{ text: "Critical damage is affected by range", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/spy/icon/Diamondback.png", 
		name: "The Diamondback", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Decreased the max stored crits from 35 to 1", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/spy/icon/Enforcer.png", 
		name: "The Enforcer", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "On Kill: Instantly disguise as victim", color: "Positive" },
			{ text: "Changed:", color: "Neutral" },
			{ text: "Increased damage bonus while disguised from +20% to +35%", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/spy/icon/Red-Tape Recorder.png", 
		name: "The Red-Tape Recorder", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Added:", color: "Neutral" },
			{ text: "+50% sapper health bonus", color: "Positive" },
		]
	},
	{ 
		id: "Freds Website/items/spy/icon/Spy-Cicle.png", 
		name: "The Spy-Cicle", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Changed:", color: "Neutral" },
			{ text: "Regenerates after 5 seconds instead of 15", color: "Positive" },
			{ text: "Afterburn immunity decreased from 10 seconds to 2 seconds", color: "Negative" },
		]
	},
	{ 
		id: "Freds Website/items/spy/icon/Your Eternal Reward.png", 
		name: "Your Eternal Reward", 
		quantity: 1, 
		quality: "Unique",
		stats: 
		[
			{ text: "Removed:", color: "Neutral" },
			{ text: "+33% cloak drain rate", color: "Negative" },
		]
	},
];