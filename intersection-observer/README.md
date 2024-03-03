# Intersection observer

## Description

This is a simple example of how to use the Intersection Observer API animate in some cards when they are visible in the viewport.

### Intersection observer API

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
It takes two parameters, the first one is a callback function that will be called whenever the visibility of the target element changes, and the second one is an object with some options to configure the observer.

```javascript
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  }
);
```

the options object has three properties:

- root: the element that is used as the viewport for checking visibility of the target. If you don't specify it, the default is the browser viewport.
- rootMargin: a string that is a set of values to apply to the root's bounding box when calculating intersections.
- threshold: a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.

### End the observer

When the target element is visible, we can stop observing it by calling the `unobserve` method of the observer object.

```javascript
observer.unobserve(entry.target);
```
