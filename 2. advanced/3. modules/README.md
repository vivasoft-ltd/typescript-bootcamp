## Modules (মডিউল)

`মডিউল` হল রিলেটেড ভেরিয়েবল, ফাংশন, ক্লাস এবং ইন্টারফেস ইত্যাদির একটি গ্রুপ তৈরি করার একটি উপায়৷ এটি লোকাল স্কোপ এ কার্যকর হয়, গ্লোবাল স্কোপ এ নয়৷
অন্য কথায়, একটি মডিউলে ডিক্লেয়ার করা ভেরিয়েবল, ফাংশন, ক্লাস এবং ইন্টারফেস মডিউলের বাইরে সরাসরি অ্যাক্সেসযোগ্য হতে পারে না।
আমরা `export(এক্সপোর্ট)` কীওয়ার্ড ব্যবহার করে একটি মডিউল তৈরি করতে পারি এবং `import(ইম্পোর্ট)` কীওয়ার্ড ব্যবহার করে অন্যান্য মডিউলে ব্যবহার করতে পারি।


### Module declaration
একটি মডিউল একটি পৃথক `.ts` ফাইলে ডিক্লেয়ার করা যেতে পারে, যাতে ফাংশন, ভেরিয়েবল, ইন্টারফেস এবং ক্লাস থাকতে পারে। 
আমরা এক্সপোর্ট কীওয়ার্ড ব্যবহার করে একটি মডিউল ডিক্লেয়ার করতে পারি। মডিউল ডিক্লেয়ার করার জন্য সিনট্যাক্স নীচে দেওয়া হল.

```
//FileName : EmployeeModule.ts
export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
} 
```

### Module Import
একটি মডিউল অন্য মডিউলে একটি `import` স্টেটমেন্ট ব্যবহার করে ব্যবহার করা যেতে পারে।
```
Import { export name } from "file path without extension"
```
আসুন মডিউল `import` এর বিভিন্ন উপায় দেখি:
 - **একটি মডিউল থেকে একটি একক এক্সপোর্ট ইম্পোর্ট করা হচ্ছে:**
   নিম্নলিখিত কোডটি `Employee.ts` মডিউল থেকে `App.ts` ফাইলে `Employee` ক্লাসটি ইম্পোর্ট করে।
    ```
   //FileName : App.ts
   
   import { Employee } from "./Employee";
   let empObj = new Employee("Steve Jobs", 1);
   empObj.displayEmployee(); //Output: Employee Code: 1, Employee Name: Steve Jobs
   ```
 - **একটি ফাইলে একাধিক মডিউল ইম্পোর্ট করা:** আমরা একটি ফাইলে একাধিক মডিউল ডিফাইন করতে পারি। তারপর আমরা ওঁই ফাইল থেকে সমস্ত মডিউল ইম্পোর্ট করতে পারি
   ```
   //FileName : CalculationModule.ts
   
   export class Addition{  
    constructor(private x?: number, private y?: number){  
    }  
    Sum(){  
        console.log("SUM: " +(this.x + this.y));  
    }  
   } 
    
   export class Substraction{  
    constructor(private a?: number, private b?: number){  
    }  
    Substract(){  
       console.log("SUBSTRACTION: " +(this.a - this.b));  
    }  
   }
   ```
   `import` কীওয়ার্ড ব্যবহার করে অন্য ফাইলে একাধিক মডিউল অ্যাক্সেস করা
   ```
   //FileName : App.ts
   
   import  {Addition, Substraction} from './Modules';  

   let addObject = new Addition(10, 20);   
   let subObject = new Substraction(20, 10);

   addObject.Sum();  
   subObject.Substract();
   ```
 - **একটি ভ্যারিয়েবল এর মধ্যে সমগ্র মডিউল ইম্পোর্ট করা হচ্ছে:** আমরা একটি মডিউলে সমস্ত এক্সপোর্ট `*` দিয়ে ইম্পোর্ট করতে পারি।
   ```
   //FileName : App.ts
   
   import * as Emp from "./Employee"
   console.log(Emp.age); // 20

   let empObj = new Emp.Employee("Bill Gates" , 2);
   empObj.displayEmployee(); //Output: Employee Code: 2, Employee Name: Bill Gates
   ```
   উপরের উদাহরণে, আমরা `Emp` নামক একটি একক ভেরিয়েবলে `Employee` মডিউলের সমস্ত এক্সপোর্ট ইম্পোর্ট করি। সুতরাং, আমাদের প্রতিটি পৃথক মডিউলের জন্য একটি এক্সপোর্ট statement লিখতে হবে না।
 

 - **একটি মডিউল থেকে এক্সপোর্ট এর নাম পরিবর্তন করা:** আপনি একটি এক্সপোর্ট এর নাম `as` দিয়ে পরিবর্তন করতে পারেন.
   ```
   //FileName : App.ts
   
   import { Employee as Associate } from "./Employee"
   let obj = new Associate("James Bond" , 3);
   obj.displayEmployee();//Output: Employee Code: 3, Employee Name: James Bond
   ```
   উপরের উদাহরণে, `Employee` এক্সপোর্ট ক্লাস নামটি `{ employee as Associate }` ব্যবহার করে `Associate` এ পরিবর্তিত হয়েছে। এটি আপনার প্রয়োজন অনুসারে একটি এক্সপোর্টকে আরও অর্থপূর্ণ নাম দিতে পারে যা কোডের রিডেবিলিটি বাড়ায়।
