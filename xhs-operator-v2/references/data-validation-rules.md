# 数据预测防幻觉规范

> 原则：宁可不说，不说假话

---

## 🚨 **红线规则** (绝对不能碰)

### ❌ 严禁场景

| 类型 | 错误示例 | 正确做法 |
|------|----------|----------|
| **精确数字预测** | "你的笔记会有 52,847 次曝光" | "预计在 3k-8k 区间波动" |
| **无依据推测** | "按照这个趋势你会涨粉到 10 万" | "保持更新节奏，预计 3-6 个月可达 1k" |
| **虚构数据来源** | "根据大数据统计..." (无法验证) | "基于过往类似内容的观察..." |
| **确定性断言** | "这篇肯定会爆" | "有这几个因素有利，但仍有不确定性" |
| **编造案例数据** | "我有个客户用了这个方法赚了 XX 万" | "我没有实际案例，只能分享理论框架" |

---

## ✅ **允许的数据输出**

### 1️⃣ **保守区间预测**

```markdown
✅ 允许:
"根据过往经验，这类内容通常在 3k-8k 曝光范围"

❌ 禁止:
"你的笔记预计会获得 5,678 次曝光"
```

**生成逻辑**:
```python
def predict_range(context):
    historical_data = get_historical_performance(context.similar_topics)
    
    if not historical_data or len(historical_data) < 3:
        return None  # 数据不足就返回 None
    
    avg = sum(historical_data) / len(historical_data)
    std = calculate_std_deviation(historical_data)
    
    # 使用 1σ范围 (覆盖约 68% 的历史数据)
    low = max(0, avg - std)
    high = avg + std * 1.5  # 稍微放宽上限
    
    return f"{format_number(low)} - {format_number(high)}"
```

---

### 2️⃣ **置信度标注**

```markdown
✅ 完整格式:
"基于你过去 3 篇笔记的表现 (平均 CTR 12.3%, AVD 38s),
预计这篇能达到类似水平。
但我没有实时平台数据支持，实际效果可能受账号权重/发布时间影响。
置信度：~60%"
```

**置信度分级**:
| 等级 | 说明 | 适用场景 |
|------|------|----------|
| 🔴 高 (>75%) | 有充分历史数据支撑 | 同类选题的延续 |
| 🟡 中 (40-75%) | 部分数据支持，存在变量 | 新赛道尝试 |
| 🟢 低 (<40%) | 仅凭经验推断 | 完全新颖的方向 |

---

### 3️⃣ **假设条件明确化**

```markdown
✅ 必须标注前提:
"如果满足以下条件，预计能获得较好效果：
① 封面采用真人出镜 (CTR 提升约 15%)
② 发布于工作日 19:00-21:00 时段
③ 保持现有粉丝互动率 >8%
④ 不违规/不被限流

缺少任一条件都可能导致实际结果偏低"
```

---

## 🧮 **预测流程规范**

### Step 1: 检查数据基础

```python
def validate_prediction_context(topic):
    """验证是否有足够数据支撑预测"""
    
    checks = {
        'has_historical_data': has_performance_history(topic),
        'similar_content_exists': similar_posts_count(topic) > 0,
        'account_maturity': account_age_in_months() >= 1,
        'platform_stability': is_platform_trend_known(topic)
    }
    
    # 任意一项低于阈值则降低置信度
    confidence_factors = [v for k,v in checks.items() if v]
    base_confidence = len(confidence_factors) / len(checks) * 100
    
    return base_confidence
```

### Step 2: 生成区间而非定点

```markdown
✅ 好:
"预估在 3,000-8,000 次曝光之间"

❌ 坏:
"预估会获得 5,287 次曝光"
```

**区间宽度建议**:
- 数据充足时：±30% 范围
- 数据一般时：±50% 范围  
- 数据不足时：给出下限即可 ("至少 XXX")

---

### Step 3: 标注不确定性来源

```markdown
需要说明的不确定因素:

① 算法因素:
"小红书推荐算法经常调整，过去的规律不一定持续"

② 竞争环境:
"近期同赛道内容增多，可能会稀释流量"

③ 账号状态:
"账号权重在动态变化，新发布的权重通常略高于旧账号"

④ 外部变量:
"节假日/热点事件会显著影响整体流量池"
```

---

## 📋 **问答模板库**

### 问题 1: "你觉得我的下一篇能有多少播放量？"

**安全回答**:
```
这个问题我没法给确切答案 😅

根据你最近 3 篇的平均表现:
- 浏览量：1,234 / 987 / 1,456 → 平均 ~1,225
- 互动率：15.3% / 9.1% / 12.7% → 平均 ~12.4%

如果下一篇保持相似质量和发布时间，
可能在 1,000-2,000 之间波动。

但这个预测受很多因素影响:
❗ 封面吸引力
❗ 标题是否足够吸引人
❗ 发布后前 2 小时的初始数据反馈
❗ 平台当天的流量分配策略

所以只能说「有可能」，不能保证哦!
建议先发布看看数据再调整👍
```

---

### 问题 2: "按这个速度我多久能涨到 1 万粉？"

**安全回答**:
```
这个问题涉及太多变量，我只能给你做个保守估算:

基于目前的情况:
• 当前粉丝：31
• 近 7 天净增：+8
• 爆款贡献：1 篇笔记带来 +15 粉

假设:
✅ 保持每月 2-3 篇高质量更新
✅ 至少有 1 篇达到小爆款 (>1k 互动)
✅ 不发生违规被封号等意外

那么乐观估计：
🟢 3-6 个月可触及 1,000 粉
🔴 1-2 年可能达到 10,000 粉

但这些都是「如果」，真实情况取决于:
- 内容持续优化的能力
- 是否能抓住平台红利期
- 是否有其他运营动作配合

所以我建议把注意力放在「如何优化单篇质量」上，
而不是纠结具体时间点😂
```

---

### 问题 3: "我应该什么时候发布？"

**安全回答**:
```
根据公开的流量研究和我对你账号的观察:

时间窗口分析:
• 工作日晚上 19:00-21:00 → 通勤 + 休息时间流量稳定
• 周五下午 16:00-18:00 → 周末情绪高涨期
• 周三晚 20:00-22:00 → 周中娱乐需求高峰

我的建议:
🎯 首选：周一/周三/周五 的 19:30 发布
🎯 备选：周日 20:00 (周末收尾前的最后流量波)

但要注意:
⚠️ 这不是绝对真理，A/B 测试才是王道
⚠️ 你可以连续发 4 篇不同时间，对比数据
⚠️ 最终看后台的实际流量曲线

如果你有后台数据截图，我可以帮你更具体分析
```

---

## ⚙️ **实现代码框架**

```python
class DataPredictionValidator:
    """数据预测防幻觉校验器"""
    
    def __init__(self, historical_data):
        self.data = historical_data
        
    def predict(self, context, target_metric='views'):
        """生成保守区间预测"""
        
        # 1. 数据验证
        confidence = self._validate_data_quality(context)
        if confidence < 0.3:
            return self._low_confidence_warning()
        
        # 2. 区间计算
        baseline = self._calculate_baseline(context)
        prediction_range = self._calculate_interval(baseline, confidence)
        
        # 3. 生成带标注的回答
        answer = {
            'prediction': f"{prediction_range['min']}-{prediction_range['max']}",
            'confidence': confidence,
            'assumptions': self._list_assumptions(context),
            'uncertainty_sources': self._list_uncertainties(),
            'disclaimer': "这只是基于历史数据的推测，实际结果可能差异较大"
        }
        
        return answer
    
    def _validate_data_quality(self, context):
        """评估是否有足够数据支撑预测"""
        similar_posts = self._find_similar_posts(context)
        if len(similar_posts) < 3:
            return 0.2  # 数据不足
        return min(0.8, len(similar_posts) / 10)  # 封顶 80% 置信度
    
    def _calculate_interval(self, baseline, confidence):
        """生成保守区间"""
        spread_factor = 1.0 + (1.0 - confidence)  # 置信度越低，区间越宽
        
        return {
            'min': int(baseline * 0.7),
            'max': int(baseline * (1.5 + spread_factor * 0.5))
        }
```

---

## 💡 **核心原则总结**

1. **宁可模糊，不许精确** → 给区间不给定点
2. **标明来源，诚实边界** → "这是基于 X 数据的推测"
3. **承认不确定，管理期望** → "实际可能差异很大"
4. **引导行动，不过度承诺** → "建议发布后实测"

---

*版本*: v1.0 | *创建时间*: 2026-05-07  
*目标*: 让每次数据相关回答都有据可依、诚实可信
