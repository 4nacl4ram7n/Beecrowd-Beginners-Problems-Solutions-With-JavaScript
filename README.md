[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Consolas&weight=200&size=25&letterSpacing=narrow&duration=2000&pause=1000&color=FFFFFF&width=435&lines=🐝+Beecrowd;🐝+Beginners+Problems+Solutions+)](https://git.io/typing-svg)

```javascript
class Beecrowd {
  constructor() {
    this.language = "JavaScript";
    this.solved = 59;
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
```

