/**
 * Example 18: Premium Tech Product Showcase (高端科技产品)
 * 
 * Use Case: Tech reviews, unboxing videos, gadget launch promotions
 * Platform: Stable Diffusion with photorealistic render quality
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createWirelessHeadphones() {
  const builder = new PromptBuilder();
  
  builder.setStyle('3d-render')
         .addSubject('premium wireless over-ear headphones hero shot', { importance: 'primary' })
         .addEnvironment('clean minimalist desk setup with subtle tech accessories')
         .applyLighting('studio softbox illumination creating clean reflections', 'gentle rim lighting on edges')
         .setComposition ('floating mid-air presentation angle showing design profile')
         .addMaterials('matte black aluminum frame, memory foam ear cushions, braided cable accents')
         .setColorPalette('sophisticated blacks, metallic silver, subtle blue LED indicator')
         .setMood('sleek modern technology, premium audio experience, professional grade')
         .addTechParams({
           ratio: '4:5',
           stylize: 150,
           quality: '2'
         })
         .setNegativePrompts([
           'cluttered desk, visible brand logos too prominent, cheap plastic appearance',
           'blurry reflections, inconsistent lighting, watermarks'
         ]);
  
  return {
    name: 'Premium Audio Headphones',
    category: 'product_photography',
    zhName: '高端无线耳机展示',
    description: '适合科技测评和产品发布会的精美产品图',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    sdPrompt: builder.buildForPlatform('stable-diffusion', {
      steps: 40,
      cfg: 7.5,
      sampler: 'DPM++ 2M Karras',
      dimensions: '1024x1280'
    }),
    useCases: [
      'Tech review article headers',
      'Unboxing video thumbnails',
      'E-commerce product listings',
      'Gadget comparison articles'
    ],
    tips: [
      ['Show product from multiple angles in gallery'],
      ['Highlight key features like battery life indicators'],
      ['Clean background maintains product focus'],
      ['Quality of materials should be evident']
    ]
  };
}

module.exports = createWirelessHeadphones;
