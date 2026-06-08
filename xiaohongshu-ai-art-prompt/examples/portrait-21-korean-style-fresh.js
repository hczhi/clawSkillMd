/**
 * Example 21: Portrait Photography - Korean Style Fresh Look (人像摄影：韩系清新风格)
 * 
 * Based on Masterclass Chapter 5: Portrait Photography
 * Scene Type: Soft, fresh aesthetic popular in Korean beauty photography
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createKoreanStyleFreshPortrait() {
  const builder = new PromptBuilder();
  
  // Master Formula approach with Korean beauty aesthetics
  builder.useMasterFormula({
    subject: "pretty Korean model in her early 20s wearing oversized cream sweater",
    scene: "sitting by large floor-to-ceiling window in trendy Gangnam cafe, morning time",
    style: "Korean beauty photography, fresh and airy aesthetic, soft focus",
    lighting: "soft natural daylight streaming through sheer curtains, gentle fill light",
    composition: "medium close-up, eyes aligned with top third line, slight negative space above",
    details: "natural dewy skin texture with minimal makeup, subtle closed-lip smile, 
              latte art visible on table, cherry blossom branch as prop"
  });

  builder.setColorPalette('pastel pink and cream tones, soft warm highlights')
         .setMood('gentle, serene, approachable, spring-like freshness')
         .addTechParams({
           ratio: '9:16',
           stylize: 320,
           quality: '1',
           version: '6.0'
         });

  builder.setNegativePrompts([
    'heavy makeup, dramatic contouring, dark smoky eyes, harsh shadows',
    'deformed hands holding cup, extra fingers, plastic skin texture',
    'watermark, text, overly saturated colors, vintage film look'
  ]);

  return {
    name: 'Korean Style Fresh Portrait',
    category: 'portrait_photography_korean',
    zhName: '韩系清新人像',
    description: '清新自然的韩式美容摄影，适合小红书美妆穿搭内容',
    masterFormula: {
      subject: "pretty Korean model in her early 20s wearing oversized cream sweater",
      scene: "sitting by large floor-to-ceiling window in trendy Gangnam cafe",
      style: "Korean beauty photography, fresh and airy aesthetic",
      lighting: "soft natural daylight through sheer curtains",
      composition: "medium close-up, eyes at top third line",
      details: "dewy skin minimal makeup, latte art, cherry blossom prop"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Beauty product reviews',
      'Skincare routine posts',
      'K-fashion outfit inspiration',
      'Cafe lifestyle content'
    ],
    tips: [
      'Dewy skin is key for Korean beauty aesthetic',
      'Keep makeup minimal - focus on natural glow',
      'Pastel color palette creates soft romantic feel',
      'Use props like coffee or flowers to add interest',
      'Light makeup emphasis on eyes and lips only'
    ]
  };
}

module.exports = createKoreanStyleFreshPortrait;
