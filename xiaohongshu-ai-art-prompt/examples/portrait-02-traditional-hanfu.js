/**
 * Example 2: Traditional Hanfu Portrait (古风汉服写真)
 * 
 * Use Case: Cultural content, traditional aesthetic posts, hanfu community
 * Platform: Niji Journey v6 optimized for anime-influenced styles
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createHanfuPortrait() {
  const builder = new PromptBuilder();
  
  builder.setStyle('illustration')
         .addSubject('elegant Chinese woman in Tang dynasty brocade hanfu', { importance: 'primary' })
         .addEnvironment('classical Chinese garden with moon gate and koi pond')
         .applyLighting('soft morning light through cherry blossoms', 'dappled shadows')
         .setComposition('S-curve composition, flowing lines')
         .addMaterials('exquisite silk embroidery, jade hair ornaments, flowing sleeves')
         .setMood('serene, graceful, timeless beauty')
         .setColorPalette('pastel pink, emerald green, gold accents - sakura palette')
         .addTechParams({
           ratio: '9:16',
           stylize: 400,
           version: '6.0'
         })
         .setNegativePrompts([
           'western clothing, modern elements, anachronistic items, distorted hands',
           'blurry, low resolution, watermark, text, cartoon eyes, simplified face'
         ]);
  
  return {
    name: 'Traditional Hanfu Portrait',
    category: 'portrait_photography',
    zhName: '古风汉服写真',
    description: '传统汉服美学，适合文化类内容和国风社区',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '9:16',
      version: '6.0',
      stylize: 400
    }).prompt,
    nijiPrompt: builder.buildForPlatform('niji', {
      version: '6',
      stylize: 500
    }).prompt,
    useCases: [
      'Cultural heritage posts',
      'Hanfu fashion showcase',
      'Traditional festival content',
      'Travel to historical sites'
    ],
    tips: [
      ['Focus on fabric texture details'],
      ['Ensure historically accurate accessories'],
      ['Cherry blossoms add seasonal context'],
      ['Subtle makeup complements traditional aesthetic']
    ]
  };
}

module.exports = createHanfuPortrait;
