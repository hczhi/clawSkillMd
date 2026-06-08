/**
 * Example 5: Scandinavian Living Room (北欧风客厅设计)
 * 
 * Use Case: Interior design inspiration, home decor posts, renovation planning
 * Platform: Stable Diffusion with architectural visualization models
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createScandinavianLiving() {
  const builder = new PromptBuilder();
  
  builder.setStyle('3d-render')
         .addSubject('minimalist Scandinavian living room interior', { importance: 'primary' })
         .addEnvironment('contemporary apartment with floor-to-ceiling windows')
         .applyLighting('abundant natural daylight', 'soft ambient illumination')
         .setComposition('wide angle showing full space layout')
         .addMaterials('light oak flooring, white wool textiles, black metal accents')
         .setColorPalette('monochromatic white with warm wood tones and green plants')
         .setMood('hygge cozy, uncluttered, bright Scandinavian lifestyle')
         .addTechParams({
           ratio: '16:9',
           stylize: 300,
           quality: '2'
         })
         .setNegativePrompts([
           'cluttered, dark atmosphere, heavy furniture, busy patterns',
           'watermark, low poly, plastic materials, unrealistic lighting'
         ]);
  
  return {
    name: 'Scandinavian Living Room',
    category: 'interior_architecture',
    zhName: '北欧风客厅设计',
    description: '北欧极简家居室内设计展示',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    sdPrompt: builder.buildForPlatform('stable-diffusion', {
      steps: 40,
      cfg: 8.0,
      sampler: 'Euler a',
      dimensions: '1920x1080'
    }),
    useCases: [
      'Interior design Pinterest boards',
      'Home decor shopping lists',
      'Apartment tour content',
      'Renovation inspiration feeds'
    ],
    tips: [
      ['Include plenty of indoor plants for life'],
      ['Natural light is key to Nordic aesthetic'],
      ['Keep color palette neutral with few accents'],
      ['Layer textures (wool, wood, linen) for depth']
    ]
  };
}

module.exports = createScandinavianLiving;
