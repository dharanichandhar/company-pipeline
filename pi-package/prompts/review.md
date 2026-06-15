# Pi Prompt: Code Review

**Goal:** Analyze recent changes and provide a comprehensive code review.

**Instructions:**
1. Examine modified files for code quality, readability, and adherence to best practices.
2. Identify potential issues such as:
   - Inefficient logic or anti-patterns
   - Security risks (e.g., injection vulnerabilities, unsafe APIs)
   - Lint and style rule violations
3. Suggest clear, actionable improvements.
4. Summarize findings by category: `Critical`, `Suggested`, and `Info`.

**Output format:**
```text
### Code Review Summary
Category | Message | File | Line
-------- | -------- | ---- | ----
<type> | <description> | <file> | <line>
```

**End goal:** Maintain consistent, high-quality codebase aligned with team guidelines.