#!/usr/bin/env python3
"""
B: 标题&内容评分器 (Content Auditor)

输入：笔记的完整文案 + 封面描述
输出：STEPPS 六维评分、AI 化检测、人设一致度检查、改写建议
"""

import re
from typing import Dict, List, Optional, Tuple


class ContentAuditor:
    """内容质量评估器"""
    
    def __init__(self):
        # AI 特征词库
        self.ai_patterns = {
            'logic_connectors': ['首先', '其次', '最后', '再者', '总之', '综上所述'],
            'generic_phrases': ['希望对你有帮助', '感谢观看', '欢迎大家关注', '如有疑问请联系'],
            'perfect_structure': r'✅\d+|1️⃣2️⃣3️⃣|①②③',
            'instructional_tone': ['你要注意', '你应该', '一定要', '必须'],
        }
        
        # emoji 使用密度阈值 (过低可能显得生硬)
        self.min_emoji_ratio = 0.015
        
        # 第一人称频率阈值
        self.min_first_person_ratio = 0.01
    
    def audit(self, title: str, content: str, cover_description: Optional[str] = None) -> Dict:
        """
        主入口：对内容进行完整评分
        
        Args:
            title: 笔记标题
            content: 正文内容
            cover_description: 封面图片描述
            
        Returns:
            包含各维度得分和建议的完整报告
        """
        
        # 1. STEPPS 六维评分
        stepps_scores = self._calculate_stepps(title, content)
        
        # 2. AI 化程度检测
        ai_score = self._detect_ai_features(content)
        
        # 3. 人设一致性检查
        persona_score = self._check_persona(title, content)
        
        # 4. 生成具体改进建议
        improvements = self._generate_improvements(stepps_scores, ai_score, persona_score, title, content)
        
        # 5. 提供改写示范
        rewrite_suggestion = self._generate_rewrite_example(title, content, improvements)
        
        return {
            'title': title,
            'stepps_scores': stepps_scores,
            'stepps_total': sum(stepps_scores.values()) / len(stepps_scores),
            'ai_detection': ai_score,
            'persona_check': persona_score,
            'improvements': improvements,
            'rewrite_example': rewrite_suggestion,
            'publish_ready': self._is_publish_ready(stepps_scores, ai_score, persona_score)
        }
    
    def _calculate_stepps(self, title: str, content: str, cover_description: Optional[str] = None) -> Dict[str, int]:
        """计算 STEPPS 六维得分"""
        
        combined_text = f"{title} {content}"
        scores = {}
        
        # S - Social Currency (社交货币)
        # 检查是否有稀缺性暗示
        social_keywords = ['秘密', '内幕', '不会告诉你', '独家', '只有我知道', '前 100 人']
        has_exclusive = any(kw in title for kw in social_keywords)
        social_score = 85 if has_exclusive else 65
        scores['social_currency'] = social_score
        
        # T - Triggers (触发器)
        # 是否绑定了日常场景
        trigger_words = ['下雨天', '周末', '请朋友', '签完合同', '发现...后', '第 X 天']
        has_triggers = any(w in content for w in trigger_words)
        scores['triggers'] = 75 if has_triggers else 55
        
        # E - Emotion (情绪驱动)
        # 统计情绪词密度
        emotion_words = ['气死', '崩溃', '惊喜', '后悔', '愤怒', '开心', '震惊', '感动']
        emotion_count = sum(content.count(w) for w in emotion_words)
        emotion_density = emotion_count / max(len(content.split()), 1)
        scores['emotion'] = min(95, 60 + int(emotion_density * 1000))
        
        # P - Publicity (可见性)
        # 通过封面描述判断视觉辨识度
        visual_indicators = ['真人出镜', '对比图', 'BeforeAfter', '截图', '实物照片']
        has_visual = cover_description and any(v in cover_description for v in visual_indicators)
        scores['publicity'] = 85 if has_visual else 60
        
        # P - Practical Value (实用价值)
        # 检查可操作内容数量
        practical_elements = ['清单', '步骤', '方法', '公式', '模板', '表格', '检查表']
        practical_count = sum(1 for p in practical_elements if p in content)
        scores['practical_value'] = min(95, 50 + practical_count * 15)
        
        # S - Story Quality (故事性)
        # 检查叙事结构
        story_markers = ['后来', '结果', '终于', '直到', '才发现', '原来', '过程']
        story_count = sum(content.count(m) for m in story_markers)
        has_narrative = story_count >= 2 or ('我' in content and '发现' in content)
        scores['story_quality'] = 75 if has_narrative else 50
        
        return scores
    
    def _detect_ai_features(self, content: str) -> Dict:
        """检测 AI 化特征"""
        
        issues = []
        score_factors = []
        
        lines = content.split('\n')
        
        # 1. 逻辑连接词检测
        logic_count = 0
        for line in lines:
            for pattern in self.ai_patterns['logic_connectors']:
                if pattern in line:
                    logic_count += 1
                    issues.append(f"使用了「{pattern}」这样的逻辑词")
        
        if logic_count > 0:
            score_factors.append(logic_count * 2)
        
        # 2. 标准化告别语检测
        generic_count = 0
        for phrase in self.ai_patterns['generic_phrases']:
            if phrase in content:
                generic_count += 1
                issues.append(f"出现了标准结尾：「{phrase}」")
        
        if generic_count > 0:
            score_factors.append(generic_count * 3)
        
        # 3. 完美结构化列表检测
        structured_pattern = re.compile(r'[✅➕🔹]\s*\d+')
        if structured_pattern.search(content):
            issues.append("使用了过于整齐的数字列表（像教程）")
            score_factors.append(2)
        
        # 4. 说教语气检测
        instructional_count = 0
        for phrase in self.ai_patterns['instructional_tone']:
            instructional_count += content.count(phrase)
        
        if instructional_count > 0:
            issues.append(f"有「{self.ai_patterns['instructional_tone'][0]}」等说教语气")
            score_factors.append(instructional_count)
        
        # 5. Emoji 密度检测
        emoji_count = len(re.findall(r'[\U0001F600-\U0001F64F]', content))
        emoji_ratio = emoji_count / max(len(content.split()), 1)
        
        if emoji_ratio < self.min_emoji_ratio:
            issues.append(f"Emoji 密度过低 ({emoji_ratio:.2%}, 建议>1.5%)")
            score_factors.append(2)
        
        # 6. 第一人称频率检测
        first_person_count = content.count('我')
        first_person_ratio = first_person_count / max(len(content.split()), 1)
        
        if first_person_ratio < self.min_first_person_ratio:
            issues.append("缺少第一人称叙事 (全文仅出现「我」0 次)")
            score_factors.append(2)
        
        # 计算最终分数 (0-10 分，越低越好)
        total_issues = len(issues)
        ai_score = min(10, total_issues * 1.5 + sum(score_factors) * 0.5)
        
        return {
            'score': round(ai_score),
            'threshold': '< 3 分合格',
            'issues_found': issues,
            'metrics': {
                'logic_word_count': logic_count,
                'generic_phrase_count': generic_count,
                'emoji_ratio': round(emoji_ratio, 4),
                'first_person_ratio': round(first_person_ratio, 4)
            }
        }
    
    def _check_persona(self, title: str, content: str) -> Dict:
        """检查@程序员小智的人设一致性"""
        
        combined_text = f"{title} {content}"
        
        scores = {}
        
        # A. 程序员视角 (权重 35%)
        programmer_checks = {
            'has_data_numbers': bool(re.search(r'\d+(?:\.?\d+)?\s*(?:万 | 千 | 块 | 元 )?', combined_text)),
            'has_tool_mention': any(t in combined_text for t in ['Excel', 'Python', '脚本', '公式', '自动化']),
            'has_structured': any(p in combined_text for p in ['清单', '表格', '步骤', '流程'])
        }
        prog_score = sum(programmer_checks.values()) * (100 / 3)
        scores['programmer_perspective'] = round(prog_score)
        
        # B. 装修小白真实感 (权重 30%)
        diy_checks = {
            'shows_failure': any(f in combined_text for f in ['坑', '被骗', '失误', '失败', '教训', '惨']),
            'shows_emotion': any(e in combined_text for e in ['崩溃', '生气', '惊', '哭', '😭', '😤', '💔']),
            'shows_learning': any(l in combined_text for l in ['学了', '研究了', '摸索', '尝试', '才明白'])
        }
        diy_score = sum(diy_checks.values()) * (100 / 3)
        scores['diy_authenticity'] = round(diy_score)
        
        # C. AI 爱好者创新力 (权重 20%)
        ai_innovation_checks = {
            'automation_mentioned': any(a in combined_text for a in ['自动', '批量', '效率提升', '快速处理']),
            'data_analysis_shown': any(d in combined_text for d in ['分析', '统计规律', '可视化', '数据'])
        }
        ai_score = sum(ai_innovation_checks.values()) * (100 / 2)
        scores['ai_innovator'] = round(ai_score)
        
        # D. 语调一致性 (权重 15%)
        tone_checks = {
            'uses_conversational': any(c in combined_text for c in ['吧', '嘛', '啦', '咯', '呗']),
            'has_self_deprecating_humor': any(h in combined_text for h in ['强迫症', '菜鸡', '小白', '菜'])
        }
        tone_score = sum(tone_checks.values()) * 50
        scores['tone_consistency'] = round(tone_score)
        
        # 加权总分
        total = (
            scores['programmer_perspective'] * 0.35 +
            scores['diy_authenticity'] * 0.30 +
            scores['ai_innovator'] * 0.20 +
            scores['tone_consistency'] * 0.15
        )
        
        scores['total'] = round(total)
        
        return scores
    
    def _generate_improvements(self, stepps: Dict, ai: Dict, persona: Dict, title: str, content: str) -> List[str]:
        """生成具体改进建议"""
        
        suggestions = []
        
        # STEPPS 低分项建议
        weak_dimensions = [(k, v) for k, v in stepps.items() if v < 70]
        for dim, score in weak_dimensions:
            if dim == 'triggers':
                suggestions.append("🔧【触发器】加入日常场景绑定，例如：'下雨天发现渗水...''周末请朋友来才发现...'")
            elif dim == 'social_currency':
                suggestions.append("🔧【社交货币】增加稀缺感，例如：'装修公司不敢说的...', '只有前 100 人才知道...'")
            elif dim == 'emotion':
                suggestions.append("🔧【情绪】注入冲突或反转，展示更真实的经历")
            elif dim == 'practical_value':
                suggestions.append("🔧【实用价值】提供可下载的 PDF/Excel 清单")
            elif dim == 'story_quality':
                suggestions.append("🔧【故事性】改成：主角→冲突→努力→转折→结局的结构")
        
        # AI 化问题建议
        if ai['score'] > 3:
            suggestions.append(f"\n🚨【去 AI 化】当前得分 {ai['score']}/10 (>3 分需优化)")
            for issue in ai['issues_found'][:3]:  # 只显示前 3 个最严重的问题
                suggestions.append(f"   → {issue}")
        
        # 人设补充建议
        if persona['programmer_perspective'] < 70:
            suggestions.append("\n💻【程序员视角】可以加入数据工具推荐，如 Excel 公式/Python 脚本")
        if persona['diy_authenticity'] < 70:
            suggestions.append("\n🏠【装修小白视角】需要展示至少 1 个失败/踩坑的经历")
        
        return suggestions if suggestions else ["✅ 内容整体质量良好，无明显短板"]
    
    def _generate_rewrite_example(self, title: str, content: str, improvements: List[str]) -> Optional[Dict]:
        """生成改写示例"""
        
        # 如果 AI 评分过高，生成改写版本
        if any('去 AI 化' in imp for imp in improvements):
            
            # 提取原始开头并改造
            original_lines = content.split('\n')
            first_line = original_lines[0] if original_lines else "原始内容"
            
            rewritten_example = f"""### 📝 改写示范

**原标题**: {title}

**改写思路**:
1. 去掉逻辑连接词，改用故事线
2. 增加具体数字和情感表达
3. 改成第一人称叙事

**改写后的开头示例**:
本来我以为签合同就万事大吉了，结果发现报价单不对劲...当场崩溃！😰

作为一个程序员的强迫症😂
就是咽不下这口气！
花了一周时间重新核算所有项目
居然发现了 XX 处猫腻！！！

现在我把这份检查表整理出来了
需要的评论区扣关键词
希望能帮你们避开我这个大坑💪

**关键改动点**:
- ❌ 原文：'{first_line}' 
- ✅ 改写：故事化开场 + 情绪词 + 具体行动描述
"""
            return {'title': title, 'rewritten_example': rewritten_example.strip()}
        
        return None
    
    def _is_publish_ready(self, stepps: Dict, ai: Dict, persona: Dict) -> bool:
        """判断是否可以发布"""
        
        conditions = [
            sum(stepps.values()) / len(stepps) >= 65,  # STEPPS 平均>=65
            ai['score'] <= 3,  # AI 评分<=3
            persona['total'] >= 70  # 人设匹配>=70
        ]
        
        return all(conditions)
    
    def is_publish_ready(self, title: str, content: str, cover_description: Optional[str] = None) -> Tuple[bool, List[str]]:
        """简化版：只判断是否可发布"""
        
        audit_result = self.audit(title, content, cover_description)
        
        ready = audit_result['publish_ready']
        reasons = []
        
        if not ready:
            if sum(audit_result['stepps_scores'].values()) / len(audit_result['stepps_scores']) < 65:
                reasons.append("STEPPS 评分偏低，建议优化后再发布")
            if audit_result['ai_detection']['score'] > 3:
                reasons.append(f"AI 化程度偏高 ({audit_result['ai_detection']['score']}/10)")
            if audit_result['persona_check']['total'] < 70:
                reasons.append(f"人设一致度不足 ({audit_result['persona_check']['total']}/100)")
        
        return ready, reasons


# CLI 测试
if __name__ == '__main__':
    auditor = ContentAuditor()
    
    # 示例调用
    test_title = "装修合同避坑指南"
    test_content = """
装修是一项复杂的工程，需要注意很多问题。首先要做好预算规划。
其次要选择靠谱的装修公司。最后要在施工过程中严格监督。
希望这些建议能帮助到大家。
"""
    
    result = auditor.audit(test_title, test_content)
    print(result)
