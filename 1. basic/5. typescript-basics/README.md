প্রত্যেক জাভাস্ক্রিপ্টের কিছু সেট অফ বিহেভিওর আছে যা দেখা যায় সেই ভ্যালুর উপর নানা অপারেশন চালিয়ে। ধরা যাক নিচের এক্সাম্পলটা নিয়েঃ

```ts
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();
```

প্রথমে দেখতে পাচ্ছি  toLoweCase() প্রপার্টিটি কল হচ্ছে মেসেজ নামক ভ্যারিয়েবলে, আর পরেরটাতে মেসেজকে কল করা হচ্ছে ডাইরেক্টলি।
এখন এখানে কিছু প্রশ্ন আসবে, যে 
- message() কি এভাবে কল করা যাবে?
- মেসেজে কি toLoweCase() আছে ?
- যদি থেকেও থাকে, এভাবে কি কল করা কি সম্ভব?
- যদি দুটিকে কল করা সম্ভব ও হয়, এদের কল করলে কি পাওয়া যাবে?

এখন ধরুন আমরা মেসেজকে স্ট্রিং হিসাবে ডিক্লেয়ার করিঃ

```ts
const message = "Hello World!";
```

তাহলে 'toLoweCase()' প্রপার্টিজ কল করলে আমরা 'Hello World!' স্ট্রিংটার লোয়ার কেসে পাবো। কিন্তু মেসেজকে ডাইরেক্টলি কল দিলে আমরা এমন একটি এরর পাবো।

```ts
TypeError: message is not a function
```

এ ধরনের এরর আমাদের এভয়েড করতে হবে। যখন আমরা আমাদের কোড রান করাই জাভাস্ক্রিপ্ট রানটাইম একটি ভ্যারিয়েবলের টাইপের উপর ভিত্তি করে তার প্রপার্টিজ নির্নয় করে। প্রিমিটিভ টাইপের জন্য রানটাইমের নির্নয়টা সহজ হলেও, অন্য টাইপস যেমন ফাংকশনদের টাইপ রানটাইমের নির্নয় করে কঠিন। একটা ফাংকশনকে কল না দিয়ে রানটাইম নির্নয় করা সম্ভব না। যেমন নিচের ফাংকশনটিঃ

```ts
function fn(x) {
  return x.flip();
}
```
পিউর জাভাস্ক্রিপ্টের এটা বুঝতে হলে এই ফাংকশনে একটা র‍্যানডম ভ্যালু দিয়ে রান করানো ছাড়া আর কোন পথ নেই। এই ভাবে র‍্যান্ডম ভ্যালু যার কোন ডিফাইন করা টাইপ নাই, তাদের বলে ডাইনামিকালি টাইপড। জাভাস্ক্রিপ্ট এর ভ্যারিয়াবলরা হয় ডাইনামিক টাইপড। এর উল্টোটাই স্ট্যাটিক টাইপিং।

## স্ট্যাটিক টাইপিং (Static Typing) ঃ

আগের এক্সাম্পলে আমরা যদি একটু ভিন্ন ভাবে লিখি তাহলে আমরা দেখতে পাইঃ

```ts
const message = "hello!";
 
message();
This expression is not callable.
  Type 'String' has no call signatures.
```

স্ট্যাটিক টাইপিং এ আমরা আগে থেকেই একটা ভ্যারিয়েবল কি টাইপ হবে তা উল্লেখ করে দেই। উপরে যেমন আমরা মেসেজ নামক ভ্যারিয়বলকে 'hello!' স্ট্রিং দিয়ে ইনিসিয়ালাইজ করেছি। তখন স্ট্যাটিক টাইপ সিসটেমই আমাদের জানাবে আমাদের ভ্যারিয়েবল কি ধরনের প্রপার্টিজের এক্সেস পাবে অথবা পাবে না।

## নন এক্সেপশন ফেলিওর (Non-Exception Failure): 

জাভাস্ক্রিপ্ট রানটাইম আমাদের এরর দেখায় ইসিএমএ(ECMAScript) নামক কনভেনশন ফলো করে। এসিএমএ একধরনের কনভেনশন সিস্টেম যা বলে একটা লাংগুয়েজ কিভাবে লেখা হবে বা কি কি কনভেনশন ফলো করবে। যেমন কোন ভ্যারিয়েবল ফাংকশন না হলে তাকে কল করা যাবে না, করলে এরর দিবে। কিন্তু সেইভাবেই একটা অবজেক্ট এর কোন প্রপার্টিজ না থাকলে ওইটা কল করতে গেলে জাভাস্ক্রিপ্ট রিলিভেন্ট এরর না দিয়ে দেয় আনডিফাইন্ড (undefined).

```ts
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined
```

যদি সিন্টেক্স ও ঠিক থাকে অর্থাৎ ভ্যালিড জাভাস্ক্রিপ্ট ও হয় তাহলেও এক্সাক্ট এরর পাওয়া যায় না। তাই এইক্ষেত্রে স্ট্যাটিক টাইপিং না করলে, ভ্যালিড এরর ম্যাসেজ পাওয়া যাবে না। যদি উপরের কোডটি আমরা টাইপস্ক্রিপ্ট এ চালাতাম তাহলে এইধরনের ম্যাসেজ পেতাম।

```ts
const user = {
  name: "Daniel",
  age: 26,
};
 
user.location;
Property 'location' does not exist on type '{ name: string; age: number; }'.
```

এই ধরনের আরো অনেক কিছু টাইপস্ক্রিপ্ট ধরতে পারে, যেমন টাইপোস উদাহরণ ১(example1) আনকল্ড ফাংকশন উদাহরণ ২(example2), লজিক এরর উদাহরণ ৩(example3)।

## টাইপ্স ওফ টুলিং (Types of Tooling) :

টাইপস্ক্রিপ্ট শুধু কোড লেখার পর নয়, কোড লেখার সময় ও ভুল শুধরে দিতে সাহায্য করে, টাইপ চেকার টুল এর মাধ্যমে।


## টিএসসি (TypeScript Compiler):

আসুন আমরা টিএসসি টেস্ট করা জন্য ইন্সটল করি।

```ts
npm install -g typescript
```

এরপর খালি ফোল্ডারে আমরা 'hello.ts' ফাইল বানাই। যার ভেতরে লিখিঃ

```ts
// Greets the world.
console.log("Hello world!");
```

এরপর টার্মিনাল থেকে ওই ফোল্ডারে 'tsc hello.ts' রান করি। কি হলো? আপাত দৃষ্টিতে কিছুই না। কারন আমাদের কোন এরর ছিল না, তাই টাইপস্ক্রিপ্ট কম্পাইলার কোন এরর দেয়নি। তাই কন্সোলে কিছু নেই। কিন্তু খেয়াল করলে দেখা যাবে, 'hello.js' নামক একটি ফাইল ক্রিয়েট হয়েছে 'hello.ts' এর পাশে। এই 'hello.js' ফাইল খুললে আমরা দেখতে পাইঃ

```ts
// Greets the world.
console.log("Hello world!");
```
'hello.ts' থেকে তেমন কোন পরিবর্তন নেই। কারন এটা শুধুই হ্যালো ওয়ার্ল্ড কোড ছিল। তাহলে আমরা যদি উদাহরণ ৪ (example4) কোড এড করি 'hello.ts', এবং 'tsc hello.ts' রান করি, তাহলে আমরা দেখতে পাইঃ

```ts
Expected 2 arguments, but got 1.
```

কম্পাইলার আমাদের বলছে যে আমরা দুইটার যায়গায় একটা আর্গুমেন্ট পাঠিয়েছি।

## এমিটিইং উইথ এরর (Emitting with Error): 

আমরা দেখতে পাবো উপরের কোড রানের জন্য 'hello.js' আবার চেঞ্জ হয়েছে। এখন অনেক সময় এমন হতে পারে আমাদের পার্ফেক্ট জাভাস্ক্রিপ্ট কোড, টাইপস্ক্রিপ্টে কনভার্ট করতে গিয়ে টাইপ এরর খাচ্ছে। সেই ক্ষেত্রে আমরা ঃ

```ts
tsc --noEmitOnError hello.ts
```

তাহলে আমাদের এরর ছাড়াই কোড রান করবে। সেই ক্ষেত্রে 'hello.js' চেঞ্জ হবে না।


## এক্সপ্লিসিট টাইপ্স (Explicit Types): 

উদাহরণ ৫ (example5) এ আমরা 'greet' নামক ফাংকশন এ পার্সন আর ডেট আর্গুমেন্ট পাঠাচ্ছি। উলেখযোগ্য, যে আমরা পার্সনের জন্য স্ট্রিং আর ডেটের জন্য ডেট টাইপ আলাদা করে ডিক্লেয়ার করছি। 

এটাকে বলে এক্সপ্লিসিটলি টাইপড, এখন আমরা 'greet' কে কল দেওয়ার পরও এরর খাবো।

```ts
Argument of type 'string' is not assignable to parameter of type 'Date'.
``` 

এর কারন আমরা ডেট যেটা পাঠিয়েছি সেটা স্ট্রিং রিটার্ন করে, ডেট টাইপ না। তাই আমাদের নিউ ডেট আর্গুমেন্ট হিসাবে পাঠাতে হবে।

## নো ইমপ্লিসিট এনি ফ্ল্যাগ (noImplicitAny) :

যখন কোন টাইপ এক্সপ্লিসিটলি বলা না হয় ওইটা '' টাইপ হিসাবে গণ্য করা হয়। কিন্তু টাইপস্ক্রিপ্ট ইউজ করার মূল উদ্দেশ্যই তো টাইপ ইউজ করা। তা না হলে এটা সিম্পল জাভাস্ক্রিপ্ট হিসেবেই ধরে নেয়া যেতে পারে। তাই 'noImplicitAny' ফ্ল্যাগ ইউজ করা হয় যাতে এনি টাইপ ইমপ্লিসিটলি ইউজ না করা যায়।


## স্ট্রিক্ট নাল চেক ফ্ল্যাগ (strictNullChecks) :

'noImplicitAny' ফ্ল্যাগের মতই 'strictNullChecks' ফ্ল্যাগ ইউজ করা হয়, যাতে 'null' এবং 'undefined' কে এক্সপ্লিসিটলি হ্যান্ডেল করা যায়।