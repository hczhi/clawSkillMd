# Core Frameworks for Xiaohongshu Content Creation

This directory contains the core frameworks that power the XHS Fullstack Creator system.

---

## 📚 Table of Contents

| File | Purpose | When to Load |
|------|---------|--------------|
| [mrbeast-principles.md](./mrbeast-principles.md) | MrBeast content science: CTR×AVD, zero boring moments, 30-second rule | Phase 1 & 3 |
| [stepps-framework.md](./stepps-framework.md) | STEPPS theory: 6 principles of virality (Social Currency, Triggers, etc.) | Phase 1 |
| [pain-point-copywriting.md](./pain-point-copywriting.md) | Pain-point copywriting techniques: "sell life, not products" | Phase 4 |
| [anti-ai-cheatsheet.md](./anti-ai-cheatsheet.md) | AI feature detection and humanization checklist | Phase 4 & 5 |
| [persona-consistency-checklist.md](./persona-consistency-checklist.md) | @程序员小智 persona validation rubric (4-dimension scoring) | Phase 5 |
| [data-validation-rules.md](./data-validation-rules.md) | Conservative prediction rules + confidence levels | Phase 5 |

---

## 🔗 Cross-References

These files are loaded automatically during the appropriate phases:

### Phase 1: Brainstorm
- `mrbeast-principles.md` - Evaluate ideas using CTR×AVD framework
- `stepps-framework.md` - Score ideas across 6 viral dimensions

### Phase 2: Deep Insight Extraction
- No specific file (uses conversational prompts from main SKILL.md)

### Phase 3: Structure Design
- `mrbeast-principles.md` - Apply staircase progression formula (P1-P2 → P3-P4 → P5 → P6)

### Phase 4: Writing & Humanization
- `pain-point-copywriting.md` - Transform technical terms into emotional stories
- `anti-ai-cheatsheet.md` - Check for AI writing patterns and fix them

### Phase 5: Quality Review
- `persona-consistency-checklist.md` - Validate against @程序员小智 persona standards
- `data-validation-rules.md` - Ensure no hallucinated precise predictions

---

## 📊 Integration Points

Each file integrates with multiple skills in the ecosystem:

```
mrbeast-principles.md
├── Used by: xhs-operator-v2, mrbeast-skill, xhs-fullstack-creator
├── Key metrics: CTR ≥ 15%, AVD ≥ 40s, interaction rate ≥ 8%
└── Application: Title optimization, cover design, pacing

stepps-framework.md
├── Used by: xhs-operator-v2, xhs-fullstack-creator
├── Scoring: Each dimension 1-5, total 6-30
└── Application: Topic ideation, viability assessment

pain-point-copywriting.md
├── Used by: xhs-writer-expert, xhs-fullstack-creator
├── Technique: Translate features → pain points → benefits
└── Application: Copy refinement, conversion optimization

anti-ai-cheatsheet.md
├── Used by: humanizer, xhs-fullstack-creator
├── Checklist: Emoji density >1.5%, first-person frequency >3/100 words
└── Application: Post-writing quality check

persona-consistency-checklist.md
├── Used by: xhs-operator-v2, xhs-fullstack-creator
├── Dimensions: Programmer(35%) + Novice(30%) + AI-enthusiast(20%) + Tone(15%)
└── Application: Persona consistency validation

data-validation-rules.md
├── Used by: xhs-operator-v2, xhs-fullstack-creator
├── Rule: Conservative ranges only (e.g., "3k-8k views", NOT "52,847")
└── Application: Prediction accuracy + trust building
```

---

## 🎯 Quick Reference

### For New Users

1. **Start here**: Read the main SKILL.md for the complete workflow
2. **Need specific framework?**: Jump to the relevant file in this directory
3. **Want examples?**: See the `examples/` directory below

### For Experienced Users

These files are also available via skillhub:
- `mrbeast-principles`: Available standalone
- `xiaohongshu-mrbeast-pro`: Includes all frameworks integrated
- Use these references when you need deep dives

---

## 📝 Maintenance Notes

**Last Updated**: 2026-05-09  
**Version**: v1.0  
**Author**: Integrated from @程序员小智's operational experience

**Update History**:
- 2026-05-07: Initial creation based on xhs-operator-v2
- 2026-05-09: Consolidated into xhs-fullstack-creator framework
