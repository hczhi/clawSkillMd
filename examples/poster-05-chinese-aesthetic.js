/**
 * Example 29: Poster Illustration - Chinese Aesthetic Style (海报插画：中式美学)
 * 
 * Based on Masterclass Chapter 6: Poster & Illustration Design
 * Scene Type: Modern interpretation of traditional Chinese art for contemporary applications
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createChineseAestheticPoster() {
  const builder = new PromptBuilder();
  
  // Master Formula for modern Chinese aesthetic design
  builder.useMasterFormula({
    subject: "elegant calligraphic brush strokes forming abstract mountain silhouette,
               golden pine tree emerging from ink wash background",
    scene: "traditional rice paper texture with subtle grain, faint circular moon motif in background,
               scattered red seal stamps positioned artistically around edges as decorative elements",
    style: "modern interpretation of classical ink wash painting meets contemporary graphic design,
               ukiyo-e inspired composition balance, minimal Zen aesthetic philosophy",
    lighting: "soft diffused lighting revealing subtle paper grain texture, golden foil accents catching light,
               gentle gradient wash from top dark to bottom pale creating atmospheric depth",
    composition: "vertical asymmetrical balance following traditional Chinese scroll format,
               generous left-side negative space for calligraphy inscription, visual weight concentrated right side",
    details: "ink bleed effect showing organic absorption into paper fibers, gold leaf flakes scattered naturally,
              faint watercolor sky tones blending subtly, single crane flying across upper portion symbolizing longevity"
  });

  builder.setColorPalette('ink black (#000000), rice paper cream (#F5E6C8), cinnabar red (#E34234),
                         metallic gold (#D4AF37), pale azure wash')
         .setMood('serene, contemplative, culturally rich, timeless elegance, meditative')
         .addTechParams({
           ratio: '3:4', // Traditional Chinese painting proportion
           stylize: 400, // High stylization for artistic expression
           quality: '1',
           version: '6.0'
         })
         .setNegativePrompts([
           'Western perspective techniques, photorealistic landscapes,油画 texture',
           'watermark, Western-style typography, bright saturated non-traditional colors',
           'symmetrical boring composition, overly decorated cluttering the minimalist essence'
         ]);

  return {
    name: 'Modern Chinese Ink Aesthetic Poster',
    category: 'poster_illustration_chinese_aesthetic',
    zhName: '中式美学海报',
    description: '现代与传统融合的中国风设计，适合文化推广、高端品牌或艺术展览',
    masterFormula: {
      subject: "calligraphic brush strokes forming mountain silhouette, golden pine emerging",
      scene: "rice paper texture, faint moon motif background, red seal stamps",
      style: "modern ink wash painting meets contemporary design, Zen minimalism",
      lighting: "soft diffused revealing paper grain, gold foil accents, gradient wash depth",
      composition: "vertical asymmetrical scroll format, negative left space for text",
      details: "ink bleed effect, gold flakes, watercolor sky wash, flying crane symbol"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Cultural institution promotional materials',
      'High-end tea or wine brand packaging',
      'Art exhibition posters',
      'Luxury product line branding'
    ],
    tips: [
      'Traditional ink bleeding creates authentic hand-painted feel',
      'Gold accents elevate perceived value without overwhelming',
      'Asymmetrical balance is more dynamic than perfect symmetry',
      'Negative space is active element inviting contemplation',
      'Seal stamps add authenticity and cultural significance'
    ]
  };
}

module.exports = createChineseAestheticPoster;
