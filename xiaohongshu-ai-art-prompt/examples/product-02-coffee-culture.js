/**
 * Example 4: Coffee Culture Scene (咖啡文化场景)
 * 
 * Use Case: Cafe reviews, coffee preparation tutorials, lifestyle content
 * Platform: Midjourney v6 optimized for warm tones
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createCoffeeCulture() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject('artisan pour-over coffee brewing', { importance: 'primary' })
         .addEnvironment('cozy third-wave cafe with Edison bulb lighting')
         .applyLighting('warm golden hour sunlight through window', 'natural candlelight')
         .setComposition('45-degree angle showing hands and dripper')
         .addMaterials('ceramic V60 dripper, fresh ground coffee steam, wood table grain')
         .setColorPalette('warm earth tones, rich browns, cream whites')
         .setMood('inviting, artisanal, morning ritual')
         .addTechParams({
           ratio: '4:5',
           stylize: 250,
           version: '6.0'
         })
         .setNegativePrompts([
           'empty cup, cold coffee, cluttered background, brand logos visible',
           'blurry, low light, artificial looking steam'
         ]);
  
  return {
    name: 'Coffee Culture Moment',
    category: 'product_photography',
    zhName: '咖啡文化场景',
    description: '手冲咖啡过程展示，适合生活方式类内容',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '4:5',
      version: '6.0',
      stylize: 250
    }).prompt,
    useCases: [
      'Coffee shop review posts',
      'Home brewing tutorials',
      'Morning routine content',
      'Cafe aesthetic showcases'
    ],
    tips: [
      ['Capture the steam rising from fresh brew'],
      ['Show hands for human element'],
      ['Warm color temperature enhances mood'],
      ['Focus on texture of coffee grounds']
    ]
  };
}

module.exports = createCoffeeCulture;
