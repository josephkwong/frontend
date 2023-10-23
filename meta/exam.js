const Beep = (sound) => {
    this.sound = sound;
};

const boop = new Beep('boop');

console.log(boop instanceof Beep);

/*
function Beep (sound) {
    this.sound = sound;
};

const boop = new Beep('boop');

console.log(boop instanceof Beep);

const quiz = {
    course: "ConsenSys Academy",
    year: 2021,
    getCourse: function() {
        console.log(this.course);
    }
}

quiz.getCourse();

function Mentor (name, email, ens, region) {
    this.name = name;
    this.email = email;
    this.ens = ens;
    this.region = region;
}

const mentor1 = new Mentor ("John", "J.S@email.com", example.eth, "US NorthWest")

console.log(mentor1);
*/