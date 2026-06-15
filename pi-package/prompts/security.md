# Pi Prompt: Security Analysis

**Goal:** Identify and report possible security weaknesses in the codebase.

**Instructions:**
1. Scan code for:
   - Insecure API calls or unvalidated input
   - Hardcoded secrets or credentials
   - Misconfigured authentication or authorization logic
   - Weak cryptographic usage
2. Categorize findings by severity (`Critical`, `Medium`, `Low`).
3. Suggest mitigation strategies or secure alternatives.

**Output Format:**
```text
### Security Findings
Severity | Description | File | Line | Mitigation
---------|--------------|------|------|------------
<level> | <issue> | <file> | <line> | <suggestion>
```

**End Goal:** Ensure robust and secure code ready for production deployment.