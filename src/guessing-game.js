class GuessingGame {
    constructor() {
        this.resultOfSearch = undefined;
        this.min = undefined;
        this.max = undefined;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.resultOfSearch = Math.round((this.min + this.max) / 2);
        return this.resultOfSearch;
    }

    lower() {
        this.max = this.resultOfSearch;
    }

    greater() {
        this.min = this.resultOfSearch;
    }
}

module.exports = GuessingGame;
