## Classes (ক্লাস)

চিরাচরিত জাভাস্ক্রিপ্ট Reusable Component তৈরি করার জন্য ফাংশন এবং prototype-based inheritance ব্যবহার করে থাকে। এতে করে যেসব ডেভেলপার object-oriented এ কোড করে স্বাচ্ছন্দ্য বোধ করেন তাদের জন্য এই বিষয়তা একটু অস্বস্তিকর যেখানে OOP তে কোন ক্লাস অন্য কোন ক্লাসের Functionality কে inherit করে এবং যেকোনো ক্লাসেরই Object তৈরি করা যায়। এসব কথা মাথায় রেখে, ECMAScript 2015 থেকে যেকোনো অ্যাপ্লিকেশান তৈরি কারার জন্য OOP এর class-based approach ব্যবহার করা যায়। টাইপস্ক্রিপ্টেও এই টেকনোলজিগুলো এখন ব্যবহার করা যায়। আজকের আলোচনাতে আমরা টাইপস্ক্রিপ্টের ক্লাস নিয়ে বিস্তারিত আলোচনা করব। তাহলে চলুন শুরু করা যাক।

### Class Members

চলুন প্রথমে একটি ক্লাস লিখি।

```ts
class Greeter {}
```

এটি খুবই একটি বেসিক ক্লাস। চলুন এই ক্লাসটিতে কিছু member যোগ করি।

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}
let greeter = new Greeter('world');
```

কোডটি C# বা Java ডেভেলপারদের কাছে বেশ পরিচিত মনে হবে। আমরা একটি `Greeter` ক্লাস তৈরি করেছি যার মধ্যে তিনটি member রয়েছেঃ ক্লাস প্রপার্টি `greeting`, `constructor` এবং একটি মেথড `greet`। আর সবার শেষের লাইনে আমরা `new` keyword দিয়ে `Greeter` ক্লাসের একটি Object তৈরি করেছি যার মাধ্যমে আমারা এই ক্লাসের সকল প্রপার্টিকে অ্যাক্সেস করতে পারব।

### Inheritance

টাইপস্ক্রিপ্টে আমরা OOP এর কিছু কমন pattern ব্যবহার করতে পারি। ক্লাস Based প্রোগ্রামিং এর একটা কমন বৈশিষ্ট্য হল Inheritace যার মাধ্যমে এক ক্লাস এর প্রপার্টি অন্য ক্লাস Inherit করতে পারে।
চলুন একটা উদাহরন দেখা যাক,

```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}
const dog = new Dog();
dog.bark(); // print:  Woof! Woof!
dog.move(10); // print: Animal moved 10m.
dog.bark(); // print: Woof! Woof!
```

উপরের উদাহরণের `Animal` হল প্যারেন্ট ক্লাস যাকে `Dog` ক্লাস inherit করছে যার ফলে `Dog` ক্লাসের মধ্যে `Animal` ক্লাসের প্রপার্টি চলে এসেছে। তাই এখন আমরা `Dog` ক্লাসের Object দিয়ে `bark` এবং `move` দুইটি মেথডই ব্যবহার করতে পারব। `move` মেথডটি `Dog` ক্লাসে না থাকলে এটি `Animal` ক্লাস থেকে inherit করেছে।

### Interface

আমরা `implements` clause ব্যবহার করে দেখতে পারি কোন ক্লাস particular কোন `interface`কে ঠিকমত অনুসরণ করছে কিনা। যদি কোন ক্লাস ওই `interface` কে ঠিকমত অনুসরণ না করে তবে Error দিবে।
চলুন একটা উদাহরন দেখা যাকঃ

```ts
interface Pingable {
  ping(): void;
}
class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}
class Ball implements Pingable {
  //Class 'Ball' incorrectly implements interface 'Pingable'.
  // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log('pong!');
  }
}
```

উপরের উদাহরণে `Ball` ক্লাসটি Error দিবে কারণ `Ball` ক্লাসটি `Pingable` interface কে অনুসরণ করতে চায় কিন্তু একটু লক্ষ্য করে দেখুন `Pingable` ক্লাসে `ping` মেথড রয়েছে যা `Ball` ক্লাসে নেই। ক্লাসটিকে Error মুক্ত করতে হলে `Ball` ক্লাসে `ping` নামে একটা মেথড যোগ করতে হবে। আশা করি বুঝতে পেরেছেন।

### Member Visibility

কোন প্রপার্টি বা মেথড ক্লাসের বাইরে থেকে অ্যাক্সেস করা যাবে কিনা তা টাইপস্ক্রিপ্টের মাধ্যমে আমরা নিয়ন্ত্রণ করতে পারি।

### public

প্রতিটি ক্লাস মেম্বার Default ভাবে public থাকে যাকে কোডের যেকোনো জায়গা থেকে অ্যাক্সেস করা যাবে। উদাহরণস্বরূপ,

```ts
class Greeter {
  public greet() {
    console.log('hi!');
  }
}
const g = new Greeter();
g.greet();
```

উপরের কোডে `public` keyword টি না লিখলেও `greet` মেথডটি By Default `public` থাকত। অনেক সময় কোডের style/readability এর জন্য আমরা `public` keyword টি লিখে থাকি।

### protected

protected ক্লাস মেম্বাররা শুধুমাত্র ওই ক্লাস আর ওই ক্লাসের সাব-ক্লাস থেকেই অ্যাক্সেস করা যায়। উদাহরণস্বরূপ,

```ts
class Greeter {
  public greet() {
    console.log('Hello, ' + this.getName());
  }
  protected getName() {
    return 'hi';
  }
}
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log('Howdy, ' + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
g.getName(); // Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.
```

### private

private ক্লাস শুধুমাত্র ওই ক্লাস বাতিত অন্য কোথাও অ্যাক্সেস করা যায় না। এমন কি ওই ক্লাসের সাব-ক্লাসেও না।

```ts
class Base {
  private x = 0;
}
const b = new Base(); // Can't access from outside the class
console.log(b.x); // Property 'x' is private and only accessible within class 'Base'.

class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x); // Property 'x' is private and only accessible within class 'Base'.
  }
}
```

### Readonly modifier

টাইপস্ক্রিপ্টে Readonly modifier ব্যবহার করা হয় শুধুমাত্র কোন প্রপার্টিকে readonly করার জন্য। Readonly প্রপার্টির ক্ষেত্রে Initialization কেবলমাত্র প্রপার্টিটি Declare করার সময় বা ওই ক্লাসের constructor এর মধ্যে করতে হয়।

```ts
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus('Man with the 8 strong legs');
dad.name = 'Man with the 3-piece suit'; // Cannot assign to 'name' because it is a read-only property.
```

### Accessors

টাইপস্ক্রিপ্টে getters/setters মেথডের মাধ্যমে কোন ক্লাসের মেম্বারদের অ্যাক্সেস Intercept করা যায়। তাছাড়াও কোন ক্লাস মেম্বারদের Initaial ভ্যালু সেট করার সময় যদি কোন লজিকের প্রয়োজন হয় তবে তা getters/setters মেথডের মাধ্যমে খুব সহজেই করা যেতে পারে। চলুন আমরা একটি সিম্পল ক্লাসে get/set মেথড যোগ করি। তবে প্রথমে get/set ছাড়া ক্লাসটিকে দেখি।

```js
class Employee {
  fullName: string;
}
let employee = new Employee();
employee.fullName = 'Bob Smith';

if (employee.fullName) {
  console.log(employee.fullName);
}
```

এখন চলুন এই ক্লাসটিতে আমরা getter/setter যোগ করি।

```js
const fullNameMaxLength = 10;
class Employee {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName) {
  console.log(employee.fullName);
}
```

একটু লক্ষ্য করে দেখুন, আমরা গেট মেথডে `_fullName` টাকে return করে দিয়েছি। আর সেট মেথডে শুধু যে `_fullName` এর মান সেট করেছি তাই নয়, এখানে আমরা আরও বেশ কিছু লজিকও ঠিক করে দিয়েছি। যদি এই লজিকগুলো ঠিক থাকে তবেই কেবল `_fullName` এর ভ্যালু সেট করা হবে। তাছাড়া আমরা `_fullName` মত একটা private ক্লাস প্রপার্টিকেও ক্লাসের বাহিরে থেকে Modify করতে পারছি। এই কাজগুলো এত সহজে getter/setter ছাড়া করা সম্ভব হত না।

### Static Members

ক্লাসের Instance মেম্বার ছাড়াও Static মেম্বার থাকতে পারে যাকে অ্যাক্সেস করার জন্য ওই ক্লাসের Object তৈরি করার প্রয়োজন নেই সরাসরি ক্লাসের নাম ব্যবহার করে আমরা এই Static মেম্বারগুলোকে অ্যাক্সেস করতে পারি।

```ts
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();
```

উপরের কোডটি দেখুন, আমরা `MyClass` এর static ভারিয়েবল `x` কে অ্যাক্সেস করার জন্য কিন্তু আমাদের `MyClass` এর নতুন করে Object তৈরি করার দরকার হয় নি বরং আমরা সরাসরি ক্লাসের নাম দিয়ে ভারিয়েবল অ্যাক্সেস করতে পারছি।

আজ আমরা টাইপস্ক্রিপ্টের ক্লাস নিয়ে বিস্তারিত আলোচনা করলাম। পরবর্তীতে অন্য কোন বিষয় নিয়ে আবার আলোচনা হবে সেই পর্যন্ত সবাই ভাল থাকবেন।
হ্যাপি কোডিং।
