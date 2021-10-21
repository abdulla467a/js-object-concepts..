const student = {
    id: 101,
    money: 5000,
    name: 'KING',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'Ali Asgar',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking empire from Mughal');
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining1);