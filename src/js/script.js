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
  const masteryRequiredXP = treeElement.querySelector("#mastery-required-xp");
  const masteryCurrentXP = treeElement.querySelector("#mastery-xp");
  const masteryLevel = treeElement.querySelector("#mastery-xp");


  const newItem = tree.itemReward.item;
  const itemArray = Skill.Woodcutting.totalItems;



  Skill.Woodcutting.currentXP += tree.xpReward;
  tree.masteryXP += calcMasteryXPRewardTree(treeElement);

  masteryRequiredXP.innerHTML = calcReqMasteryXP(treeElement);
  masteryCurrentXP.innerHTML = Math.floor(tree.masteryXP);

  progressBar.style.transition = 'none';
  progressBar.style.width = "0%";


  setTimeout(() => {

      startCutting(treeElement);

  }, 20);
  

}