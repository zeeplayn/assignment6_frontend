# Assignment 6 - jQuery

**Name:** Zharkyn
**Group:** IT-2502

**Netlify Link:** https://mellifluous-creponne-1e7809.netlify.app/


## Part 1. Getting Started with jQuery

### Task 0. Setup
- Include jQuery from a CDN.
- Write a `$(document).ready()` function.
- Print "jQuery is ready!" in the console.

I added jQuery 3.7.1 from the CDN (`code.jquery.com`) at the end of `index.html`, before my `script.js`. All my code is inside `$(document).ready(function () { ... })`, and the first line prints "jQuery is ready!" in the console.


### Task 1. Selectors & CSS
- Display name, headline and short intro.
- Profile section with title "Welcome to My Portfolio".
- Use tag, ID and class selectors.
- Update the headline with `.text()` or `.html()`.
- Use `.css()`.
- Buttons for light and dark theme.

At the top of the page I made a header with my name, a headline and an intro. I used three types of selectors: tag `$("h1")`, ID `$("#title")` and class `$(".intro")`, and changed their styles with `.css()`. The "Change headline" button changes the headline with `.html()` (one of the headlines has bold text) and the title with `.text()`. The "Dark theme" and "Light theme" buttons add or remove the `dark` class on the body and also change some borders and headings with `.css()`.

<img width="818" height="247" alt="image" src="https://github.com/user-attachments/assets/8b295e54-6eda-4c9d-943b-8c71ae892bc8" />


## Part 2. jQuery Effects

### Task 2. Visibility Methods
- "About Me" section with biography, status and fun facts.
- Hide, Show and Toggle buttons.

In the "About Me" section I wrote a short bio, the status "Currently learning jQuery!" and a list of 3 fun facts. The three buttons use `.hide()`, `.show()` and `.toggle()` on the status and the fun facts list.

<img width="812" height="287" alt="image" src="https://github.com/user-attachments/assets/66fde829-0478-4ebf-a589-13fc489bb505" />

### Task 3. Fade Methods
- At least two images.
- `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`.

The gallery has two images (profile and hobby). The buttons "Fade In", "Fade Out" and "Fade Toggle" use `.fadeIn()`, `.fadeOut()` and `.fadeToggle(600)` on the images.

<img width="827" height="342" alt="image" src="https://github.com/user-attachments/assets/13a7d11a-b968-4664-a311-7bf63300d56d" />

### Task 4. Slide Methods
- At least three clickable headings with panels.
- `.slideUp()`, `.slideDown()`, `.slideToggle()`.

I made three headings: My Favorite Music, My Favorite Movie and My Favorite Subject. Under each one there is a panel with information (for music there is also a SoundCloud link). At the start all panels are hidden with `.hide()`. When I click a heading, `.slideToggle()` opens or closes the panel right under it (using `$(this).next(".panel")`). I also added two buttons "Slide Up all" and "Slide Down all" which use `.slideUp()` and `.slideDown()` for all panels.

<img width="847" height="480" alt="image" src="https://github.com/user-attachments/assets/54006818-5da9-480c-bf11-88b59fd4f4a8" />


## Part 3. DOM Manipulation with jQuery

### Task 5. Add & Remove Elements
- List with at least four skills.
- Input and 3 buttons: Add Skill, Prepend Skill, Remove Skill.
- Use `.append()`, `.prepend()`, `.remove()`.
- Do not allow empty skills.

The list starts with 4 skills: HTML, CSS, JavaScript and Python. "Add Skill" uses `.append()` to put the new skill at the end, "Prepend Skill" uses `.prepend()` to put it at the start, and "Remove Skill" uses `.remove()` to delete the last skill in the list. Before adding I check the input with `.val().trim()`, and if it is empty the page shows a red message "Please write a skill first!" and nothing is added.

<img width="836" height="268" alt="image" src="https://github.com/user-attachments/assets/a3421107-1de2-4643-819f-81b21fd518f7" />

### Task 6. Modifying Attributes
- Add a social media link.
- Button that changes the link with `.attr()`.

I added a link to my GitHub. The "Change link" button uses `.attr("href", ...)` to change the destination of the link and `.text()` to change its text. When I click the button again, the link goes back to GitHub (I used a variable `isGithub` to remember which link is active).

<img width="818" height="184" alt="image" src="https://github.com/user-attachments/assets/06f56dd3-43ac-4321-a2d8-600c2cc148bc" />

### Task 7. Form Interaction
- Form with Name and Email.
- Show the input live under the form using `.val()` and `.text()`.

The form has two inputs: Name and Email. I used the `input` event, so when the user types, the value is taken with `.val()` and shown right away in the text under the form with `.text()`.

<img width="800" height="229" alt="image" src="https://github.com/user-attachments/assets/eb48c566-34f0-4e72-86b4-b11020023675" />

## Part 4. Animations

### Task 8. Basic Animation
- Skill bars for at least three skills.
- "Animate My Skills" button.
- Bars start with zero width.
- `.animate()` increases the width, different target widths.
- Second click animates the bars back to zero.

I made four skill bars: HTML/CSS (90%), JavaScript (65%), Python (50%) and jQuery (30%). In CSS every bar has `width: 0`. The target width is stored in a `data-width` attribute in the HTML. When I click "Animate My Skills", `.each()` goes through all bars and `.animate()` changes the width to the value from `.data("width")` in 1 second. On the next click the bars are animated back to width 0. The variable `barsOpen` is used to know which direction to animate.

<img width="811" height="352" alt="image" src="https://github.com/user-attachments/assets/79f9ea29-70e9-41ce-b138-13a3f2144413" />

## Summary of my work process
First I made the HTML structure for all the tasks and some simple CSS. Then I wrote the jQuery code part by part (Part 1, 2, 3, 4) and tested every task in the browser after writing it. After that I changed some parts to make the page more personal: I used my own images, my music, my GitHub link and my own texts. The hardest task for me was Task 8, because I needed to save the target widths in `data-width` and make the same button animate in two directions. In the end I uploaded all files to a public GitHub repository and turned on GitHub Pages.
