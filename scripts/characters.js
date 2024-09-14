const characters = {
    protagonist: {
        name: "Player",
        memory: false
    },
    townElder: {
        name: "Jack",
        role: "Town Elder",
        description: "A wise figure who provides guidance and tasks."
    },
    merchant: {
        name: "Ruby",
        role: "Merchant",
        description: "Runs the general store and offers various goods."
    },
    blacksmith: {
        name: "Darren",
        role: "Blacksmith",
        description: "Crafts tools and weapons for the townsfolk."
    }
};

function talkToCharacter(character) {
    alert(`You are talking to ${character.name}. ${character.description}`);
}
