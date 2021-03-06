আমরা সকলই জানি, জাভাস্ক্রিপ্ট একটি ডায়নামিক টাইপড ল্যাঙ্গুয়েজ। এতে বিল্ট-ইন কোন ডাটা টাইপ সাপোর্ট নেই। ফলে, আমরা একই ভ্যারিয়েবলে একাধিক ডাটা টাইপের ভ্যালু অ্যাসাইন করতে পারি। যার ফলে, প্রোগ্রামারদের কাজের সময় অনেক সমস্যার সম্মুখিন হতে হয়। অপরদিকে, আপনি টাইপস্ক্রিপ্টের সাহায্যে জাভাস্ক্রিপ্টে ডাটা টাইপ ব্যবহার করতে পারবেন। টাইপস্ক্রিপ্টে আপনি একবার যেকোনো টাইপের ভ্যালু ভ্যারিয়েবল অ্যাসাইন করে ফেললে সেই ভ্যারিয়েবলে অন্য কোন ডাটা টাইপের ভ্যালু অ্যাসাইন করতে পারবেন না। টাইপস্ক্রিপ্ট কম্পাইলার রান টাইম এরর দেখাবে। এতে একজন প্রোগ্রামারের কামলা জীবন অনেক সহজ হয় এবং অন্যদিকে প্রোগ্রামও অনেক বাগ-ভাল্লুক ফ্রি থাকে। উদাহরণঃ

```ts
let counter: number = 7;
counter = "Hello";
```

উপরের উদাহরণে, টাইপস্ক্রিপ্ট কম্পাইলার Type 'string' is not assignable to type 'number'. এই এররটি দেখাবে। যে কাজটি জাভাস্ক্রিপ্ট করে না। আপনি এখানে কোন টাইপ অ্যানোনেট না করে দিলেও টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে টাইপ ইনফারড করে নিবে।

## টাইপস্ক্রিপ্টে ডাটা টাইপঃ
যেহেতু, টাইপস্ক্রিপ্ট জাভাস্ক্রিপ্টের একটি সুপার সেট। সেহেতু, টাইপস্ক্রিপ্ট জাভাস্ক্রিপ্টের বিল্ট-ইন ডাটাকে ইনহেরিট করে এবং কিছু অতিরিক্ত ডাটা টাইপ যুক্ত করে।

- প্রিমিটিভ ডাটা টাইপ
- নন-প্রিমিটিভ ডাটা টাইপ

## প্রিমিটিভ ডাটা টাইপ
- Boolean
- Number
- String
- Null
- Undefined
- Void
- Any

## নন-প্রিমিটিভ ডাটা টাইপ
- Array
- Class
- Function
- Tuple
- Interface
- Enum
- Generic
- Decorators

## বুলিয়ান
সবচেয়ে বেসিক ডাটা টাইপ হচ্ছে বুলিয়ান টাইপ। এটি শুধুমাত্র true/false ভ্যালুঃ

```ts
let isDied: boolean = false;
```

## নাম্বার
জাভাস্ক্রিপ্টের মত, টাইপস্ক্রিপ্টের সকল নাম্বার ফ্লোটিং-পয়েন্ট ভ্যালু বা বিগইন্টিজারস হিসেবে স্টোরড হয়। হেক্সাডেসিমাল এবং দশমিক লিটারেলস ছাড়াও, টাইপস্ক্রিপ্ট ES2015 এর বাইনারি এবং অক্টোবর লিটারেলসও সাপোর্ট করেঃ

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

## স্ট্রিং
আমরা স্ট্রিং ডাটা টাইপ ব্যবহার করে টাইপস্ক্রিপ্টে টেক্সট ভ্যালুকে রিপ্রেজেন্টস করব। স্ট্রিং ডাটা টাইপ শুধুমাত্র টেক্সচুয়াল ডাটার সাথে কাজ করেঃ

```ts
let color: string = "Gray";
color = 'Blue';
```

## নাল এবং আনডিফাইনড
টাইপস্ক্রিপ্টে, undefined এবং null উভয় এরই তাদের টাইপ হচ্ছে যথাক্রমে undefined এবং null। এই দুটি ডাটা টাইপ অনেকটা void এর মতঃ

```ts
let counter: number = null;
let isDied: boolean = null;
let name: string = null;
```

## আনডিফাইনড
```ts
let counter: number = null;
let isDied: boolean = null;
let name: string = null;
```

## ভয়েড
void হচ্ছে any এর বিপরীত একটি ডাটা টাইপ। এটি সাধারণত ফাংশনের রিটার্ন টাইপ হিসাবে ব্যবহার করা হয়। যেসকল ফাংশন থেকে কোন ভ্যালু রিটার্ন করা হবে না সেসকল ফাংশনে void ব্যবহার করা হয়ঃ

```ts
function getInfo(firstName: string, lastName: string): void {
    console.log(`${firstName} ${lastName}`);
}
```

## এনি
এটি টাইপস্ক্রিপ্টের সকল ডাটা টাইপের "সুপার টাইপ"। এটি যেকোনো জাভাস্ক্রিপ্ট ভ্যালু ব্যবহার করতে ব্যবহৃত হয়। এটি আমাদের কম্পাইলেশনের সময় টাইপ-চেকিং থেকে অপ্ট-ইন এবং অপ্ট-আউট করতে দেয়। কখনো যদি আপনি নিশ্চিত হতে না পারেন যে কোন টাইপ ব্যবহার করবেন তখন আপনি any টাইপ ব্যবহার করতে পারেনঃ

```ts
let anyValue: any;
anyValue = 420;
anyValue = "Bangladesh";
anyValue = true;
```

## অ্যারে
একটি অ্যারে হচ্ছে একই ডাটা টাইপের ইলিমেন্টের কালেকশন। জাভাস্ক্রিপ্টের মত, টাইপস্ক্রিপ্টও আমাদের কে অ্যারে ভ্যালু নিয়ে কাজ করার অনুমতি দেয়। টাইপস্ক্রিপ্টে একটি অ্যারে কে দুটি উপায়ে লেখা যায়ঃ

1. প্রথমত, আপনাকে ব্যবহার করতে হবে কোন ডাটা টাইপ ব্যবহার করবেন এবং সেই টাইপের সাথে [] ব্যবহার করতে হবেঃ

```ts
let list: number[] = [45, 41, 220];
```

2. দ্বিতীয় উপায় হচ্ছে একটি জেনেরিক অ্যারে টাইপ ব্যবহার করেঃ

```ts
let list: Array<number> = [45, 41, 220];
```

Class, Function, Tuple, Interface, Enum, Generic এবং Decorators নিয়ে কথা বলা বাকি রয়ে গেল। কারণ, প্রত্যেকের জন্যে আলাদা করে আর্টিকেল লিখতে হবে। একটি আর্টিকেলে বিস্তারিত আলোচনা করে বুঝানো সম্ভব নয়। ক্লাসের উপর একাধিক আর্টিকেল প্রয়োজন হবে। আগামী আর্টিকেলের আমন্ত্রণ জানিয়ে আজকের জন্যে শেষ করছি। 

হ্যাপি কোডিং।
