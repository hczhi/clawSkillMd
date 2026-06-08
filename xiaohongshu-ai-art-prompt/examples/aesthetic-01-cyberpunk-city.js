/**
 * Example 19: Cyberpunk Aesthetic Cityscape (赛博朋克都市)
 * 
 * Use Case: Mood boards, aesthetic collections, sci-fi content, gaming backgrounds
 * Platform: Midjourney with maximum stylization for dramatic effect
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createCyberpunkCity() {
  const builder = new PromptBuilder();
  
  builder.setStyle('illustration')
         .addSubject('futuristic cyberpunk city street at night', { importance: 'primary' })
         .addEnvironment ('neon-lit Tokyo-inspired alleyway with rain-slicked streets')
         .applyLighting('vibrant neon sign glow reflecting on wet pavement', 'pink and cyan LED ambiance')
         .setComposition ('wide atmospheric shot showing verticality and depth')
         .addMaterials ('chrome motorcycle reflections, holographic advertisements, steam rising from vents')
         .setColorPalette('electric blue magenta purple gradients against black night sky')
         .setMood('dystopian futuristic, high-tech low-life, neon-noir atmosphere')
         .addTechParams({
           ratio: '16:9',
           stylize: 700,
           version: '6.0'
         })
         .setNegativePrompts([
           'bright sunny day, clean streets, non-futuristic architecture, bland colors',
           'blurry details, poor lighting composition, watermarks'
         ]);
  
  return {
    name: 'Neon Cyberpunk Street',
    category: 'illustration_concept',
    zhName: '赛博朋克霓虹街道',
    description: '适合美学收集和科幻内容的未来主义城市景观',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '16:9',
      version: '6.0',
      stylize: 700
    }).prompt,
    useCases: [
      'Cyberpunk art aesthetic boards',
      'Gaming background concepts',
      'Music album artwork inspiration',
      'Sci-fi world building references'
    ],
    tips: [
      ['Rain adds reflection drama essential to cyberpunk'],
      ['Volumetric fog enhances light beams'],
      ['Contrast between bright neon and deep shadows is key'],
      ['Vertical composition emphasizes towering skyscrapers']
    ]
  };
}

module.exports = createCyberpunkCity;
