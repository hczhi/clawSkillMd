#!/usr/bin/env python3
"""
C: 装修领域知识问答助手

集成 decoration-v5 知识库 + renovation-db 数据
"""

from typing import Dict, List, Optional


class DecorationQAHelper:
    """装修领域 Q&A 助手"""
    
    def __init__(self):
        # 常见问题库 (示例)
        self.knowledge_base = {
            '防水': {
                'height': '淋浴区墙面刷到 1.8 米，干区 30cm',
                'test_duration': '至少 48 小时闭水试验',
                'cost_gz_2026': '经济档 35-55 元/㎡, 中端 55-80 元/㎡'
            },
            '瓷砖': {
                'glaze_recommendation': '广东佛山砖优先，吸水率<0.5%',
                'size_living_room': '客厅推荐 750x1500mm 或 800x800mm',
                'cost_glz_2026': '地面铺贴 55-75 元/㎡(经济),75-100 元/㎡(中端)'
            },
            '水电': {
                'pressure_test': 'PPR 水管打压 0.8MPa 保持 30 分钟',
                'wire_spec': '主线 4 平方，插座 2.5 平方，照明 1.5 平方',
                'routing_principle': '横平竖直，方便后期维修拍照留底'
            },
            '吊顶': {
                'kitchen_bath_material': '铝扣板吊顶，厚度 0.6-0.8mm',
                'ceiling_height_reduce': '通常下吊 25-30cm 藏管道'
            }
        }
        
        # 常见价格参考表
        self.price_reference = {
            '瓷砖铺贴地面': {'low': 55, 'mid': 75, 'high': 100, 'unit': '元/㎡'},
            '瓷砖铺贴墙面': {'low': 70, 'mid': 95, 'high': 130, 'unit': '元/㎡'},
            '防水涂刷': {'low': 35, 'mid': 55, 'high': 80, 'unit': '元/㎡'},
            '闭水试验': {'low': 100, 'mid': 200, 'high': 300, 'unit': '元/次'},
            'PPR 水管铺设': {'low': 50, 'mid': 65, 'high': 85, 'unit': '元/米'},
            '电路改造': {'low': 45, 'mid': 60, 'high': 80, 'unit': '元/米'}
        }
    
    def ask(self, question: str) -> Dict:
        """
        主入口：回答装修相关问题
        
        Args:
            question: 用户问题
            
        Returns:
            包含答案和相关信息的完整响应
        """
        question_lower = question.lower()
        
        # 匹配知识库
        matched_topic = self._match_topic(question_lower)
        
        if matched_topic:
            answer = self._generate_answer(matched_topic, question_lower)
        else:
            answer = self._handle_unknown_topic(question)
        
        return {
            'question': question,
            'answer': answer,
            'related_questions': self._get_related_questions(matched_topic),
            'data_source': 'decoration-v5 知识库 + 广州 2026 年报价参考'
        }
    
    def _match_topic(self, question: str) -> Optional[str]:
        """匹配问题所属主题"""
        
        topic_keywords = {
            '防水': ['防水', '渗水', '漏水', '闭水试验', '刷防水涂料'],
            '瓷砖': ['瓷砖', '铺砖', '地砖', '墙砖', '佛山砖'],
            '水电': ['水电', '电线', '水管', '电路', '打压测试', '布线'],
            '吊顶': ['吊顶', '天花板', '铝扣板', '石膏板'],
            '合同': ['合同', '报价单', '增项', '付款方式'],
            '预算': ['预算', '花费', '多少钱', '报价'],
            '验收': ['验收', '检查', '施工标准']
        }
        
        for topic, keywords in topic_keywords.items():
            if any(kw in question for kw in keywords):
                return topic
        
        return None
    
    def _generate_answer(self, topic: str, question: str) -> str:
        """根据主题生成答案"""
        
        if topic == '防水':
            kb = self.knowledge_base['防水']
            answer = f"""### 🛡️ 防水施工要点

**墙面高度**:
- 淋浴区：**1.8 米** (必须做到位!)
- 干区：30cm 以上
- 门口要做止水墩，防止水渗透到隔壁

**闭水试验**:
- 时间：**至少 48 小时**
- 注意：要通知楼下邻居来确认是否渗漏

**广州 2026 年参考价格**:
- 经济档：{kb['cost_gz_2026']}
- 高端档：80-120 元/㎡

**⚠️ 避坑提醒**:
- 一定要自己亲自做闭水试验，不能只靠工人说"没问题"
- 拍照留底管线走向，方便日后维修
"""
            return answer
        
        elif topic == '瓷砖':
            kb = self.knowledge_base['瓷砖']
            ref = self.price_reference['瓷砖铺贴地面']
            answer = f"""### 🧱 瓷砖选购指南

**材质选择**:
- **首选**: 广东佛山砖
- 关键指标：吸水率 < 0.5%
- 客厅尺寸推荐：750x1500mm 或 800x800mm

**铺贴工艺**:
- 人工费：{ref['low']}-{ref['high']} {ref['unit']}
- 找平层费用另算 (+15-25 元/㎡)

**🔍 购买技巧**:
1. 要求商家出具质量检测报告
2. 到现场看样，不要只看图册
3. 多买 5% 备用损耗
4. 到货后逐个开箱检查瑕疵

**❌ 常见套路**:
- "特价砖其实是库存货" → 要生产日期
- "进口砖很高级" → 其实国产优质砖完全够用
"""
            return answer
        
        elif topic == '合同':
            answer = """### 📄 装修合同审核要点

**付款比例建议**:
- 首付：≤30% (越高越危险!)
- 中期款：≤40%
- 完工尾款：≥30% (必须保留质保金)

**增项控制条款**:
- 明确约定增项上限 ≤ 总报价的 5%
- 任何增项需业主书面确认才生效
- "按实结算" = 无上限 = 陷阱

**避坑关键词**:
✅ 应写进合同的:
- "增项不得超过总价的 5%"
- "材料品牌型号详见附件清单"
- "工期延误每日赔偿合同总额的 0.1%"
- "基础工程质保 2 年，防水质保 5 年"

❌ 慎重的表述:
- "最终以实际发生为准" (无增项上限)
- "乙方有权调整施工方案" (单方面变更权)
- "不注明验收条件和时间节点"
"""
            return answer
        
        else:
            # 通用回答
            kb = self.knowledge_base.get(topic, {})
            answer = f"""### 🏠 {topic}相关内容

关于这个问题，我的建议是:

1. **先搞清楚需求**: 你要解决什么具体问题？
2. **多找 3 家对比**: 避免被一家独断
3. **重点盯隐蔽工程**: 水电/防水一旦出问题最麻烦
4. **所有口头承诺写进合同**: 别相信工人的"行规"

如需更详细信息，建议提供具体的场景描述，我可以帮你分析!
"""
            return answer
    
    def _handle_unknown_topic(self, question: str) -> str:
        """处理未知主题的问题"""
        
        answers = {
            '面积': '请查询户型图 API: `/api/floor-plans` 获取各房间具体面积',
            '供应商': '请登录数据库查看供应商列表和报价历史',
            '风格': '装修风格需结合个人喜好和户型特点确定，建议先看案例再决定'
        }
        
        for key, answer in answers.items():
            if key in question:
                return f"### ❓ {key}\n\n{answer}"
        
        return f"""抱歉，我暂时无法回答这个问题。

建议方向:
1. 提供更多背景信息 (户型大小/预算范围/使用场景)
2. 参考 `decoration-v5` 知识库中的专业文档
3. 查询本地数据库获取实际案例数据

或者您可以问我:
- 防水做多高？
- 瓷砖怎么选？
- 合同要注意什么？
- 广州装修目前的市场价？
"""
    
    def _get_related_questions(self, topic: Optional[str]) -> List[str]:
        """返回相关问题"""
        
        related_map = {
            '防水': [
                '防水做完后多久可以贴砖？',
                '卫生间防水需要做几遍？',
                '阳台也要做防水吗？'
            ],
            '瓷砖': [
                '客厅用 750x1500 还是 800x800 好？',
                '美缝剂怎么选颜色？',
                '瓷砖空鼓怎么办？'
            ],
            '合同': [
                '装修公司首付多少合理？',
                '如何识别报价单漏项？',
                '增项怎么控制在 5% 以内？'
            ]
        }
        
        return related_map.get(topic, [])


# CLI 测试
if __name__ == '__main__':
    qa_helper = DecorationQAHelper()
    
    # 示例调用
    test_question = "卫生间防水做多高比较好？"
    result = qa_helper.ask(test_question)
    
    print(json.dumps(result, indent=2, ensure_ascii=False))
