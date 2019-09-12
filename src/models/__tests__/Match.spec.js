import createMatchStore from "../../helpers/matchStoreFactory";
import { exportAllDeclaration } from "@babel/types";

const player1 = {
    fn: "Avi",
    ln: "Cohen"
};
const player2 = {
    fn: "Benny",
    ln: "Levi"
};

let matchStore;


describe('match', () => {
    describe('default 5 games', () => {
        beforeEach(() => {
            matchStore = createMatchStore(player1, player2);
        });

        it('games collection initially creates', () => {
            expect(matchStore.games.length).toEqual(5);
        });

        it(' player 1 wins  3:0', () => {
            matchStore.games[0].setScore(11,0);
            expect(matchStore.winner).toBeNull();
            matchStore.games[1].setScore(11,9);
            expect(matchStore.winner).toBeNull();
            matchStore.games[2].setScore(14,12);
            expect(matchStore.winner).toEqual(matchStore.player1);
        });

        it(' player 2 wins  0:3', () => {
            matchStore.games[0].setScore(0,11);
            expect(matchStore.winner).toBeNull();
            matchStore.games[1].setScore(9,11);
            expect(matchStore.winner).toBeNull();
            matchStore.games[2].setScore(12,14);
            expect(matchStore.winner).toEqual(matchStore.player2);
        });

        it(' player 1 wins  3:1', () => {
            matchStore.games[0].setScore(0,11);
            expect(matchStore.winner).toBeNull();
            matchStore.games[1].setScore(11,9);
            expect(matchStore.winner).toBeNull();
            matchStore.games[2].setScore(14,12);
            expect(matchStore.winner).toBeNull();
            matchStore.games[3].setScore(11,3);
            expect(matchStore.winner).toEqual(matchStore.player1);
        });

        it(' player 2 wins 1:3', () => {
            matchStore.games[0].setScore(0,11);
            expect(matchStore.winner).toBeNull();
            matchStore.games[1].setScore(11,9);
            expect(matchStore.winner).toBeNull();
            matchStore.games[2].setScore(12,14);
            expect(matchStore.winner).toBeNull();
            matchStore.games[3].setScore(3,11);
            expect(matchStore.winner).toEqual(matchStore.player2);
        });

        it(' player 1 wins  3:2', () => {
            matchStore.games[0].setScore(0,11);
            expect(matchStore.winner).toBeNull();
            matchStore.games[1].setScore(11,9);
            expect(matchStore.winner).toBeNull();
            matchStore.games[2].setScore(14,12);
            expect(matchStore.winner).toBeNull();
            matchStore.games[3].setScore(6,11);
            expect(matchStore.winner).toBeNull();
            matchStore.games[4].setScore(11,3);
            expect(matchStore.winner).toEqual(matchStore.player1);
        });

        it(' player 2 wins  2:3', () => {
            matchStore.games[0].setScore(0,11);
            expect(matchStore.winner).toBeNull();
            matchStore.games[1].setScore(11,9);
            expect(matchStore.winner).toBeNull();
            matchStore.games[2].setScore(14,12);
            expect(matchStore.winner).toBeNull();
            matchStore.games[3].setScore(6,11);
            expect(matchStore.winner).toBeNull();
            matchStore.games[4].setScore(3,11);
            expect(matchStore.winner).toEqual(matchStore.player2);
        });

    });
});

