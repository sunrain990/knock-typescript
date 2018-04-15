type Fell = 'good' | 'bad';
interface Eatable {
    calorie: number;
    looks(): Fell;
    taste(): Fell;
    flavour(): Fell;
}

class Durian implements Eatable {
    calorie = 1000;
    looks(): Fell {
        return 'good';
    }
    taste(): Fell {
        return 'good';
    }
    flavour(): Fell {
        return 'bad';
    }
}