const sunflower = {
    name: "Sunflower",
    isPlanted: true,
    stage: "Seed",
    water: 10,
    nutrients: 10,
    happiness: 10,
    waterGain: 5,
    nutrientGain: 10,
    seedCost: 0,
    harvestValue: 20,
}
const cactus = {
    name: "Cactus",
    isPlanted: true,
    stage: "Seed",
    water: 10,
    nutrients: 10,
    happiness: 10,
    waterGain: 15,
    nutrientGain: 5,
    seedCost: 15,
    harvestValue: 30,
}
const tulip = {
    name: "Tulip",
    isPlanted: true,
    stage: "Seed",
    water: 10,
    nutrients: 10,
    happiness: 10,
    waterGain: 5,
    nutrientGain: 20,
    seedCost: 30,
    harvestValue: 45,
}
const rose = {
    name: "Rose",
    isPlanted: true,
    stage: "Seed",
    water: 10,
    nutrients: 10,
    happiness: 10,
    waterGain: 5,
    nutrientGain: 5,
    seedCost: 50,
    harvestValue: 65,
}
const hyacinth = {
    name: "Hyacinth",
    isPlanted: true,
    stage: "Seed",
    water: 10,
    nutrients: 10,
    happiness: 10,
    waterGain: 3,
    nutrientGain: 3,
    seedCost: 80,
    harvestValue: 120,
}
const lily = {
    name: "Lily",
    isPlanted: true,
    stage: "Seed",
    water: 10,
    nutrients: 10,
    happiness: 10,
    waterGain: 2,
    nutrientGain: 2,
    seedCost: 100,
    harvestValue: 200,
}
const hibiscus = {
    name: "Hibiscus",
    isPlanted: true,
    stage: "Seed",
    water: 10,
    nutrients: 10,
    happiness: 10,
    waterGain: 1,
    nutrientGain: 1,
    seedCost: 150,
    harvestValue: 300,
}
const emptyPlot = {
    isPlanted: false,
    name: "",
    stage: "Empty",
    water: 0,
    nutrients: 0,
    happiness: 0,
    waterGain: 0,
    nutrientGain: 0,
    seedCost: 0,
    harvestValue: 0
};
let garden =[ { ...sunflower },{...emptyPlot}, {...emptyPlot}, {...emptyPlot}];
let coins = 0;
let selectedPlot = 0;
let assigningHose = false;
let hosePlots = [];
let assigningCompost = false;
let compostPlots = [];
let hoseCount = 0;
let compostCount = 0;
const hosePrices = [100, 150, 200, 250];
const compostPrices = [100, 150, 200, 250];
let totalHarvests = 0;
let plantsGrown = [];
const achievements = {
    firstPlant: {
        name: "🌱 First Seed",
        description: "Plant your first seed",
        unlocked: false
    },

    firstHarvest: {
        name: "🌻 First Harvest",
        description: "Harvest your first plant",
        unlocked: false
    },

    plantCollector: {
        name: "🌿 Plant Collector",
        description: "Grow 5 different plants",
        unlocked: false
    },
    littleGardener: {
        name: "🪙 Little Gardener",
        description: "Earn 100 coins",
        unlocked: false
    },
    plantExpert: {
        name: "🌸 Plant Expert",
        description: "Grow every kind of plant",
        unlocked: false
    },
    masterGardener: {
        name: "🌳 Master Gardener",
        description: "Harvest 25 plants",
        unlocked: false
    },
    gardenGuardian: {
        name: "🏡 Garden Guardian",
        description: "Have all 4 plots mature at once",
        unlocked: false
    }
};

const tips = [

    "🌻 Sunflowers are a great starter plant!",

    "🌵 Cactuses need less water than normal plants!",

    "🌷 Tulips don't need as much nutrients as other plants do!",

    "🪙 Save coins for upgrades early!",

    "💧 Garden Hoses water plants automatically!",

    "🌱 Compost Boxes automatically add nutrients!",

    "🏆 Try collecting every plant type!",

    "🌳 Four mature plants unlock a special achievement!"
];

let startTime = Date.now();
let gameCompleted = false;
let totalPlantsGrown = 0;


document.getElementById("plot0").addEventListener("click", () => selectPlot(0));
document.getElementById("plot1").addEventListener("click", () => selectPlot(1));
document.getElementById("plot2").addEventListener("click", () => selectPlot(2));
document.getElementById("plot3").addEventListener("click", () => selectPlot(3));



function calculateHappiness() {
    return Math.round((garden[selectedPlot].water + garden[selectedPlot].nutrients) / 2);
}

function updatePlantImage() {

    const plantImage = document.getElementById("plantImage");

    if (!garden[selectedPlot].isPlanted) {
        plantImage.src = "images/empty.jpeg";
        return;
    }
    if (garden[selectedPlot].stage === "Seed") {
        plantImage.src = "images/seed.jpeg";
    }

    else if (garden[selectedPlot].stage === "Sprout") {
        plantImage.src = "images/sprout.jpeg";
    }
    else if (garden[selectedPlot].stage === "Young") {

        if (garden[selectedPlot].name === "Sunflower") {
            plantImage.src = "images/youngsunflower.jpeg";
        }

        else if (garden[selectedPlot].name === "Cactus") {
            plantImage.src = "images/youngcactus.jpeg";
        }

        else if (garden[selectedPlot].name === "Tulip") {
            plantImage.src = "images/youngtulip.jpeg";
        }

        else if (garden[selectedPlot].name === "Rose") {
            plantImage.src = "images/youngrose.jpeg";
        }
        else if (garden[selectedPlot].name === "Hyacinth") {
                    plantImage.src = "images/younghyacinth.jpeg";
                }
        else if (garden[selectedPlot].name === "Lily") {
            plantImage.src = "images/younglily.jpeg";
        }
        else if (garden[selectedPlot].name === "Hibiscus") {
            plantImage.src = "images/younghibiscus.jpeg";
        }

    }
    else if (garden[selectedPlot].stage === "Mature") {

        if (garden[selectedPlot].name === "Sunflower") {
            plantImage.src = "images/maturesunflower.jpeg";
        }
        else if (garden[selectedPlot].name === "Cactus") {
            plantImage.src = "images/maturecactus.jpeg";
        }
        else if (garden[selectedPlot].name === "Tulip") {
            plantImage.src = "images/maturetulip.jpeg";
        }
        else if (garden[selectedPlot].name === "Rose") {
            plantImage.src = "images/maturerose.jpeg";
        }
        else if (garden[selectedPlot].name === "Hyacinth") {
            plantImage.src = "images/maturehyacinth.jpeg";
        }
        else if (garden[selectedPlot].name === "Lily") {
            plantImage.src = "images/maturelily.jpeg";
        }
        else if (garden[selectedPlot].name === "Hibiscus") {
            plantImage.src = "images/maturehibiscus.jpeg";
        }
    }
}    

//FUNCTIONS
function updateUI() {

    const plant = getPlant();

    document.getElementById("plantName").textContent = plant.name || "Empty Plot";
    document.getElementById("stage").textContent = plant.stage;
    document.getElementById("water").textContent = plant.water;
    document.getElementById("nutrients").textContent = plant.nutrients;
    document.getElementById("happiness").textContent = Math.round((plant.water + plant.nutrients) / 2);
    document.getElementById("coins").textContent = coins;

    updatePlantImage();
    updateGardenUI();
    highlightSelectedPlot();
    checkAchievements();
    updateAchievementsUI();
}

function updateGardenUI() {

    for (let i = 0; i < garden.length; i++) {

        const plant = garden[i];

        const image = document.getElementById("plotImage" + i);
        const name = document.getElementById("plotName" + i);
        const water = document.getElementById("plotWater" + i);
        const nutrients = document.getElementById("plotNutrients" + i);
        const happiness = document.getElementById("plotHappiness" + i);

        if (!plant.isPlanted) {

            image.src = "images/empty.jpeg";
            let plotName = "Empty Plot";

            if (hosePlots.includes(i)) {
                plotName = "💧 " + plotName;
            }
            if (compostPlots.includes(i)) {
                plotName = plotName + " 🌿";
            }
            
            name.textContent = plotName;
            water.textContent = "0";
            nutrients.textContent = "0";
            happiness.textContent = "0";

        }

        else {
            let plotName = plant.name;
            if (hosePlots.includes(i)) {
            plotName = "💧 " + plotName;
            }
            if (compostPlots.includes(i)) {
                plotName = plotName + " 🌿";
            }
            
            name.textContent = plotName;
                water.textContent = plant.water;
                nutrients.textContent = plant.nutrients;
                happiness.textContent = Math.round((plant.water + plant.nutrients) / 2);


            if (plant.stage === "Seed") {
                image.src = "images/seed.jpeg";
            }

            else if (plant.stage === "Sprout") {
                image.src = "images/sprout.jpeg";
            }

            else if (plant.stage === "Young") {

                if (plant.name === "Sunflower") {
                    image.src = "images/youngsunflower.jpeg";
                }
                else if (plant.name === "Cactus") {
                    image.src = "images/youngcactus.jpeg";
                }
                else if (plant.name === "Tulip") {
                    image.src = "images/youngtulip.jpeg";
                }
                else if (plant.name === "Rose") {
                    image.src = "images/youngrose.jpeg";
                }
                else if (plant.name === "Hyacinth") {
                    image.src = "images/younghyacinth.jpeg";
                }
                else if (plant.name === "Lily") {
                    image.src = "images/younglily.jpeg";
                }
                else if (plant.name === "Hibiscus") {
                    image.src = "images/younghibiscus.jpeg";
                }


            }

            else if (plant.stage === "Mature") {

                if (plant.name === "Sunflower") {
                    image.src = "images/maturesunflower.jpeg";
                }
                else if (plant.name === "Cactus") {
                    image.src = "images/maturecactus.jpeg";
                }
                else if (plant.name === "Tulip") {
                    image.src = "images/maturetulip.jpeg";
                }
                else if (plant.name === "Rose") {
                    image.src = "images/maturerose.jpeg";
                }
                else if (plant.name === "Hyacinth") {
                    image.src = "images/maturehyacinth.jpeg";
                }
                else if (plant.name === "Lily") {
                    image.src = "images/maturelily.jpeg";
                }
                else if (plant.name === "Hibiscus"){
                    image.src = "images/maturehibiscus.jpeg";
                }

            }
        }
    }
}

function getPlant() {
    return garden[selectedPlot];
}

function plantStage() {
    if (garden[selectedPlot].isPlanted == false) {
        return;
    }
   if (garden[selectedPlot].water >= 20 && garden[selectedPlot].nutrients >= 20 && garden[selectedPlot].stage === "Seed") {
        garden[selectedPlot].stage = "Sprout";
    }
    else if (garden[selectedPlot].water >= 50 && garden[selectedPlot].nutrients >= 50 && garden[selectedPlot].stage === "Sprout") {
        garden[selectedPlot].stage = "Young";
    }
    else if (garden[selectedPlot].water >= 80 && garden[selectedPlot].nutrients >= 80 && garden[selectedPlot].stage === "Young") {
        garden[selectedPlot].stage = "Mature";
    }     
}
function checkAchievements() {
    // 🌱 First Seed
    if (
        plantsGrown.length >= 1 &&
        achievements.firstPlant.unlocked === false
    ) {
        achievements.firstPlant.unlocked = true;
    }
    // 🌻 First Harvest
    if (
        totalHarvests >= 1 &&
        achievements.firstHarvest.unlocked === false
    ) {
        achievements.firstHarvest.unlocked = true;

    }
    // 🌿 Plant Collector
    if (
        plantsGrown.length >= 5 &&
        achievements.plantCollector.unlocked === false
    ) {
        achievements.plantCollector.unlocked = true;
    }
    // 🪙 Little Gardener
    if (
        coins >= 100 &&
        achievements.littleGardener.unlocked === false
    ) {
        achievements.littleGardener.unlocked = true;
    }
    // 🌸 Plant Expert
    if (
        plantsGrown.length >= 7 &&
        achievements.plantExpert.unlocked === false
    ) {
        achievements.plantExpert.unlocked = true;

    }
    // 🌳 Master Gardener
    if (
        totalHarvests >= 25 &&
        achievements.masterGardener.unlocked === false
    ) {
        achievements.masterGardener.unlocked = true;
    }
    // 🏡 Garden Guardian
    let allMature = true;
    for (let i = 0; i < garden.length; i++) {

        if (
            garden[i].isPlanted === false ||
            garden[i].stage !== "Mature"
        ) {
            allMature = false;
        }
    }
    if (
        allMature &&
        achievements.gardenGuardian.unlocked === false
    ) {
        achievements.gardenGuardian.unlocked = true;
        alert("🏆 Achievement Unlocked!\n🏡 Garden Guardian");
    }
}

function updateAchievementsUI() {

    const container = document.getElementById("achievements");
    let unlockedCount = 0;
    for (let key in achievements) {
        if (achievements[key].unlocked) {
            unlockedCount++;
        }
    }
    document.getElementById("achievementCount").textContent = `${unlockedCount}/7`;
    for (let key in achievements) {
        const achievement = achievements[key];
        const element = document.getElementById(key);
        if (achievement.unlocked) {
            if (!element.classList.contains("unlocked")) {

                element.classList.add("unlocked");
                element.classList.remove("locked");

                container.insertBefore(
                    element,
                    container.children[1]
                );
            }
        } else {
            element.classList.add("locked");
            element.classList.remove("unlocked");
        }
    }
}
// BUTTONS
const helpBtn = document.getElementById("helpBtn");
const helpModal = document.getElementById("helpModal");
const closeHelp = document.getElementById("closeHelp");
helpBtn.addEventListener("click", () => {
    helpModal.style.display = "block";
});
closeHelp.addEventListener("click", () => {
    helpModal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === helpModal) {
        helpModal.style.display = "none";
    }
});



const waterBtn = document.getElementById("waterBtn");
waterBtn.addEventListener("click", () => {
    if (garden[selectedPlot].isPlanted == false) {
        return;
    }
    garden[selectedPlot].water += garden[selectedPlot].waterGain;

    if (garden[selectedPlot].water > 100) {
        garden[selectedPlot].water = 100;
    }
    
    plantStage();
    updateUI();
});

const fertBtn = document.getElementById("fertBtn");
fertBtn.addEventListener("click", () => {
    if (garden[selectedPlot].isPlanted == false) {
        return;
    }
    garden[selectedPlot].nutrients += garden[selectedPlot].nutrientGain;
    if(garden[selectedPlot].nutrients > 100){
        garden[selectedPlot].nutrients = 100;
    }
    plantStage();
    updateUI();

})

const harvestBtn = document.getElementById('harvestBtn')
harvestBtn.addEventListener("click", () => {
    const plant = getPlant();

    if (plant.stage === "Mature") {
        coins += plant.harvestValue;
        totalHarvests++;
        garden[selectedPlot] = { ...emptyPlot };
        updateUI();
        alert(
            "Harvest successful! +" + plant.harvestValue + " coins"
        );
    }
    else {
        alert("Plant must be Mature to be harvested!");
    }

});
document.getElementById("hoseUpgrade").addEventListener("click", () => {

    if (hoseCount >= 4) {
        alert("You already own all 4 Garden Hoses!");
        return;
    }
    const cost = hosePrices[hoseCount];
    if (coins < cost) {
        alert("Not enough coins!");
        return;
    }
    coins -= cost;
    hoseCount++;
    assigningHose = true;
    if (hoseCount < 4) {
        document.getElementById("hoseUpgrade").textContent = `💧 Garden Hose (${hoseCount}/4) — ${hosePrices[hoseCount]} 🪙`;
    } else {
        document.getElementById("hoseUpgrade").disabled = true;
        document.getElementById("hoseUpgrade").textContent =
            "✅ All Garden Hoses Purchased";
    }
    updateUI();
    alert("Select a plot for the Garden Hose!");
});

document.getElementById("compostUpgrade").addEventListener("click", () => {

    if (compostCount >= 4) {
        alert("You already own all 4 Compost Boxes!");
        return;
    }
    const cost = compostPrices[compostCount];
    if (coins < cost) {
        alert("Not enough coins!");
        return;
    }
    coins -= cost;
    compostCount++;
    assigningCompost = true;
    if (compostCount < 4) {
        document.getElementById("compostUpgrade").textContent = `🌱 Compost Box (${compostCount}/4) — ${compostPrices[compostCount]} 🪙`;
    } else {
        document.getElementById("compostUpgrade").disabled = true;
        document.getElementById("compostUpgrade").textContent =
            "✅ All Compost Boxes Purchased";
    }
    updateUI();
    alert("Select a plot for the Compost Box!");
});

document.getElementById("continueBtn").addEventListener("click", () => {
    document.getElementById("winScreen").style.display = "none";
});

document.getElementById("playAgainBtn").addEventListener("click", () => {
    location.reload();
});

function selectPlot(index) {

    if (assigningHose) {
        if (hosePlots.includes(index)) {
            alert("Must choose a plot without a Garden Hose!");
            return;
        }

        hosePlots.push(index);
        assigningHose = false;
        alert("Garden Hose attached!");
        updateUI();
        checkWin();
        return;
    }

    if (assigningCompost) {
        if (compostPlots.includes(index)) {
            alert("Must choose a plot without a Compost Box!");
            return;
        }

        compostPlots.push(index);
        assigningCompost = false;
        alert("Compost Box attached!");
        updateUI();
        checkWin();
        return;
    }

    selectedPlot = index;
    updateUI();
}

function highlightSelectedPlot() {

    document.querySelectorAll(".plot").forEach(plot => {
        plot.classList.remove("selected");
    });

    document
        .getElementById("plot" + selectedPlot)
        .classList.add("selected");
}

function plantSeed(seedType) {

    if (garden[selectedPlot].isPlanted) {
        alert("There is already a plant in this plot!");

        return;
    }
    if(seedType.seedCost <= coins){
         garden[selectedPlot] = {
            ...seedType
        };
        coins -= seedType.seedCost;

        if (!plantsGrown.includes(seedType.name)) {
            plantsGrown.push(seedType.name);
        }
    }
    else{
        alert("You dont have enough to buy this seed!");
    }
    totalPlantsGrown++;
    updateUI();
}




document.getElementById("sunflower").addEventListener("click", () => {
        plantSeed(sunflower);
    });

document.getElementById("cactus").addEventListener("click", () => {
        plantSeed(cactus);
    });

document.getElementById("tulip").addEventListener("click", () => {
        plantSeed(tulip);
    });

document.getElementById("rose").addEventListener("click", () => {
        plantSeed(rose);
    });
document.getElementById("hyacinth").addEventListener("click", () => {
        plantSeed(hyacinth);
    });
document.getElementById("lily").addEventListener("click", () => {
        plantSeed(lily);
    });
document.getElementById("hibiscus").addEventListener("click", () => {
        plantSeed(hibiscus);
    });


function checkPlantStage(index) {

    const plant = garden[index];

    if (!plant.isPlanted) {
        return;
    }

    if (plant.water >= 20 && plant.nutrients >= 20 && plant.stage === "Seed") {
        plant.stage = "Sprout";
    }
    else if (plant.water >= 50 && plant.nutrients >= 50 && plant.stage === "Sprout") {
        plant.stage = "Young";
    }
    else if (plant.water >= 80 && plant.nutrients >= 80 && plant.stage === "Young"
    ) {
        plant.stage = "Mature";
    }
}


function decreaseWater() {
    for (let i = 0; i < garden.length; i++) {
        if (!garden[i].isPlanted) {
            continue;
        }
        garden[i].water -= 2;
        if (garden[i].water < 0) {
            garden[i].water = 0;
        }
    }
    updateUI();
}
function decreaseNutrients() {
    for (let i = 0; i < garden.length; i++) {
        if (!garden[i].isPlanted) {
            continue;
        }
        garden[i].nutrients -= 2;
        if (garden[i].nutrients < 0) {
            garden[i].nutrients = 0;
        }
    }
    updateUI();
}
function hoseWatering() {

    for (let i = 0; i < hosePlots.length; i++) {

        let plotIndex = hosePlots[i];

        if (!garden[plotIndex].isPlanted) {
            continue;
        }

        garden[plotIndex].water += 10;

        if (garden[plotIndex].water > 100) {
            garden[plotIndex].water = 100;
        }

        checkPlantStage(plotIndex);
    }
    updateUI();
}
function compostFertilizing() {
    for (let i = 0; i < compostPlots.length; i++) {

        let plotIndex = compostPlots[i];

        if (!garden[plotIndex].isPlanted) {
            continue;
        }

        garden[plotIndex].nutrients += 10;

        if (garden[plotIndex].nutrients > 100) {
            garden[plotIndex].nutrients = 100;
        }

        checkPlantStage(plotIndex);
    }
    updateUI();
}

function updateTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("tipText").textContent =
    tips[randomIndex];
}

function checkWin() {

    if (gameCompleted) {
        return;
    }
    if (hosePlots.length === 4 && compostPlots.length === 4) {

        gameCompleted = true;
        const elapsedTime = Date.now() - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);

        document.getElementById("finalTime").textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        document.getElementById("finalPlants").textContent = totalPlantsGrown;
        document.getElementById("finalHarvests").textContent = totalHarvests;
        document.getElementById("winScreen").style.display = "flex";
    }
}

setInterval(decreaseWater, 2000);
setInterval(decreaseNutrients, 6000);
setInterval(hoseWatering, 2000);
setInterval(compostFertilizing, 2000);
updateTip();
setInterval(updateTip, 10000);
updateUI();