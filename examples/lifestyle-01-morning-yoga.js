/**
 * Example 11: Peaceful Morning Routine (宁静晨间瑜伽)
 * 
 * Use Case: Wellness content, lifestyle blogs, morning routine inspiration
 * Platform: Midjourney with emphasis on atmosphere and mood
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createMorningYoga() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject('young woman practicing sun salutation yoga pose', { importance: 'primary' })
         .addEnvironment ('balcony garden at sunrise with potted plants visible')
         .applyLighting('soft golden dawn light streaming through sheer curtains', 'gentle warm glow')
         .setComposition ('silhouette profile emphasizing graceful body line')
         .addMaterials('flowing athleisure wear in neutral tones, textured yoga mat')
         .setColorPalette('warm sunrise palette, soft oranges, gentle blues, sage greens')
         .setMood('serene, peaceful, mindful start to day, zen energy')
         .addTechParams({
           ratio: '9:16',
           stylize: 300,
           version: '6.0'
         })
         .setNegativePrompts([
           'crowded background, harsh midday sun, distracting elements, watermarks',
           'blurry silhouette, unnatural pose, gym equipment visible'
         ]);
  
  return {
    name: 'Peaceful Morning Yoga',
    category: 'lifestyle_scene',
    zhName: '宁静晨间瑜伽',
    description: '适合健康生活和冥想类内容的晨间氛围图',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '9:16',
      version: '6.0',
      stylize: 300
    }).prompt,
    useCases: [
      'Wellness app promotional content',
      'Morning routine Instagram stories',
      'Yoga studio marketing materials',
      'Self-care Sunday posts'
    ],
    tips: [
      ['Early morning light creates dreamy atmosphere'],
      ['Silhouette focuses on form rather than identity'],
      ['Include greenery for life element'],
      ['Keep composition uncluttered']
    ]
  };
}

module.exports = createMorningYoga;
