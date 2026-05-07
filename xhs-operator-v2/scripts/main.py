#!/usr/bin/env python3
"""
xhs-operator-v2 - 小红书内容运营专家

主入口脚本：整合 A-G 六个核心功能
"""

import sys
import json
from typing import Dict, Optional
from topic_evaluator import TopicEvaluator
from content_auditor import ContentAuditor
from data_validator import DataPredictionValidator
from persona_verifier import PersonaVerifier


class XHSOperatorV2:
    """主控制器"""
    
    def __init__(self):
        self.topic_evaluator = TopicEvaluator()
        self.content_auditor = ContentAuditor()
        self.data_validator = DataPredictionValidator()
        self.persona_verifier = PersonaVerifier()
        
        print("=== XHS-Operator-V2 启动成功 ===")
        print("核心功能:")
        print("  A. 选题评分器")
        print("  B. 标题&内容评分器")
        print("  C. 装饰领域问答 (需要 decoration-v5 skill)")
        print("  D. 发布后复盘分析器")
        print("  E. AI 化程度检测器 (已在 B 中集成)")
        print("  F. 数据预测防幻觉校验器")
        print("  G. 人设一致性检查器 (已在 B 中集成)")
        print("\n使用示例:")
        print("  >>> eval-topic '装修合同避坑指南'")
        print("  >>> audit-content '我的标题' '正文内容...'")
        print("  >>> verify-persona '标题' '内容' '封面描述'")
        print("  >>> predict-data '笔记浏览量预测'")
        print()
    
    def evaluate_topic(self, topic: str) -> Dict:
        """A: 选题评分器"""
        result = self.topic_evaluator.evaluate(topic)
        return {
            'function': 'TopicEvaluator',
            'result': result,
            'format': 'json'
        }
    
    def audit_content(self, title: str, content: str, cover_desc: Optional[str] = None) -> Dict:
        """B: 标题&内容评分器 (包含 E+G 功能)"""
        result = self.content_auditor.audit(title, content, cover_desc)
        return {
            'function': 'ContentAuditor',
            'ai_detection': result['ai_detection'],
            'persona_check': result['persona_check'],
            'stepps_scores': result['stepps_scores'],
            'publish_ready': result['publish_ready'],
            'improvements': result['improvements'],
            'rewrite_example': result['rewrite_example']
        }
    
    def verify_persona(self, title: str, content: str, cover_desc: Optional[str] = None) -> Dict:
        """G: 人设一致性检查器"""
        result = self.persona_verifier.verify(title, content, cover_desc)
        return {
            'function': 'PersonaVerifier',
            'total_score': result['total_score'],
            'verdict': result['verdict'],
            'dimensions': result['dimensions'],
            'checklist_passed': result['checklist_passed'],
            'recommendation': result['recommendation']
        }
    
    def predict_data(self, topic: str, context: Optional[Dict] = None) -> Dict:
        """F: 数据预测防幻觉校验器"""
        result = self.data_validator.predict(topic, context or {})
        return {
            'function': 'DataPredictionValidator',
            **result
        }
    
    def run_qa_session(self):
        """交互式问答会话"""
        print("\n💬 xhs-operator-v2 问答模式")
        print("输入 'quit' 或 'exit' 退出\n")
        
        while True:
            try:
                user_input = input("> ").strip()
                
                if not user_input:
                    continue
                
                if user_input.lower() in ['quit', 'exit', 'q']:
                    print("👋 再见！继续创作爆款笔记吧~")
                    break
                
                # 简单命令路由
                if user_input.startswith('eval-topic '):
                    topic = user_input.replace('eval-topic ', '').strip()
                    result = self.evaluate_topic(topic)
                    print(json.dumps(result, indent=2, ensure_ascii=False))
                    
                elif user_input.startswith('audit '):
                    # 简易版：假设格式为 "audit <title> <content>"
                    parts = user_input.split(' ', 2)
                    if len(parts) >= 2:
                        title = parts[1]
                        content = parts[2] if len(parts) > 2 else ""
                        result = self.audit_content(title, content)
                        print(f"\n【AI 化评分】: {result['ai_detection']['score']}/10")
                        print(f"【人设一致度】: {result['persona_check']['total']}/100")
                        print(f"【STEPPS 平均】: {result['stepps_scores']}: .{sum(result['stepps_scores'].values()) / len(result['stepps_scores']):.1f}")
                        print(f"【可发布】: {'✅是' if result['publish_ready'] else '❌否'}\n")
                        if result['improvements']:
                            print("改进建议:")
                            for imp in result['improvements'][:3]:
                                print(f"  • {imp}\n")
                    else:
                        print("用法：audit <标题> <内容>")
                        
                elif user_input.startswith('predict '):
                    topic = user_input.replace('predict ', '').strip()
                    context = {}  # 实际使用时可从数据库读取用户历史数据
                    result = self.predict_data(topic, context)
                    
                    if 'prediction_range' in result:
                        print(f"预测范围：{result['prediction_range']}")
                        print(f"置信度：{result['confidence_level']}")
                        if 'assumptions' in result:
                            print("假设条件:")
                            for assumption in result['assumptions'][:3]:
                                print(f"  • {assumption}")
                    else:
                        print(result.get('warning', '数据不足'))
                        if 'alternative_help' in result:
                            print("\n我可以帮你:")
                            for help_item in result['alternative_help']:
                                print(f"  • {help_item}")
                                
                elif user_input.startswith('verify '):
                    parts = user_input.split(' ', 2)
                    if len(parts) >= 2:
                        title = parts[1]
                        content = parts[2] if len(parts) > 2 else ""
                        result = self.verify_persona(title, content)
                        
                        print(f"\n总分：{result['total_score']}/100")
                        print(f"结论：{result['verdict']}")
                        print(f"\n各维度得分:")
                        for dim, score in result['dimensions'].items():
                            weight_str = {
                                'programmer_perspective': '(权重 35%)',
                                'diy_authenticity': '(权重 30%)',
                                'ai_innovator': '(权重 20%)',
                                'tone_consistency': '(权重 15%)'
                            }.get(dim, '')
                            print(f"  • {dim.replace('_', ' ').title()} {score:3d}/100 {weight_str}")
                        
                        if result['recommendation']:
                            print(f"\n💡 {result['recommendation']}")
                    else:
                        print("用法：verify <标题> <内容>")
                        
                else:
                    # 默认当作选题评估
                    result = self.evaluate_topic(user_input)
                    print(json.dumps(result, indent=2, ensure_ascii=False))
                    
            except KeyboardInterrupt:
                print("\n👋 再见!")
                break
            except Exception as e:
                print(f"❌ 错误：{str(e)}")


# CLI 入口点
if __name__ == '__main__':
    operator = XHSOperatorV2()
    
    if len(sys.argv) > 1:
        command = sys.argv[1].lower()
        
        if command == 'topic':
            if len(sys.argv) < 3:
                print("用法：python main.py topic '<选题描述>'")
                sys.exit(1)
            topic = ' '.join(sys.argv[2:])
            result = operator.evaluate_topic(topic)
            print(json.dumps(result, indent=2, ensure_ascii=False))
            
        elif command == 'audit':
            if len(sys.argv) < 4:
                print("用法：python main.py audit '<标题>' '<内容>'")
                sys.exit(1)
            title = sys.argv[2]
            content = ' '.join(sys.argv[3:])
            result = operator.audit_content(title, content)
            print(json.dumps(result, indent=2, ensure_ascii=False))
            
        elif command == 'predict':
            if len(sys.argv) < 3:
                print("用法：python main.py predict '<主题>'")
                sys.exit(1)
            topic = ' '.join(sys.argv[2:])
            result = operator.predict_data(topic)
            print(json.dumps(result, indent=2, ensure_ascii=False))
            
        else:
            print(f"未知命令：{command}")
            print("可用命令：topic, audit, predict")
            sys.exit(1)
            
    else:
        # 进入交互式模式
        operator.run_qa_session()
