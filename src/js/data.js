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


let Items = {

  completedItems: 0,
  totalItems: 7,

  Combat: {

  },

  Cooking: {

  },

  Crafting: {

  },

  Dungeon: {

  },

  Event: {


  },

  Farming: {

  },

  Firemaking: {

  },

  Fishing: {

  },

  Fletching: {

  },

  Herblore: {

  },

  Mining: {

  },

  Misc: {

  },

  Runecrafting: {

  },

  Smithing: {

  },

  Summoning: {

  },

  Thieving: {

  },

  Woodcutting: {

    Equipment: {

    },

    Logs: {

      OakLog: {

        name: 'Oak Log',
        media: '',
        price: 5,
        requiredCompletion: true,
        completed: false,

      },

      PineLog: {

        name: 'Pine Log',
        media: '',
        price: 10,
        requiredCompletion: true,
        completed: false,

      },

      WillowLog: {

        name: 'Willow Log',
        media: '',
        price: 20,
        requiredCompletion: true,
        completed: false,

      },
      MapleLog: {

        name: 'Maple Log',
        media: '',
        price: 35,
        requiredCompletion: true,
        completed: false,

      },
      YewLog: {

        name: 'Yew Log',
        media: '',
        price: 50,
        requiredCompletion: true,
        completed: false,

      },
      MagicLog: {

        name: 'Magic Log',
        media: '',
        price: 400,
        requiredCompletion: true,
        completed: false,

      },
      RedwoodLog: {

        name: 'Redwood Log',
        media: '',
        price: 25,
        requiredCompletion: true,
        completed: false,

      },


    },



  }


}

let Skill = {
  Woodcutting: {
    Level: 1,
    currentXP: 0,
    xpToLevel: 50,
    logAmount: 1,
    currentMastery: 1,
    totalMastery: 7,
    Trees: {
      Oak: {
        xpReward: 10,
        chopTime: 3000,
        itemReward: {
          name: "Oak Log",
          item: "OakLog",
        },
        masteryXP: 0,
        requiredMasteryXP: 83,
        masteryLevel: 1
      },
      Pine: {
        xpReward: 15,
        chopTime: 4000,
        itemReward: {
          name: "Pine Log",
          item: "PineLog",
        },
        requiredMasteryXP: 83,
        masteryXP: 0,
        masteryLevel: 1
      },
      Willow: {
        xpReward: 25,
        chopTime: 5000,
        itemReward: {
          name: "Willow Log",
          item: "WillowLog",
        },
        requiredMasteryXP: 83,
        masteryXP: 0,
        masteryLevel: 1
      },
      Maple: {
        xpReward: 40,
        chopTime: 6000,
        itemReward: {
          name: "Maple Log",
          item: "MapleLog",
        },
        requiredMasteryXP: 83,
        masteryXP: 0,
        masteryLevel: 1
      },
      Yew: {
        xpReward: 75,
        chopTime: 8000,
        itemReward: {
          name: "Yew Log",
          item: "YewLog",
        },
        requiredMasteryXP: 83,
        masteryXP: 0,
        masteryLevel: 1
      },
      Magic: {
        xpReward: 100,
        chopTime: 10000,
        itemReward: {
          name: "Magic Log",
          item: "MagicLog",
        },
        requiredMasteryXP: 83,
        masteryXP: 0,
        masteryLevel: 0
      },
      Redwood: {
        xpReward: 150,
        chopTime: 12000,
        itemReward: {
          name: "Redwood Log",
          item: "RedwoodLog",
        },
        requiredMasteryXP: 83,
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