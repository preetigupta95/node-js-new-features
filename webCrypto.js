// Use globalThis.crypto or require('node:crypto').webcrypto to access this module.
//import { subtle } from "node:crypto";

const { subtle } = globalThis.crypto;

(async function () {
  const key = await subtle.generateKey(
    {
      name: "HMAC",
      hash: "SHA-256",
      length: 256,
    },
    true,
    ["sign", "verify"]
  );

  const enc = new TextEncoder();
  const message = enc.encode("I love cupcakes");

  const digest = await subtle.sign(
    {
      name: "HMAC",
    },
    key,
    message
  );

  // Convert the digest to a hexadecimal string to make it readable
  const hexDigest = Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  console.log("HMAC Digest:", hexDigest);
})();
