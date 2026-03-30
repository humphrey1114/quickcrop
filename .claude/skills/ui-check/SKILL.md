# UI Check Skill

Verify UI changes visually before presenting to the user. This enforces a screenshot-first workflow to reduce correction cycles.

## Workflow

1. **Before making changes**: Take a screenshot of the current state using `preview_screenshot`
2. **List exactly what will change**: Name the specific elements you plan to modify. Do NOT touch any other elements.
3. **Wait for user approval** before editing any files
4. **Make ONE change at a time**: Do not bundle multiple UI changes. Make a single targeted edit.
5. **After each edit**: Take another screenshot immediately
6. **Self-check against these rules**:
   - No AI-generated or placeholder-looking icons — use real SVGs or icon libraries
   - Layout fills the full viewport with no empty grid gaps
   - All user-facing text is written for non-technical consumers
   - Navigation uses separate pages/routes, not modals
   - Colors, spacing, and sizing match the existing design system
7. **If the screenshot shows issues**: Fix them yourself before showing the user. Loop steps 4-6 until correct.
8. **Show before/after summary**: Describe what changed in one sentence.

## Rules
- NEVER resize, reposition, or restyle elements that weren't explicitly requested
- NEVER add emojis unless the user asks
- NEVER use gradients or drop shadows unless they exist in the current design
- ONE change per cycle — get approval, then move to the next change
