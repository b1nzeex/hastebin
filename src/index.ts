import { HastebinOptions, HastebinPostResult } from "./interfaces";

class Hastebin {
  private url: string;
  private authorization: string;

  public constructor(options: HastebinOptions) {
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
  public async get(code: string, raw: boolean = false): Promise<string> {
    const res = await fetch(
      `${this.url}/${raw ? `raw/${code}` : `documents/${code}`}`,
      {
        headers: {
          Authorization: `Bearer ${this.authorization}`,
        },
      }
    );

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
  public async post(content: string): Promise<HastebinPostResult> {
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

export { Hastebin, type HastebinOptions, type HastebinPostResult };
