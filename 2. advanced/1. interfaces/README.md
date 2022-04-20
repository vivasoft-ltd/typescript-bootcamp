## Interfaces (ইন্টারফেস)

একটি Interface একটি স্ট্রাকচার (কাঠামো) যা আমাদের অ্যাপ্লিকেশনে একটি `contract` হিসাবে কাজ করে। একটি ক্লাসের জন্য সিনট্যাক্স ডিফাইন করে, মানে একটি ক্লাসের জন্য যে Interface টি ব্যবহার করা হয়েছে ওই ক্লাসে Interface এর  সকল মেথডস এবং প্রোপারটিস থাকতে হবে। আমরা Interface টি ইনস্ট্যান্টিয়েট করতে পারি না, তবে এটিকে ওই ক্লাসের অবজেক্ট দ্বারা উল্লেখ করা যেতে পারে। টাইপস্ক্রিপ্ট কম্পাইলার টাইপ-পরীক্ষার জন্য Interface ব্যবহার করে বুঝা যায় একটি অবজেক্টের একটি নির্দিষ্ট স্ট্রাকচার আছে কি না। এটি "ডাক টাইপিং" বা "স্ট্রাকচারাল সাবটাইপিং" নামেও পরিচিত।

Interface এ শুধুমাত্র `methods` এবং `fields` গুলির ডিক্লারেশন থাকে, কিন্তু ইমপ্লিমেন্টেশন থাকে না । আমরা কিছু তৈরী (বিল্ড) করতে এটি ব্যবহার করতে পারি না. এটি শুধু একটি ক্লাস দ্বারা ইনহেরিট হয় এবং যে ক্লাসটি Interface প্রয়োগ করে সে Interface এর সকল সদস্যকে ডিফাইন করে।

#### Declaring Interfaces
`interface` কীওয়ার্ডটি একটি Interface ডিক্লেয়ার করতে ব্যবহৃত হয়। Interface ডিক্লেয়ার করার সিনট্যাক্স হল  -
```
interface IPerson { 
   firstName: string,
   lastName: string,
   sayHi: ()=>string 
} 
```
- `interface` হল একটি কীওয়ার্ড যা একটি টাইপস্ক্রিপ্ট interface ডিক্লেয়ার করতে ব্যবহৃত হয়।
- `IPerson` হল ইন্টারফেসের নাম।
- `firstName` and `lastName` হল ইন্টারফেস প্রপার্টিজ এবং `sayHi` হল Interface ফাংশন।

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
উদাহরণটি একটি Interface ডিফাইন করে। কাস্টমার অবজেক্ট IPerson টাইপের। সুতরাং, ইন্টারফেসের দ্বারা নির্দিষ্ট করা সমস্ত বৈশিষ্ট্যগুলিকে ডিফাইন করার জন্য এটি এখন অবজেক্টের উপর বাধ্যতামূলক হবে।


#### Interfaces and Inheritance
একটি Interface অন্যান্য Interface দ্বারা Extend করা যেতে পারে. অন্য কথায়, একটি Interface অন্য Interface থেকে ইনহেরিট হতে পারে । টাইপস্ক্রিপ্ট একটি Interface কে একাধিক Interface থেকে ইনহেরিট করার অনুমতি দেয়।

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
