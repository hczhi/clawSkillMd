# 📐 AI 绘画万能公式详解

基于《gpt-image2-prompt-masterclass》第 2 章核心方法论

---

## 一、万能公式核心结构

```
提示词 = 主体 (Subject) + 场景 (Scene) + 风格 (Style) 
        + 光线 (Lighting) + 构图 (Composition) + 细节 (Details)
```

这是**最简单、最有效**的提示词记忆框架，比原子化 Schema 更直观易懂。

---

## 二、六要素详细拆解

### 1️⃣ 主体 (Subject) - "画什么"

**作用**: 定义画面的核心焦点，AI 理解的第一关键词

**构成要素**:
- **角色/物体**: 人物、动物、产品、建筑等
- **外观特征**: 年龄、性别、服装、表情、姿态
- **动作/状态**: 行走、微笑、站立、动态瞬间

**示例对比**:
| 模糊描述 | 精准描述 |
|---------|---------|
| a girl | a young Asian woman in hanfu, long black hair |
| a car | vintage 1960s red sports car with chrome details |
| a building | modern glass skyscraper at night with illuminated windows |

**写作技巧**:
- ✅ 前 50 字符内明确主体
- ✅ 具体胜于抽象
- ✅ 3-5 个关键特征即可

---

### 2️⃣ 场景 (Scene) - "在哪画"

**作用**: 提供环境背景，增强画面故事性和代入感

**常见场景类型**:

#### 城市场景
- Tokyo street at night with neon lights
- Parisian café terrace during morning rush
- New York subway station, crowded commuters
- Shanghai Bund skyline at dusk

#### 自然场景
- Mountain lake reflecting snow-capped peaks
- Cherry blossom garden in full bloom
- Desert dunes at sunrise with golden light
- Ancient forest with moss-covered trees

#### 室内场景
- Minimalist Scandinavian living room
- Vintage bookstore with warm lamp lighting
- Modern kitchen with marble countertops
- Traditional Chinese courtyard with lanterns

**写作技巧**:
- ✅ 地理位置 + 时间 + 环境元素
- ✅ 添加标志性物品增强识别度
- ✅ 避免过于复杂的场景堆砌

---

### 3️⃣ 风格 (Style) - "怎么画"

**作用**: 决定作品的艺术表现手法和视觉调性

**风格分类**:

#### 摄影类
- `cinematic photography` - 电影级摄影
- `portrait photography, 85mm lens` - 人像摄影
- `street photography, candid moment` - 街头摄影
- `fashion editorial` - 时尚杂志风
- `vintage film photo, Kodak Portra 400` - 复古胶片

#### 绘画类
- `oil painting, impasto technique` - 油画厚涂
- `watercolor illustration, soft edges` - 水彩插画
- `digital painting, cel shaded` - 数字彩绘赛璐珞
- `ink wash painting, traditional Chinese style` - 水墨画

#### 设计类
- `minimalist vector art` - 极简矢量
- `Art Deco poster design` - 装饰艺术海报
- `Bauhaus geometric abstraction` - 包豪斯几何
- `Swiss Style typographic design` - 瑞士平面设计

#### 3D 渲染类
- `3D render, octane render, photorealistic`
- `clay render, unlit, studio lighting`
- `isometric 3D icon set, pastel colors`

**写作技巧**:
- ✅ 主风格在前，次要风格在后
- ✅ 可指定艺术家参考 (`in the style of Gregory Colbert`)
- ✅ 混合风格要有逻辑性

---

### 4️⃣ 光线 (Lighting) - "光从哪里来"

**作用**: 光线决定氛围、情绪和立体感

**常用光影组合**:

#### 时间光效
- `golden hour, warm sunset glow, long shadows`
- `blue hour, cool twilight, city lights`
- `midnight, moonlight casting silver hues`
- `overcast day, soft diffused light`

#### 人工光源
- `neon signs, pink and teal LED glow`
- `candlelight flickering, warm intimate atmosphere`
- `studio softbox, even illumination`
- `projected spotlights, dramatic stage lighting`

#### 特殊光效
- `volumetric lighting, god rays through trees`
- `rim light separating subject from background`
- `subsurface scattering on skin, translucent effect`
- `caustics, light patterns on surfaces`

#### 方向控制
- `backlit, silhouetted against bright background`
- `side lighting, strong chiaroscuro contrast`
- `top down, noon sun creating harsh shadows`
- `three-point lighting setup, professional portrait`

**写作技巧**:
- ✅ 颜色 + 强度 + 方向组合描述
- ✅ 添加光的物理效果 (`glowing`, `filtering through`)
- ✅ 光线与材质互动 (`reflects on wet pavement`)

---

### 5️⃣ 构图 (Composition) - "怎么看"

**作用**: 引导观众视线，强化视觉冲击力和美感

**经典构图法则**:

#### 三分法构图
- `rule of thirds, subject placed on intersecting lines`
- `off-center composition, negative space on one side`

#### 引导线构图
- `leading lines drawing eye to subject`
- `converging perspective, vanishing point focus`

#### 框架构图
- `frame within a frame, looking through window`
- `natural frame formed by tree branches`

#### 对称构图
- `symmetrical composition, perfect balance`
- `mirror reflection, symmetrical architecture`

#### 其他构图
- `close-up portrait, filling the frame`
- `wide angle shot, expansive landscape`
- `isometric view, top-down angled perspective`
- `low angle shot, making subject appear powerful`
- `Dutch angle, tilted horizon for drama`

**镜头语言**:
- `shot on 35mm lens, natural field of view`
- `85mm f/1.4, shallow depth of field`
- `macro lens, extreme close-up detail`
- `fisheye lens, distorted wide perspective`

**写作技巧**:
- ✅ 先说视角再说技术参数
- ✅ 镜头焦距要匹配场景尺度
- ✅ 景深控制影响焦点注意力

---

### 6️⃣ 细节 (Details) - "点睛之笔"

**作用**: 丰富画面信息量，增加真实感和耐看度

#### 材质细节
- `silky smooth skin, subsurface scattering`
- `weathered wood texture, visible grain`
- `metallic reflections, polished chrome`
- `translucent fabric, light passing through`
- `rough concrete surface, imperfections visible`

#### 氛围细节
- `falling cherry blossom petals, soft motion blur`
- `rising steam from coffee cup, wispy clouds`
- `fireflies glowing in summer night, magical particles`
- `raindrops on window, streaks blurring city lights`

#### 色彩细节
- `complementary color scheme, orange and blue contrast`
- `monochromatic palette, varying shades of teal`
- `pastel color harmony, soft pinks and mint greens`
- `vibrant saturated colors, pop art aesthetic`

#### 技术细节
- `bokeh from distant lights, circular out-of-focus highlights`
- `sharp focus on eyes, background softly blurred`
- `film grain, subtle texture overlay`
- `high dynamic range, balanced exposure`

**写作技巧**:
- ✅ 细节数量不宜超过 3-4 项
- ✅ 与主体和场景有逻辑关联
- ✅ 避免过度堆砌导致 AI 困惑

---

## 三、万能公式实战模板

### 模板 A: 人像摄影
```javascript
{
  subject: "a young Asian woman wearing hanfu dress",
  scene: "walking through ancient Chinese temple garden",
  style: "cinematic film photography",
  lighting: "soft golden hour sunlight filtering through trees",
  composition: "medium shot, rule of thirds, slight low angle",
  details: "cherry blossom petals falling around her, 
            gentle smile, hair flowing in breeze"
}
```

### 模板 B: 产品展示
```javascript
{
  subject: "minimalist ceramic coffee mug filled with espresso",
  scene: "placed on oak wooden table near morning window",
  style: "commercial product photography",
  lighting: "natural side light from window, soft shadows",
  composition: "overhead shot with negative space for text",
  details: "steam rising from cup, water droplets on table,
            matte texture visible, cozy morning vibe"
}
```

### 模板 C: 城市夜景
```javascript
{
  subject: "crowded Tokyo Shibuya crossing at rush hour",
  scene: "nighttime urban environment with neon advertisements",
  style: "street photography, candid documentary style",
  lighting: "multiple colored neon lights reflecting on wet pavement",
  composition: "wide angle shot capturing full intersection scene",
  details: "motion blur of moving crowds, 
            vibrant cyan and magenta color palette,
            rain-soaked streets adding reflections"
}
```

---

## 四、万能公式使用建议

### ✅ 正确做法
1. **逐步构建**: 依次填充 6 个要素，每项 10-20 词
2. **逻辑关联**: 确保各要素之间相互协调
3. **主次分明**: 最重要的信息放在前面
4. **测试迭代**: 首版生成后根据效果调整薄弱环节

### ❌ 常见错误
1. **主体不明确**: 开头被修饰语淹没
2. **风格冲突**: 写实 + 卡通混合使用
3. **光线矛盾**: 正午阳光 + 烛光同时存在
4. **细节冗余**: 超过 5 项互不相关的细节描述

---

## 五、从万能公式到进阶工程

掌握万能公式后，可以继续学习：

1. **长提示词结构化写作** - 如何处理 100+ 词的复杂需求
2. **模板设计方法论** - 如何建立自己的 Prompt Template Library
3. **A/B Test 优化流程** - 如何通过系统实验找到最优解
4. **跨模型适配技巧** - MJ vs SD vs DALL-E 的参数差异

---

## 六、万能公式速查表

| 要素 | 核心问题 | 关键词长度 | 优先级 |
|-----|---------|-----------|--------|
| 主体 | 画什么？ | 10-20 词 | ⭐⭐⭐⭐⭐ |
| 场景 | 在哪画？ | 10-15 词 | ⭐⭐⭐⭐ |
| 风格 | 怎么画？ | 5-10 词 | ⭐⭐⭐⭐⭐ |
| 光线 | 光从哪里来？ | 10-15 词 | ⭐⭐⭐⭐⭐ |
| 构图 | 怎么看？ | 5-10 词 | ⭐⭐⭐ |
| 细节 | 点睛之笔 | 10-15 词 | ⭐⭐⭐ |

**总长度建议**: 首版 50-70 词，优化后可扩展至 100+ 词

---

## 七、案例解析

### 案例 1: 韩系清新人像
```
原始思路：漂亮的韩国女孩，在咖啡厅，好看的光线
万能公式改造：
- 主体：a pretty Korean model in her 20s, wearing oversized cream sweater
- 场景：sitting by large window in trendy Seoul café, morning time
- 风格：Korean beauty photography, fresh and airy aesthetic
- 光线：soft natural daylight from window, gentle fill light
- 构图：medium close-up, eyes aligned with top third line
- 细节：smile with closed lips, dewy skin texture, latte art visible
```

### 案例 2: 国潮海报设计
```
原始思路：中国风的海报，有龙和武术家
万能公式改造：
- 主体：powerful Chinese martial artist in traditional robes
- 场景：standing on cloud above ancient mountain peaks
- 风格：modern Chinese pop art fusion, vector illustration
- 光线：dramatic rim light from behind, golden glow outline
- 构图：dynamic diagonal composition, figure in action pose
- 细节：stylized dragon coiling around body, calligraphy elements,
         bold red and gold color scheme, flat design aesthetic
```

---

**记住**: 万能公式不是束缚而是脚手架。熟练后你会自然掌握何时打破规则创造惊喜！🎨
