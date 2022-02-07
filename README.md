# sumofnumbers
## E26: Five problems every software engineer should be able to solve (Part 1)

Santiago Valdarrama wrote a blog post entitled [“Five problems every software engineer should be able to solve in less than an hour”](https://web.archive.org/web/20200414191515/http://www.shiftedup.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour). Stop for a second and check it out!

If these five problems really take an hour to solve, that’s much too long for a WOD, so let’s just try to solve the first one. More important, we’ll use this as an opportunity to practice using GitHub, git, IntelliJ IDEA, Javascript, Underscore, and ESLint.

The WOD
For this practice WOD, solve the following variation of the first of the five problems that Santiago Valdarrama thinks should take less than an hour.

Ready? Let’s begin:

1. Start your timer.

2. Create an empty GitHub repo called “sumofnumbers” and clone it to your local computer. Don’t forget to check the box so that a README file is created.

3. Create an IntelliJ “Web” project called “sumofnumbers” within your local sumofnumbers repo directory. If IntelliJ asks if you want to add a .gitignore file, you can say yes.

4. Set up your project to use our [Javascript coding standards](https://courses.ics.hawaii.edu/ics314s22/morea/coding-standards/reading-javascript-coding-standards.html). Once you have done the one time tasks, then all you should need to do is:

  * Download [sample.eslintrc into](https://courses.ics.hawaii.edu/ics314s22/morea/coding-standards/sample.eslintrc) the project directory, and rename it to .eslintrc.
  * Download [sample.package.json](https://courses.ics.hawaii.edu/ics314s22/morea/coding-standards/sample.package.json) into the project directory, and rename it to package.json.
  * Download [sample.gitignore](https://courses.ics.hawaii.edu/ics314s22/morea/coding-standards/sample.gitignore) into the project directory, and rename it to .gitignore.
  * CD into the project directory, and run npm install to install ESLint.

5. Create two files: index.html and sumofnumbers.js. The index.html should load the Underscore package (available at <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>) followed by sumofnumbers.js. Note that the order of loading is important!

6. Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.

7. Make sure ESLint is running. For example, add newlines to the end of a file to see that an ESLint error is triggered.

8. Make sure that there is a green checkmark indicating that ESLint does not detect any problems with your code.

9. Commit your finished program to GitHub.

10. Check that your code is on GitHub.

11. Stop your timer and record your time. *Be sure to record it, because you will need your WOD time data when you write your technical essay.*

`Rx: < 20 min` `Av: 20 - 25 min` `Sd: 25 - 30 min` `DNF: 30+ min`

