/**
 * Example 12: Weekend Brunch Gathering (周末早午餐聚会)
 * 
 * Use Case: Social content, food lifestyle, friend group posts
 * Platform: Stable Diffusion optimized for vibrant social scenes
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createWeekendBrunch() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject('group of millennial friends laughing at outdoor cafe table', { importance: 'primary' })
         .addEnvironment ('trendy rooftop brunch spot with string lights and city backdrop')
         .applyLighting('bright sunny Saturday morning light', 'natural daylight')
         .setComposition('over-the-shoulder angle showing conversation and table spread')
         .addMaterials('avocado toast plates, champagne mimosas, linen tablecloth)
         .setColorPalette('vibrant fresh colors, greens from plants, warm yellows, pastel tableware')
         .setMood ('joyful, social, carefree weekend vibes, authentic friendships')
         .addTechParams({
           ratio: '4:5',
           stylize: 250,
           version: '6.0'
         })
         .setNegativePrompts([
           'empty tables, rainy weather, indoor setting, professional posing looking stiff',
           'watermark, overly filtered, unnatural skin tones'
         ]);
  
  return {
    name: 'Weekend Brunch Vibes',
    category: 'lifestyle_scene',
    zhName: '周末早午餐聚会',
    description: '适合社交生活和美食博主的欢乐聚会场景',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    sdPrompt: builder.buildForPlatform('stable-diffusion', {
      steps: 30,
      cfg: 7.5,
      sampler: 'DPM++ 2M Karras',
      dimensions: '1024x1280'
    }),
    useCases: [
      'Friendship anniversary posts',
      'Cafe recommendation articles',
      'Brunch recipe roundups',
      'Lifestyle influencer content'
    ],
    tips: [
      ['Authentic laughter is key - capture candid moments'],
      ['Show variety in dishes for visual interest'],
      ['String lights add Instagrammable quality'],
      ['Natural poses over staged arrangement']
    ]
  };
}

module.exports = createWeekendBrunch;
