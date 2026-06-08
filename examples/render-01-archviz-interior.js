/**
 * Example 9: Architectural Visualization Interior (建筑可视化室内)
 * 
 * Use Case: Real estate marketing, architecture portfolios, interior design presentations
 * Platform: Stable Diffusion with photorealistic models
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createArchvizInterior() {
  const builder = new PromptBuilder();
  
  builder.setStyle('3d-render')
         .addSubject('luxury penthouse living space', { importance: 'primary' })
         .addEnvironment('contemporary high-rise apartment with panoramic city views')
         .applyLighting('ray-traced global illumination', 'golden hour sunset through glass')
         .setComposition('wide architectural perspective showing spatial flow')
         .addMaterials('Italian marble flooring, custom leather sectional sofa, brushed steel fixtures')
         .setColorPalette('warm neutrals, charcoal accents, warm wood tones')
         .setMood ('sophisticated, exclusive, modern luxury living')
         .addTechParams({
           ratio: '16:9',
           stylize: 250,
           quality: '2'
         })
         .setNegativePrompts([
           'cluttered furniture, cold lighting, low resolution textures, visible polygon edges',
           'watermark, unrealistic proportions, plastic materials, poor composition'
         ]);
  
  return {
    name: 'ArchViz Luxury Interior',
    category: '3d_render_modern',
    zhName: '建筑可视化高端室内',
    description: '照片级真实度的高端室内设计效果图',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    sdPrompt: builder.buildForPlatform('stable-diffusion', {
      steps: 50,
      cfg: 7.5,
      sampler: 'DPM++ 2M Karras',
      dimensions: '1920x1080'
    }),
    useCases: [
      'Real estate promotional materials',
      'Architecture firm portfolios',
      'Interior design proposals',
      'Property development pitch decks'
    ],
    tips: [
      ['Use HDR environment for realistic reflections'],
      ['Include human scale references like plants or art'],
      ['Day-to-night transition shots are effective'],
      ['Focus on material texture details']
    ]
  };
}

module.exports = createArchvizInterior;
