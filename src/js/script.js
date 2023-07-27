
function transferItemToInv(item, amount){

  const playerInventory = player.inventory;
  const existingItem = playerInventory.find((invItem) => invItem.item === item.item);


  if (!playerInventory.includes(item)) {
    item.amount = 0;
    item.amount += amount;
    playerInventory.push(item);
  }else{
    existingItem.amount += amount;
  }


}

function calcReqMasteryXP(treeElement){
  const progressBar = treeElement.querySelector(".progress-bar");
  const attr = progressBar.getAttribute('data-xp-reward');
  const tree = Skill.Woodcutting.Trees[attr];

  const level = tree.masteryLevel;
  const requiredXP = masteryRequiredXP[level];

  return requiredXP;


}

function calcMasteryXPRewardTree(treeElement){

  const progressBar = treeElement.querySelector(".progress-bar");
  const attr = progressBar.getAttribute('data-xp-reward');
  const tree = Skill.Woodcutting.Trees[attr];

  const trees = Skill.Woodcutting.Trees;

  const totalItems = Object.keys(trees).length;
  const itemMasteryLevel = tree.masteryLevel;
  const playerMastery = Skill.Woodcutting.currentMastery;
  const totalMastery = Object.keys(trees).length * 99;
  const chopTime = tree.chopTime / 1000;

  const v1 = playerMastery / totalMastery;
  const v2 = totalItems / 10;
  const v3 = itemMasteryLevel * v2;
  const v4 = v1 + v3;
  const v5 = v4 * chopTime;
  const v6 = v5 * 0.5;
  const v7 = v6 * 1; //Add multiplier here

  return(v7);

}



function startCutting(treeElement) {
  const progressBar = treeElement.querySelector(".progress-bar");
  const attr = progressBar.getAttribute('data-xp-reward');
  const tree = Skill.Woodcutting.Trees[attr];

  const chopTime = tree.chopTime;

  progressBar.style.transition = `width ${chopTime}ms linear`;
  progressBar.style.width = "100%";

  setTimeout(() => {

    finishCut(treeElement, attr, tree)

}, chopTime);

  


}

function finishCut(treeElement, attr, tree){

  //Set level text and other stuff
  const progressBar = treeElement.querySelector(".progress-bar");
  const masteryProgressBar = treeElement.querySelector(".bg-mastery");
  const masteryRequiredXP = treeElement.querySelector("#mastery-required-xp");
  const masteryCurrentXP = treeElement.querySelector("#mastery-xp");
  const masteryLevel = treeElement.querySelector("#mastery-xp");


  const itemReward = tree.itemReward;
  const item = itemReward.item;
  const selectedLog = Items.Woodcutting.Logs[item];

  //check for completion
  if(!selectedLog.completed){
    Items.completedItems += 1;
    selectedLog.completed = true;
  }
  //transfer item
  transferItemToInv(selectedLog, Skill.Woodcutting.logAmount);
  
  //add xp to woodcut skill
  Skill.Woodcutting.currentXP += tree.xpReward;
  //add mastery xp to log
  tree.masteryXP += calcMasteryXPRewardTree(treeElement);

  masteryRequiredXP.innerHTML = calcReqMasteryXP(treeElement);
  masteryCurrentXP.innerHTML = Math.floor(tree.masteryXP);

  progressBar.style.transition = 'none';
  progressBar.style.width = "0%";

  //set mastery progress
  const percent = tree.masteryXP / tree.requiredMasteryXP * 100;
  console.log(percent)
  masteryProgressBar.style.width = percent + "%";

  setTimeout(() => {

      startCutting(treeElement);

  }, 20);
  

}