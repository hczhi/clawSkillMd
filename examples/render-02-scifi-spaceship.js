/**
 * Example 10: Sci-Fi Spaceship Interior (科幻飞船内部)
 * 
 * Use Case: Game development, concept art, sci-fi content creation
 * Platform: Midjourney with high creative control
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createScifiSpaceship() {
  const builder = new PromptBuilder();
  
  builder.setStyle('3d-render')
         .addSubject('cylinder rotating spaceship habitat corridor', { importance: 'primary' })
         .addEnvironment('future space station with Earth visible through observation deck')
         .applyLighting('holographic interface blue glow', 'artificial LED strip lighting')
         .setComposition ('dramatic worm's-eye view emphasizing circular structure')
         .addMaterials ('brushed titanium walls, transparent display screens, ambient warning lights')
         .setColorPalette ('metallic grays, emergency red accents, cool cyan holographics')
         .setMood ('sleek technological, functional futuristic, mission-critical atmosphere')
         .addTechParams({
           ratio: '16:9',
           stylize: 400,
           version: '6.0'
         })
         .setNegativePrompts([
           'rusty weathered surfaces, dirty corroded metal, earth-style architecture',
           'blurry details, inconsistent lighting, cartoon style, poor sci-fi aesthetic'
         ]);
  
  return {
    name: 'Sci-Fi Spaceship Environment',
    category: '3d_render_modern',
    zh Name: '科幻飞船内部环境',
    description: '用于游戏和影视的概念艺术级别太空场景',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '16:9',
      version: '6.0',
      stylize: 400
    }).prompt,
    useCases: [
      'Space exploration game concept art',
      'Science fiction short film backgrounds',
      'Tech company website hero images',
      'Futuristic product presentations'
    ],
    tips: [
      ['Maintain consistent technical detailing throughout'],
      ['Use procedural textures for variety'],
      ['Holographic effects add dynamism'],
      ['Include scale references like crew members']
    ]
  };
}

module.exports = createScifiSpaceship;
