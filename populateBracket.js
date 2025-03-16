import { db, collection, addDoc } from "./firebase.js";

async function populateBracket() {
    const bracketData = [
        { game_id: "round64-game1", team1: "Iowa State", seed1: 3, team2: "Drake", seed2: 11 },
        { game_id: "round64-game2", team1: "Kansas", seed1: 2, team2: "Northern Iowa", seed2: 16 },
        { game_id: "round64-game3", team1: "Texas", seed1: 5, team2: "UCLA", seed2: 12 },
        { game_id: "round64-game4", team1: "Duke", seed1: 2, team2: "Michigan", seed2: 15 },
        // ADD MORE MATCHUPS
    ];

    try {
        for (const game of bracketData) {
            await addDoc(collection(db, "bracket"), game);
            console.log(`✅ Added game: ${game.game_id}`);
        }
        console.log("🎉 Bracket successfully populated!");
    } catch (error) {
        console.error("❌ Error adding bracket data:", error);
    }
}

// Run the function to populate Firestore
populateBracket();

