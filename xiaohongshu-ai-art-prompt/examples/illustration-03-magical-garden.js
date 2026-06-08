/**
 * Example 20: Enchanted Fantasy Garden (魔法花园幻想)
 * 
 * Use Case: Dreamy aesthetic posts, fairytale content, creative writing inspiration
 * Platform: Midjourney with whimsical high stylization
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createMagicalGarden() {
  const builder = new PromptBuilder();
  
  builder.setStyle('illustration')
         .addSubject('enchanted fairy garden floating islands with waterfalls', { importance: 'primary' })
         .addEnvironment('magical realm with giant glowing mushrooms and bioluminescent plants')
         .applyLighting('soft ethereal glow from floating lanterns', 'magical particle effects')
         .setComposition ('isometric view showing multiple levels of hanging gardens')
         .addMaterials('translucent crystal flowers, moss-covered stone arches, silk ribbon bridges')
         .setColorPalette('pastel purples mint greens lavender soft golds magical palette')
         .setMood('whimsical dreamlike enchanting escape reality fantasy world')
         .addTechParams({
           ratio: '3:4',
           stylize: 650,
           version: '6.0'
         })
         .setNegativePrompts([
           'realistic photography dark ominous mood modern buildings visible',
           'blurry elements flat lighting dull colors'
         ]);
  
  return {
    name: 'Enchanted Fairy Garden',
    category: 'illustration_concept',
    zhName: '魔法奇幻花园',
    description: '适合梦幻美学和童话内容的手绘风格插画',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '3:4',
      version: '6.0',
      stylize: 650
    }).prompt,
    useCases: [
      'Fantasy novel chapter headers',
      'Dreampunk aesthetic collections',
      'Creative writing prompt images',
      'Children book illustration style references'
    ],
    tips: [
      ['Floating elements create wonder factor'],
      ['Bioluminescence adds mystery and magic'],
      ['Pastel colors maintain gentle whimsical feel'],
      ['Include tiny figures for scale reference']
    ]
  };
}

module.exports = createMagicalGarden;
