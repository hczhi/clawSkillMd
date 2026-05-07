#!/usr/bin/env python3
"""测试不同标题版本的吸引力"""

from topic_evaluator import TopicEvaluator

evaluator = TopicEvaluator()

titles = [
    "装修攻略千万条，我总结最重要的就 3 个字：脸皮厚",
    "签合同时千万句套路，我最重要的建议就 3 个字：脸皮厚!",
    "跟销售怼了 7 天，最后省了 2 万！我的经验就 3 个字：脸皮厚",
    "差点被多收 3 万才明白：装修谈判就靠这 3 个字——脸皮厚!",
    "装修避坑千万条，我总结最重要的就 3 个字：脸皮厚💰",
]

print("=" * 60)
print("📊 标题吸引力测试对比")
print("=" * 60)

for i, title in enumerate(titles, 1):
    result = evaluator.evaluate(title)
    print(f"\n【版本{i}】{title[:35]}...")
    print(f"推荐指数：{result['total_score']}/100")
    print(f"评价：{result['recommendation']}")
    print(f"STEPPS 得分:")
    for k, v in result['dimensions'].items():
        marker = "✅" if v >= 70 else "⚠️"
        print(f"  {marker} {k}: {v}")
    print()
