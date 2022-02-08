## Decorators (ডেকোরেটর্স)
#### **ডেকোরেটর কি?**

ডেকোরেটর হল টাইপস্ক্রিপ্টের অফার করা সবচেয়ে শক্তিশালী টাইপ গুলোর মধ্যে একটি, যা আমাদের ক্লাস এবং মেথড গুলোর কার্যকারিতা প্রসারিত করতে দেয়।
ডেকোরেটর বর্তমানে জাভাস্ক্রিপ্টের জন্য stage 2 প্রস্তাবনা কিন্তু ইতিমধ্যেই TypeScript ইকো-সিস্টেমে জনপ্রিয়তা অর্জন করেছে, এটি Angular এর মতো নেতৃস্থানীয় ওপেন-সোর্স প্রজেক্ট দ্বারা ব্যবহৃত হচ্ছে।

ডেকোরেটর একটি পরীক্ষামূলক টাইপ, তাই বাস্তবায়নের বিবরণ ভবিষ্যতে পরিবর্তিত হতে পারে, কিন্তু অন্তর্নিহিত নীতিগুলি চিরন্তন। ডেকোরেটর ব্যবহারের অনুমতি দিতে `experimentalDecorators: true`যোগ করুন: `tsconfig.json` ফাইলে, এবং নিশ্চিত করুন যে আপনার ট্রান্সপিলেশন লক্ষ্য ES5 বা তার পরে।

#### **ক্লাস ডেকোরেটর** 
ধরুন, আপনার একটি ব্যবসা আছে যা পরিবারকে বাড়ি ভাড়া দেয় এবং আপনি একটি HTTP সার্ভার সেট আপ করার জন্য কাজ করছেন। আপনি আপনার API-এর প্রতিটি এন্ডপয়েন্টকে একটি ক্লাস হিসাবে তৈরি করার সিদ্ধান্ত নিয়েছেন এবং ক্লাসের পাবলিক মেথোডস গুলোকে HTTP এর  মেথোডস গুলোর সাথে মিল রেখেছেন । এটি এমন কিছু হতে পারে:

```
class Families {
  private houses = ["Lannister", "Targaryen"];

  get() {
    return this.houses;
  }
  post(request) {
    this.houses.push(request.body);
  }
}

class Castles {
  private castles = ["Winterfell", "Casterly Rock"];

  get() {
    return this.castles;
  }
  post(request) {
    this.castles.push(request.body);
  }
}
```

এটি একটি চমৎকার শুরু, এবং এখন আমাদের প্রতিটি ক্লাসকে  HTTP সার্ভারে একটি এন্ডপয়েন্ট  হিসাবে "রেজিস্টার" করার জন্য একটি সহজ উপায় প্রয়োজন৷ এই কাজটি করার জন্য একটি ফাংশন তৈরি করা যাক। আমাদের ফাংশন একটি আর্গুমেন্ট হিসাবে একটি ক্লাস পাবে, এবং আমাদের সার্ভারে একটি এন্ডপয়েন্ট  হিসাবে সেই ক্লাসের একটি ইনস্ট্যান্স যোগ করবে:

```
const httpEndpoints = {};

function registerEndpoint(constructor) {
  const className = constructor.name;
  const endpointPath = "/" + className.toLowerCase();
  httpEndpoints[endpointPath] = new constructor();
}

registerEndpoint(Families)
registerEndpoint(Castles)

console.log(httpEndpoints) // {"/families": Families, "/castles": Castles}
httpEndpoints["/families"].get() // ["Lannister", "Targaryen"]
```


আপনি হয়তো লক্ষ্য করেননি , আমরা ইতিমধ্যে আমাদের প্রথম ডেকোরেটর লিখেছি! এটা খুবই সহজ। সমস্ত ডেকোরেটর হল একটি ফাংশন যা একটি আর্গুমেন্ট হিসাবে একটি ক্লাস নেয় এবং এখানে আমাদের কাছে এটি রয়েছে। এখন রেজিস্টার এন্ডপয়েন্টকে নরমাল  উপায়ে কল করার পরিবর্তে, আমরা শুধু @registerEndpoint দিয়ে আমাদের ক্লাস সাজাতে পারি। একবার দেখুন:

```
const httpEndpoints = {};

function registerEndpoint(constructor) {
  const className = constructor.name;
  const endpointPath = "/" + className.toLowerCase();
  httpEndpoints[endpointPath] = new constructor();
}

@registerEndpoint
class Families {
  // implementation...
}

@registerEndpoint
class Castles {
  // implementation...
}

console.log(httpEndpoints) // {"/families": Families, "/castles": Castles}
httpEndpoints["/families"].get() // ["Lannister", "Targaryen"]
```

#### **মেথড ডেকোরেটর** 

ধরা যাক যে আমরা আমাদের কিছু এন্ডপয়েন্ট রক্ষা করতে চাই যাতে শুধুমাত্র প্রমাণীকৃত ব্যবহারকারীরা সেগুলি অ্যাক্সেস করতে সক্ষম হয়। এটি করার জন্য আমরা `protect` নামে একটি নতুন ডেকোরেটর তৈরি করতে পারি। আপাতত, আমাদের সমস্ত ডেকোরেটর প্রোটেক্টেড মেথোডস গুলোকে নামক একটি অ্যারেতে যুক্ত করবে।

```
const protectedMethods = [];

function protect(target, propertyKey, descriptor) {
  const className = target.constructor.name;
  protectedMethods.push(className + "." + propertyKey);
}

@registerEndpoint
class Families {
  private houses = ["Lannister", "Targaryen"];

  @protect
  get() {
    return this.houses;
  }
  
  @protect
  post(request) {
    this.houses.push(request.body);
  }
}

console.log(protectedMethods) // ["Families.get", "Families.post"]
```

আপনি দেখতে পাচ্ছেন, মেথড ডেকোরেটর 3 টি আর্গুমেন্ট নেয়:
১. টার্গেট (target ) - ক্লাস এর প্রোটোটাইপ 
২. propertyKey — ডেকোরেটেড মেথডস এর নাম
৩. Descriptor: একটি অবজেক্ট যা ডেকোরেটেড ফাংশন ধারণ করে এবং এটি সম্পর্কিত কিছু মেটা-ডেটা।

এখন পর্যন্ত আমরা শুধুমাত্র আমাদের ডেকোরেটেড ক্লাস এবং পদ্ধতি সম্পর্কিত তথ্য পড়েছি, কিন্তু আসল মজা শুরু হবে যখন আমরা তাদের আচরণ পরিবর্তন করতে শুরু করবো আমরা কেবল ডেকোরেটরের কাছ থেকে একটি ভ্যালু রিটার্ন  দিয়ে এটি করতে পারি। যখন একটি মেথড ডেকোরেটর একটি ভ্যালু প্রদান করে, তখন এই ভ্যালু মূল ` descriptor`পরিবর্তে ব্যবহার করা হবে (যা মূল মেথডটি কে ধারণ করে)।

```
function nope(target, propertyKey, descriptor) {
  descriptor.value = function() {
    console.log("nope");
  };
  return descriptor;
}

@registerEndpoint
class Families {
  private houses = ["Lannister", "Targaryen"];

  @nope
  get() {
    return this.houses;
  }
}

httpEndpoints["/families"].get() // nope
```


