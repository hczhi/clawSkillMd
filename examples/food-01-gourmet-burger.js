/**
 * Example 14: Gourmet Food Photography (美食摄影 - 汉堡特写)
 * 
 * Use Case: Restaurant menus, food blogs, recipe posts, food delivery apps
 * Platform: Stable Diffusion with emphasis on appetizing details
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createGourmetBurger() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject('artisan gourmet cheeseburger in macro close-up', { importance: 'primary' })
         .addEnvironment('dark slate serving board on rustic wooden table')
         .applyLighting('dramatic side lighting highlighting textures', 'moody restaurant atmosphere')
         .setComposition('45-degree angle showing burger height and layers')
         .addMaterials('toasted brioche bun, melted cheddar dripping, juicy beef patty, fresh arugula')
         .setColorPalette('rich browns, golden yellows, deep reds, vibrant greens')
         .setMood ('appetizing, indulgent, premium fast-casual dining experience')
         .addTechParams({
           ratio: '4:5',
           stylize: 200,
           quality: '2'
         })
         .setNegativePrompts([
           'small portion, dry meat, cold food look, plastic appearance, brand logos visible',
           'blurry focus, overexposed highlights, artificial colors'
         ]);
  
  return {
    name: 'Gourmet Burger Macro',
    category: 'product_photography',
    zhName: '美食摄影特写',
    description: '适合餐厅菜单和美食博主的诱人食物摄影',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    sdPrompt: builder.buildForPlatform('stable-diffusion', {
      steps: 35,
      cfg: 7.0,
      sampler: 'DPM++ SDE Karras',
      dimensions: '1024x1280'
    }),
    useCases: [
      'Restaurant menu photography',
      'Food delivery app listings',
      'Recipe blog headers',
      'Fast-casual brand marketing'
    ],
    tips: [
      ['Focus on drips and melting for appetite appeal'],
      ['Steam adds freshness indicator'],
      ['Dark backgrounds make colors pop'],
      ['Glossy surfaces reflect light beautifully']
    ]
  };
}

module.exports = createGourmetBurger;
