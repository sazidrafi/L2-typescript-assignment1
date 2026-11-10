# Type Narrowing in TypeScript

## 1. Introduction

Type narrowing is the process of specifying the type in an organized way. When the outcomes can be different based on the scenarious we check them through different conditions and by checking variable types to take particular actions. Some of the type checking process included using "typeof", "instanceof" and "in" operator.

## 2. Detailed Body

### 2.1 Use of typeof

###Use of typeof:### Like a scenario where a variable can be my age or my name. If it contains my name then it should greet me or it should say if I am above 24 or not.

**Example:**

```ts
const usingtypeof = (value: string | number) =>{
    if(typeof value == 'string'){
        return `Hello, ${value}`
    }
    else if(typeof value == 'number'){
        if(value > 18){
            return `You are above 18`;
        }
        else return `You are under 18`;
    }
}
```

### 2.2 Use of instanceof

###Use of instanceof:### It is used to check if an object belongs to a particular class or not. Like checking a date.

**Example:**

```ts
const usinginstanceof = (value: Date | number) =>{
    if(value instanceof Date){
        return `It is an instance of class Date`
    }
    return value;
}
```

### 2.3 Using in operator

###Using in operator:### It is used to check a property if present in ab object.

**Example:**

```ts
class Human {
  planet: string;

  constructor(planet: string) {
    this.planet = planet;
  }
}

const human1 = new Human("Earth");

const checkHuman = (human1: Human) =>{
    if("planet" in human1){
        return `You are a Human`
    }
}
```

## 3. Conclusion

**Type narrowing helps check variable types and object properties through `typeof`, `instanceof`, and the `in` operator.**
