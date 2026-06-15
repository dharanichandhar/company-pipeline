# Skill: Code Reviewer

**Purpose:**
Automate intelligent code reviews using Pi’s language model capabilities.

**Description:**
This Pi skill evaluates code changes for:
- Code quality and structure
- Readability and maintainability
- Adherence to project conventions
- Potential bugs or performance bottlenecks

**Inputs:**
- Pull request or commit diff
- Project source files

**Outputs:**
- Structured feedback report with severity tags (info, warn, error)
- Suggested fixes and optimization points

**Example Usage:**
```bash
npx pi prompt run pi-package/prompts/review.md --skill pi-package/skills/code-reviewer/SKILL.md
```