const jonas = {
    firstName: "Jonas",
    lastName: "Schedtman",
    birthdayYear: 1978,
    job: "Teacher",
    hasDriversLicense: true,
    friends: [
        "Paul", "Michael", "James", "Joanne", "Adrienne"
    ],
    calcAge: function() {
        return new Date().getFullYear() - this.birthdayYear
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${(this.hasDriversLicense ? ' has ' : ' does not have ')} a driver's license.`;
    },
}

// Example, Jonas is a 46 year old teacher, and he has a driver's license.
console.log(jonas.getSummary())
