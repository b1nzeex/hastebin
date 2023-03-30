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
        return raw ? body : body.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBTSxRQUFRO0lBSVosWUFBbUIsT0FBd0I7UUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLHNCQUFzQixDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUVqQyxtRkFBbUY7UUFDbkYsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5RCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7OztNQWVFO0lBQ0ssS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFZLEVBQUUsTUFBZSxLQUFLO1FBQ2pELE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUNyQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLElBQUksRUFBRSxFQUFFLEVBQzFEO1lBQ0UsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxVQUFVLElBQUksQ0FBQyxhQUFhLEVBQUU7YUFDOUM7U0FDRixDQUNGLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkQsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7O01BY0U7SUFDSyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWU7UUFDL0IsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxZQUFZLEVBQUU7WUFDL0MsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLFVBQVUsSUFBSSxDQUFDLGFBQWEsRUFBRTthQUM5QztZQUNELElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM5RDtRQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlCLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDZCxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDL0IsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVRLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzdGViaW5PcHRpb25zLCBIYXN0ZWJpblBvc3RSZXN1bHQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jbGFzcyBIYXN0ZWJpbiB7XHJcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZztcclxuICBwcml2YXRlIGF1dGhvcml6YXRpb246IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEhhc3RlYmluT3B0aW9ucykge1xyXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCBcImh0dHBzOi8vaGFzdGViaW4uY29tXCI7XHJcbiAgICB0aGlzLmF1dGhvcml6YXRpb24gPSBvcHRpb25zLmtleTtcclxuXHJcbiAgICAvLyBJZiB0aGUgdXJsIGlzIGhhc3RlYmluLmNvbSBhbmQgbm8gYXV0aG9yaXphdGlvbiBrZXkgaXMgcHJvdmlkZWQsIHRocm93IGFuIGVycm9yLlxyXG4gICAgaWYgKHRoaXMudXJsID09PSBcImh0dHBzOi8vaGFzdGViaW4uY29tXCIgJiYgIXRoaXMuYXV0aG9yaXphdGlvbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhdXRob3JpemF0aW9uIGtleSBwcm92aWRlZC5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgKiBHZXQgY29udGVudCBmcm9tIGhhc3RlYmluXHJcblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSBUaGUgaGFzdGViaW4gY29kZSB0byBnZXRcclxuICAgICogQHBhcmFtIHtib29sZWFufSByYXcgV2hldGhlciB0byBnZXQgdGhlIHJhdyBjb250ZW50IG9yIG5vdFxyXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBUaGUgY29udGVudCBvZiB0aGUgaGFzdGViaW4gcG9zdFxyXG4gICAgKiBAZXhhbXBsZVxyXG4gICAgKiBjb25zdCB7IEhhc3RlYmluIH0gPSByZXF1aXJlKFwiYjFuemVleC9oYXN0ZWJpblwiKTtcclxuICAgICogXHJcbiAgICAqIGNvbnN0IGhhc3RlYmluID0gbmV3IEhhc3RlYmluKHtcclxuICAgICogICBrZXk6IFwieW91ci1rZXktaGVyZVwiLFxyXG4gICAgKiB9KTtcclxuICAgICogXHJcbiAgICAqIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBoYXN0ZWJpbi5nZXQoXCJzb21lLWNvZGVcIik7XHJcbiAgICAqIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xyXG4gICovXHJcbiAgcHVibGljIGFzeW5jIGdldChjb2RlOiBzdHJpbmcsIHJhdzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHt0aGlzLnVybH0vJHtyYXcgPyBgcmF3LyR7Y29kZX1gIDogYGRvY3VtZW50cy8ke2NvZGV9YH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuYXV0aG9yaXphdGlvbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZ2V0IGZyb20gaGFzdGViaW46ICR7cmVzLnN0YXR1c31gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2R5ID0gcmF3ID8gYXdhaXQgcmVzLnRleHQoKSA6IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHJhdyA/IGJvZHkgOiBib2R5LmRhdGE7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgKiBQb3N0IGNvbnRlbnQgdG8gaGFzdGViaW5cclxuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IFRoZSBjb250ZW50IHRvIHBvc3QgdG8gaGFzdGViaW5cclxuICAgICogQHJldHVybnMge1Byb21pc2U8SGFzdGViaW5Qb3N0UmVzdWx0Pn0gVGhlIGNvZGUgYW5kIHVybCBvZiB0aGUgaGFzdGViaW4gcG9zdFxyXG4gICAgKiBAZXhhbXBsZVxyXG4gICAgKiBjb25zdCB7IEhhc3RlYmluIH0gPSByZXF1aXJlKFwiYjFuemVleC9oYXN0ZWJpblwiKTtcclxuICAgICogXHJcbiAgICAqIGNvbnN0IGhhc3RlYmluID0gbmV3IEhhc3RlYmluKHtcclxuICAgICogICBrZXk6IFwieW91ci1rZXktaGVyZVwiLFxyXG4gICAgKiB9KTtcclxuICAgICogXHJcbiAgICAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhc3RlYmluLnBvc3QoXCJIZWxsbywgd29ybGQhXCIpO1xyXG4gICAgKiBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICovXHJcbiAgcHVibGljIGFzeW5jIHBvc3QoY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxIYXN0ZWJpblBvc3RSZXN1bHQ+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMudXJsfS9kb2N1bWVudHNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5hdXRob3JpemF0aW9ufWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGNvbnRlbnQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwb3N0IHRvIGhhc3RlYmluOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29kZTogYm9keS5rZXksXHJcbiAgICAgIHVybDogYCR7dGhpcy51cmx9LyR7Ym9keS5rZXl9YCxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBIYXN0ZWJpbiwgdHlwZSBIYXN0ZWJpbk9wdGlvbnMsIEhhc3RlYmluUG9zdFJlc3VsdCB9O1xyXG4iXX0=