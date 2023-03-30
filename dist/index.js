"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hastebin = void 0;
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
        const body = raw ? await res.text() : await res.json();
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
exports.Hastebin = Hastebin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBTSxRQUFRO0lBSVosWUFBbUIsT0FBd0I7UUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLHNCQUFzQixDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUVqQyxtRkFBbUY7UUFDbkYsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5RCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7OztNQWVFO0lBQ0ssS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFZLEVBQUUsTUFBZSxLQUFLO1FBQ2pELE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUNyQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLElBQUksRUFBRSxFQUFFLEVBQzFEO1lBQ0UsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxVQUFVLElBQUksQ0FBQyxhQUFhLEVBQUU7YUFDOUM7U0FDRixDQUNGLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkQsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7OztNQWNFO0lBQ0ssS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFlO1FBQy9CLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsWUFBWSxFQUFFO1lBQy9DLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGFBQWEsRUFBRSxVQUFVLElBQUksQ0FBQyxhQUFhLEVBQUU7YUFDOUM7WUFDRCxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU5QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2QsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQy9CLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFUSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc3RlYmluT3B0aW9ucywgSGFzdGViaW5Qb3N0UmVzdWx0IH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY2xhc3MgSGFzdGViaW4ge1xyXG4gIHByaXZhdGUgdXJsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBhdXRob3JpemF0aW9uOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBIYXN0ZWJpbk9wdGlvbnMpIHtcclxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgXCJodHRwczovL2hhc3RlYmluLmNvbVwiO1xyXG4gICAgdGhpcy5hdXRob3JpemF0aW9uID0gb3B0aW9ucy5rZXk7XHJcblxyXG4gICAgLy8gSWYgdGhlIHVybCBpcyBoYXN0ZWJpbi5jb20gYW5kIG5vIGF1dGhvcml6YXRpb24ga2V5IGlzIHByb3ZpZGVkLCB0aHJvdyBhbiBlcnJvci5cclxuICAgIGlmICh0aGlzLnVybCA9PT0gXCJodHRwczovL2hhc3RlYmluLmNvbVwiICYmICF0aGlzLmF1dGhvcml6YXRpb24pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXV0aG9yaXphdGlvbiBrZXkgcHJvdmlkZWQuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgICogR2V0IGNvbnRlbnQgZnJvbSBoYXN0ZWJpblxyXG5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgVGhlIGhhc3RlYmluIGNvZGUgdG8gZ2V0XHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmF3IFdoZXRoZXIgdG8gZ2V0IHRoZSByYXcgY29udGVudCBvciBub3RcclxuICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gVGhlIGNvbnRlbnQgb2YgdGhlIGhhc3RlYmluIHBvc3RcclxuICAgICogQGV4YW1wbGVcclxuICAgICogY29uc3QgeyBIYXN0ZWJpbiB9ID0gcmVxdWlyZShcImIxbnplZXgvaGFzdGViaW5cIik7XHJcbiAgICAqIFxyXG4gICAgKiBjb25zdCBoYXN0ZWJpbiA9IG5ldyBIYXN0ZWJpbih7XHJcbiAgICAqICAga2V5OiBcInlvdXIta2V5LWhlcmVcIixcclxuICAgICogfSk7XHJcbiAgICAqIFxyXG4gICAgKiBjb25zdCBjb250ZW50ID0gYXdhaXQgaGFzdGViaW4uZ2V0KFwic29tZS1jb2RlXCIpO1xyXG4gICAgKiBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICAqL1xyXG4gIHB1YmxpYyBhc3luYyBnZXQoY29kZTogc3RyaW5nLCByYXc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7dGhpcy51cmx9LyR7cmF3ID8gYHJhdy8ke2NvZGV9YCA6IGBkb2N1bWVudHMvJHtjb2RlfWB9YCxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmF1dGhvcml6YXRpb259YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGdldCBmcm9tIGhhc3RlYmluOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYm9keSA9IHJhdyA/IGF3YWl0IHJlcy50ZXh0KCkgOiBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybiByYXcgPyBib2R5LmJvZHkgOiBib2R5LmRhdGE7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgKiBQb3N0IGNvbnRlbnQgdG8gaGFzdGViaW5cclxuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IFRoZSBjb250ZW50IHRvIHBvc3QgdG8gaGFzdGViaW5cclxuICAgICogQHJldHVybnMge1Byb21pc2U8SGFzdGViaW5Qb3N0UmVzdWx0Pn0gVGhlIGNvZGUgYW5kIHVybCBvZiB0aGUgaGFzdGViaW4gcG9zdFxyXG4gICAgKiBAZXhhbXBsZVxyXG4gICAgKiBjb25zdCB7IEhhc3RlYmluIH0gPSByZXF1aXJlKFwiYjFuemVleC9oYXN0ZWJpblwiKTtcclxuICAgICogXHJcbiAgICAqIGNvbnN0IGhhc3RlYmluID0gbmV3IEhhc3RlYmluKHtcclxuICAgICogICBrZXk6IFwieW91ci1rZXktaGVyZVwiLFxyXG4gICAgKiB9KTtcclxuICAgICogXHJcbiAgICAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhc3RlYmluLnBvc3QoXCJIZWxsbywgd29ybGQhXCIpO1xyXG4gICAgKiBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICovXHJcbiAgcHVibGljIGFzeW5jIHBvc3QoY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxIYXN0ZWJpblBvc3RSZXN1bHQ+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMudXJsfS9kb2N1bWVudHNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5hdXRob3JpemF0aW9ufWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGNvbnRlbnQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwb3N0IHRvIGhhc3RlYmluOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29kZTogYm9keS5rZXksXHJcbiAgICAgIHVybDogYCR7dGhpcy51cmx9LyR7Ym9keS5rZXl9YCxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBIYXN0ZWJpbiwgdHlwZSBIYXN0ZWJpbk9wdGlvbnMsIEhhc3RlYmluUG9zdFJlc3VsdCB9O1xyXG4iXX0=