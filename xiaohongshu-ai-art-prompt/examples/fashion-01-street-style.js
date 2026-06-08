/**
 * Example 13: Urban Street Fashion (都市街头时尚)
 * 
 * Use Case: Fashion influencer posts, street style inspiration, shopping hauls
 * Platform: Midjourney with high stylization for trend focus
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createStreetFashion() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject ('fashionable young person in oversized streetwear outfit', { importance: 'primary' })
         .addEnvironment('busy Tokyo Shibuya crossing at golden hour')
         .applyLighting('warm sunset backlight creating rim light effect', 'urban ambient glow')
         .setComposition ('dynamic Dutch angle capturing movement and energy')
         .addMaterials('baggy cargo pants, designer sneakers, layered accessories, crossbody bag')
         .setColorPalette('urban neutrals with bold sneaker color pop, sunset orange highlights')
         .setMood('confident, trendy, city energy, youthful expression')
         .addTechParams({
           ratio: '9:16',
           stylize: 450,
           version: '6.0'
         })
         .setNegativePrompts([
           'studio background, plain clothes, boring setting, professional headshot look',
           'blurry motion, distorted limbs, bad proportions, watermarks'
         ]);
  
  return {
    name: 'Urban Street Style',
    category: 'portrait_photography',
    zhName: '都市街头时尚',
    description: '适合潮流博主的街拍风格人像',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '9:16',
      version: '6.0',
      stylize: 450
    }).prompt,
    useCases: [
      'OOTD (Outfit of the Day) posts',
      'Shopping haul showcases',
      'Streetwear brand promotions',
      'Fashion week coverage'
    ],
    tips: [
      ['Layering creates depth and visual interest'],
      ['Bold accessories define personal style'],
      ['Busy backgrounds add urban authenticity'],
      ['Golden hour enhances fashion photography']
    ]
  };
}

module.exports = createStreetFashion;
