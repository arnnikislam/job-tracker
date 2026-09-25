# JavaScript DOM & Events — Questions & Answers

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

### `getElementById()`

* Selects **one element** by its `id`.
* We don't need to use `#` before the ID.

```javascript
document.getElementById("title");
```

### `getElementsByClassName()`

* Selects **all elements** that have the specified class name.
* It returns an **HTMLCollection**.

```javascript
document.getElementsByClassName("card");
```

### `querySelector()`

* Selects the **first element** that matches a CSS selector.
* We can use CSS selectors like `.class`, `#id`, or a tag name.

```javascript
document.querySelector(".card");
document.querySelector("#title");
document.querySelector("p");
```

### `querySelectorAll()`

* Selects **all elements** that match a CSS selector.
* It returns a **NodeList**.

```javascript
document.querySelectorAll(".card");
document.querySelectorAll("p");
```

### Quick comparison

| Method                     | Selects                | Returns        |
| -------------------------- | ---------------------- | -------------- |
| `getElementById()`         | One element by ID      | Element        |
| `getElementsByClassName()` | All elements by class  | HTMLCollection |
| `querySelector()`          | First matching element | Element        |
| `querySelectorAll()`       | All matching elements  | NodeList       |

---

## 2. How do you create and insert a new element into the DOM?

First, we create a new element using `document.createElement()`.

```javascript
const newItem = document.createElement("p");
```

Then we can add content to it using `innerText` or `innerHTML`.

```javascript
newItem.innerText = "Hello World";
```

Finally, we access the parent element and insert the newly created element using `append()` or `appendChild()`.

```javascript
const parent = document.getElementById("container");

parent.append(newItem);
```

### In short:

```text
Create → Add content → Find parent → Append
```

---

## 3. What is Event Bubbling? And how does it work?

**Event Bubbling** means that when an event happens on a child element, the event can move upward through its parent elements.

It works similar to real-life bubbles: the event starts from the target element and then bubbles up to its parent, grandparent, and so on.

For example:

```html
<div>
  <button>Click Me</button>
</div>
```

If we click the button, the event can move like this:

```text
Button
  ↓
Parent div
  ↓
Body
  ↓
HTML
```

So, an event that happens on a child can also trigger event listeners attached to its ancestors.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

**Event Delegation** is a technique where we add an event listener to a **parent element** instead of adding separate event listeners to every child.

For example, if we have 100 buttons, instead of adding 100 event listeners, we can add **one event listener to their parent** and use event bubbling to detect which button was clicked.

```javascript
const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  console.log(event.target);
});
```

### Why is it useful?

* We don't need to add a separate listener to every child.
* It reduces the number of event listeners.
* It makes handling many similar elements easier.
* It can also work well with dynamically added elements.

### Example:

Instead of:

```text
Button 1 → Event Listener
Button 2 → Event Listener
Button 3 → Event Listener
...
Button 100 → Event Listener
```

We can do:

```text
        Parent
          ↓
    One Event Listener
          ↓
   ┌──────┼──────┐
Button  Button  Button
```

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()`?

These two methods do **different things**.

### `stopPropagation()`

`stopPropagation()` stops the event from propagating further through the DOM.

For example, it can stop an event from bubbling from a child to its parent.

```javascript
button.addEventListener("click", function (event) {
  event.stopPropagation();
});
```

So:

```text
Button → Parent → Grandparent
```

can be stopped at the button.

---

### `preventDefault()`

`preventDefault()` prevents the browser's **default behavior** for an element.

For example, a button inside a form can submit the form by default. We can prevent that default behavior:

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
```

Another common example is a link:

```javascript
link.addEventListener("click", function (event) {
  event.preventDefault();
});
```

This prevents the browser from following the link.

### Important difference

```text
preventDefault()
→ Stops the browser's default action.

stopPropagation()
→ Stops the event from moving through the DOM.
```

They are **not the same thing**.

---

# Quick Revision

| Method / Concept           | Main Purpose                                |
| -------------------------- | ------------------------------------------- |
| `getElementById()`         | Select one element by ID                    |
| `getElementsByClassName()` | Select elements by class                    |
| `querySelector()`          | Select the first matching CSS selector      |
| `querySelectorAll()`       | Select all matching CSS selectors           |
| `createElement()`          | Create a new DOM element                    |
| `append()`                 | Insert an element/content                   |
| Event Bubbling             | Event moves from child → parent             |
| Event Delegation           | Handle child events using a parent listener |
| `stopPropagation()`        | Stop event propagation                      |
| `preventDefault()`         | Stop browser's default behavior             |
