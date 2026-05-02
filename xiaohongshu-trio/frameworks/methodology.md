# 📚 methodology.md - 小红书运营方法论大全

> "从 0 到爆款的标准工作流"

---

## 🗺️ **一、整体流程架构**

```
选题策划 → 内容创作 → 数据验证 → 发布执行 → 复盘优化
    ↓          ↓           ↓          ↓          ↓
MrQ+MrBeast   CEO       MrBeast    MrQ       MrBeast+CEO
(策略层)     (执行层)   (预测层)   (合规层)  (学习层)
```

---

## 🎯 **二、Phase 1: 选题策划**

### **1.1 选题来源矩阵**

```markdown
┌───────────────────────────────────────────────┐
│ 【真实经历】(最推荐)                          │
│ • 工地冲突/谈判经历                          │
│ • 踩坑后的复盘                               │
│ • 采购决策过程                               │
├───────────────────────────────────────────────┤
│ 【干货输出】(稳定流量)                        │
│ • 避坑清单                                   │
│ • 材料选购指南                               │
│ • 预算模板分享                               │
├───────────────────────────────────────────────┤
│ 【热点追投】(爆发机会)                        │
│ • 装修政策变化                               │
│ • 行业负面事件曝光                           │
│ • 季节性需求（开学季/金九银十）               │
├───────────────────────────────────────────────┤
│ 【系列专栏】(粉丝粘性)                        │
│ • 《程序员小智的装修日记》每日更新            │
│ • 《报价单审核实录》案例教学                  │
│ • 《供应商对比测评》红黑榜                    │
└───────────────────────────────────────────────┘
```

### **1.2 选题验证流程**

```python
def validate_topic(user_idea):
    """
    三步验证法
    """
    # Step 1: 数据热度检查
    trend_score = mrbeast.predict_viral_score(user_idea)
    if trend_score < 50:
        return f"热度不足，建议换方向。当前评分：{trend_score}/100"
    
    # Step 2: 竞争环境分析
    competitors = search_competing_content(user_idea, limit=10)
    gap_opportunity = find_content_gap(competitors, user_idea)
    if not gap_opportunity:
        return "这个方向太拥挤，建议换个角度切入"
    
    # Step 3: 真实性校验
    if not has_authentic_experience(user_idea):
        return "这个故事不够真实，建议换成你亲身经历的项目"
    
    return f"✅ 通过验证！预期 CTR: {trend_score}%，差异化机会：{gap_opportunity}"
```

### **1.3 最佳选题特征**

| 特征 | 权重 | 说明 |
|------|------|------|
| **冲突性** | 40% | 有争议/有情绪张力 |
| **实用价值** | 30% | 看完能学到具体方法 |
| **可复制性** | 15% | 其他人也能照着做 |
| **人设契合度** | 15% | 符合"程序员小智"身份 |

---

## ✍️ **三、Phase 2: 内容创作**

### **2.1 标题创作公式库**

#### **6 种经过验证的爆款公式**

```markdown
【公式 1】数字 + 冲突
• "跟装修公司谈了 7 天，我靠这 3 条反杀成功！"
• "花了 15 万才搞明白，这 5 个增项全是坑"

【公式 2】疑问 + 悬念
• "为什么我不推荐你做半包装修？"
• "装修公司最怕你知道的 3 个秘密"

【公式 3】反转 + 真相
• "以为省了钱，结果多花了 3 万！"
• "进口漆并不比国产好，反而更坑"

【公式 4】身份标签 + 解决方案
• "程序员的强迫症治好了装修焦虑"
• "第一次装修的小白看这篇就够了"

【公式 5】痛点直击 + 承诺价值
• "不看完这篇可能会多花冤枉钱"
• "这份避坑清单请收好，关键时刻救命"

【公式 6】故事化叙事
• "我差点被这家公司坑了..."
• "跟工人吵了 3 架后，我终于懂了..."
```

### **2.2 封面设计规范**

```markdown
🖼️ 尺寸规范：
• 图片比例：3:4 (1080×1440px)
• 安全区：上下各留 150px 不被 UI 遮挡

【构图方案】
方案 A: 真人出镜 + 场景实拍
→ 左上角：大字标题
→ 中心：愤怒/惊讶表情 + 工地背景
→ 右下角：品牌水印 (@程序员小智)

方案 B: 对比视觉
→ 左边❌错误示范（红色标注）
→ 右边✅正确做法（绿色标注）
→ 中间：分割线 + 箭头

方案 C: 文档特写
→ 报价单/合同/账单截图放大
→ 关键数字用红色圆圈标出
→ 上方加"内附 XXX 模板"标签
```

### **2.3 正文结构模板**

```markdown
【开头 Hook】(前 50 字定生死)
方式 1: 抛出争议结论
→ "90% 的人选错了装修方式"

方式 2: 承诺明确价值
→ "看完这篇笔记，你能省下至少 2 万块"

方式 3: 情绪共鸣
→ "第一次装修，我真的慌了..."

【主体要点】(3-5 个核心信息点)
• 每个要点配真实截图/照片
• 避免纯理论，多用案例说话
• 段落长度控制在 3-5 行内

【结尾引导】(激发互动的关键)
方式 1: 提问式
→ "你家装修遇到过类似情况吗？评论区告诉我"

方式 2: 收藏动机
→ "这份清单请收好，开工前拿出来对照"

方式 3: 资源福利
→ "需要 Excel 模板的朋友可以留言"
```

### **2.4 配图规划建议**

```markdown
【8-9 张图黄金组合】

第 1 张：封面主图（吸睛）
第 2 张：真实场景/人物出镜（建立信任）
第 3-5 张：干货细节/数据截图（提供价值）
第 6 张：对比可视化（强化认知反差）
第 7 张：你的成果展示（证明有效）
第 8 张：互动引导图（评论/关注提示）
可选第 9 张：下期预告（培养追更习惯）
```

---

## 🔍 **四、Phase 3: 数据验证与 A/B 测试**

### **3.1 发布前预测模型**

```python
def predict_performance(title, cover, content_type):
    """
    MrBeast 的预测系统
    """
    ctr_prediction = calculate_ctr_probability(title, cover)
    avd_prediction = estimate_watch_time(content_type)
    viral_probability = calculate_viral_score(ctr_prediction, avd_prediction)
    
    return {
        "预期 CTR": f"{ctr_prediction:.1f}%",
        "预估完读率": f"{avd_prediction:.1f}%",
        "爆款概率": f"{viral_probability:.1f}%"
    }
```

### **3.2 A/B 测试方案设计**

```markdown
📊 每篇内容准备 3 套方案：

【方案 A - 保守型】
• 风格：稳妥但不出彩
• 适用：试水新题材或粉丝量少时
• 预期 CTR: 14-16%

【方案 B - 冲突型】⭐ 主推荐
• 风格：情绪 + 悬念拉满
• 适用：有真实故事支撑的内容
• 预期 CTR: 20-25%

【方案 C - 数据型】
• 风格：干货 + 可视化
• 适用：方法论/工具分享类
• 预期 CTR: 17-20%

🎯 发布策略:
首选方案 B，但如果数据表现不佳，4 小时后切换到方案 A 的标题封面重试
```

---

## 🚀 **五、Phase 4: 发布执行**

### **4.1 发布时间决策树**

```python
def decide_posting_time():
    """
    MrQ 的时间管理系统
    """
    # 优先条件
    if is_urgent_breaking_news():
        return "立即发布，不要等黄金时间"
    
    if is_first_time_publishing_today():
        return "周三 20:30（你的历史最佳窗口）"
    
    # 特殊情况调整
    if upcoming_holiday_weekend():
        return "提前到周二上午 11:00"
    
    if trending_hashtag_exists():
        return "立刻发布蹭热度 > 等待固定时间"
    
    return "默认周三 20:30"
```

### **4.2 发布 Checklist**

```markdown
□ 标题包含至少 1 个主关键词
□ 封面文字不超过 7 个字，在安全区内
□ 无违禁词/导流信息
□ 正文首段重复了关键词
□ emoji 数量≥5 个
□ 标签组合：3 个流量词 + 3 个长尾词 + 2 个人设词
□ 发布时间在推荐窗口
□ 评论区预埋了引导性问题（至少 1 条）
□ 与 MrBeast 预测的 CTR 值匹配
□ 已通过 MrQ 合规审查
```

### **4.3 发布后操作**

```markdown
【5 分钟内】
✓ 自己先评论一条："有需要 XX 的朋友可以留言，统一回复"
✓ 用小号点赞自己的笔记（模拟真实互动）

【30 分钟内】
✓ 回复前 5 条评论（无论好坏都要认真回应）
✓ 观察初始 CTR 数据，如果<10% 考虑切换封面

【2 小时内】
✓ 根据评论区的提问方向，准备下一期内容素材
✓ 如果数据好，考虑投 DOU+（谨慎使用，先自然流量测试）
```

---

## 📈 **六、Phase 5: 复盘优化**

### **5.1 数据分析维度**

```python
def analyze_performance(note_id):
    """
    核心指标复盘
    """
    metrics = get_note_metrics(note_id)
    
    analysis = {
        "CTR 评估": "优秀" if metrics.ctr > 0.20 else "一般",
        "完播率": metrics.watch_time / metrics.play_count,
        "收藏率": metrics.saves / metrics.exposures,
        "评论质量": analyze_comment_depth(metrics.comments),
        "增长贡献": calculate_follower_gain_from_note()
    }
    
    return generate_insights(analysis)
```

### **5.2 成功因素归因**

```markdown
📊 [单篇笔记复盘报告]

【基本数据】
• 播放量：8,247
• 点赞数：412 (5%)
• 收藏数：267 (3.2%)
• 评论数：89 (1.1%)
• CTR: 19.8%
• 新增粉丝：43 人

【成功要素】
✅ 标题击中痛点（"避坑"关键词搜索量大）
✅ 封面真实感强（工地实拍而非网图）
✅ 结尾福利引导（预算表模板领取人数多）

【改进空间】
⚠️ 评论率偏低（目标 3%，实际 1.1%）
→ 下次可以设计更有争议的讨论题

⚠️ 分享率低（0.3%）
→ 内容缺少"社交货币"属性，别人不愿意转发
```

### **5.3 长期迭代机制**

```markdown
🔄 每周复盘日（周日晚上）

【必须做的事】
1. 统计本周 7 篇内容的整体表现
2. 找出 TOP3 爆款和 BOTTOM3 垫底
3. 分析它们的共同特征（标题/封面/话题/发布时间）
4. 更新你的"成功模式库"

【月度总结】
1. 更新粉丝画像（谁在看你？）
2. 调整内容重心（哪个赛道数据最好？）
3. 优化资源分配（花在什么类型的内容上效率最高？）
4. 设定下月 KPI（涨粉数/爆款数/私域转化）
```

---

## 🛠️ **七、自动化脚本框架**

### **run_collaboration.py 伪代码**

```python
#!/usr/bin/env python3
"""
xiaohongshu-trio 三人协作引擎
"""

from roles import MrBeast, MrQ
from frameworks import traffic_rules, psychology_tools
from tools import web_search, memory_search

class XiaoHongShuTrio:
    def __init__(self):
        self.mrbeast = MrBeast(data_analyst=True)
        self.mrq = MrQ(operaion_director=True)
        
    def collaborate(self, user_request):
        """
        启动三人协作流程
        """
        # 第一轮：各自独立输出
        mrb_analysis = self.mrbeast.analyze(user_request)
        mrq_strategy = self.mrq.develop_strategy(user_request)
        ceo_feedback = self.assess_authenticity(user_request)
        
        # 第二轮：交叉质询
        refined_plan = self.resolve_conflicts([mrb_analysis, mrq_strategy, ceo_feedback])
        
        # 第三轮：输出最终方案
        final_output = self.generate_execution_plan(refined_plan)
        
        return final_output
    
    def resolve_conflicts(self, inputs):
        """
        处理角色间的矛盾意见
        """
        # MrBeast 说数据好，但 CEO 说不真实 → 妥协方案
        # MrQ 说安全，但 MrBeast 说没流量 → 平衡策略
        pass


# 使用示例:
if __name__ == "__main__":
    trio = XiaoHongShuTrio()
    result = trio.collaborate("帮我写一篇关于广州装修新规的内容")
    print(result)
```

---

## 📝 **八、内容日历模板**

### **月度规划表**

```markdown
┌──────────┬──────────────────────────────┬────────────┐
│ 日期      │ 主题                          │ 优先级     │
├──────────┼──────────────────────────────┼────────────┤
│ 周一      │ 复工日记/工地进展              │ ⭐⭐        │
│ 周三      │ 干货科普/避坑指南              │ ⭐⭐⭐       │
│ 周五      │ 周末问答/Q&A                   │ ⭐         │
└──────────┴──────────────────────────────┴────────────┘
```

### **季度主题路线**

```markdown
Q2(4-6 月):
• 4 月：合同签订 → 开工准备
• 5 月：水电进场 → 泥瓦工程
• 6 月：木工吊顶 → 油漆收尾

Q3(7-9 月):
• 7 月：厨卫安装 → 主材进场
• 8 月：软装搭配 → 家电选购
• 9 月：空气治理 → 竣工验收

每个阶段配套：
→ 1 篇深度干货（方法论）
→ 3 篇日常记录（工地日记）
→ 1 次直播答疑（实时互动）
```

---

*版本：V1.0 (MVP)*  
*创建时间：2026-05-02*  
*维护者：Clawd (原狮子继承者)*  
*理论来源：MrBeast 内容科学 + 小红书官方规则 + 实测数据积累*
