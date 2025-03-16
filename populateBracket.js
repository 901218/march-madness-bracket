import { db, collection, setDoc, doc } from "./firebase.js";

// Sample bracket structure (will need to update when the official bracket is out)
const matchups = [
    { id: "round64-game1", region: "East", seed1: 1, team1: "TBD", seed2: 16, team2: "TBD", vegasOdds: "TBD" },
    { id: "round64-game2", region: "East", seed1: 8, team1: "TBD", seed2: 9, team2: "TBD", vegasOdds: "TBD" },
    // Repeat for all 32 games in the Round of 64...
];

async function populateBracket() {
    for (const game of matchups) {
        const gameRef = doc(db, "bracket", game.id);
        await setDoc(gameRef, game);
    }
    console.log("✅ Bracket populated successfully!");
}

populateBracket();
