# 🎨 小红书 AI 绘画提示词专家 (Xiaohongshu AI Art Prompt Master)

## 📚 基于《gpt-image2-prompt-masterclass》系统教程深度整合

本技能包完整融合了 **Masterclass 12 章系统教程 +55,000+ 字核心知识**，包含：
- ✅ **万能公式** - 最简洁有效的提示词记忆框架
- ✅ **五大场景实战** - 人像/海报/角色/UI/创意混搭全涵盖
- ✅ **扩展术语库** - 156+ 个专业中英对照术语
- ✅ **美学指南** - 颜色/氛围/质感系统化描述
- ✅ **商业应用** - 电商/社交媒体/广告变现路径

---

## 📌 技能用途和应用场景

这个技能包专为**小红书创作者**设计，帮助他们快速生成高质量、风格化的 AI 绘画提示词，适用于：

### 核心应用场景
- **封面图制作** - 高点击率的视觉冲击力图片
- **图文笔记配图** - 与内容匹配的精美插图
- **产品种草图** - 商品展示与场景化营销
- **穿搭灵感图** - 时尚搭配与潮流趋势
- **美食摄影** - 诱人食物拍摄效果
- **旅行风景** - 目的地氛围渲染
- **建筑设计** - 室内装饰与空间规划
- **角色设定** - IP 形象与人设创作

### 适用平台
- **Midjourney** - v5/v6 版本优化
- **Stable Diffusion** - SD1.5/SDXL/ComfyUI
- **DALL-E 3** - 自然语言友好型
- **Leonardo.ai** - 游戏/插画专用模型
- **NijiJourney** - 二次元/动漫风格

---

## 📐 万能公式核心方法论

### 🎯 万能公式结构

```
提示词 = 主体 (Subject) + 场景 (Scene) + 风格 (Style) 
        + 光线 (Lighting) + 构图 (Composition) + 细节 (Details)
```

这是 Masterclass 第 2 章强调的**最简单、最有效**的提示词框架！

### 💡 六要素详解

| 要素 | 作用 | 关键词示例 |
|-----|------|-----------|
| **主体** | "画什么" - 核心焦点 | a young Asian woman in hanfu dress |
| **场景** | "在哪画" - 环境背景 | walking through ancient Chinese temple garden |
| **风格** | "怎么画" - 艺术表现 | cinematic film photography, Kodak Portra 400 |
| **光线** | "光从哪里来" - 氛围情绪 | soft golden hour sunlight filtering through trees |
| **构图** | "怎么看" - 视觉引导 | rule of thirds, shallow depth of field, low angle |
| **细节** | "点睛之笔" - 真实感增强 | cherry blossom petals falling, gentle smile, bokeh |

### 🛠️ 万能公式使用示例

```javascript
// 方式 1: useMasterFormula API (推荐)
builder.useMasterFormula({
  subject: "a young Korean woman in oversized trench coat",
  scene: "walking down bustling Seoul Myeongdong shopping district",
  style: "Korean street photography, candid documentary style",
  lighting: "diffused overcast daylight, soft even illumination",
  composition: "eye-level full body shot, dynamic walking pose",
  details: "holding designer tote bag, round glasses, blurred crowd"
});

// 方式 2: 传统分步构建
builder.addSubject("fashionable young Korean woman")
       .addEnvironment("Seoul shopping district at afternoon rush")
       .applyLighting("soft overcast daylight")
       .setComposition("rule of thirds");
```

---

## 🏆 五大场景快速入口

根据 Masterclass 第 5-9 章整理的实战模板库

### 1️⃣ 人像摄影 (Portrait Photography) - 第 5 章

**覆盖类型**:
- 街拍风格 → `examples/portrait-20-street-style-snap.js`
- 韩系清新 → `examples/portrait-21-korean-style-fresh.js`
- 电影质感 → `examples/portrait-22-cinematic-noir.js`
- 复古胶片 → `examples/portrait-23-vintage-film.js`
- 古风国华 → `examples/portrait-24-hanfu-traditional.js`

**快速模板**:
```javascript
// 韩系清新风格
const preset = PromptBuilder.getMasterFormulaTemplate('portrait_photography');
builder.useMasterFormulaPreset('portrait_photography', {
  subject: '替换为你的人物描述'
});
```

### 2️⃣ 海报插画 (Poster & Illustration) - 第 6 章

**覆盖类型**:
- 城市宣传 → `examples/poster-01-city-promotion.js`
- 产品广告 → `examples/poster-02-product-advertisement.js`
- 电影动漫 → `examples/poster-03-movie-anime-style.js`
- 信息图表 → `examples/poster-04-infographic-design.js`
- 中式美学 → `examples/poster-05-chinese-aesthetic.js`

**最佳实践**:
- 留白区域用于文字排版
- 主色调不超过 3 种
- 考虑应用场景尺寸比例

### 3️⃣ 角色设计 (Character Design) - 第 7 章

**覆盖类型**:
- RPG 角色卡 → `examples/character-01-rpg-character-card.js`
- 机甲幻想 → `examples/character-02-mecha-fantasy.js`
- 多角色团队 → `examples/character-03-multi-character-grid.js`

**设计要点**:
- 多角度视图确保角色一致性
- 材质和配色方案标注清晰
- 考虑角色背景和世界观设定

### 4️⃣ UI 截图 (UI Screenshots) - 第 8 章

**覆盖类型**:
- 社交类 App → `examples/ui-01-social-media-app.js`
- 直播界面 → `examples/ui-02-livestream-app.js`

**设计规范**:
- 符合目标平台设计语言 (iOS/HIG or Material Design)
- 保持交互元素的手势友好位置
- 深色模式适合视频类内容

### 5️⃣ 创意混搭 (Creative Fusion) - 第 9 章

**覆盖类型**:
- 文艺复兴 x 赛博朋克 → `examples/fusion-01-renaissance-cyberpunk.js`
- IP 混搭 (哈利波特) → `examples/fusion-02-harry-potter-cyberpunk.js`

**融合原则**:
- 两种风格都必须保持可识别性
- 用光线和环境作为桥梁
- 保留原 IP 的关键识别元素

---

## 💡 核心功能特性

### 1. 万能公式构建器 (Master Formula Builder)

基于 Masterclass 第 2 章的核心方法，提供 6 要素结构化输入：

```javascript
// 完整 API 支持
builder.useMasterFormula({
  subject: String,      // 必选 - 主体描述
  scene: String,        // 必选 - 场景环境
  style: String,        // 必选 - 艺术风格
  lighting: String,     // 必选 - 光线设置
  composition: String,  // 必选 - 构图方式
  details: String       // 必选 - 细节增强
});

// 预设模板快速启动
builder.useMasterFormulaPreset('preset_name', overrides);
```

### 2. 扩展术语库 (Glossary)

新增 156+ 专业术语（中英对照）：
- 摄影技术术语 32 项
- 相机与胶片设备 28 项
- 设计术语 25 项
- 艺术流派 27 项
- 布光技术 24 项
- 构图技巧 20 项

参考文件：`glossary-extra.json`

### 3. 美学描述指南

系统性掌握：
- **颜色词汇** - 避免模糊描述，使用具体色值和组合
- **氛围营造** - 时间/季节/天气的情绪表达
- **质感描写** - 材质/表面处理/老化表现
- **构图法则** - 三分法/黄金螺旋/引导线等

参考文档：`aesthetics-guide.md`

### 4. 知识库扩充

从原来的 357 条扩充至 **500+ 条目**，包括：
- 万能公式模板模块
- 五大场景专用模板（50+ 个）
- 扩展美学词汇表
- 商业案例研究

---

## 🎯 使用方法

### 方式一：智能构建器 (推荐)

```javascript
const { PromptBuilder } = require('./prompt-builder.js');

const builder = new PromptBuilder();

// 使用万能公式 (Masterclass 核心方法)
builder.useMasterFormula({
  subject: "a young Asian woman wearing hanfu dress",
  scene: "walking through classical Suzhou garden",
  style: "traditional Chinese painting meets modern photography",
  lighting: "soft diffused daylight, dappled shadows",
  composition: "medium shot, circular moon gate frame",
  details: "silk embroidery, jade hairpins, cherry blossoms"
});

// 配置技术参数
builder.addTechParams({
  ratio: '9:16',
  stylize: 380,
  version: '6.0'
});

// 输出结果
console.log(builder.build());
```

### 方式二：从示例学习

所有示例都遵循万能公式结构，查看 `examples/` 文件夹中的 `.js` 文件获取完整用法。

每个示例包含：
- 中文说明文档
- Master Formula 分解
- 适用场景建议
- 避坑 Tips

### 方式三：手动组合

从知识库直接选择关键词组合：

```
[万能公式六要素] → [扩展术语库] → [参数配置]

示例：
主体：年轻亚洲女性穿汉服
场景：苏州园林古典庭院
风格：中国传统绘画 x 现代摄影融合
光线：柔和漫射日光，斑驳树影
构图：三分法，圆形月洞门框景
细节：丝绸刺绣，玉簪花饰，落花飘落
参数：--ar 9:16 --stylize 380 --v 6.0
```

---

## 📊 交付标准验证

完成 Masterclass 整合后达到：

| 指标 | 达成值 |
|-----|-------|
| **总文件数** | 40+ 个文件 |
| **知识库总量** | 500+ 条知识条目 |
| **代码行数** | 6,000+ 行 |
| **万能公式支持** | ✅ 完全实现 |
| **五大场景覆盖** | ✅ 全部章节 |
| **示例脚本** | 30+ 个实战案例 |
| **扩展术语库** | 156+ 专业术语 |
| **美学指南** | 完整文档 |

---

## 📖 学习路径建议

### 入门级 (新手)
1. 阅读 `master-formula.md` 理解万能公式
2. 从 `examples/portrait-*.js` 开始练习基础人像
3. 使用预设模板快速上手

### 进阶级 (进阶用户)
1. 深入学习 `aesthetics-guide.md` 掌握美学原理
2. 尝试 `glossary-extra.json` 中的专业术语
3. 创作自己的万能公式变体

### 专家级 (资深用户)
1. 探索创意混搭 `examples/fusion-*.js`
2. 创建跨风格融合项目
3. 贡献新的场景模板到知识库

---

## 🔧 最佳实践清单

### ✅ 正确做法
1. **主体优先** - 前 50 字符明确核心
2. **具体胜于抽象** - 使用精准词汇而非笼统形容词
3. **光线决定氛围** - 时间 + 强度 + 方向组合
4. **镜头语言** - 焦距 + 景深 + 视角配合
5. **色彩心理学** - 暖色系→热情，冷色系→冷静
6. **测试迭代** - 记录调整效果形成个人库

### ❌ 常见误区
1. 堆砌华丽辞藻无实质内容
2. 光线设定逻辑矛盾
3. 风格混合混乱主次不清
4. 细节超过 5 项导致画面失衡
5. 忽视负向提示词的重要性

---

## 📝 更新日志

- **v2.0.0** (2026-05-16): Masterclass 深度整合版
  - ✅ 新增万能公式构建器 API
  - ✅ 扩展术语库 156+ 专业术语
  - ✅ 五大场景实战示例 30+ 个
  - ✅ 美学描述指南完整文档
  - ✅ 知识库扩充至 500+ 条目
  - ✅ 创意混搭场景支持

- **v1.0.0** (2026-05-16): 初始版本发布
  - 完整知识库构建 (~357 条目)
  - 提示词生成器实现
  - 20+ 实战示例提供
  - 小红书平台特色优化

---

**Happy Creating! 🎨✨**

*基于 gpt-image2-prompt-masterclass 12 章系统教程深度提炼，助你成为 AI 绘画提示词大师!*
