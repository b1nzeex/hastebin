# Hastebin Wrapper

> A simple, lightweight Hastebin wrapper for developers to send and retrieve data from hastebin, this also works with your own instances of hastebin!

## Installation

```bash
npm i b1nzeex/hastebin
```

## Example Usage - TypeScript

```typescript
import { Hastebin } from "b1nzeex/hastebin";

const hastebin = new Hastebin({
  url: "http://hastebin-url.com", // If left empty, will use https://hastebin.com
  key: "your-authorization-key", // Only required for https://hastebin.com
});

// Post to hastebin
const postData = await hastebin.post("Hello World");
console.log(postData);

// Get from hastebin
const getData = await hastebin.get("url-code-here", true); // The second argument is whether to retrieve the raw content or not (default: false)
console.log(getData);
```

## Example Usage - JavaScript (ES5)

```javascript
const { Hastebin } = require("b1nzeex/hastebin");

const hastebin = new Hastebin({
  url: "http://hastebin-url.com", // If left empty, will use https://hastebin.com
  key: "your-authorization-key", // Only required for https://hastebin.com
});

// Post to hastebin
const postData = await hastebin.post("Hello World");
console.log(postData);

// Get from hastebin
const getData = await hastebin.get("url-code-here", true); // The second argument is whether to retrieve the raw content or not (default: false)
console.log(getData);
```
