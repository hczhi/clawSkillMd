#!/usr/bin/env python3
"""测试内容审核器"""

from content_auditor import ContentAuditor

# 用户提供的标题和内容
title = "装修报价看不懂？别急！我的血泪经验让你少踩坑💰"

content = """
关于材料：进口 ≠ 好用

合同上会有一些材料写着"意大利""德国"品牌
不是说这些品牌不好，但很多品牌都没听过，很容易就被绕进去了。
在签约前一定要去了解合同提到的品牌，"进口"不等于好。

关于价格：建材市场得跑几趟

时间允许的话，多去建材市场转转。了解主材大概价格。
装修公司不会直接告诉你瓷砖多少钱一块，只按平方数报价。
但你可以自己算：人工 + 辅料，再估算需要多少块砖（含损耗），就能大概算出成本价，砍价时才有底气

举个我的例子：铝扣板吊顶，市面上 0.8m 厚度包工包料大概 120 元左右，装修公司用 0.6 的板材报 200。我指出后，他们表示可以调整😂

关于管理费：10%-15% 的隐形成本

装修公司的报价，最后都会加上 10%-15% 的管理费、搬运费、垃圾清运费。
所以不要小看每一项，只有 300、500 的项目，加起来后再乘个 15%，其实就是一大笔钱。

关于逼单：涨价逼单别着急

下个月原材料涨价，再不签就要涨价，这些都是常规套路。
按照自己的节奏来，不要被销售影响，全部项目都搞明白了再签约。
报价单如果公司不给，那就多去几次现场，拿小本本记下有疑问的点，回家查清楚再说
"""

auditor = ContentAuditor()
result = auditor.audit(title, content)

print("=" * 60)
print("📊 内容审核报告")
print("=" * 60)

print(f"\n标题：{result['title']}")
print(f"\n✅ 可发布判断：{'是' if result['publish_ready'] else '否 - 需优化'}")

print("\n--- STEPPS 六维评分 ---")
for k, v in result['stepps_scores'].items():
    print(f"• {k}: {v}/100")
print(f"平均分：{result['stepps_total']:.1f}")

print("\n--- AI 化程度检测 ---")
ai = result['ai_detection']
print(f"AI 评分：{ai['score']}/10 (越低越好，<3 分合格)")
if ai['issues_found']:
    print(f"问题数量：{len(ai['issues_found'])}")
    for issue in ai['issues_found'][:3]:
        print(f"  • {issue}")

print("\n--- 人设一致性检查 ---")
persona = result['persona_check']
print(f"总分：{persona['total']}/100")
for k, v in persona.items():
    if k != 'total':
        print(f"• {k}: {v}/100")

print("\n--- 改进建议 ---")
for imp in result['improvements'][:5]:
    print(f"• {imp}")

print("\n--- 改写示范 ---")
if result['rewrite_example']:
    example = result['rewrite_example'] if isinstance(result['rewrite_example'], str) else result['rewrite_example'].get('rewritten_example', '')
    print(example[:500] + "..." if len(example) > 500 else example)
