# **Frontend Mentor Challenge - Loopstudios landing page**

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw "https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

      - [Menu open animation](#menu-open-animation)

- [Resources](#resources)

## Overview

Links:

- GitHub Repo: <https://github.com/xup60521/Loopstudios-landing-page>

- Website: <https://xup60521.github.io/Loopstudios-landing-page/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- vite

- typescript

- tailwindcss

- gsap (for animation)

### What I learned

#### Menu open animation

We can use `gsap` to change height, making it an open and close animation.

```tsx
function openMenu() {
    gsap.to(menu, { 
      height: "100vh", 
      duration: 0.5, 
      ease: "power2.out" 
    });
}
function closeMenu() {
    gsap.to(menu, {
        height: "0",
        duration: 0.5,
        ease: "power2.out",
    });
}

```

## Resources

- Google Fonts - <https://fonts.google.com>