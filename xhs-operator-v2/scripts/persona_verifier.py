#!/usr/bin/env python3
"""
G: 人设一致性检查器 (Persona Verifier)

@程序员小智 的人设标准验证
"""

from typing import Dict, List, Optional, Tuple


class PersonaVerifier:
    """人设一致性校验器"""
    
    def __init__(self):
        # 权重配置
        self.weights = {
            'programmer_perspective': 0.35,
            'diy_authenticity': 0.30,
            'ai_innovator': 0.20,
            'tone_consistency': 0.15
        }
        
        # 关键词库
        self.keywords = {
            'programmer': ['Excel', 'Python', '脚本', '公式', '自动', '批量', '效率', 
                          '数据', '统计', '可视化', '爬虫', 'API', '代码', '调试'],
            'diy_journey': ['踩坑', '被坑', '被骗', '失误', '失败', '教训', '崩溃',
                           '后悔', '纠结', '选择困难', '学不会', '不懂', '第一次'],
            'emotional': ['😭', '😤', '💔', '🥺', '😂', '🤯', '气死', '愤怒', 
                         '惊喜', '感动', '震惊', '绝望', '开心', '满足'],
            'tools': ['工具推荐', '清单', '模板', 'PDF', '下载', '分享', '自取'],
            'personal_voice': ['我', '我的', '我们发现', '你们觉得', '评论区见', 
                              '说实话', '坦白说', '其实']
        }
    
    def verify(self, title: str, content: str, cover_description: Optional[str] = None) -> Dict:
        """
        主入口：对人设一致性进行完整验证
        
        Args:
            title: 笔记标题
            content: 正文内容
            cover_description: 封面描述
            
        Returns:
            包含各维度得分和改进建议的完整报告
        """
        
        combined_text = f"{title}\n{content}"
        
        # 1. 计算四个维度的得分
        dimensions = {
            'programmer_perspective': self._score_programmer_viewpoint(combined_text),
            'diy_authenticity': self._score_diy_authenticity(combined_text),
            'ai_innovator': self._score_ai_innovation(combined_text),
            'tone_consistency': self._score_tone_unified(content, cover_description)
        }
        
        # 2. 计算加权总分
        total_score = sum(dimensions[k] * w for k, w in self.weights.items())
        
        # 3. 生成改进建议
        improvements = self._generate_improvements(dimensions, combined_text)
        
        # 4. 给出结论评级
        verdict = self._get_verdict(total_score)
        
        return {
            'total_score': round(total_score),
            'dimensions': {k: round(v) for k, v in dimensions.items()},
            'verdict': verdict,
            'improvements': improvements,
            'checklist_passed': self._run_checklist(combined_text),
            'recommendation': self._get_recommendation(total_score)
        }
    
    def _score_programmer_viewpoint(self, text: str) -> float:
        """评分：程序员视角"""
        
        score = 0
        max_score = 100
        
        # A. 数据化表达 (+35 分)
        has_numbers = len([w for w in text.split() if w.isdigit()]) >= 3
        has_specific_amounts = any(kw in text for kw in ['元', '万', '块', '¥'])
        if has_numbers and has_specific_amounts:
            score += 35
        
        # B. 工具推荐 (+30 分)
        tool_mentions = [kw for kw in self.keywords['programmer'] if kw in text]
        if len(tool_mentions) >= 2:
            score += 30
        elif len(tool_mentions) == 1:
            score += 15
        
        # C. 结构化表达 (+20 分)
        structured_elements = ['清单', '表格', '步骤', '流程图', '对比表']
        has_structure = any(elem in text for elem in structured_elements)
        if has_structure:
            score += 20
        
        # D. 逻辑思维痕迹 (+15 分)
        logic_words = ['因为...所以...', '如果...那么...', '首先...然后...最后']
        has_logic = any(word in text for word in logic_words) or \
                   ('分析' in text or '总结' in text or '结论' in text)
        if has_logic:
            score += 15
        
        return min(max_score, score)
    
    def _score_diy_authenticity(self, text: str) -> float:
        """评分：装修小白真实感"""
        
        score = 0
        max_score = 100
        
        # A. 展示失败经历 (+40 分)
        failure_keywords = ['踩坑', '被坑', '被骗', '失误', '失败', '惨']
        has_failure = any(kw in text for kw in failure_keywords)
        if has_failure:
            score += 40
        
        # B. 情绪真实表达 (+30 分)
        emotion_markers = [m for m in self.keywords['emotional'] if m in text]
        emoji_count = len([m for m in self.keywords['emotional'] if m.startswith('')])
        if emoji_count >= 2 or len(emotion_markers) >= 3:
            score += 30
        elif emoji_count >= 1:
            score += 15
        
        # C. 成长记录 (+20 分)
        learning_words = ['学了', '研究了', '摸索', '尝试', '才明白', '发现原来', '从...到...']
        has_learning = any(word in text for word in learning_words)
        if has_learning:
            score += 20
        
        # D. 自我吐槽/自嘲 (+10 分)
        self_deprecating = ['小白', '菜鸡', '手残', '强迫症', '直男审美', '外行']
        has_self_deprecate = any(word in text for word in self_deprecating)
        if has_self_deprecate:
            score += 10
        
        return min(max_score, score)
    
    def _score_ai_innovation(self, text: str) -> float:
        """评分：AI 爱好者创新力"""
        
        score = 0
        max_score = 100
        
        # A. 自动化工具分享 (+40 分)
        automation_keywords = ['自动', '批量处理', '一键', '效率提升', '省时', '快速']
        has_automation = any(kw in text for kw in automation_keywords)
        if has_automation:
            score += 40
        
        # B. 数据分析实践 (+30 分)
        data_analysis_words = ['数据', '统计', '规律', '可视化', '图表', '分析', '爬取']
        analysis_present = any(word in text for word in data_analysis_words)
        if analysis_present:
            score += 30
        
        # C. AI 应用场景 (+20 分)
        ai_related = ['AI', '大模型', '智能助手', '知识库', '问答系统', 'OCR']
        has_ai = any(word in text for word in ai_related)
        if has_ai:
            score += 20
        
        # D. 技术创新意识 (+10 分)
        innovation_spirit = ['新技术', '新工具', '尝试一下', '看看效果', '没想到']
        has_innovation = any(word in text for word in innovation_spirit)
        if has_innovation:
            score += 10
        
        return min(max_score, score)
    
    def _score_tone_unified(self, content: str, cover_desc: Optional[str] = None) -> float:
        """评分：语调一致性"""
        
        score = 0
        max_score = 100
        
        # A. 口语化程度 (+40 分)
        colloquial_particles = ['吧', '嘛', '啦', '咯', '呗', '哈', '哦']
        particle_count = sum(content.count(p) for p in colloquial_particles)
        sentence_count = content.count('.') + content.count('!') + content.count('?')
        ratio = particle_count / max(sentence_count, 1)
        if ratio >= 0.1:
            score += 40
        elif ratio >= 0.05:
            score += 25
        
        # B. emoji 使用密度 (+30 分)
        emoji_pattern = r'[\U0001F600-\U0001F64F\U0001F300-\U0001F5FF\U0001F680-\U0001F6FF]'
        emoji_matches = len(__import__('re').findall(emoji_pattern, content))
        line_count = len(content.split('\n'))
        emoji_per_line = emoji_matches / max(line_count, 1)
        if emoji_per_line >= 0.5:
            score += 30
        elif emoji_per_line >= 0.2:
            score += 20
        
        # C. 个性化口头禅 (+20 分)
        signature_phrases = ['程序员', '强迫症', '菜鸡', '说实话', '坦白讲', '真心']
        has_signature = any(p in content for p in signature_phrases)
        if has_signature:
            score += 20
        
        # D. 没有过度正式用语 (+10 分)
        formal_words = ['综上所述', '特此说明', '敬请谅解', '感谢关注', '期待您的反馈']
        no_formal = not any(word in content for word in formal_words)
        if no_formal:
            score += 10
        
        return min(max_score, score)
    
    def _generate_improvements(self, dimensions: Dict[str, float], text: str) -> List[str]:
        """生成改进建议"""
        
        improvements = []
        
        threshold = 70
        
        # 程序员视角不足
        if dimensions['programmer_perspective'] < threshold:
            suggestions = [
                "🔧【程序员视角】加入具体数字：如「花了 X 万元」「超支 Y%」",
                "🔧【程序员视角】推荐实用工具：Excel 公式/Python 脚本/API 接口",
                "🔧【程序员视角】用结构化方式呈现：清单/表格/流程图"
            ]
            improvements.extend(suggestions)
        
        # DIY 真实感不足
        if dimensions['diy_authenticity'] < threshold:
            suggestions = [
                "🏠【装修小白视角】增加至少 1 个失败经历的故事开头",
                "🏠【装修小白视角】展示具体的情绪波动：崩溃/惊讶/后悔",
                "🏠【装修小白视角】用「我当时...后来才发现...」的句式"
            ]
            improvements.extend(suggestions)
        
        # AI 创新力不足
        if dimensions['ai_innovator'] < threshold:
            suggestions = [
                "🤖【AI 爱好者】介绍自动化方案：如何用 Python 节省时间",
                "🤖【AI 爱好者】分享数据分析过程：爬取/统计/可视化的技巧",
                "🤖【AI 爱好者】提及 AI 工具应用：知识库/问答系统/O CR识别"
            ]
            improvements.extend(suggestions)
        
        # 语调问题
        if dimensions['tone_consistency'] < threshold:
            suggestions = [
                "💬【语调优化】减少书面用语，增加口语词：吧/嘛/啦/咯",
                "💬【语调优化】平均每段加 1-2 个 emoji，让表情更丰富",
                "💬【语调优化】加入个人特色：自称「程序员的强迫症」「装修菜鸡」"
            ]
            improvements.extend(suggestions)
        
        return improvements if improvements else ["✅ 人设一致性良好，继续保持"]
    
    def _run_checklist(self, text: str) -> Dict[str, bool]:
        """运行简化版 checklist"""
        
        checks = {
            'has_data_numbers': any(c.isdigit() for c in text) and any(kw in text for kw in ['元', '万', '块']),
            'shows_failure_story': any(kw in text for kw in ['坑', '被骗', '失误', '教训']),
            'uses_first_person': text.count('我') >= 3,
            'natural_emoji_ratio': self._estimate_emoji_ratio(text) >= 0.015,
            'no_formal_closing': not any(phrase in text for phrase in ['感谢关注', '谢谢观看', '如有问题请']),
            'has_conversational_particle': any(p in text for p in ['吧', '嘛', '啦', '咯'])
        }
        
        return checks
    
    def _estimate_emoji_ratio(self, text: str) -> float:
        """估算 emoji 密度"""
        emoji_pattern = r'[\U0001F600-\U0001F64F\U0001F300-\U0001F5FF\U0001F680-\U0001F6FF]'
        emojis = len(__import__('re').findall(emoji_pattern, text))
        chars = len(text)
        return emojis / max(chars, 1)
    
    def _get_verdict(self, total_score: float) -> str:
        """给出结论等级"""
        
        if total_score >= 85:
            return "🟢 优秀 - 人设一致度高，可直接发布"
        elif total_score >= 70:
            return "🟡 良好 - 基本符合人设，建议微调某些元素"
        elif total_score >= 50:
            return "🟠 一般 - 有明显短板需补强"
        else:
            return "🔴 不合格 - 必须重写以符合人设要求"
    
    def _get_recommendation(self, total_score: float) -> str:
        """基于分数给出操作建议"""
        
        if total_score >= 85:
            return "当前内容完全符合@程序员小智的人设定位，可以直接发布！"
        elif total_score >= 70:
            return "整体不错，建议根据上面的改进建议优化后再发布"
        elif total_score >= 50:
            return "人设元素缺失较多，建议重新设计叙事角度后再写"
        else:
            return "严重偏离人设定位，建议从头重构内容框架"
    
    def get_summary_report(self, title: str, content: str, cover_description: Optional[str] = None) -> str:
        """生成人类可读的总结报告"""
        
        result = self.verify(title, content, cover_description)
        
        report = f"""
=== @程序员小智 人设一致性检测报告 ===

📊 总分：{result['total_score']}/100
{'🟢' if result['total_score'] >= 85 else '🟡' if result['total_score'] >= 70 else '🟠' if result['total_score'] >= 50 else '🔴'} 
结论：{result['verdict']}

---
各维度得分：

💻 程序员视角：   {result['dimensions']['programmer_perspective']:3d}/100 (权重 35%)
🏠 装修小白视角：{result['dimensions']['diy_authenticity']:3d}/100 (权重 30%)
🤖 AI 爱好者视角：{result['dimensions']['ai_innovator']:3d}/100 (权重 20%)
💬 语调一致性：  {result['dimensions']['tone_consistency']:3d}/100 (权重 15%)

---
Checklist 检查：
"""
        
        for check_name, passed in result['checklist_passed'].items():
            status = '✅' if passed else '❌'
            report += f"\n{status} {check_name.replace('_', ' ')}"
        
        report += "\n\n---\n改进建议:\n"
        for i, imp in enumerate(result['improvements'][:5], 1):  # 只显示前 5 条
            report += f"\n{i}. {imp}"
        
        report += f"\n\n💡 操作建议：{result['recommendation']}"
        
        return report.strip()


# CLI 测试
if __name__ == '__main__':
    verifier = PersonaVerifier()
    
    test_title = "签合同时我差点被骗 3 万块"
    test_content = """
本来以为签完就万事大吉了，结果结算时多了 2 万多!
工人说「这是行业潜规则」，但我不服输😤
花了一周研究，终于找到了报价陷阱的检测方法
分享给大家，希望你们都能避开这个坑💪
"""
    
    print(verifier.get_summary_report(test_title, test_content))
