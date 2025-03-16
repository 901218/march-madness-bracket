import { db, collection, setDoc, doc } from "./firebase.js";

// Example bracket data (Replace with real teams when available)
const bracketData = [
    { game_id: "round64-game1", team1: "Iowa State", seed1: 3, team2: "Drake", seed2: 11 },
    { game_id: "round64-game2", team1: "Kansas", seed1: 1, team2: "Northern Iowa", seed2: 16 },
    { game_id: "round64-game3", team1: "Texas", seed1: 5, team2: "UCLA", seed2: 12 },
    { game_id: "round64-game4", team1: "Duke", seed1: 2, team2: "Michigan", seed2: 15 },
    // ⚠️ Add all 32 matchups here!
];

async function populateBracket() {
    try {
        const bracketRef = collection(db, "bracket");
        
        for (const game of bracketData) {
            await setDoc(doc(bracketRef, game.game_id), game);
            console.log(`Added game: ${game.game_id}`);
        }
        
        console.log("✅ Bracket successfully populated!");
    } catch (error) {
        console.error("🔥 Error adding bracket data: ", error);
    }
}

// Run the function to populate Firestore
populateBracket();
