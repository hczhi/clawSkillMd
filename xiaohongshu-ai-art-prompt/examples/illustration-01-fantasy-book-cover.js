/**
 * Example 7: Fantasy Book Cover Illustration (奇幻书籍封面)
 * 
 * Use Case: Self-publishing, book promotion, writing community content
 * Platform: Midjourney with high stylization for artistic impact
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createFantasyBookCover() {
  const builder = new PromptBuilder();
  
  builder.setStyle('illustration')
         .addSubject('young witch apprentice standing before ancient library', { importance: 'primary' })
         .addEnvironment('magical tower room with floating books and glowing runes')
         .applyLighting('ethereal magical blue glow from grimoires', 'mystical atmosphere')
         .setComposition('heroic upward angle emphasizing scale')
         .addMaterials('weathered leather spellbook, flowing velvet robe, silver moon amulet')
         .setColorPalette('deep purples, electric blues, gold magical accents')
         .setMood('mysterious, powerful, coming-of-age adventure')
         .addTechParams({
           ratio: '2:3', // Book cover proportion
           stylize: 600,
           version: '6.0'
         })
         .setNegativePrompts([
           'photorealistic, modern clothing, plain background, text visible on book',
           'blurry details, low contrast, flat lighting, poor composition'
         ]);
  
  return {
    name: 'Fantasy Book Cover Art',
    category: 'illustration_concept',
    zhName: '奇幻书籍封面插画',
    description: '用于小说封面的史诗级奇幻艺术',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '2:3',
      version: '6.0',
      stylize: 600
    }).prompt,
    useCases: [
      'Fantasy novel cover design',
      'Role-playing game materials',
      'Writing challenge promotions',
      'Book club visual content'
    ],
    tips: [
      ['Leave clear space for title typography'],
      ['Strong silhouette works best at small sizes'],
      ['Magical effects should guide viewer eye to protagonist'],
      ['Test readability when scaled down']
    ]
  };
}

module.exports = createFantasyBookCover;
