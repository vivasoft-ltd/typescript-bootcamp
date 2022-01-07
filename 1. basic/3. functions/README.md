### Functions (ফাংশন)

জাভাস্ক্রিপ্টে ফাংশন খুবই একটা গুরুত্বপূর্ণ বিষয়। ফাংশন সম্পর্কে একদম পরিষ্কার ধারনা না থাকলে ভাল জাভাস্ক্রিপ্ট ডেভেলপার হওয়া অসম্ভব। ফাংশন বিভিন্ন রকমের হতে পারে যেমনঃ লোকাল ফাংশন, অন্য Module থেকে Import করা ফাংশন অথবা অন্য কোন Class এর মেথড। যাই হউক আজ আমরা Typescript এর ফাংশন নিয়ে বিস্তারিত আলোচনা করব। তাহলে চলুন শুরু করা যাক।

চলুন আমরা প্রথমে একটা খুবই Basic ফাংশন লিখি যার কাজ হবে একটা স্ট্রিং টাইপ ভ্যালু recceive করে তা console করা।

```js
function Greeting(message) {
  console.log(message);
}
Greeting('Hello World');
```

খুবই বেসিক একটা ফাংশন তাই না। এখন চলুন, আমরা এই `Greeting` ফাংশনটিকে Typescript এ পরিবর্তন করি।

```js
function Greeting(message: string): void {
  console.log(message);
}
Greeting('Hello World');
```

উপরের ফাংশনটি একটু লক্ষ্য করুন, এইখানে `message` নামে একটা প্যারামিটার রয়েছে। ফাংশনটি লিখার সময়ই আমরা বলে দেয়েছি যে, `message` প্যারামিটারটির টাইপ হবে স্ট্রিং। এখন আমরা যদি স্ট্রিং ছাড়া অন্য কোন টাইপের ডাটা `Greeting` ফাংশনের প্যারামিটার হিসেবে পাঠাই তবে Error হবে। আবার তারপর আমরা ফাংশনটির return টাইপ কি হবে তাও বলে দিয়েছি `void` এর মাধ্যমে। তার মানে হল আমরা Typescript এ কোন ফাংশন লিখার সময় বলে দিব ওই ফাংশনটি কি টাইপের ডাটা প্যারামিটার হিসেবে নিবে আর কি টাইপের ডাটা return করবে।

### Optional and Default Parameters

TypeScript এ ফাংশনের সকল প্যারামিটারই বাধ্যতামূলক হিসেবে কাজ করে। ফাংশনের প্যারামিটারের ভ্যালু হিসেবে আমরা `null` বা `undefined` ও পাঠাতে পারি। মূল কথা হল, ফাংশন Invoke করার সময় যে কয়টি আর্গুমেন্ট থাকবে ফাংশনটি ঠিক ততোটি ভ্যালু প্যারামিটার হিসেবে আশা করে। উদাহরণস্বরূপ,

```js
function buildName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}
let result1 = buildName('Bob'); // error, too few parameters
//Expected 2 arguments, but got 1.
let result2 = buildName('Bob', 'Adams', 'Sr.'); // error, too many parameters
//Expected 2 arguments, but got 3.
let result3 = buildName('Bob', 'Adams'); // ah, just right
```

কিন্তু জাভাস্ক্রিপ্টে কোন প্যারামিটার না পেলে জাভাস্ক্রিপ্ট ওই প্যারামিটারের ভ্যালুকে `undefined` সেট করে। আমরা জাভাস্ক্রিপ্টের এই functionality TypeScript এ ব্যবহার করতে পারি `?` এর মাধ্যমে। কোন প্যারামিটারের আগে যদি `?` থাকে তবে TypeScript এটিকে `OPtional` হিসেবে বিবেচনা করে। চলুন একটি উদাহরন দেখা যাক,

```js
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
}

let result1 = buildName('Bob'); // works correctly now
let result2 = buildName('Bob', 'Adams', 'Sr.'); // error, too many parameters
//Expected 1-2 arguments, but got 3.
let result3 = buildName('Bob', 'Adams'); // ah, just right
```

আশা করি ফাংশনের Optional প্যারামিটার বুঝতে আর কোন সমস্যা হবে না। Typescript এ Defaut প্যারামিটারও সেট করা যায়। Default প্যারামিটারের কাজ হল, ফাংশনের কোন প্যারামিটারের ভ্যালু যদি না পায় তবে এটি ওই প্যারামিটারের জন্য Default ভ্যালুর মান সেট করে। চলুন একটা উদাহরন দেখা যাক,

```js
function buildName(firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName;
}

let result1 = buildName('Bob'); // works correctly now, returns "Bob Smith"
let result2 = buildName('Bob', undefined); // still works, also returns "Bob Smith"
let result3 = buildName('Bob', 'Adams', 'Sr.'); // error, too many parameters
//Expected 1-2 arguments, but got 3.
let result4 = buildName('Bob', 'Adams'); // ah, just right
```

### Rest Parameters

Optional আর Default প্যারামিটার দুইই শুধুমাত্র একই সময়ে একটিমাত্র প্যারামিটার নিয়ে কাজ করে। কিন্তু বাস্তব জীবনে আমাদের অনেক সময় আমাদের প্যারামিটারের গ্রুপ নিয়ে কাজ করতে হয় বা এমন সময় আসে যে, ফাংশনে কতগুলো প্যারামিটার থাকবে তাও নিদিষ্ট করে বলা সম্ভব হয় না ঠিক তখনই আমরা Rest প্যারামিটার ব্যবহার করি। ধরুন আমাদের এমন একটা ফাংশন দরকার যা কোন মানুষের Full Name টা return করবে। সেক্ষেত্রে, কোন মানুষের শুধু First Name থাকতে পারে। আবার কোন মানুষের First Name, Last Name থাকতে পারে, আবার কোন মানুষের First Name, Middle Name, Last Name এই সবগুলো থাকতে পারে। সেক্ষেত্রে আমরা কি করে ফাংশনটা লিখব। চলুন দেখা যাক,

```js
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
```

এইখানে আমরা নিশ্চিত যে, `buildName` ফাংশনে কমপক্ষে একটি প্যারামিটার থাকবে যা `firstName` হিসেবে বিবেচিত হবে। আর বাকি যদি কোন প্যারামিটার থাকে তবে তা `Rest Parameters` হিসেবে বিবেচিত হবে। TypeScript এর convention অনুযায়ী আমরা `firstName` প্যারামিটারের টাইপ `string` আর `Rest parameter` এর টাইপ `array of string` হিসেবে ডিফাইন করেছি। আশা করি, `Rest Parameters` বুঝতে আর কোন সমস্যা হবে না।

### Parameter Destructuring

কোন ফাংশনের প্যারামিটার যদি Object হয় তবে আমরা প্যারামিটার Object টিকে unpack করার জন্য আমরা Parameter Destructuring করতে পারি। নাম শুনে একটু ভীতিকর মনে হলেও, বিষয়টি খুবই সহজ। নিচের জাভাস্ক্রিপ্ট কোডটি একটু লক্ষ্য করুন।

```js
function sum({ a, b, c }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
```

এখন আমরা এই কোডটিকে কি করে TypeScript এ কনভার্ট করব। একটু নিজে চেষ্টা করে দেখুন। তারপর নিচের সমাধানটা দেখে নিলেই হবে।

```js
function sum({ a, b, c }: { a: number, b: number, c: number }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
```

আমরা `sum` ফাংশনের প্যারামিটারের যে Object টা ছিল তার প্রতিটা প্রপার্টি কি কি টাইপের হবে টা বলে দিয়েছি। আশা করি বুঝতে পেরেছেন। এখন এই কোডটাকে আরও সুন্দর করে লিখা যায়। চলুন, কোডটিকে একটু Refactor করি।

```js
type ABC = { a: number, b: number, c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```

উপরের কোডে আমরা `ABC` নামে একটা type নিয়েছি। এবং এই `ABC` type এ বলে দেয়েছি object এর Structure কেমন হবে। তারপর এই `ABC` কে `sum` ফাংশনের প্যারামিটারের টাইপ হিসেবে ডিফাইন করে দিয়েছি। এতে করে আমাদের কোডটা যেমন Clean হল সেই সাথে Maintain করাও অনেক সহজ হবে।

টাইপস্ক্রিপ্টের ফাংশন নিয়ে এই ছিল আজকের আলোচনা। পরবর্তীতে অন্য কোন টপিক নিয়ে আবার কথা হবে।
হ্যাপি কোডিং।
