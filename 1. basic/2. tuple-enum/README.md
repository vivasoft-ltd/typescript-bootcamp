## Enum(এনাম)

#### What is Enum? (এনাম কি?) :

টাইপস্ক্রিপ্টে, এনাম হচ্ছে `supported` ডেটা-টাইপ। বেশিভাগ অবজেক্ট-অরিয়েন্টেড language এ এনাম ব্যবহার হয়। এনামের সাহায্য আমরা `named-constant` ডিফাইন করি। নিচের উদাহরণটি দেখিঃ

```ts
enum States {
	Oregon,
	Washington,
	Idaho,
	Montana,
	Wyoming
}

// usage
var region = States.Washington;

```

#### Why use Enum in TypeScript? (কেন টাইপস্ক্রিপ্টে এনাম ব্যবহার করবেন?)

এনাম টাইপস্ক্রিপ্টে কোড organize করতে সাহায্য করে। চলুন এনামের কিছু প্রোজ দেখিঃ

- জাভাস্ক্রিপ্টে ইনলাইন কোডে কম্পাইল-টাইম এবং রানটাইম save করে।
- কোডের intention আর ইউজ কেস এক্সপ্রেস করতে সাহায্য করে।
- `memory-efficient` কাস্টম কনস্ট্যান্ট তৈরি করতে সাহায্য করে।

#### Enums vs alternatives (এনাম vs অলটারনেটিভ) :

কিছু কেসে এনাম ব্যবহার করা ঠিক নয়। যেমনঃ

- রিএসাইন বা এনামের মেমবার কনটেন্ট changeable হলে।
- ডাইনামিক ভ্যালু রেকর্ড করার ক্ষেত্রে।
- ভ্যারিয়েবল ব্যবহার করার ক্ষেত্রে।

চলুন এবার এনাম নিয়ে আরো গভীরে যাই।

#### Numeric Enum (নিউমারিক এনাম) :

নিউমারিক এনাম নাম্বারকে স্ট্রিং ভ্যালু হিসাবে সেভ করে। `enum` কিওয়ার্ডটি ব্যবহার করে আমরা এনাম ডিফাইন করি। উদাহরণস্বরূপঃ

```ts
enum CarType {
	Honda,
	Toyota,
	Subaru,
	Hyundai
}

```

```ts
Honda = 0
Toyota = 1
Subaru = 2
Hyundai = 3

```

কেউ চাহিলে এনামকে প্রথমেই `initialize` করতে পারেন। যেমনঃ

```ts
enum CarType {
	Honda = 1,
	Toyota,
	Subaru,
	Hyundai
}

```
উপরের উদাহরণটিতে `Honda` কে `1` দিয়ে `initialize` করায় নিম্ন অবশিষ্ট সংখ্যাগুলো এক দ্বারা বৃদ্ধি হবে।

#### String Enum (স্ট্রিং এনাম):

স্ট্রিং এনামও নিউমারিক এনামের মতই, শুধু নাম্বার এর বদলে স্ট্রিং এনাম স্ট্রিং ভ্যালু সেভ করে। উদাহরণস্বরূপঃ

```ts
enum CarType {
	Honda = "HONDA",
	Toyota = "TOYOTA",
	Subaru = "SUBARU",
	Hyundai = "HYUNDAI"
}
// Access String Enum
CarType.Toyota; //returns TOYOTA
CarType['Honda']; //returns HONDA
```

#### Heterogeneous Enum (হেটারোজেনাস এনাম):

হেটারোজেনাস এনাম স্ট্রিং এবং নাম্বার উভয় ভ্যালুই এনাম হিসাবে সেভ করতে পারে। উদাহরণস্বরূপঃ

```ts
enum BooleanHeterogeneousEnum {
	Yes = 0,
	No = "NO",
}
```

#### Const Enum (কনস্ট এনাম):

`const` মডিফায়ারের সাহায্য কনস্ট এনাম ব্যবহার করা হয়। মূলত, এটা নিউমারিক এনামের পারফরম্যান্স বৃদ্ধিতে সহায়ক হিসাবে কাজ করে।

```ts
const enum Enum {
	X = 1
	Y = X * 2,
}
```

নিউমারিক এনাম কম্পাইল টাইমে consider করা হয়। কিন্তু কনস্ট এনাম কম্পাইল টাইমে consider করা হয় না। তাই এটা পারফরম্যান্স বৃদ্ধি করে।

#### Computed Enum (কম্পিউটেড এনাম) :

এনামে শুধু কনস্ট্যান্ট ভ্যালুই না কম্পিউটেড ভ্যালুও সেভ করা যায়। যেমনঃ

```ts

enum CarType {
	Honda = 1,
	Toyota = getCarTypeCode('toyota'),
	Subaru = Toyota * 3,
	Hyundai = 10
}

function getCarTypeCode(carName: string): number {
	if (carName === 'toyota') {
		return 5;
	}
}

CarType.Toyota; // returns 5
CarType.Subaru; // returns 15
```

উপরের উদাহরণটিতে `getCarTypeCode` ফাংশনটি থেকে কম্পিউটেড ভ্যালুটি `Toyota` তে initialize করা হয়েছে। আজ এনাম নিয়ে এ পর্যন্তই।

## টাপল
একটি টাপল হল আরেক ধরণের অ্যারে `(Array)`| এতে কতগুলো এলিমেন্ট আছে , কার কি ডেটা টাইপ এবং ইনডেক্স তা টাপল জানে|


#### **সিন্টেক্স**
```
let tulpleName:[data type, data type] = [value,value]
```

#### **কোড**

নিচের কোডটি টাপল কিভাবে তৈরি করতে হবে এবং তাতে কিভাবে ভ্যালু এসাইন করতে হয় তা দেখানো হয়েছে :

- `datesAndMonths`: টাপল এর নাম।
- `[number,string]`: প্রদত্ত ক্রমে টাপলে সংরক্ষিত ডেটা প্রকারগুলি।
- `[5,"january"]`: টপলে এসাইন ভ্যালু।
```
//tuple creation
let datesAndMonths:[number,string] = [5,"january"]
console.log(datesAndMonths)
```

আসুন ভ্যালু গুলোর ক্রম পরিবর্তন করার চেষ্টা করি। নিম্নলিখিত কোড স্নিপেটে লক্ষ্য করুন:

```
//changing the order of the elements.
let datesAndMonths:[number,string] = ["january",5]
console.log(datesAndMonths)
```

**Output**
```
index.ts(2,39): error TS2322: Type 'string' is not assignable to type 'number'.
index.ts(2,49): error TS2322: Type 'number' is not assignable to type 'string'.
```

#### **ইনডেক্সিং**

একটি টাপল এ প্রতিটি উপাদান কিছু ইনডেক্স দ্বারা চিহ্নিত করা হয়.
ইন্ডেক্সিং 0 দিয়ে শুরু হয় এবং n-1 দিয়ে শেষ হয়, যেখানে n হল টিপলের উপাদানের সংখ্যা।
ইনডেক্স বাম থেকে ডানে এসাইন করা হয়।
যদি আমাদের  [2,3,5,7] এলিমেন্টের একটি টাপল থাকে, তাহলে:
- এলিমেন্ট ২ এর ইনডেক্স হবে 0
- এলিমেন্ট ৩ এর ইনডেক্স হবে ১
- এলিমেন্ট ৫ এর ইনডেক্স হবে ২
- এলিমেন্ট ৭ এর ইনডেক্স হবে ৩


#### **এলিমেন্ট কিভাবে এক্সেস করতে হয়?**

আমরা একটি টাপল ভিতরে এলিমেন্ট অ্যাক্সেস করতে ইনডেক্স ব্যবহার করি

```
let primes:[number,number,number] = [2,3,5]

//accessing first element in tuple
console.log(primes[0])

//accessing second element in tuple
console.log(primes[1])
```

#### **রিড-ওনলি (Read-only)**
আমরা যখন যেকোন জায়গায় টাপল পাস করি সেখানে আমরা টাপলকে  শুধুমাত্র পড়ার জন্য সীমাবদ্ধ করতে পারি যাতে কেউ আসল টাপল পরিবর্তন করতে না পারে। নিম্নলিখিত কোড স্নিপেটে, আমরা শুধুমাত্র `readonly` কীওয়ার্ড দিয়ে ডেটা তৈরি করেছি 5 নং লাইনে, আমরা `readonly` টাপল এর  ডেটা পরিবর্তন করার চেষ্টা করেছি। এটি একটি এরর দেখাবে।
```
//making tuple as read only
let data:readonly[string,number] = ["abc",5];

//trying to modify tuple
data[0] = "qwerty";
```
