# 🔁 Skill 自动同步机制 v1.0

> **用途**: 当 skill 目录下有新的版本更新时，自动同步一份到 /home/node/clawd/reports/ 用于归档和备份

---

## 📂 **目录结构**

```bash
Source (主仓库):   /home/node/clawd/skills/
Archive (备份库):  /home/node/clawd/reports/
```

---

## 🔄 **同步策略**

### 原则:
1. **技能类文件** → `/home/node/clawd/reports/{skill-name}/`
2. **更新时完整覆盖**,保留历史版本痕迹
3. **每次更新后执行一次同步**

---

## 📋 **已同步的 Skills 列表**

| Skill | 源路径 | 归档路径 | 最后同步时间 |
|-------|--------|---------|-------------|
| xiaohongshu-trio | `/skills/xiaohongshu-trio/` | `/reports/xiaohongshu-trio/` | 2026-05-02 |

---

## ⚙️ **手动同步命令**

当你更新了某个 skill 后，可以运行以下命令同步:

```bash
# 语法
cp -r /home/node/clawd/skills/{skill-name}/* /home/node/clawd/reports/{skill-name}/

# 示例 (xiaohongshu-trio)
cp -r /home/node/clawd/skills/xiaohongshu-trio/* /home/node/clawd/reports/xiaohongshu-trio/
```

---

## 🎯 **自动化建议 (可选)**

如果你想要更高级的自动同步功能，可以在以下场景触发:

### 方案 A: Git Hook (推荐)
在 `~/.git/hooks/post-commit` 添加脚本，每次 commit 后自动同步:

```bash
#!/bin/bash
# post-commit hook

SKILL_NAME="xiaohongshu-trio"
SOURCE="/home/node/clawd/skills/${SKILL_NAME}"
TARGET="/home/node/clawd/reports/${SKILL_NAME}"

if [ -d "$SOURCE" ]; then
    cp -r "$SOURCE"/* "$TARGET"/
    echo "✅ {SKILL_NAME} 已同步到 reports/"
fi
```

### 方案 B: Cron Job (定时检查)
每天凌晨 3 点检查并同步所有更新的 skill:

```bash
# 添加到 crontab (-e)
0 3 * * * /home/node/clawd/scripts/sync-skills.sh
```

### 方案 C: IDE 插件
VSCode 可以安装「Auto Sync」扩展，设置监控特定目录变化

---

## 📝 **注意事项**

1. **不要同步大文件** - 只同步 Markdown/Prompt 类文本文件
2. **先检查权限** - 确保对 `/home/node/clawd/reports/` 有写入权限
3. **冲突处理** - 如果目标目录已有更新，先用 `diff` 对比再覆盖
4. **日志记录** - 建议在同步时生成 changelog:

```bash
# 带日志的同步
echo "$(date '+%Y-%m-%d %H:%M:%S') - Synced $SKILL_NAME" >> /home/node/clawd/reports/.sync-log.txt
```

---

## ✨ **未来可扩展方向**

- [ ] 添加 diff 比对功能，只显示变化的部分
- [ ] 支持批量同步多个 skills
- [ ] 集成到 git workflow 中作为 pre-push hook
- [ ] 添加版本号管理，每个 sync 打一个 tag

---

*创建时间：2026-05-02*  
*维护者：Clawd*
