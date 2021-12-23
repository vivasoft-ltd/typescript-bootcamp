## Interfaces (ইন্টারফেস)

একটি Interface একটি কাঠামো যা আমাদের অ্যাপ্লিকেশনে একটি `contract` হিসাবে কাজ করে। এটি ক্লাস অনুসরণ করার জন্য সিনট্যাক্স সংজ্ঞায়িত করে, মানে একটি ক্লাস যা একটি Interface প্রয়োগ করে তার সমস্ত সদস্যকে বাস্তবায়ন করতে বাধ্য। আমরা Interface টি ইনস্ট্যান্টিয়েট করতে পারি না, তবে এটিকে প্রয়োগকারী ক্লাস অবজেক্ট দ্বারা উল্লেখ করা যেতে পারে। টাইপস্ক্রিপ্ট কম্পাইলার টাইপ-পরীক্ষার জন্য Interface ব্যবহার করে (এটি "ডাক টাইপিং" বা "স্ট্রাকচারাল সাবটাইপিং" নামেও পরিচিত) বস্তুটির একটি নির্দিষ্ট কাঠামো আছে কি না।

Interface এ শুধুমাত্র `methods` এবং `fields` গুলির ঘোষণা থাকে, কিন্তু বাস্তবায়ন নয়। আমরা কিছু নির্মাণ করতে এটি ব্যবহার করতে পারি না. এটি একটি ক্লাস দ্বারা উত্তরাধিকারসূত্রে প্রাপ্ত হয় এবং যে ক্লাসটি Interface প্রয়োগ করে সে Interface এর সকল সদস্যকে সংজ্ঞায়িত করে।

#### Declaring Interfaces
`interface` কীওয়ার্ডটি একটি Interface ঘোষণা করতে ব্যবহৃত হয়। এখানে একটি Interface ঘোষণা করার সিনট্যাক্স হল  -
```
interface IPerson { 
   firstName: string,
   lastName: string,
   sayHi: ()=>string 
} 
```
- `interface` হল একটি কীওয়ার্ড যা একটি টাইপস্ক্রিপ্ট interface ঘোষণা করতে ব্যবহৃত হয়।
- `IPerson` হল ইন্টারফেসের নাম।
- `firstName` and `lastName` হল ইন্টারফেস বডি ভেরিয়েবল এবং `sayHi` হল Interface ফাংশন।

#### উদাহরণ: Interface এবং Objects

```
interface IPerson { 
   firstName: string, 
   lastName: string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName: "Tom",
   lastName: "Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
   firstName: "Jim",
   lastName: "Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);
```
উদাহরণ একটি Interface সংজ্ঞায়িত করে। কাস্টমার অবজেক্ট আইপারসন টাইপের। সুতরাং, ইন্টারফেসের দ্বারা নির্দিষ্ট করা সমস্ত বৈশিষ্ট্যগুলিকে সংজ্ঞায়িত করার জন্য এটি এখন অবজেক্টের উপর বাধ্যতামূলক হবে।


#### Interfaces and Inheritance
একটি Interface অন্যান্য Interface দ্বারা প্রসারিত করা যেতে পারে. অন্য কথায়, একটি Interface অন্য Interface থেকে উত্তরাধিকার সূত্রে প্রাপ্ত হতে পারে। টাইপস্ক্রিপ্ট একটি Interface কে একাধিক Interface থেকে উত্তরাধিকার সূত্রে প্রাপ্ত করার অনুমতি দেয়।

interfaces এর মধ্যে inheritance প্রয়োগ করতে `extends` কীওয়ার্ড ব্যবহার করুন।
```
interface Person { 
   age:number 
} 

interface Musician extends Person { 
   instrument:string 
} 

var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age)
console.log("Instrument:  "+drummer.instrument)
```
এর আউটপুট নিম্নরূপ -
```
Age: 27 
Instrument: Drums 
```