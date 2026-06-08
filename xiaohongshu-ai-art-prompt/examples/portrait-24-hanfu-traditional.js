/**
 * Example 24: Portrait Photography - Traditional Hanfu Chinese Style (人像摄影：古风国华)
 * 
 * Based on Masterclass Chapter 5: Portrait Photography  
 * Scene Type: Classical Chinese traditional clothing with historical aesthetic
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createHanfuTraditionalPortrait() {
  const builder = new PromptBuilder();
  
  // Master Formula for traditional Chinese aesthetic
  builder.useMasterFormula({
    subject: "elegant young Chinese woman wearing Song Dynasty style hanfu in pale blue and white",
    scene: "wandering through classical Suzhou garden with moon gate, koi pond, and willow trees",
    style: "traditional Chinese painting meets modern photography, guofeng national aesthetic",
    lighting: "soft diffused daylight filtering through pavilion roof, dappled shadows on face and dress",
    composition: "medium shot following rule of thirds, subject positioned near circular moon gate frame,
               cherry blossoms falling gently around figure",
    details: "intricate silk embroidery on sleeves, jade hair accessories, gentle melancholic expression,
              fans held delicately in hand, calligraphy scrolls visible in background pavilion"
  });

  builder.setColorPalette('pale blue and white tones, soft greens from garden, 
                         subtle pink from cherry blossoms')
         .setMood('ethereal, graceful, contemplative, timeless beauty')
         .addTechParams({
           ratio: '9:16',
           stylize: 380,
           quality: '1',
           version: '6.0'
         })
         .setNegativePrompts([
           'modern clothing visible, Western hairstyles, contemporary makeup',
           'deformed hands holding fan, extra fingers, plastic skin texture',
           'watermark, text, bright neon colors, futuristic elements'
         ]);

  return {
    name: 'Traditional Hanfu Portrait',
    category: 'portrait_photography_hanfu',
    zhName: '古风国华肖像',
    description: '古典中华传统服饰与现代摄影技法的融合，展现东方美学韵味',
    masterFormula: {
      subject: "elegant young Chinese woman wearing Song Dynasty style hanfu in pale blue and white",
      scene: "wandering through classical Suzhou garden with moon gate, koi pond, willow trees",
      style: "traditional Chinese painting meets modern photography, guofeng aesthetic",
      lighting: "soft diffused daylight, dappled shadows from pavilion roof",
      composition: "medium shot, circular moon gate frame, falling cherry blossoms",
      details: "silk embroidery, jade hairpins, melancholic expression, calligraphy scrolls"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Cultural heritage promotion content',
      'Traditional festival celebrations',
      'Fashion design inspiration posts',
      'Travel guides to historical sites'
    ],
    tips: [
      'Historical accuracy matters - research specific dynasty styles',
      'Props like fans or flowers enhance period authenticity',
      'Jade and silk textures convey luxury and tradition',
      'Soft lighting complements delicate features',
      'Consider adding calligraphy or poetry elements'
    ]
  };
}

module.exports = createHanfuTraditionalPortrait;
