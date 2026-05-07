#!/usr/bin/env python3
"""
A: 选题评分器 (Topic Evaluator)

输入：用户提出的选题方向
输出：匹配度评分、优缺点分析、优化建议
"""

import json
from typing import Dict, List, Optional

class TopicEvaluator:
    """选题评估器"""
    
    def __init__(self):
        # 基于 MrBeast+STEPPS 的权重配置
        self.scores_config = {
            'social_currency': 0.15,   # 社交货币
            'triggers': 0.10,          # 触发器频率
            'emotion': 0.20,           # 情绪潜力
            'publicity': 0.10,         # 可见性
            'practical_value': 0.25,   # 实用价值
            'story_quality': 0.20      # 故事性
        }
        
        # 家装赛道常见高热度话题池
        self.high_performing_topics = [
            '装修避坑', '合同陷阱', '报价单审核', '材料选购攻略',
            '水电改造', '防水施工', '瓷砖搭配', '智能家居',
            '省钱技巧', '预算控制', '工地实拍', '验收标准'
        ]
        
    def evaluate(self, topic: str, context: Optional[Dict] = None) -> Dict:
        """
        主入口：对选题进行完整评估
        
        Args:
            topic: 用户提出的选题描述
            context: 可选上下文 (账号数据/历史表现等)
            
        Returns:
            完整的评估报告
        """
        # 1. 基础分析
        base_analysis = self._analyze_topic(topic)
        
        # 2. STEPPS 六维打分
        stepps_scores = self._calculate_stepps_score(topic)
        
        # 3. 人设匹配度检查
        persona_match = self._check_persona_alignment(topic)
        
        # 4. 生成综合评分
        total_score = self._calculate_total_score(stepps_scores, persona_match)
        
        # 5. 生成优缺点和改进建议
        pros_cons = self._generate_pros_cons(topic, stepps_scores)
        improvements = self._generate_improvements(topic, stepps_scores)
        
        return {
            'topic': topic,
            'total_score': total_score,
            'recommendation': self._get_recommendation(total_score),
            'dimensions': stepps_scores,
            'persona_match': persona_match,
            'analysis': {
                'pros': pros_cons['pros'],
                'cons': pros_cons['cons']
            },
            'suggestions': improvements,
            'similar_successful_topics': self._find_similar_successes(topic)
        }
    
    def _analyze_topic(self, topic: str) -> Dict:
        """基础分析：热度、竞争度、可操作性"""
        
        # 关键词匹配判断是否属于高潜话题
        keywords = topic.lower()
        is_hot_topic = any(kw in keywords for kw in self.high_performing_topics)
        
        # 粗略评估竞争度 (假设热门话题竞争激烈)
        competition_level = 'high' if is_hot_topic else 'medium'
        
        # 可操作性评估 (基于话题复杂度)
        complexity_keywords = ['详细教程', '完整指南', '从零开始']
        operability = '复杂' if any(k in topic for k in complexity_keywords) else '中等'
        
        return {
            'is_potential_hit': is_hot_topic,
            'competition': competition_level,
            'operability': operability
        }
    
    def _calculate_stepps_score(self, topic: str) -> Dict[str, int]:
        """计算 STEPPS 六维得分"""
        
        scores = {}
        
        # 1. Social Currency (社交货币)
        # 稀缺性暗示 + 独家感
        social_keywords = ['秘密', '不会告诉你', '没人说', '行业内幕', '只有我知道']
        has_exclusive = any(kw in topic for kw in social_keywords)
        scores['social_currency'] = 85 if has_exclusive else 65
        
        # 2. Triggers (触发器) - 是否能绑定日常场景
        trigger_words = ['下雨天', '周末', '请朋友来', '签合同后', '发现...']
        has_triggers = any(word in topic for word in trigger_words)
        scores['triggers'] = 75 if has_triggers else 55
        
        # 3. Emotion (情绪潜力)
        emotion_indicators = ['坑', '被骗', '崩溃', '愤怒', '震惊', '后悔']
        positive_emotions = ['惊喜', '值了', '开心', '满足']
        emotion_score = 70
        if any(e in topic for e in emotion_indicators):
            emotion_score = 85
        elif any(e in topic for e in positive_emotions):
            emotion_score = 75
        scores['emotion'] = emotion_score
        
        # 4. Publicity (可见性) - 封面是否容易视觉化
        visualizable = any(word in topic for word in ['对比', 'BeforeAfter', '前后', '左右'])
        scores['publicity'] = 80 if visualizable else 60
        
        # 5. Practical Value (实用价值)
        practical_terms = ['清单', '攻略', '指南', '方法', '步骤', '表格', '模板']
        values_score = 85 if any(p in topic for p in practical_terms) else 65
        scores['practical_value'] = values_score
        
        # 6. Story Quality (故事性)
        story_elements = ['第 X 天', '经历', '故事', '我发现', '后来']
        story_score = 75 if any(s in topic for s in story_elements) else 55
        scores['story_quality'] = story_score
        
        return scores
    
    def _check_persona_alignment(self, topic: str) -> Dict:
        """检查与@程序员小智的人设一致性"""
        
        programer_elements = {
            'data_usage': any(word in topic for word in ['预算', '花费', '金额', '比例', '统计']),
            'tool_recommendation': any(word in topic for word in ['Excel', 'Python', '工具', '脚本']),
            'structured': '步骤' in topic or '流程' in topic
        }
        
        diy_authenticity = {
            'failure_sharing': any(word in topic for word in ['踩坑', '被坑', '失误', '失败', '教训']),
            'learning_journey': any(word in topic for word in ['学习', '研究', '摸索', '尝试']),
            'emotional': any(word in topic for word in ['崩溃', '生气', '惊喜', '感动'])
        }
        
        ai_innovation = {
            'automation': any(word in topic for word in ['自动', '批量', '效率', '快速处理']),
            'data_analysis': any(word in topic for word in ['分析', '统计规律', '可视化', '爬取'])
        }
        
        # 计算各维度得分
        prog_score = sum(programer_elements.values()) * (100 / 3)
        diy_score = sum(diy_authenticity.values()) * (100 / 3)
        ai_score = sum(ai_innovation.values()) * (100 / 2)
        
        # 加权总分
        total = prog_score * 0.35 + diy_score * 0.30 + ai_score * 0.20 + 50 * 0.15
        
        return {
            'programmer_perspective': round(prog_score),
            'diy_authenticity': round(diy_score),
            'ai_innovator': round(ai_score),
            'tone_consistency': 50,  # 需要内容文本才能评估
            'total': round(total)
        }
    
    def _calculate_total_score(self, stepps: Dict, persona: Dict) -> int:
        """计算综合总分"""
        
        stepps_total = sum(stepps.values()) / len(stepps)
        
        total_score = int(stepps_total * 0.7 + persona['total'] * 0.3)
        
        return min(100, max(0, total_score))
    
    def _get_recommendation(self, score: int) -> str:
        """根据分数给出建议"""
        
        if score >= 85:
            return "🟢 强烈推荐！这个选题很有爆款潜力"
        elif score >= 70:
            return "🟡 可以尝试，但建议优化某些维度后再发布"
        elif score >= 50:
            return "🟠 需谨慎，存在明显短板需补强"
        else:
            return "🔴 不建议采用，建议重新思考选题方向"
    
    def _generate_pros_cons(self, topic: str, stepps: Dict) -> Dict:
        """生成优缺点分析"""
        
        pros = []
        cons = []
        
        # 基于各项得分给出具体的优缺点
        if stepps['practical_value'] >= 75:
            pros.append("✅ 实用价值高 → 容易引发收藏")
        else:
            cons.append("❌ 实用性不足 → 可能被划走")
            
        if stepps['emotion'] >= 75:
            pros.append("✅ 情绪张力强 → 容易引发共鸣")
        else:
            cons.append("⚠️ 情绪平淡 → 需要考虑如何增强")
            
        if stepps['story_quality'] >= 65:
            pros.append("✅ 有故事性基础 → 易于叙事展开")
            
        if stepps['social_currency'] >= 75:
            pros.append("✅ 有稀缺感 → 让读者想分享")
            
        # 默认优点
        pros.append(f"✅ 符合家装/家居赛道基本需求")
        
        return {'pros': pros, 'cons': cons}
    
    def _generate_improvements(self, topic: str, stepps: Dict) -> List[str]:
        """生成具体改进建议"""
        
        suggestions = []
        
        if stepps['triggers'] < 65:
            suggestions.append("💡 加入日常场景触发器，例如：'下雨天发现渗水...''周末请朋友来才发现...'")
            
        if stepps['social_currency'] < 70:
            suggestions.append("💡 增加稀缺性元素，例如：'装修公司不敢说的...', '只有前 100 人才知道...'")
            
        if stepps['emotion'] < 65:
            suggestions.append("💡 注入情绪冲突，例如展示失败经历/踩坑过程/反转结局")
            
        if stepps['publicity'] < 65:
            suggestions.append("💡 强化视觉辨识度，考虑用'对比图'形式呈现")
            
        if stepps['practical_value'] < 70:
            suggestions.append("💡 提供可下载的内容，如 PDF 清单/Excel 模板")
            
        if stepps['story_quality'] < 60:
            suggestions.append("💡 改成故事叙事结构：主角→冲突→努力→转折→结局")
            
        # 人设补充建议
        if stepps['practical_value'] >= 70 and '工具' not in topic:
            suggestions.append("💡 [程序员视角] 可以加入 Excel 公式/Python 脚本等工具推荐")
            
        return suggestions if suggestions else ["✅ 选题整体均衡，无明显短板"]
    
    def _find_similar_successes(self, topic: str) -> List[str]:
        """查找类似成功案例供参考"""
        
        # 简化版：基于关键词匹配返回模拟案例
        case_library = {
            '避坑': [
                "签合同时我差点被骗 3 万块！",
                "装修公司不敢说的 7 个秘密",
                "花了 2 万块的教训总结给你"
            ],
            '合同': [
                "第 3 天我就发现了合同的猫腻...",
                "用 Excel 算了一遍报价单，居然找到 17 处问题",
                "跟装修公司吵了 7 天，终于追回了 2 万"
            ],
            '预算': [
                "我用 Python 自动算了装修预算，省了 5000 块",
                "128,750 元的真实支出账单公开",
                "预算表改过 5 版才搞定，拿来吧你"
            ]
        }
        
        for keyword, cases in case_library.items():
            if keyword in topic:
                return cases
                
        return [
            "我的经验可能只适用于我的情况，仅供参考",
            "你可以搜索同类选题看看 TOP10 都在讲什么角度"
        ]


# CLI 测试入口
if __name__ == '__main__':
    evaluator = TopicEvaluator()
    
    # 示例调用
    test_topic = "帮我写一篇关于装修合同避坑的笔记"
    result = evaluator.evaluate(test_topic)
    
    print(json.dumps(result, indent=2, ensure_ascii=False))
