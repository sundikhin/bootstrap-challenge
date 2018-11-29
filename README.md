

## Questions

### What front-end component libraries or frameworks have you used besides bootstrap?
Material UI, Tailwind.

### What tools would you implement to enforce code quality rules and standards? 
Aside from tests (which all applications should have) Prop Types for React projects really help force the programmer to lay out the type of props they're passing into components. This promotes code quality because if a backend endpoint changes, or data gets mutated up the chain, the component knows that it was expecting one thing but is getting something else.

### What HTML templating languages or engines have you used?
Handlebars, Mustache, Slim

### Which code related blogs or sites do you read regularly?
CSS Tricks is my go-to for all frontend related things. There are some posts on there I keep up for reference at all times, and there are some posts there that I just like to learn from and see what is new.

### In Sass, what is the significance of using an underscore at the beginning of a sass file name?
It signifies that the file in question is a CSS file for a partial template. So `universal.scss` or `colors.scss` would be for the entire project, whereas `_header.scss` would be styles for only the header.


### Name a few (npm) node modules that you think are most useful?
Webpack, Babel

### Given the option to choose Angular, React or Vue.js for a new project which would you choose and why? What type of requirements might affect your decision to use one over the other?
I believe that every project is different, and that there are different aspects of projects to consider when looking at frameworks and libraries. For heavy route-specific work, I’d take a look at (recent versions of) Angular and Vue. They have great built in routing, whereas in React, one would have to pull in additional helper libraries like React-Router. For web applications that deal with heavy sets of data and need to run quickly and update quickly, I’d look at React, since it was built for a virtual DOM and rendering data in smaller components versus the whole page is beneficial in those cases.


### If you were referred to an unfamiliar node project repo, what file or files would you first look to, to determine the commands to run, build and test the project?
I’d take a look at the package.json file to get an understanding of what requirements and dependencies are in the project, as well as the config files to see what commands compile the project.


### What is the benefit of using the HTML ‘nav’ element vs. a div with the class of .nav?
Screen readers have an easier time identifying semantic HTML, therefore a native nav element is more accessible markup than a div with a .nav class.

### What code related framework, library or language do you want to learn next?
Vue, GraphQL, Gatsby