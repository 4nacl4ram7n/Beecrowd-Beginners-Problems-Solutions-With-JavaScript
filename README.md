[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Consolas&weight=200&size=25&letterSpacing=narrow&duration=2000&pause=1000&color=FFFFFF&width=435&lines=🐝+Beecrowd;🐝+Beginners+Problems+Solutions+)](https://git.io/typing-svg)

💡 A small reminder that this repository is intended to solve problems for beginners, that is, to develop programming logic, with resolutions in the simplest and most didactic way possible.

```javascript
class Beecrowd {
  constructor() {
    this.language = "JavaScript";
    this.solved = 100;
    this.total = 334;
  }

  get percentage() {
    return ((this.solved / this.total) * 100).toFixed(0) + "%";
  }

  logData() {
    console.log({
      language: this.language,
      solved: this.solved,
      total: this.total,
      percentage: this.percentage
    });
  }
}

const progress = new Beecrowd();
progress.logData();
// { language: 'JavaScript', solved: 100, total: 334, percentage: '30%' }
```

