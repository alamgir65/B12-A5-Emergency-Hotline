
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: getElementById() selects one element by its unique id. It always returns a single element.
getElementsByClassName() selects all elements that match the class name, and it returns a collection(like array).
querySelector() selects the first element that matches a CSS selector.
querySelectorAll() selects all elements that match a CSS selector, and it returns a NodeList.


2. How do you **create and insert a new element into the DOM**?
Answer: First, create a new element using document.createElement('tagName'). After creating it, we can set attributes, text, or styles for the element. Next, find the parent element where we want to insert it. Finally, use methods like appendChild() to add the new element to the parent.


4. What is **Event Bubbling** and how does it work?

Answer : Event bubbling means when an event happens on an element, it first runs on that element, then goes up to its parent, then to the grandparent, and so on until the top of the DOM tree.

5. What is **Event Delegation** in JavaScript? Why is it useful?
6. What is the difference between **preventDefault() and stopPropagation()** methods?
