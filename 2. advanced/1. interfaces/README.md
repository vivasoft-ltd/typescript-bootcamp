## Interfaces (ইন্টারফেস)

একটি Interface একটি structure যা আমাদের অ্যাপ্লিকেশনে একটি `contract` হিসাবে কাজ করে। এটি ক্লাস অনুসরণ করার জন্য সিনট্যাক্স সংজ্ঞায়িত করে, মানে একটি ক্লাস যা একটি Interface প্রয়োগ করে তার সমস্ত সদস্যকে বাস্তবায়ন করতে বাধ্য। আমরা Interface টি instantiate করতে পারি না, তবে এটিকে implement ক্লাস অবজেক্ট দ্বারা উল্লেখ করা যেতে পারে। টাইপস্ক্রিপ্ট কম্পাইলার টাইপ চেকিং এর জন্য Interface ব্যবহার করে (এটি "ডাক টাইপিং" বা "স্ট্রাকচারাল সাবটাইপিং" নামেও পরিচিত) object এর একটি নির্দিষ্ট structure আছে কিনা।

Interface এ শুধুমাত্র `method` এবং `field` গুলির ডিক্লেয়ারেশন থাকে, কিন্তু ইমপ্লিমেন্টেশন নয়। আমরা কোন অবজেক্ট তৈরি করতে এটি ব্যবহার করতে পারি না। এটি একটি ক্লাস দ্বারা inherit হয় এবং যে ক্লাসটি Interface প্রয়োগ করে সে Interface এর সকল সদস্যকে defined করে।

#### Declaring Interfaces
`interface` কীওয়ার্ডটি একটি Interface ডিক্লেয়ার করতে ব্যবহৃত হয়। উধাহরণস্বরূপঃ
```
interface IPerson { 
   firstName: string,
   lastName: string,
   sayHi: () => string 
} 
```
- `IPerson` হল ইন্টারফেসের নাম।
- `firstName` and `lastName` হল ইন্টারফেস বডি ভেরিয়েবল এবং `sayHi` হল Interface ফাংশন।

#### উদাহরণ: Interface এবং Objects

```
interface IPerson { 
   firstName: string, 
   lastName: string, 
   sayHi: () => string 
} 

const customer: IPerson = { 
   firstName: "Tom",
   lastName: "Hanks", 
   sayHi: () => "Hi there" 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

const employee: IPerson = { 
   firstName: "Jim",
   lastName: "Blakes", 
   sayHi: () => "Hello!!!" 
} 

console.log("Employee Object") 
console.log(employee.firstName);
console.log(employee.lastName);
```
উদাহরণটি একটি Interface ডিফাইন করে। কাস্টমার অবজেক্ট `IPerson` টাইপের। সুতরাং, ইন্টারফেসের সাহায্যে নির্ধারিত করা সমস্ত প্রপার্টিজগুলোকে ডিফাইন করার জন্য এটি এখন অবজেক্টের উপর বাধ্যতামূলক করা হবে।


#### Interfaces and Inheritance
একটি Interface অন্যান্য Interface দ্বারা Extend করা যেতে পারে। অন্য কথায়, একটি Interface অন্য Interface থেকে Inherite করতে পারে। টাইপস্ক্রিপ্টে একটি Interface কে একাধিক Interface থেকে Inherite করা যায়।

interfaces এর মধ্যে inheritance প্রয়োগ করতে `extends` কীওয়ার্ড ব্যবহার করুন।
```
interface Person { 
   age: number 
} 

interface Musician extends Person { 
   instrument: string 
} 

const drummer = <Musician>{}; 
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  "+ drummer.age);
console.log("Instrument:  "+ drummer.instrument);
```
এর আউটপুট নিম্নরূপ -
```
Age: 27 
Instrument: Drums 
```
