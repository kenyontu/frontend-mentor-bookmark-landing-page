# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

#### Dynamically sized accordion items

At first I've implemented the accordion's opening and closing animations by toggling between `0` and fixed value `max-height` like `10rem`. But this approach has the following issues:

- Animations are not consistent between items of different sizes
- Setting a low `max-height` has the chance of cutting out part of the content. And setting it too high makes the animations too quick

This is when I found this [Codepen by Aaron Bushnell](https://codepen.io/aaronbushnell/pen/eGVdzv), where he showcases a way to get the appropriate `max-height` value for each item with vanilla JS.

Based on his approach I came up with this solution on React:

```tsx
function AccordionItem({ open, title, text, onClick }: Props) {
  // Will hold the max-height for this item, the negative value means that it
  // is not initialized and we need to measure it
  const [maxHeight, setMaxHeight] = useState(-1)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // We use the scrollHeight value of container as the max-height, but this
    // requires it to actually be rendered. Which is why we set it to be
    // absolute positioned and invisible at first, to allow measuring
    if (maxHeight < 0) setMaxHeight(answerContainer.current?.scrollHeight ?? 0)
  }, [maxHeight])

  useEffect(() => {
    // In the event where the user decides to resize the screen, the content's
    // dimensions might change, so we need to measure a new max-height, we do
    // this by setting maxHeight to a negative value, thus triggering the
    // effect above
    const onResize = () => setMaxHeight(-1)

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div
      ref={container}
      style={{ maxHeight: maxHeight < 0 ? undefined : open ? maxHeight : 0 }}
      className={clsx(
        'overflow-hidden transition-[max-height] duration-300 ease-in-out',
        {
          'invisible absolute': maxHeight < 0,
        }
      )}
    >
      <button onClick={onClick}>{title}</button>
      <div>
        <p>{text}</p>
      </div>
    </di>
  )
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
