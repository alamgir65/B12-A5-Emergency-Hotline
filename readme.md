
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: getElementById() selects one element by its unique id. It always returns a single element.
getElementsByClassName() selects all elements that match the class name, and it returns a collection(like array).
querySelector() selects the first element that matches a CSS selector.
querySelectorAll() selects all elements that match a CSS selector, and it returns a NodeList.


2. How do you **create and insert a new element into the DOM**?
Answer: First, create a new element using document.createElement('tagName'). After creating it, we can set attributes, text, or styles of the element. Next, find the parent element where we want to insert it. Finally, use methods like appendChild() to add the new element to the parent.

<img width="561" height="128" alt="image" src="https://github.com/user-attachments/assets/21327524-8e89-4ceb-8c23-d9ee8b6b9532" />



3. What is **Event Bubbling** and how does it work?

Answer : Event bubbling means when an event happens on an element, it first runs on that element, then goes up to its parent, then to the grandparent, and so on until the top of the DOM tree.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event delegation is a technique where instead of adding an event listener to every child element, we add one listener to a common parent.
It is useful because it makes the code simpler and allows handling of new elements added later without extra listeners.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
preventDefault() : It stops the default action of an event. For example, if we click on a link, it will stop the page from navigating to the URL.
stopPropagation() : It stops the event from moving up the DOM tree. For example, if we click a button inside a div, the event will not bubble to the parent div if we use stopPropagation().
