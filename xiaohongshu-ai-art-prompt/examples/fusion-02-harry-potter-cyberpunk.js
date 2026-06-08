/**
 * Example 36: Creative Fusion - Harry Potter in Cyberpunk Tokyo (创意混搭：IP 混搭 - 哈利波特遇上赛博朋克东京)
 * 
 * Based on Masterclass Chapter 9: Creative IP Mashups & Cross-Universe Fusions
 * Scene Type: Fan-favorite magical character reimagined in unexpected technological setting
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createHarryPotterCyberpunk() {
  const builder = new PromptBuilder();
  
  // Master Formula for IP mashup fusion
  builder.useMasterFormula({
    subject: "teenage wizard wearing modified Slytherin robes with LED thread embroidery, holding illuminated wand that projects holographic spell effects,
               cybernetic eye implant visible beneath messy black hair and lightning scar glowing faintly blue",
    scene: "rainy Shibuya crossing at night with massive holographic advertisements displaying Japanese kanji mixed with Latin spell incantations,
               flying Patronus owl carrying encrypted data packages instead of letters, hover vehicles replacing traditional broom traffic",
    style: "anime-influenced digital painting blending Studio Ghibli warmth with Blade Runner noir atmosphere,
               detailed cel shading emphasizing character against complex background, vibrant neon color palette",
    lighting: "multiple colored neon signs reflecting on wet pavement creating rainbow puddle reflections,
               glow from wand illuminating character face in dramatic chiaroscuro, hologram spells casting shifting colors",
    composition: "dynamic low angle looking up at character as if they landed mid-spell cast,
               crossed street lines drawing eye upward, crowds blurred into abstract motion streaks behind focus figure",
    details: "spell effect showing intricate runic circle manifesting in air before open palm, water droplets frozen mid-air around protective barrier,
              traditional phoenix emblem on robe now emitting soft bioluminescent light, wireless earpiece in ear receiving coded messages,
              raincoat transparent overlay showing full outfit underneath"
  });

  builder.setColorPalette('electric green (#00FF00) for spells, deep emerald (#50C878) for Slytherin accent,
                         neon pink (#FF00FF), cyan (#00FFFF), dark asphalt grays (#2F4F4F)')
         .setMood ('magical yet futuristic, rebellious youth culture, hidden world within modern city, wonder meets technology')
         .addTechParams({
           ratio: '9:16', // Vertical anime poster format
           stylize: 450, // High artistic license for creative mashup
           quality: '1',
           version: '6.0'
         })
         .setNegativePrompts([
           'photorealistic live action look, generic magic without specific HP references, clean uncluttered backgrounds',
           'watermark, copyright text visible, inconsistent art styles between character and environment',
           'too dark obscuring magical effects, cartoon proportions losing teenage realism'
         ]);

  return {
    name: 'Cyberpunk Hogwarts Student',
    category: 'creative_fusion_ip_mashup_hp_cyberpunk',
    zhName: '哈利波特 x 赛博朋克东京',
    description: '经典魔法 IP 与现代科幻场景的跨界融合，适合同人创作、概念设计或粉丝社区内容',
    masterFormula: {
      subject: "teen wizard, modified Slytherin robes with LED embroidery, holographic spell wand, cybernetic eye",
      scene: "rainy Shibuya crossing, holographic kanji + Latin spells, flying Patronus owls with data packages",
      style: "Ghibli meets Blade Runner, anime-digital painting, cel shading, neon palette",
      lighting: "neon reflections on wet pavement, wand glow chiaroscuro, shifting hologram colors",
      composition: "low dynamic angle, crossing lines to eyes, blurred motion crowd background",
      details: "runic spell circle, frozen water droplets, bioluminescent phoenix emblem, wireless earpiece"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Fan fiction promotional illustrations',
      'Creative writing project mood boards',
      'Con cosplay or prop design inspiration',
      'Cross-universe gaming concept art'
    ],
    tips: [
      'Iconic elements must remain recognizable despite setting change',
      'Consider how magic/system would function in new context',
      'Color palette should reflect both source universes',
      'Lighting bridges the two aesthetic worlds effectively',
      'Include small Easter eggs referencing original IP'
    ]
  };
}

module.exports = createHarryPotterCyberpunk;
