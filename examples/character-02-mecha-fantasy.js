/**
 * Example 31: Character Design - Mecha Fantasy Pilot (角色设计：机甲幻想设定)
 * 
 * Based on Masterclass Chapter 7: Character Design
 * Scene Type: Sci-fi/mecha themed character with futuristic armor and technology
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createMechaFantasyCharacter() {
  const builder = new PromptBuilder();
  
  // Master Formula for mecha-pilot character design
  builder.useMasterFormula({
    subject: "young female mecha pilot in form-fitting white and cyan flight suit with orange safety accents",
    scene: "interior of futuristic spaceship hangar bay, large mechanical mecha unit partially visible in background,
               industrial lighting rigs overhead casting dramatic geometric shadows",
    style: "anime-inspired sci-fi character design, clean technical illustration quality, Gundam aesthetic,
               detailed mechanical elements integrated with organic human anatomy",
    lighting: "cool blue-tinted hangar fluorescent lighting mixing with warm orange emergency beacons,
               rim light from mecha reactor glow illuminating character silhouette from behind",
    composition: "dynamic three-quarter pose suggesting readiness and determination, low angle making figure appear heroic,
               mecha shoulder dominating upper right corner creating visual balance, negative space top left for title placement",
    details: "visor helmet reflecting control panel lights, communication headset visible under hairline, 
              chest-mounted data tablet glowing softly, utility belt with modular pouches, cracked paint on distant mecha suggesting recent battle"
  });

  builder.setColorPalette('flight suit white (#FFFFFF), cyan accents (#00BFFF), orange safety stripes (#FF6600),
                         steel grays (#708090), emergency red (#DC143C)')
         .setMood('ready for action, determined, technically competent, heroic anticipation')
         .addTechParams({
           ratio: '9:16', // Vertical manga/poster format
           stylize: 420, // High stylization for anime aesthetic
           quality: '1',
           version: '6.0'
         })
         .setNegativePrompts([
           'realistic photography look, Western superhero costume style, overly muscular build',
           'watermark, messy linework, inconsistent mechanical proportions',
           'too dark environment obscuring character details, flat uninteresting colors'
         ]);

  return {
    name: 'Mecha Pilot Character Design',
    category: 'character_design_mecha',
    zhName: '机甲幻想角色',
    description: '科幻机甲主题的角色设计，适合游戏、动画或小说中的飞行员形象',
    masterFormula: {
      subject: "female mecha pilot, white/cyan flight suit, orange safety accents",
      scene: "spaceship hangar bay, mecha unit background, industrial lighting",
      style: "anime sci-fi design, technical illustration quality, Gundam aesthetic",
      lighting: "blue hangar fluorescents, orange emergency beacons, reactor glow rim light",
      composition: "dynamic pose, low angle hero view, mecha shoulder balance, title space",
      details: "visor reflection, headset, data tablet, utility belt, battle scars on mecha"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Sci-fi novel character illustrations',
      'Video game protagonist concept art',
      'Anime project character bible sheets',
      'Cosplay reference materials'
    ],
    tips: [
      'Technical details enhance credibility of sci-fi setting',
      'Color coding helps distinguish team factions visually',
      'Rim lighting from machinery adds atmospheric depth',
      'Battle damage storytelling shows history without words',
      'Keep character proportions clear despite complex equipment'
    ]
  };
}

module.exports = createMechaFantasyCharacter;
