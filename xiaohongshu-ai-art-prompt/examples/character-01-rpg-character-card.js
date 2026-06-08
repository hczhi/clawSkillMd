/**
 * Example 30: Character Design - RPG Game Character Card (角色设计：RPG 游戏角色卡)
 * 
 * Based on Masterclass Chapter 7: Character Design
 * Scene Type: Complete character reference sheet for video game or TTRPG use
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createCharacterDesignSheet() {
  const builder = new PromptBuilder();
  
  // Master Formula for comprehensive character design card
  builder.useMasterFormula({
    subject: "half-elf ranger character with silver hair tied in high ponytail, wearing leather armor with fur trim",
    scene: "neutral light gray studio background ensuring all focus remains on character design details",
    style: "professional character concept art, clean lineart with flat cel shading, D&D 5e aesthetic quality,
               multiple view angles showing complete outfit and equipment",
    lighting: "even soft studio illumination eliminating distracting shadows, consistent lighting across all poses,
               subtle rim highlighting separating character from background",
    composition: "grid layout featuring front view, three-quarter view, side profile, and back view,
               each angle occupying equal space with clear labeling areas, headshot close-up at top right corner",
    details: "detailed weapon design showing sword hilt engravings, quiver with distinct arrow fletching colors,
              boots with visible lacing patterns, character emblem on chest piece, color swatches below indicating
              primary armor brown (#4A3728), secondary silver (#C0C0C0), accent forest green (#228B22)"
  });

  builder.addTechParams({
    ratio: '3:4', // Vertical layout for character portfolio display
    stylize: 350, // Balanced stylization for professional use
    quality: '2',
    version: '6.0'
  })
  .setNegativePrompts([
    'inconsistent anatomy between views, photorealistic skin texture, blurry details',
    'watermark, illegible labels, cluttered background elements',
    'too many costume pieces overwhelming core design, messy linework'
  ]);

  return {
    name: 'RPG Half-Elf Ranger Character Sheet',
    category: 'character_design_rpg',
    zhName: 'RPG 游戏角色设定集',
    description: '完整的游戏角色设计参考图，包含多角度视图、装备细节和配色方案',
    masterFormula: {
      subject: "half-elf ranger, silver high ponytail, leather armor with fur trim",
      scene: "neutral light gray studio background, focus on character details",
      style: "character concept art, flat cel shading, D&D 5e aesthetic, multiple angles",
      lighting: "even soft studio illumination, consistent across poses, rim highlighting",
      composition: "grid layout with front/three-quarter/side/back views, label areas, headshot closeup",
      details: "sword engravings, quiver arrows, boot lacing, emblem, color swatches"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Tabletop RPG player character creation',
      'Video game character concept development',
      'Animation project character bible',
      'Fan art commissions and references'
    ],
    tips: [
      'Multiple angles help understand full character design depth',
      'Include weapon and accessory detail shots for clarity',
      'Color swatches ensure consistency across production',
      'Headshot closeup establishes facial features clearly',
      'Labeling helps communicate designer intent'
    ]
  };
}

module.exports = createCharacterDesignSheet;
