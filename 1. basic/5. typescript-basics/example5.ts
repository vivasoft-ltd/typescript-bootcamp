function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// first try
greet("Maddison", Date());

// second try
greet("Maddison", new Date());