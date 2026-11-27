# Simple Calculator — Git Branching & Merge Conflict Demo

A small browser calculator built with HTML, CSS and JavaScript. Supports addition, subtraction, multiplication, division, decimals, clear, delete and equals.

## Run the app
1. Open `index.html` in any modern browser.
2. Use the on-screen buttons to perform calculations.

## Git workflow demonstrated
- `main`: stable starting version
- `develop`: integration branch
- `feature/multiply`: feature branch for calculator operations
- A merge conflict was intentionally created in `README.md` by editing the same section on `develop` and `feature/multiply`.
- The conflict was resolved on `develop`, then the feature branch was merged.

## Inspect the history
```bash
git branch -a
git log --oneline --graph --all
```

## Merge conflict demo (reproduce manually)
The repository history includes the resolved conflict. To practice the conflict again, create two temporary branches from a fresh commit and edit the same line in a file on both branches. Merge one branch into the other; Git will mark conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). Edit the file to keep the desired combined content, then:
```bash
git add README.md
git commit -m "Resolve merge conflict"
```
