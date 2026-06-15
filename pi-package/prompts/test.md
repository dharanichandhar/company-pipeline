# Pi Prompt: Automated Test Review

**Goal:** Assess the test coverage and reliability of the project.

**Steps:**
1. Inspect unit, integration, and end-to-end test directories.
2. Check for:
   - Adequate test coverage for new or modified code
   - Proper use of mocking/stubbing
   - Readability and maintainability of test code
3. Identify flaky or redundant tests.
4. Suggest improvements.

**If tests are missing:** Recommend scenarios or edge cases that should be added.

**Output Format:**
```text
### Test Review Summary
Type | Issue | Suggested Fix | File | Line
-----|--------|----------------|------|------
<category> | <description> | <recommendation> | <file> | <line>
```

**End Goal:** Ensure project tests are effective, reliable, and comprehensive.