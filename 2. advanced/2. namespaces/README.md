## Namespaces (নেমস্পেস)

### What are namespaces?
`namespace` হল সংগঠিত কোডের দৃষ্টান্ত যাতে ভেরিয়েবল, ফাংশন, ইন্টারফেস বা ক্লাসগুলিকে একটি লোকাল স্কোপে এর মধ্যে একত্রে গোষ্ঠীভুক্ত করা হয় 
যাতে গ্লোবাল স্কোপে এ কম্পনেন্টগুলির মধ্যে নামকরণের দ্বন্দ্ব এড়ানো যায়। এটি গ্লোবাল স্কোপে দূষণ কমাতে সবচেয়ে সাধারণ কৌশলগুলির মধ্যে একটি।

### Namespace Definition
namespace নাম অনুসরণ করে `namespace` কীওয়ার্ড ব্যবহার করে একটি নেমস্পেস তৈরি করা যেতে পারে। আমরা কারলি ব্রাকেট `{ }` ব্যবহার করে 
একটি নেমস্পেস সংজ্ঞায়িত করতে পারি।
```
namespace <name>
{
    
}
```
'StringUtilities' নেমস্পেস এ বিভিন্ন স্ট্রিং ফাংশনের নিম্নলিখিত উদাহরণটি বিবেচনা করুনঃ
```
namespace StringUtility {

    export function ToCapital(str: string): string {
        return str.toUpperCase();
    }

    export function SubString(str: string, from: number, length: number = 0): string {
        return str.substr(from, length);
    }
}
```
উপরের `StringUtility.ts` ফাইলটিতে StringUtility নেমস্পেস অন্তর্ভুক্ত রয়েছে যা দুটি সাধারণ স্ট্রিং ফাংশন অন্তর্ভুক্ত করে।
StringUtility নেমস্পেস আমাদের অ্যাপ্লিকেশনের জন্য গুরুত্বপূর্ণ স্ট্রিং ফাংশনগুলির একটি লজিকাল গ্রুপিং করে। স্বভাবত,
নেমস্পেস কম্পনেন্টগুলি অন্যান্য মডিউল বা নেমস্পেস এ ব্যবহার করা যাবে না। এটি বাইরে অ্যাক্সেসযোগ্য তৈরি করতে আপনাকে অবশ্যই প্রতিটি 
কম্পনেন্ট এক্সপোর্ট করতে হবে `export` কীওয়ার্ড ব্যবহার করে। 

উপরের namespace এর জন্য নিম্নলিখিত জাভাস্ক্রিপ্ট কোড তৈরি হবেঃ
```
var StringUtility;
(function (StringUtility) {
    function ToCapital(str){
        return str.toUpperCase();
    }
    StringUtility.ToCapital = ToCapital;
    function SubString(str, from, length) {
        if (length === void 0) { length = 0; }
        return str.substr(from, length);
    }
    StringUtility.SubString = SubString;
})(StringUtility || (StringUtility = {}));
```
আমরা দেখতে পাচ্ছি, নেমস্পেসের জন্য উপরে উত্পন্ন জাভাস্ক্রিপ্ট কোডটি গ্লোবাল স্কোপে দূষণ বন্ধ করতে IIFE প্যাটার্ন ব্যবহার করে।

`Employee` মডিউলে উপরের StringUtility নেমস্পেসটি ব্যবহার করা হয়েছে, যা নীচে দেখানো হয়েছে:
```
/// <reference path="StringUtility.ts" />

export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}
```
অন্যান্য স্থানে নেমস্পেসের কম্পনেন্ট ব্যবহার করার জন্য, প্রথমে আমাদের ট্রিপল স্ল্যাশ রেফারেন্স সিনট্যাক্স ব্যবহার করে নেমস্পেস অন্তর্ভুক্ত করতে হবে 
`/// <reference path="path to namespace file" />`। রেফারেন্স ট্যাগ ব্যবহার করে নেমস্পেস ফাইলটি অন্তর্ভুক্ত করার পরে,
নেমস্পেস টি ব্যবহার করে আমরা সমস্ত কার্যকারিতা অ্যাক্সেস করতে পারি। উপরে, আমরা ToCapital() ফাংশন ব্যবহার করেছি
এই ভাবে: `StringUtility.ToCapital()`


### নেস্টেড নেমস্পেস
TypeScript আমাদের নেস্টেড নেমস্পেস ব্যবহার করে আমাদের কোড সংগঠিত করতে দেয়। আমরা নিম্নরূপ নেস্টেড নেমস্পেস তৈরি করতে পারি:
```
namespace TransportMeans {
  export namespace Vehicle {
    const name = "Toyota"
    export function getName () {
        return `${name}`
    }
  }
}
```
Vehicle নেমস্পেসের আগে `export` কীওয়ার্ডটি লক্ষ্য করুন। এটি নেমস্পেসকে TransportMeans নেমস্পেস এর বাইরে অ্যাক্সেসযোগ্য করার অনুমতি দেয়।

আমরা নেমস্পেসের ডীপ নেস্টিংও করতে পারি। আমাদের নেস্টেড নেমস্পেসগুলি নিম্নরূপ অ্যাক্সেস করা যেতে পারে:
```
TransporMeans.Vehicle.getName() // Toyota
```

### নেমস্পেস alias(এলিয়াস)
ডীপ নেস্টেড নেমস্পেসের জন্য, কোড পঠনযোগ্যতার জন্য নেমস্পেস এলিয়াস কাজে আসে। নেমস্পেস এলিয়াস সংজ্ঞায়িত করা হয় নিম্নরূপ `import` 
কীওয়ার্ড ব্যবহার করে:
```
import carName= TransporMeans.Vehicle;
carName.getName(); //Toyota
```


### কেন নেমস্পেস প্রয়োজন?
নেমস্পেস এর এই সুবিধা রয়েছে:

 - কোড পুনর্ব্যবহারযোগ্যতা — কোড পুনঃব্যবহারযোগ্যতার জন্য নেমস্পেস এর গুরুত্বকে ছোট করা যাবে না
 - ক্লিন গ্লোবাল স্কোপ — নেমস্পেসগুলি গ্লোবাল স্কোপের কোডের পরিমাণ কমিয়ে দেয়
 - Third-party লাইব্রেরি — Third-party লাইব্রেরির উপর নির্ভর করে ওয়েবসাইটের সংখ্যা বৃদ্ধির সাথে, এটা গুরুত্বপূর্ণ যে আপনার কোড এবং Third-party 
   লাইব্রেরির মধ্যে একই-নামের দ্বন্দ্ব প্রতিরোধ করতে নেমস্পেস ব্যবহার করে আপনার কোডটি সুরক্ষিত করুন
 - ডিস্ট্রিবিউটেড ডেভেলপমেন্ট — ডিস্ট্রিবিউটেড ডেভেলপমেন্ট জনপ্রিয় হওয়ার সাথে সাথে, গ্লোবাল স্কোপ দূষণ প্রায় অনিবার্য কারণ ডেভেলাপারস এর দের জন্য সাধারণ 
   ভেরিয়েবল বা ক্লাস নাম ব্যবহার করা অনেক সহজ। এর ফলে গ্লোবাল স্কোপে এ ভেরিয়েবল বা ক্লাস নাম এর সংঘর্ষ এবং দূষণ হয়
