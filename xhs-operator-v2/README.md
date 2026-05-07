# xhs-operator-v2 - 小红书内容运营专家

> **核心理念**: MrBeast 的内容科学 × STEPPS 传播理论 × @程序员小智真实人设 × **卖生活痛点**

---

## 🚀 **快速开始**

### 安装依赖

```bash
cd /home/node/clawd/skills/xhs-operator-v2/scripts
pip install -r requirements.txt  # (如有外部依赖)
```

### 运行方式

#### 方法 1: 交互式对话
```bash
python main.py
```

#### 方法 2: CLI 命令
```bash
# 选题评估
python main.py topic "装修合同避坑指南"

# 内容审核 (包含 AI 检测 + 人设检查)
python main.py audit "差点被骗 3 万块！" "签合同时我完全不懂..."

# 数据预测 (带防幻觉校验)
python main.py predict "装修避坑笔记会有多少浏览量"

# 痛点写作法指导
python main.py pain-point "橱柜收纳" "帮我写一个痛点场景化的版本"
```

---

## 📖 **六大核心功能**

### A. 选题评分器 (`topic_evaluator.py`)

**用途**: 判断选题是否值得做

**输入**: 选题描述  
**输出**: 
- ✅ 综合评分 (0-100)
- 🔍 STEPPS 六维分析
- 💡 优缺点和改进建议
- 🎯 类似成功案例参考

**示例**:
```python
from topic_evaluator import TopicEvaluator

evaluator = TopicEvaluator()
result = evaluator.evaluate("帮我写一篇关于装修合同避坑的笔记")

print(f"推荐指数：{result['total_score']}/100")
print(f"评价：{result['recommendation']}")
```

---

### B. 内容审核器 (`content_auditor.py`)

**用途**: 检测 AI 化程度 + 人设一致度 + STEPPS 评分

**输入**: 标题 + 正文 (+ 封面描述)  
**输出**:
- 🤖 AI 特征评分 (0-10 分，越低越好)
- 👤 人设匹配度 (0-100 分，越高越好)
- 📊 STEPPS 六维得分
- ✍️ 具体改写建议

**新增**: 
- 🔥 专业术语 vs 生活痛点翻译检查
- 💔 "卖生活不卖参数"原则验证

**示例**:
```python
from content_auditor import ContentAuditor

auditor = ContentAuditor()
result = auditor.audit(
    title="签合同时我差点被骗 3 万块",
    content="本来以为签完就万事大吉了...",
    cover_description="真人出镜 + 愤怒表情 + 报警截图"
)

print(f"AI 评分：{result['ai_detection']['score']}/10")
print(f"可发布：{'✅' if result['publish_ready'] else '❌'}")
```

---

### C. 装修知识问答 (`decoration_qa_helper.py`)

**用途**: 基于本地知识库回答装修相关问题

**输入**: 装修相关提问  
**输出**: 专业解答 + 广州 2026 年报价参考

**示例**:
```python
from decoration_qa_helper import DecorationQAHelper

qa = DecorationQAHelper()
result = qa.ask("卫生间防水做多高？")

print(result['answer'])
# 输出：淋浴区墙面刷到 1.8 米，干区 30cm...
```

---

### D. 痛点文案写作助手 (PAIN POINT WRITER) ⭐ **新增**

**用途**: 帮你把专业参数翻译成生活痛点

**输入**: 产品功能/专业术语  
**输出**: 3 个痛点场景化文案版本

**示例**:
```python
from pain_point_writer import PainPointWriter

writer = PainPointWriter()
result = writer.translate(
    product_feature="L 型橱柜 + 多层抽屉系统",
    target_emotion="从容、不将就"
)

print(result['scenarios'])
# 输出：
# 1. "每天做饭前花 10 分钟翻箱倒柜找锅？"
# 2. "调料瓶倒了整柜子都乱？"
# 3. "高处物品够不着只能踩凳子？"
```

---

### E. 复盘分析器 (待实现)

**用途**: 基于发布后数据生成优化建议

**计划功能**:
- STEPPS 各维度表现诊断
- A/B 测试方案建议
- 选题持续性评估
- 下周改进清单

---

### F. 防幻觉数据校验 (`data_validator.py`)

**用途**: 预测类回答自动添加置信度和不确定性标注

**输入**: 预测需求 + 上下文数据  
**输出**: 保守区间预测 + 假设条件列表

**示例**:
```python
from data_validator import DataPredictionValidator

validator = DataPredictionValidator()
result = validator.predict(
    topic="装修避坑笔记浏览量",
    context={'recent_posts': [1200, 980, 1450]}
)

print(f"预测范围：{result['prediction_range']}")
print(f"置信度：{result['confidence_level']}")
```

---

### G. 人设一致性检查 (`persona_verifier.py`)

**用途**: 验证内容是否符合@程序员小智的人设

**输入**: 标题 + 正文  
**输出**: 
- 👤 四维度得分 (程序员视角/装修小白/AI 创新/语调一致性)
- 🎯 加权总分
- ✅ Checklist 检查通过项
- 💡 改进建议

**示例**:
```python
from persona_verifier import PersonaVerifier

verifier = PersonaVerifier()
result = verifier.verify(
    title="签合同时我差点被骗 3 万块",
    content="花了一周用 Excel 重新算了一遍报价单...",
    cover_description="工地实拍 + 愤怒表情"
)

print(f"人设一致度：{result['total_score']}/100")
print(f"结论：{result['verdict']}")
```

---

## 📚 **方法论文档库结构**

```
references/
├── mrbeast-principles.md          # MrBeast 内容科学蒸馏
├── stepps-framework.md            # Jonah Berger 传播理论
├── anti-ai-cheatsheet.md          # 去 AI 化实操指南
├── persona-consistency-checklist.md # 人设一致性标准
├── data-validation-rules.md       # 数据预测防幻觉规范
└── pain-point-copywriting.md      # ✅ 新增：家装文案痛点写作法
```

**pain-point-copywriting.md 核心内容**:
- ❌ 为什么专业参数没人看？
- ✅ 4 大核心技巧 (共情 + 揭穿 + 翻译 + 卖生活)
- 📝 黄金公式：痛点场景化×提问揭穿×卖生活×情绪共鸣
- 📚 实战案例库 (3 个完整改写对比)
- ⚠️ 避坑指南 (常见错误对照表)
- 🎯 自检 Checklist

---

## 🧪 **测试用例**

### 场景 1: 用户问"我的选题怎么样？"
```bash
$ python main.py topic "装修合同避坑指南"

输出示例:
{
  "topic": "装修合同避坑指南",
  "total_score": 78,
  "recommendation": "🟡 可以尝试，但建议优化某些维度后再发布",
  "dimensions": {
    "social_currency": 85,
    "triggers": 65,
    "emotion": 80,
    "publicity": 70,
    "practical_value": 90,
    "story_quality": 60
  },
  "suggestions": [
    "💡 加入日常场景触发器，例如：'下雨天发现渗水...'",
    "💡 改成故事叙事结构：主角→冲突→努力→转折→结局"
  ]
}
```

---

### 场景 2: 用户粘贴草稿求审核
```bash
$ python main.py audit "如何控制装修预算？" "首先要做好预算规划，其次要选择靠谱的装修公司..."

输出示例:
{
  "ai_detection": {
    "score": 7,
    "issues_found": ["使用了「首先/其次」等逻辑词", "缺少具体数字"]
  },
  "persona_check": {
    "total": 35,
    "programmer_perspective": 40,
    "diy_authenticity": 20
  },
  "publish_ready": false,
  "improvements": [
    "🔧【去 AI 化】当前得分 7/10 (>3 分需优化)",
    "💻【程序员视角】可以加入数据工具推荐，如 Excel 公式",
    "🔥【痛点写作】把'预算规划'改成'多花了 2 万多心疼吗？'"
  ]
}
```

---

### 场景 3: 用户请求痛点写作指导 ⭐ **新增**
```bash
$ python main.py pain-point "厨房收纳"

输出示例:
=== 痛点文案写作助手 ===

您提供的主题：厨房收纳

📋 专业术语版 (❌不要这样写):
"我们的橱柜采用多层抽屉设计，空间利用率高"

🔥 痛点场景版 (✅推荐这样写):

版本 1 - 替她说出委屈:
"你是不是也有过这种体验？
打开橱柜门，里面的东西乱七八糟
想找酱油，结果先把整排调料瓶碰倒了...

我们的 L 型橱柜，专门解决这个问题:"

版本 2 - 揭穿将就惯性:
"每次做饭前都要花 10 分钟翻箱倒柜找锅？
这样的日子你过腻了吗？

我们用分层收纳帮你告别混乱:"

版本 3 - 卖理想生活:
"想象一下 - 以后做饭从容淡定
打开每个抽屉都一目了然
不用趴在地上翻箱倒柜
这才是好厨房该有的样子 ✨"

💡 建议使用：版本 1+ 版本 3 组合
```

---

## 🛠️ **扩展开发计划**

| 优先级 | 功能 | 状态 |
|--------|------|------|
| P0 | 核心框架搭建 | ✅ 已完成 |
| P0 | 选题评分器 | ✅ 已完成 |
| P0 | 内容审核器 | ✅ 已完成 |
| P0 | 人设一致性检查 | ✅ 已完成 |
| P0 | 数据预测防幻觉 | ✅ 已完成 |
| P1 | 装修领域问答 | ✅ 基础版完成 |
| P1 | 痛点写作助手 | ✅ 方法论已整合 |
| P1 | 复盘分析器 | ⏳ 待实现 |
| P2 | 自动化测试套件 | ⏳ 待实现 |
| P2 | Web 可视化界面 | ⏳ 考虑中 |

---

## 📝 **使用规范**

### ✅ 正确用法
```text
>> eval-topic "装修避坑指南"
>> audit-content "差点被骗 3 万块" "签合同时我没看懂..."
>> verify-persona "我的内容" "完整正文" "封面是..."
>> predict-data "这类笔记大概有多少浏览"
>> ask-decor "卫生间防水做多高？"
>> pain-point "橱柜收纳" "帮我写痛点场景化版本"
```

### ❌ 错误用法
```text
>> 直接要求精确数字预测："告诉我这篇一定有 5 万播放!"
>> 忽略 AI 检测警报："不管分数多高都能发"
>> 不核对人设建议："内容跟我的人设没关系吧?"
>> 继续用专业术语堆砌："E0 级板材甲醛释放量≤0.05mg/m³"
```

---

## 📅 **版本历史**

### v2.1 (pain-point 增强版) - 2026-05-07
- ✅ 核心架构建立
- ✅ 六大功能实现 (A-G)
- ✅ 方法论文档库构建
- ✅ 示例案例填充
- ✅ **新增 pain-point-copywriting.md 方法论文档**
- ✅ **内容审核器增加"卖生活不卖参数"检查项**
- ⏳ 待迭代：复盘分析器 / 自动化工具链

---

*作者：洪成智 (@程序员小智)  
创建时间：2026-05-07  
最后更新：2026-05-07  
目标：成为你的小红书内容创作操作系统*
