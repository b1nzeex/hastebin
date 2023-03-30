"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hastebin {
    constructor(options) {
        this.url = options.url || "https://hastebin.com";
        this.authorization = options.key;
        // If the url is hastebin.com and no authorization key is provided, throw an error.
        if (this.url === "https://hastebin.com" && !this.authorization) {
            throw new Error("No authorization key provided.");
        }
    }
    /*
      * Get content from hastebin
  
      * @param {string} code The hastebin code to get
      * @param {boolean} raw Whether to get the raw content or not
      * @returns {Promise<string>} The content of the hastebin post
      * @example
      * const { Hastebin } = require("b1nzeex/hastebin");
      *
      * const hastebin = new Hastebin({
      *   key: "your-key-here",
      * });
      *
      * const content = await hastebin.get("some-code");
      * console.log(content);
    */
    async get(code, raw = false) {
        const res = await fetch(`${this.url}/${raw ? `raw/${code}` : `documents/${code}`}`, {
            headers: {
                Authorization: `Bearer ${this.authorization}`,
            },
        });
        if (!res.ok) {
            throw new Error(`Failed to get from hastebin: ${res.status}`);
        }
        const body = await res.json();
        return raw ? body.body : body.data;
    }
    /*
      * Post content to hastebin
  
      * @param {string} content The content to post to hastebin
      * @returns {Promise<HastebinPostResult>} The code and url of the hastebin post
      * @example
      * const { Hastebin } = require("b1nzeex/hastebin");
      *
      * const hastebin = new Hastebin({
      *   key: "your-key-here",
      * });
      *
      * const result = await hastebin.post("Hello, world!");
      * console.log(result);
    */
    async post(content) {
        const res = await fetch(`${this.url}/documents`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.authorization}`,
            },
            body: content,
        });
        if (!res.ok) {
            throw new Error(`Failed to post to hastebin: ${res.status}`);
        }
        const body = await res.json();
        return {
            code: body.key,
            url: `${this.url}/${body.key}`,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLFFBQVE7SUFJWixZQUFtQixPQUF3QjtRQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksc0JBQXNCLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRWpDLG1GQUFtRjtRQUNuRixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssc0JBQXNCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O01BZUU7SUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQVksRUFBRSxNQUFlLEtBQUs7UUFDakQsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQ3JCLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsSUFBSSxFQUFFLEVBQUUsRUFDMUQ7WUFDRSxPQUFPLEVBQUU7Z0JBQ1AsYUFBYSxFQUFFLFVBQVUsSUFBSSxDQUFDLGFBQWEsRUFBRTthQUM5QztTQUNGLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDL0Q7UUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU5QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7O01BY0U7SUFDSyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWU7UUFDL0IsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxZQUFZLEVBQUU7WUFDL0MsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLFVBQVUsSUFBSSxDQUFDLGFBQWEsRUFBRTthQUM5QztZQUNELElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM5RDtRQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlCLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDZCxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDL0IsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc3RlYmluT3B0aW9ucywgSGFzdGViaW5Qb3N0UmVzdWx0IH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY2xhc3MgSGFzdGViaW4ge1xyXG4gIHByaXZhdGUgdXJsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBhdXRob3JpemF0aW9uOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBIYXN0ZWJpbk9wdGlvbnMpIHtcclxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgXCJodHRwczovL2hhc3RlYmluLmNvbVwiO1xyXG4gICAgdGhpcy5hdXRob3JpemF0aW9uID0gb3B0aW9ucy5rZXk7XHJcblxyXG4gICAgLy8gSWYgdGhlIHVybCBpcyBoYXN0ZWJpbi5jb20gYW5kIG5vIGF1dGhvcml6YXRpb24ga2V5IGlzIHByb3ZpZGVkLCB0aHJvdyBhbiBlcnJvci5cclxuICAgIGlmICh0aGlzLnVybCA9PT0gXCJodHRwczovL2hhc3RlYmluLmNvbVwiICYmICF0aGlzLmF1dGhvcml6YXRpb24pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXV0aG9yaXphdGlvbiBrZXkgcHJvdmlkZWQuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgICogR2V0IGNvbnRlbnQgZnJvbSBoYXN0ZWJpblxyXG5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgVGhlIGhhc3RlYmluIGNvZGUgdG8gZ2V0XHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmF3IFdoZXRoZXIgdG8gZ2V0IHRoZSByYXcgY29udGVudCBvciBub3RcclxuICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gVGhlIGNvbnRlbnQgb2YgdGhlIGhhc3RlYmluIHBvc3RcclxuICAgICogQGV4YW1wbGVcclxuICAgICogY29uc3QgeyBIYXN0ZWJpbiB9ID0gcmVxdWlyZShcImIxbnplZXgvaGFzdGViaW5cIik7XHJcbiAgICAqIFxyXG4gICAgKiBjb25zdCBoYXN0ZWJpbiA9IG5ldyBIYXN0ZWJpbih7XHJcbiAgICAqICAga2V5OiBcInlvdXIta2V5LWhlcmVcIixcclxuICAgICogfSk7XHJcbiAgICAqIFxyXG4gICAgKiBjb25zdCBjb250ZW50ID0gYXdhaXQgaGFzdGViaW4uZ2V0KFwic29tZS1jb2RlXCIpO1xyXG4gICAgKiBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICAqL1xyXG4gIHB1YmxpYyBhc3luYyBnZXQoY29kZTogc3RyaW5nLCByYXc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7dGhpcy51cmx9LyR7cmF3ID8gYHJhdy8ke2NvZGV9YCA6IGBkb2N1bWVudHMvJHtjb2RlfWB9YCxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmF1dGhvcml6YXRpb259YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGdldCBmcm9tIGhhc3RlYmluOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHJhdyA/IGJvZHkuYm9keSA6IGJvZHkuZGF0YTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICAqIFBvc3QgY29udGVudCB0byBoYXN0ZWJpblxyXG5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgVGhlIGNvbnRlbnQgdG8gcG9zdCB0byBoYXN0ZWJpblxyXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIYXN0ZWJpblBvc3RSZXN1bHQ+fSBUaGUgY29kZSBhbmQgdXJsIG9mIHRoZSBoYXN0ZWJpbiBwb3N0XHJcbiAgICAqIEBleGFtcGxlXHJcbiAgICAqIGNvbnN0IHsgSGFzdGViaW4gfSA9IHJlcXVpcmUoXCJiMW56ZWV4L2hhc3RlYmluXCIpO1xyXG4gICAgKiBcclxuICAgICogY29uc3QgaGFzdGViaW4gPSBuZXcgSGFzdGViaW4oe1xyXG4gICAgKiAgIGtleTogXCJ5b3VyLWtleS1oZXJlXCIsXHJcbiAgICAqIH0pO1xyXG4gICAgKiBcclxuICAgICogY29uc3QgcmVzdWx0ID0gYXdhaXQgaGFzdGViaW4ucG9zdChcIkhlbGxvLCB3b3JsZCFcIik7XHJcbiAgICAqIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgKi9cclxuICBwdWJsaWMgYXN5bmMgcG9zdChjb250ZW50OiBzdHJpbmcpOiBQcm9taXNlPEhhc3RlYmluUG9zdFJlc3VsdD4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy51cmx9L2RvY3VtZW50c2AsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmF1dGhvcml6YXRpb259YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogY29udGVudCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBvc3QgdG8gaGFzdGViaW46ICR7cmVzLnN0YXR1c31gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiBib2R5LmtleSxcclxuICAgICAgdXJsOiBgJHt0aGlzLnVybH0vJHtib2R5LmtleX1gLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19