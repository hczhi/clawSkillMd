/**
 * Example 8: Anime Character Turnaround Sheet (二次元角色三视图)
 * 
 * Use Case: Character design, animation production, game development
 * Platform: Niji Journey v6 specialized for anime styles
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createAnimeCharacterSheet() {
  const builder = new PromptBuilder();
  
  builder.setStyle('illustration')
         .addSubject('teenage cyberpunk hacker girl character design', { importance: 'primary' })
         .addEnvironment('neutral white background for clear presentation')
         .applyLighting('even studio lighting, no harsh shadows')
         .setComposition('character turnaround sheet layout showing multiple angles')
         .addMaterials('neon-lit tech jacket, LED hair clips, tactical gloves')
         .setColorPalette('electric blue, magenta accent, dark base - cyberpunk palette')
         .setMood ('confident, rebellious, tech-savvy youth')
         .addTechParams({
           ratio: '3:4',
           stylize: 500,
           version: '6.0'
         })
         .setNegativePrompts([
           'photorealistic, complex backgrounds, text labels visible on clothing',
           'blurry lines, inconsistent anatomy, extra limbs, deformed hands',
           'overly detailed background elements'
         ]);
  
  return {
    name: 'Anime Character Turnaround',
    category: 'illustration_concept',
    zhName: '二次元角色三视图',
    description: '适用于动画和游戏开发的完整角色设定稿',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    nijiPrompt: builder.buildForPlatform('niji', {
      version: '6',
      stylize: 700
    }).prompt,
    useCases: [
      'Animation production pipeline',
      'Video game character assets',
      'VTuber avatar design',
      'Fangirl fan art reference'
    ],
    tips: [
      ['Include front, side, and back views'],
      ['Show expression variations separately'],
      ['Detail key costume elements in close-ups'],
      ['Maintain consistent character proportions']
    ]
  };
}

module.exports = createAnimeCharacterSheet;
