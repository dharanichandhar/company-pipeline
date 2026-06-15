# Pi Prompt: Auto Fix Coding Issues

**Goal:** Automatically detect and safely fix common code issues found during review.

**Instructions:**
1. Analyze project files for:
   - Syntax or type errors
   - Unused/imported variables
   - Simple lint or formatting issues (ESLint, Prettier style)
   - Minor logic or structural errors that can be safely corrected
2. Apply only *safe* and *non-destructive* changes.
3. Preserve original logic, business rules, and external interfaces.
4. Summarize all changes made in the output report.

**Output Format:**
```text
### Auto-Fix Summary
File | Description | Action | Line
-----|--------------|--------|------
<file> | <issue_desc> | <fix_applied> | <line>
```

**End Goal:** Incrementally correct common code errors and maintain a consistent, stable codebase automatically.