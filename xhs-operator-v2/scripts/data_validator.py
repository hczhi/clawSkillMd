#!/usr/bin/env python3
"""
F: 数据预测防幻觉校验器 (Data Validator)

核心原则：宁可不说，不说假话
"""

from typing import Dict, List, Optional, Tuple
import random


class DataPredictionValidator:
    """数据预测防幻觉校验器"""
    
    def __init__(self):
        # 置信度阈值
        self.HIGH_CONFIDENCE_THRESHOLD = 0.75
        self.MEDIUM_CONFIDENCE_THRESHOLD = 0.40
        
        # 历史数据模拟 (实际使用时应从数据库读取)
        self.mock_historical_data = {
            '装修避坑': {'avg_views': 1250, 'std_dev': 450, 'sample_size': 12},
            '合同陷阱': {'avg_views': 980, 'std_dev': 320, 'sample_size': 8},
            '预算控制': {'avg_views': 1100, 'std_dev': 380, 'sample_size': 10},
            '材料选购': {'avg_views': 850, 'std_dev': 280, 'sample_size': 6}
        }
    
    def predict(self, topic: str, context: Dict = None) -> Dict:
        """
        生成保守区间预测
        
        Args:
            topic: 选题主题
            context: 账号上下文 (历史表现/粉丝数等)
            
        Returns:
            包含预测、置信度、假设条件的完整回答
        """
        
        # Step 1: 验证数据基础
        data_quality_check = self._validate_data_quality(topic)
        
        if not data_quality_check['has_enough_data']:
            return self._low_confidence_response(topic, data_quality_check)
        
        # Step 2: 计算基准值
        baseline = self._calculate_baseline(topic, context or {})
        
        # Step 3: 生成区间而非定点
        prediction_range = self._calculate_interval(baseline, data_quality_check['confidence'])
        
        # Step 4: 生成带标注的回答
        answer = {
            'metric_type': self._identify_metric_topic(topic),
            'prediction_range': f"{prediction_range['min']:,}-{prediction_range['max']:,}",
            'confidence_level': self._confidence_label(data_quality_check['confidence']),
            'assumptions': self._list_assumptions(topic, baseline),
            'uncertainty_sources': self._list_uncertainties(),
            'historical_reference': data_quality_check.get('reference_data'),
            'disclaimer': self._generate_disclaimer()
        }
        
        return answer
    
    def _validate_data_quality(self, topic: str) -> Dict:
        """评估是否有足够数据支撑预测"""
        
        # 简化版：检查话题是否在我们有历史数据的范围内
        similar_topics = []
        for known_topic in self.mock_historical_data.keys():
            if known_topic in topic or topic in known_topic:
                similar_topics.append(known_topic)
        
        # 如果没有找到匹配的历史数据
        if not similar_topics:
            return {
                'has_enough_data': False,
                'confidence': 0.2,
                'reason': '没有足够的历史数据支持此主题的预测'
            }
        
        # 取最相关的历史数据
        best_match = max(similar_topics, key=lambda t: len(t))
        historical_info = self.mock_historical_data[best_match]
        
        sample_size = historical_info['sample_size']
        
        # 根据样本量计算置信度
        if sample_size >= 10:
            confidence = 0.75 + (sample_size - 10) * 0.01  # 封顶 0.85
        elif sample_size >= 5:
            confidence = 0.50 + (sample_size - 5) * 0.05  # 0.50-0.75
        else:
            confidence = 0.30 + sample_size * 0.06  # 0.30-0.50
        
        return {
            'has_enough_data': True,
            'confidence': min(confidence, 0.85),  # 封顶 85%
            'reference_data': {
                'topic': best_match,
                'avg_views': historical_info['avg_views'],
                'sample_count': sample_size
            }
        }
    
    def _calculate_baseline(self, topic: str, context: Dict) -> int:
        """计算预测的基准值"""
        
        # 获取历史平均值
        reference = None
        for known_topic in self.mock_historical_data.keys():
            if known_topic in topic:
                reference = self.mock_historical_data[known_topic]
                break
        
        if not reference:
            # 默认基准 (如果完全没数据就返回一个保守估计)
            return 1000
        
        baseline = reference['avg_views']
        
        # 根据用户实际情况微调
        account_factors = context.get('account_maturity', {}).get('months', 1)
        recent_performance = context.get('recent_posts', [])
        
        # 如果有最近 3 篇数据，用它们的平均值作为调整因子
        if recent_performance and len(recent_performance) >= 3:
            avg_recent_views = sum(recent_performance) / len(recent_performance)
            adjustment_factor = avg_recent_views / baseline
            baseline *= adjustment_factor
        
        return int(baseline)
    
    def _calculate_interval(self, baseline: int, confidence: float) -> Dict[int, int]:
        """生成保守区间"""
        
        # 置信度越低，区间越宽
        spread_factor = 1.0 + (1.0 - confidence) * 1.5
        
        low_bound = int(baseline * (1.0 - spread_factor * 0.3))
        high_bound = int(baseline * (1.0 + spread_factor * 0.8))
        
        # 确保下限不为负且合理
        low_bound = max(100, low_bound)
        
        return {'min': low_bound, 'max': high_bound}
    
    def _list_assumptions(self, topic: str, baseline: int) -> List[str]:
        """列出所有假设条件"""
        
        assumptions = [
            f"① 封面采用真人出镜或强视觉对比设计",
            f"② 发布于工作日 19:00-21:00 时段",
            f"③ 标题通过一句话测试 (让人想点击)",
            f"④ 发布后前 2 小时有正常互动反馈",
            f"⑤ 没有触发平台限流机制",
            f"⑥ 内容质量与过往平均水平相当"
        ]
        
        # 根据 baseline 给出参考值
        assumptions.insert(0, f"基于历史同类内容平均表现 ({baseline:,} 浏览量)")
        
        return assumptions
    
    def _list_uncertainties(self) -> List[str]:
        """列出可能影响结果的不确定因素"""
        
        uncertainties = [
            "❗ 算法调整：小红书推荐策略经常变化，过去规律不一定持续",
            "❗ 竞争环境：同赛道内容增多可能稀释流量",
            "❗ 账号权重：新发内容的初始权重会动态变化",
            "❗ 外部热点：节假日/突发新闻会影响整体流量池分配",
            "❗ 发布时间微小差异：±30 分钟可能导致不同曝光窗口"
        ]
        
        return uncertainties
    
    def _identify_metric_topic(self, topic: str) -> str:
        """识别预测的是哪个指标"""
        
        metric_keywords = {
            'views': ['浏览量', '播放量', '曝光', '阅读'],
            'followers': ['涨粉', '粉丝', '关注'],
            'engagement': ['互动', '点赞', '收藏', '评论']
        }
        
        for metric, keywords in metric_keywords.items():
            if any(k in topic for k in keywords):
                return metric
        
        return 'views'  # 默认预测浏览量
    
    def _confidence_label(self, confidence: float) -> str:
        """将数值置信度转为标签"""
        
        if confidence >= self.HIGH_CONFIDENCE_THRESHOLD:
            return "🟢 高 (75%+)"
        elif confidence >= self.MEDIUM_CONFIDENCE_THRESHOLD:
            return "🟡 中 (40%-75%)"
        else:
            return "🔴 低 (<40%)"
    
    def _generate_disclaimer(self) -> str:
        """生成免责声明"""
        
        disclaimers = [
            "⚠️ 以上是基于历史数据的保守推测，实际结果可能差异较大。",
            "💡 建议先发布小批量测试，根据实际数据再调整预期。",
            "📊 这些数据仅供决策参考，不要过度依赖单一预测。"
        ]
        
        return "\n".join(disclaimers)
    
    def _low_confidence_response(self, topic: str, quality_check: Dict) -> Dict:
        """当数据不足时给出保守回答"""
        
        return {
            'warning': '数据不足，无法提供可靠预测',
            'suggested_action': '建议先发布 3-5 篇同类内容积累数据后再做预测',
            'alternative_help': [
                "我可以帮你分析这个选题的 STEPPS 评分",
                "我可以提供类似赛道的成功案例供参考",
                "我可以给出内容优化建议以提升效果"
            ],
            'reason': quality_check['reason'],
            'confidence_label': '🔴 低 (<30%)',
            'disclaimer': "由于缺乏足够的历史数据支持，任何精确数字的预测都不可靠。\n我的原则是：宁可不说，不说假话。"
        }


# CLI 测试
if __name__ == '__main__':
    validator = DataPredictionValidator()
    
    # 示例调用
    test_topic = "装修避坑笔记会有多少浏览量"
    test_context = {
        'account_maturity': {'months': 1},
        'recent_posts': [1200, 980, 1450]
    }
    
    result = validator.predict(test_topic, test_context)
    
    print("=== 数据预测结果 ===")
    print(json.dumps(result, indent=2, ensure_ascii=False))
