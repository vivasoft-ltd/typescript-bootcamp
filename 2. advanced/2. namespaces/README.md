## Namespaces (নেমস্পেস)

### What are namespaces?
`namespace` হল ভেরিয়েবল, ফাংশন, ইন্টারফেস বা ক্লাসগুলিকে একটি লোকাল স্কোপে এর মধ্যে একত্রীকরণ যা গ্লোবাল স্কোপের বিভিন্ন কম্পনেন্টগুলির মধ্যে নামের কনফ্লিক্ট দূর করে । এটি গ্লোবাল স্কোপে নামের কনফ্লিক্  এড়াতে সবচেয়ে সাধারণ কৌশলগুলির মধ্যে একটি।

### Namespace Definition
namespace নাম অনুসরণ করে `namespace` কীওয়ার্ড ব্যবহার করে একটি নেমস্পেস তৈরি করা যায়।  আমরা কারলি ব্রাকেট `{ }` ব্যবহার করে 
একটি নেমস্পেস ডিফাইন করতে পারি।
```
namespace <name>
{
    
}
```
'StringUtilities' নেমস্পেস এ বিভিন্ন স্ট্রিং ফাংশনের নিম্নলিখিত উদাহরণটি লক্ষ্য করুনঃ
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
উপরের `StringUtility.ts` ফাইলটিতে StringUtility নেমস্পেস অন্তর্ভুক্ত রয়েছে যা দুটি সাধারণ স্ট্রিং ফাংশনকে অন্তর্ভুক্ত করে।
StringUtility নেমস্পেস আমাদের অ্যাপ্লিকেশনের জন্য গুরুত্বপূর্ণ স্ট্রিং ফাংশনগুলির একটি লজিকাল গ্রুপিং করে। স্বভাবত,
নেমস্পেস কম্পনেন্টগুলি অন্যান্য মডিউল বা নেমস্পেস এ ব্যবহার করা যায় না। বাইরে থেকে এটিকে অ্যাক্সেস করার জন্য `export` কীওয়ার্ড ব্যবহার করতে হবে।   

উপরের namespace এর জন্য জাভাস্ক্রিপ্ট কোড হলো 
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
আমরা দেখতে পাচ্ছি, নেমস্পেসের জন্য উপরের তৈরী জাভাস্ক্রিপ্ট কোডটি গ্লোবাল স্কোপে কনফ্লিক্ট এড়াতেে IIFE প্যাটার্ন ব্যবহার করে।

`Employee` মডিউলে উপরের StringUtility নেমস্পেসটি ব্যবহার করা হয়েছে, যা নীচে দেখানো হলো। 
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
অন্যান্য স্থানে নেমস্পেসের কম্পোনেন্ট ব্যবহার করার জন্য, প্রথমে আমাদের ট্রিপল স্ল্যাশ রেফারেন্স সিনট্যাক্স ব্যবহার করে নেমস্পেস অন্তর্ভুক্ত করতে হবে 
`/// <reference path="path to namespace file" />`। রেফারেন্স ট্যাগ ব্যবহার করে নেমস্পেস ফাইলটি অন্তর্ভুক্ত করার পরে,
নেমস্পেসটি ব্যবহার করে আমরা সমস্ত কার্যকারিতা অ্যাক্সেস করতে পারি। উপরে, আমরা ToCapital() ফাংশন ব্যবহার করেছি
এই ভাবে: `StringUtility.ToCapital()`


### নেস্টেড নেমস্পেস
TypeScript নেস্টেড নেমস্পেস ব্যবহার করে আমাদের কোড organize করতে দেয়। আমরা নিম্নরূপ নেস্টেড নেমস্পেস তৈরি করতে পারি:
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
```Vehicle``` নেমস্পেসের আগে `export` কীওয়ার্ডটি লক্ষ্য করুন। এটি নেমস্পেসকে TransportMeans নেমস্পেস এর বাইরে অ্যাক্সেসযোগ্য করার অনুমতি দেয়।

আমরা নেমস্পেসের ডীপ নেস্টিংও করতে পারি। আমাদের নেস্টেড নেমস্পেসগুলি নিম্নরূপ অ্যাক্সেস করা যেতে পারে:
```
TransporMeans.Vehicle.getName() // Toyota
```

### নেমস্পেস alias(এলিয়াস)
কোডের রিডেবিলিটির জন্য নেমস্পেস এলিয়াস কাজে আসে। নেমস্পেস এলিয়াস ডিফাইন করা হয় `import` 
কীওয়ার্ড ব্যবহার করে:
```
import carName= TransporMeans.Vehicle;
carName.getName(); //Toyota
```

