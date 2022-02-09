## Enum-Tuple (এনাম-টুপল)

## What is Enum? (এনাম কি?) :

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

## Why use Enum in TypeScript? (কেন টাইপস্ক্রিপ্টে এনাম ব্যবহার করবেন?) :

এনাম টাইপস্ক্রিপ্টে কোড organize করতে সাহায্য করে। চলুন এনামের কিছু প্রোজ দেখিঃ

- জাভাস্ক্রিপ্টে ইনলাইন কোডে কম্পাইল-টাইম এবং রানটাইম save করে।
- কোডের intention আর ইউজ কেস এক্সপ্রেস করতে সাহায্য করে।
- `memory-efficient` কাস্টম কনস্ট্যান্ট তৈরি করতে সাহায্য করে।

## Enums vs alternatives (এনাম vs অলটারনেটিভ) :

কিছু কেসে এনাম ব্যবহার করা ঠিক নয়। যেমনঃ

- রিএসাইন বা এনামের মেমবার কনটেন্ট changeable হলে।
- ডাইনামিক ভ্যালু রেকর্ড করার ক্ষেত্রে।
- ভ্যারিয়েবল ব্যবহার করার ক্ষেত্রে।

চলুন এবার এনাম নিয়ে আরো গভীরে যাই।

## Numeric Enum (নিউমারিক এনাম) :

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

## String Enum (স্ট্রিং এনাম):

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

## Heterogeneous Enum (হেটারোজেনাস এনাম):

হেটারোজেনাস এনাম স্ট্রিং এবং নাম্বার উভয় ভ্যালুই এনাম হিসাবে সেভ করতে পারে। উদাহরণস্বরূপঃ

```ts
enum BooleanHeterogeneousEnum {
	Yes = 0,
	No = "NO",
}
```

## Const Enum (কনস্ট এনাম):

`const` মডিফায়ারের সাহায্য কনস্ট এনাম ব্যবহার করা হয়। মূলত, এটা নিউমারিক এনামের পারফরম্যান্স বৃদ্ধিতে সহায়ক হিসাবে কাজ করে।

```ts
const enum Enum {
	X = 1
	Y = X * 2,
}
```

নিউমারিক এনাম কম্পাইল টাইমে consider করা হয়। কিন্তু কনস্ট এনাম কম্পাইল টাইমে consider করা হয় না। তাই এটা পারফরম্যান্স বৃদ্ধি করে।

## Computed Enum (কম্পিউটেড এনাম) :

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
