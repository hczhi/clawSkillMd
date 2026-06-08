/**
 * Example 6: Japanese Minimalist Bedroom (日式极简卧室)
 * 
 * Use Case: Zen lifestyle content, meditation space, minimalist home decor
 * Platform: Midjourney with focus on harmony and simplicity
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createJapaneseBedroom() {
  const builder = new PromptBuilder();
  
  builder.setStyle('3d-render')
         .addSubject('Japanese minimalist bedroom interior', { importance: 'primary' })
         .addEnvironment('tatami mat floor with shoji screen doors')
         .applyLighting('soft diffused natural light through paper screens', 'ambient warmth')
         .setComposition('isometric view showing layout harmony')
         .addMaterials('natural straw tatami, translucent shoji paper, low platform bed')
         .setColorPalette('earthy neutrals, pale greens, warm beige - wabi-sabi tones')
         .setMood('tranquil, meditative, zen sanctuary atmosphere')
         .addTechParams({
           ratio: '4:5',
           stylize: 250,
           version: '6.0'
         })
         .setNegativePrompts([
           'western furniture, bright colors, cluttered, ornate decorations',
           'watermark, overly digital, plastic look'
         ]);
  
  return {
    name: 'Japanese Minimalist Bedroom',
    category: 'interior_architecture',
    zhName: '日式极简卧室',
    description: '侘寂美学日式禅意空间设计',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '4:5',
      version: '6.0',
      stylize: 250
    }).prompt,
    useCases: [
      'Zen living room inspiration',
      'Minimalist bedroom design',
      'Meditation space creation',
      'Japanese culture posts'
    ],
    tips: [
      ['Embrace imperfection (wabi-sabi principle)'],
      ['Use natural materials exclusively'],
      ['Low furniture creates calm energy flow'],
      ['Ikebana flower arrangement adds focal point']
    ]
  };
}

module.exports = createJapaneseBedroom;
