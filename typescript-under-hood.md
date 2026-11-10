# TypeScript Under the Hood

## 1. Introduction

As we know that typescript is a superset of JavaScript, still browser doesn't support typescript. It only supports JavaScript. That's why we need to convert the typescript into JavaScript before running it into the browser. TypeScript basically helps us to write code more efficiently so that we can manage errors and type checking with less effort.

## 2. How TypeScript Works Under the Hood

Under the hood while compiling it checks the main .ts file. It checks for errors and type conversions precausions. Then it removes the syntaxs from .ts file and generates a .js file.

Example:
.ts file

```ts
interface User {
  name: string;
}
const user: User = {
  name: "Sazidul Islam",
};
console.log("User ", user.name);
```

after converting into .js file

```js
const user = {
  name: "Sazidul Islam",
};
console.log(user.name);
```

as we can see there are much more steps in .ts file to keep it error free with proper decalration and type checking. But it is quite simple in javascript. Typescript gives us the features to keep out code clean and error free while providing the save .js file for browser for better user interaction and utilize all js facilities.

## 3. The tsconfig.json File

The tsconfig.json is the main configuration file of typescript. After initializing the typescipt into the code base we can see a tsconfig file that sets all the necessary configuration will be needed for process of running and compiling .ts file.

1. Like a tsconfig file set the input and output directory with, "outDir": "./dist", "rootDir": "./src" configurtion.
2. "strict": true, it enables the strict type checking
3. "module": "esnext" uses the modern ES module syntax
4. moduleDetection: "force" it treats every typescript file as a module without using the import and export keywords

## 4. Conclusion

[TypeScript helps developers write more efficiently with type checking, while the browser runs the generated JavaScript file.]
