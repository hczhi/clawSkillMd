/**
 * Example 32: Character Design - Multi-Character Team Grid (角色设计：多角色团队网格)
 * 
 * Based on Masterclass Chapter 7: Character Design
 * Scene Type: Group of characters arranged in organized grid for series or team showcase
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createMultiCharacterGrid() {
  const builder = new PromptBuilder();
  
  // Master Formula for multi-character team presentation
  builder.useMasterFormula({
    subject: "diverse fantasy adventuring party featuring four distinct character archetypes displayed in organized 2x2 grid layout",
    scene: "neutral gradient background transitioning from dark slate gray top to lighter charcoal bottom, each quadrant separated by subtle thin border lines",
    style: "professional character roster illustration, consistent art style across all portraits, D&D campaign party sheet quality,
               clean borders and uniform proportions ensuring visual cohesion",
    lighting: "consistent three-point studio lighting applied equally across all four subjects, identical shadow direction and intensity maintaining unity",
    composition: "grid layout with equal sized squares, each containing full body portrait from feet to crown, character name label area below each frame,
               central logo space where borders intersect for party emblems",
    details: "warrior character on left top showing chainmail armor and sword, mage on right top displaying robes and crystal staff,
              rogue on left bottom wearing leather gear with daggers visible, healer/ranger on right bottom in practical travel clothes with bow,
              color-coded border accents matching each class identity"
  });

  builder.setColorPalette('uniform neutral backgrounds per character, gold accent borders (#D4AF37),
                         silver dividers (#C0C0C0), individual class colors as subtle hints')
         .setMood ('cooperative, ready for adventure, professional roster display, balanced ensemble')
         .addTechParams({
           ratio: '1:1', // Square format ideal for grid layouts
           stylize: 300, // Consistent stylization across characters
           quality: '2',
           version: '6.0'
         })
         .setNegativePrompts([
           'inconsistent art styles between characters, different lighting setups, varying proportions',
           'watermark, illegible names, cluttered overlapping elements',
           'too many background details distracting from character silhouettes, messy compositional balance'
         ]);

  return {
    name: 'Fantasy Adventuring Party Roster',
    category: 'character_design_team_grid',
    zhName: '多角色团队设定集',
    description: '四人冒险小队完整设定图，适合 TRPG 战役、游戏组队或小说人物介绍',
    masterFormula: {
      subject: "four diverse fantasy characters in organized 2x2 grid layout",
      scene: "gradient slate gray background with subtle border divisions per quadrant",
      style: "raster illustration, consistent art style, D&D campaign sheet quality",
      lighting: "identical three-point lighting across all subjects, unified shadows",
      composition: "equal square quadrants, full body portraits, name labels below, center emblem space",
      details: "warrior/mage/rogue/healer archetypes, class-specific gear, color-coded borders"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Tabletop RPG campaign introduction sheets',
      'Game development team character showcases',
      'Animation pilot episode introductions',
      'Fan fiction character relationship posters'
    ],
    tips: [
      'Maintain identical lighting across all characters for unity',
      'Same proportions prevent one character from dominating visually',
      'Class archetypes help players/readers quickly understand roles',
      'Central emblem space allows for party/group branding',
      'Consider including brief text descriptions for each character'
    ]
  };
}

module.exports = createMultiCharacterGrid;
