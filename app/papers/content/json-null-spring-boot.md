---
title: The Surprising Reason Your JSON Data is Returning null in Spring Boot
tag: java, springboot
date: 19-03-2025
slug: json-null-springboot
description: Discover how a simple naming mismatch in your getter and setter methods can break JSON serialization in Spring Boot—and how to fix it.
---

#### **Introduction**

Last week, I found myself in a debugging nightmare. My Spring Boot services were talking, but somehow, one of them was ghosting key data.

The amount field came through fine, but the ID? Completely missing.

It felt like my code was gaslighting me—until I found the culprit. And it was something so basic, yet so sneaky, that I had to share it.

#### **The Problem: Why is JSON Returning `null`?**

I had two Spring Boot services:

- **Service A (Client)** → Sends a `Payment` object to another service.
- **Service B (Server)** → Receives and processes the `Payment` object.

Here’s what was sent:

```json
{
  "requestId": "5ea2aa99-4020-4d9f-9d1f-1737d5df2a6e",
  "amount": 15.0
}
```

But Service B expected this:

```json
{
  "id": "5ea2aa99-4020-4d9f-9d1f-1737d5df2a6e",
  "amount": 15.0
}
```

The amount was fine, but the ID kept returning `null`. Why?

##### **Jackson and Java Reflection: The Silent Saboteurs**

Spring Boot uses **Jackson** for JSON serialization and deserialization. But here’s something most people don’t realize:

> **Jackson doesn’t look at field names. It looks at method names—specifically getters.**

This is where **Java reflection** comes in. Jackson scans your class for getter methods (methods that start with `get`), removes the `get` prefix, and converts the first letter to lowercase.

And that’s exactly where my problem was hiding.

#### **The Naming Mismatch That Broke Everything**

Let's look at the `Payment` class in **Service A (Client)**:

```java
public class Payment {
    private String id;
    private double amount;

    public String getRequestId() {  // This is the problem!
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // Getters/Setters for amount...
}
```

##### **Wait… What’s Wrong Here?**

- My **field name** is `id`, but my **getter method** is `getRequestId()`.
- **Jackson assumes the JSON key should be "requestId"**, not "id".
- But my receiving service (Service B) expects the key to be `"id"`, not `"requestId"`.

Meanwhile, in **Service B (Server)**, the class looks like this:

```java
public class Payment {
    private String id;
    private double amount;

    public void setId(String id) {
        this.id = id;
    }
}
```

So Service B was looking for `"id"` in the JSON… but it wasn’t there. Instead, the JSON had `"requestId"`, which **Service B didn’t recognize**, causing `id` to be `null`.

**Boom. Naming mismatch = Bug.**

#### **The Fix: How to Prevent This Issue**

##### **Solution 1: Use Consistent Getter and Setter Names (best practice)**

The cleanest fix is to **follow JavaBean conventions** properly:

```java
public String getId() {
    return id;
}

public void setId(String id) {
    this.id = id;
}
```

Now, Jackson will correctly map the `id` field in JSON.

##### **Solution 2: Use `@JsonProperty` for Explicit Mapping (when you can’t rename)**

If renaming isn’t an option (e.g., for backward compatibility), use `@JsonProperty`:

```java
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonProperty("id")  // Force JSON to use "id" instead of "requestId"
public String getRequestId() {
    return id;
}
```

This tells Jackson:

> "I don’t care what the method name is—just use 'id' as the field name in JSON."

#### **Testing Your Fix (Trust, but Verify)**

After fixing the issue, I wrote a quick test to ensure it worked:

```java
@Test
public void testJsonSerialization() throws Exception {
    Payment payment = new Payment();
    payment.setId("test-id");
    payment.setAmount(15.0);

    ObjectMapper mapper = new ObjectMapper();
    String json = mapper.writeValueAsString(payment);

    assertTrue(json.contains("\"id\":\"test-id\""));
}
```

This simple test **saved me hours of potential headaches later**.

#### **Key Takeaways**

1. **Follow JavaBean Conventions** – Name your getters and setters **exactly** like your fields.
2. **Jackson Maps Methods, Not Fields** – It uses **getters, not variable names**, for JSON property names.
3. **Use `@JsonProperty` When Necessary** – If you can’t rename, force Jackson to use the correct key.
4. **Test Your Serialization** – Always verify how your objects get converted to JSON.

#### **Conclusion: One Tiny Naming Mistake, One Giant Bug**

Sometimes, the most frustrating bugs come from the simplest mistakes. In my case, a **getter name mismatch** silently broke JSON mapping between two services.

> **Moral of the story? Naming your getters and setters correctly is like giving your code a GPS—it actually knows where to find things.**

So next time you see unexpected `null` values when exchanging JSON between services, take a close look at your getter and setter method names.

The answer might be **staring you right in the face.**
