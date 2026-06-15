# Pi Prompt: Deployment Readiness Check

**Goal:** Verify that the project is fully ready for deployment.

**Checks:**
1. All critical tests pass and no unaddressed security issues exist.
2. Environment variables and configurations are correctly set.
3. Version numbers and changelogs are updated.
4. Required build artifacts (e.g., `dist/`, `build/`) are generated.
5. Deployment script configuration (e.g., Dockerfile, CD settings) is valid.

**Output Format:**
```text
### Deployment Check Summary
Status | Category | Message
-------|-----------|--------
<OK/FAIL> | <category> | <message>
```

**End Goal:** Ensure deployment can proceed safely without regressions or infrastructure misconfiguration.