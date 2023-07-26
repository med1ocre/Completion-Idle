let player = {

	inventory:[],
	equipment:{

		head: null,
		chest: null,
		legs: null,
		feet: null,
		hands: null,
		primary: null,
		secondary: null,
		neck: null,
		ring: null

	}

}


let Skill = {
  Woodcutting: {
    Level: 1,
    currentXP: 0,
    xpToLevel: 50,
    currentMastery: 1,
    totalMastery: 7,
    Trees: {
      Oak: {
        xpReward: 10,
        chopTime: 3000,
        itemReward: {
          name: "Oak Log",
          item: "oakLog",
        },
        masteryXP: 0,
        masteryLevel: 1
      },
      Pine: {
        xpReward: 15,
        chopTime: 4000,
        itemReward: {
          name: "Pine Log",
          item: "pineLog",
        },
        masteryXP: 0,
        masteryLevel: 1
      },
      Willow: {
        xpReward: 25,
        chopTime: 5000,
        itemReward: {
          name: "Willow Log",
          item: "willowLog",
        },
        masteryXP: 0,
        masteryLevel: 1
      },
      Maple: {
        xpReward: 40,
        chopTime: 6000,
        itemReward: {
          name: "Maple Log",
          item: "mapleLog",
        },
        masteryXP: 0,
        masteryLevel: 1
      },
      Yew: {
        xpReward: 75,
        chopTime: 8000,
        itemReward: {
          name: "Yew Log",
          item: "yewLog",
        },
        masteryXP: 0,
        masteryLevel: 1
      },
      Magic: {
        xpReward: 100,
        chopTime: 10000,
        itemReward: {
          name: "Magic Log",
          item: "magicLog",
        },
        masteryXP: 0,
        masteryLevel: 0
      },
      Redwood: {
        xpReward: 150,
        chopTime: 12000,
        itemReward: {
          name: "Redwood Log",
          item: "redwoodLog",
        },
        masteryXP: 0,
        masteryLevel: 1
      }
    }
  }
};

const masteryRequiredXP = [
  0, 83, 174, 276, 388, 512, 650, 801, 969, 1154, 1358, 1584, 1833, 2107, 2411, 2746,
  3115, 3523, 3973, 4470, 5018, 5624, 6291, 7028, 7842, 8740, 9730, 10824, 12031,
  13363, 14833, 16456, 18247, 20224, 22406, 24815, 27473, 30408, 33648, 37224, 41171,
  45529, 50339, 55649, 61512, 67983, 75127, 83014, 91721, 101333, 111945, 123660, 136594,
  150872, 166636, 184040, 203254, 224466, 247886, 273742, 302288, 333804, 368599, 407015,
  449428, 496254, 547953, 605032, 668051, 737627, 814445, 899257, 992895, 1096278, 1210421,
  1336443, 1475581, 1629200, 1798808, 1986068, 2192818, 2421087, 2673114, 2951373, 3258594,
  3597792, 3972294, 4385776, 4842295, 5346332, 5902831, 6517253, 7195629, 7944614, 8771558,
  9684577, 10692629, 11805606, 13034431, 14391160
];


let oakTreeCurrentXPDisplay = document.getElementById("oak-mastery-xp");
let oakTreeRequiredXPDisplay = document.getElementById("oak-mastery-required-xp");


//This is our temp var we use as a "skeleton" when exchanging item info
let Item;