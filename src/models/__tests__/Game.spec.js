import Game from "../Game.js"

describe("Game", () => {
    let game;
    beforeEach(() => {
        game = new Game(0,0);
    });
    describe("Reaching Winning Score", () => {
        it("at 11:9", () => {
            game.setPlayer1Score(10);
            expect(game.winningScoreReached).toBeFalsy();
            game.setPlayer2Score(9);
            expect(game.winningScoreReached).toBeFalsy();
            game.setPlayer1Score(11);
            expect(game.winningScoreReached).toBeTruthy();
        });
        it("at 12:10", () => {
            game.setPlayer1Score(10);
            expect(game.winningScoreReached).toBeFalsy();
            game.setPlayer2Score(10);
            expect(game.winningScoreReached).toBeFalsy();
            game.setPlayer1Score(11);
            expect(game.winningScoreReached).toBeTruthy();
          
        })
        it("at 9:11", () => {
            game.setPlayer1Score(9);
            expect(game.winningScoreReached).toBeFalsy();
            game.setPlayer2Score(10);
            expect(game.winningScoreReached).toBeFalsy();
            game.setPlayer2Score(11);
            expect(game.winningScoreReached).toBeTruthy();
        });
        it("at 10:12", () => {
            game.setPlayer1Score(10);
            expect(game.winningScoreReached).toBeFalsy();
            game.setPlayer2Score(10);
            expect(game.winningScoreReached).toBeFalsy();            
            game.setPlayer2Score(11);
            expect(game.winningScoreReached).toBeTruthy();
            game.setPlayer2Score(12);
            expect(game.winningScoreReached).toBeTruthy();
        })
    })

    describe("has winner", () => {
        it("at 11:9", () => {
            game.setPlayer1Score(10);
            expect(game.hasWinner).toBeFalsy();
            game.setPlayer2Score(9);
            expect(game.hasWinner).toBeFalsy();
            game.setPlayer1Score(11);
            expect(game.hasWinner).toBeTruthy();
        });
        it("at 12:10", () => {
            game.setPlayer1Score(10);
            expect(game.hasWinner).toBeFalsy();
            game.setPlayer2Score(10);
            expect(game.hasWinner).toBeFalsy();
            game.setPlayer1Score(11);
            expect(game.hasWinner).toBeFalsy();
            game.setPlayer1Score(12);
            expect(game.hasWinner).toBeTruthy();
          
        })
        it("at 9:11", () => {
            game.setPlayer1Score(9);
            expect(game.hasWinner).toBeFalsy();
            game.setPlayer2Score(10);
            expect(game.hasWinner).toBeFalsy();
            game.setPlayer2Score(11);
            expect(game.hasWinner).toBeTruthy();
        });
        it("at 10:12", () => {
            game.setPlayer1Score(10);
            expect(game.hasWinner).toBeFalsy();
            game.setPlayer2Score(10);
            expect(game.hasWinner).toBeFalsy();           
            game.setPlayer2Score(11);
            expect(game.hasWinner).toBeFalsy();
            game.setPlayer2Score(12);
            expect(game.hasWinner).toBeTruthy();
        })
    })

    describe("set score", () => {
        it("numeric should be set", () => {           
            game.setPlayer1Score(10);
            game.setPlayer2Score(9);
            expect(game.player1Score).toBe(10);    
            expect(game.player2Score).toBe(9);             
        });

        it("alphanumeric should not be set", () => {            
            game.setPlayer1Score(10);   
            game.setPlayer2Score(9);       
            game.setPlayer1Score("AAA");
            game.setPlayer2Score("BBB");
            expect(game.player1Score).toBe(10);
            expect(game.player2Score).toBe(9);
        });
       
        it("numeric string should not be converted", () => {            
            game.setPlayer1Score("10");   
            game.setPlayer2Score("9");  
            expect(game.player1Score).toBe(10);
            expect(game.player2Score).toBe(9);
            expect(game.player1Score).not.toBeNaN();
            expect(game.player2Score).not.toBeNaN();
        });

        it("undefined should not be set", () => {            
            game.setPlayer1Score(10);   
            game.setPlayer2Score(9);  
            game.setPlayer1Score();   
            game.setPlayer2Score();  
            expect(game.player1Score).toBe(10);
            expect(game.player2Score).toBe(9);           
        });

    });

});